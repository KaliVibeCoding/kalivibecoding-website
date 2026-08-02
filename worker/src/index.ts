/**
 * KaliVibeCoding API — Cloudflare Worker (Hono)
 * Account: 9a3c0d0f1bc8bb5c83574905b6e13680
 * Deployed to: kalivibecoding-api.kalivibecoding.com
 *
 * Routes:
 *   POST /contact          — Contact & pilot form handler
 *   POST /newsletter       — Newsletter signup
 *   POST /capability       — Capability statement request
 *   GET  /health           — Health check
 */

import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod/v4";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface Env {
  // KV
  KV_SESSIONS: KVNamespace;
  KV_CACHE: KVNamespace;
  KV_RATELIMIT: KVNamespace;

  // D1
  DB: D1Database;

  // R2
  R2_ASSETS: R2Bucket;

  // Queues
  QUEUE_JOBS: Queue;

  // Secrets (set via: wrangler secret put)
  CF_ACCOUNT_ID: string;
  KVC_EMAIL_TOKEN: string;       // Set via: wrangler secret put KVC_EMAIL_TOKEN
  GHL_WEBHOOK_URL: string;       // GoHighLevel CRM webhook
  SENTRY_DSN: string;
}

/* ─── App ────────────────────────────────────────────────────────────────── */

const app = new Hono<{ Bindings: Env }>();

/* Middleware */
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: [
      "https://www.kalivibecoding.com",
      "https://kalivibecoding.com",
      "https://kalivibecoding.dev",
    ],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  })
);

/* Rate limiting middleware */
app.use("*", async (c, next) => {
  const ip = c.req.header("CF-Connecting-IP") ?? "unknown";
  const key = `rl:${ip}:${Math.floor(Date.now() / 60000)}`;
  const count = parseInt((await c.env.KV_RATELIMIT.get(key)) ?? "0") + 1;

  if (count > 30) {
    return c.json({ error: "Rate limit exceeded. Try again in a minute." }, 429);
  }

  await c.env.KV_RATELIMIT.put(key, String(count), { expirationTtl: 120 });
  return next();
});

/* ─── Schemas ────────────────────────────────────────────────────────────── */

const ContactSchema = z.object({
  inquiry_type: z.enum([
    "pilot",
    "partnership",
    "government",
    "corporate",
    "press",
    "general",
  ]),
  first_name: z.string().min(1).max(64),
  last_name: z.string().min(1).max(64),
  email: z.string().email(),
  organization: z.string().max(128).optional(),
  participants: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10).max(2000),
});

const NewsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
});

/* ─── Routes ─────────────────────────────────────────────────────────────── */

/* Health */
app.get("/health", (c) =>
  c.json({
    ok: true,
    service: "kalivibecoding-api",
    timestamp: new Date().toISOString(),
    region: c.req.raw.cf?.colo ?? "unknown",
  })
);

/* Contact / Pilot Form */
app.post("/contact", zValidator("json", ContactSchema), async (c) => {
  const data = c.req.valid("json");
  const timestamp = new Date().toISOString();

  // 1. Store in D1
  await c.env.DB.prepare(
    `INSERT INTO contact_submissions
     (inquiry_type, first_name, last_name, email, organization, participants, timeline, message, created_at, ip)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      data.inquiry_type,
      data.first_name,
      data.last_name,
      data.email,
      data.organization ?? null,
      data.participants ?? null,
      data.timeline ?? null,
      data.message,
      timestamp,
      c.req.header("CF-Connecting-IP") ?? "unknown"
    )
    .run();

  // 2. Send confirmation email via Cloudflare Email Sending
  const emailPayload = {
    from: { email: "welcome@app.kalivibecoding.com", name: "KaliVibeCoding" },
    to: [{ email: data.email }],
    reply_to: { email: "hello@kalivibecoding.com" },
    subject: `Got it, ${data.first_name} — Rick will be in touch.`,
    html: buildConfirmationEmail(data),
  };

  // Email send via Cloudflare Email Workers API
  const emailRes = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${c.env.CF_ACCOUNT_ID}/email/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${c.env.KVC_EMAIL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    }
  );

  // 3. Send internal notification to Rick
  const internalPayload = {
    from: { email: "welcome@app.kalivibecoding.com", name: "KVC System" },
    to: [{ email: "rick@kalivibecoding.com" }],
    subject: `🔥 New ${data.inquiry_type} inquiry from ${data.first_name} ${data.last_name}`,
    html: buildInternalNotification(data, timestamp),
  };

  await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${c.env.CF_ACCOUNT_ID}/email/send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${c.env.KVC_EMAIL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(internalPayload),
    }
  );

  // 4. Forward to GoHighLevel CRM webhook
  if (c.env.GHL_WEBHOOK_URL) {
    await fetch(c.env.GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: "",
        source: `KVC Website — ${data.inquiry_type}`,
        tags: ["kvc-website", data.inquiry_type],
        custom_fields: {
          organization: data.organization,
          participants: data.participants,
          timeline: data.timeline,
          message: data.message,
        },
      }),
    }).catch(() => {
      // Non-fatal — CRM sync failure doesn't block response
    });
  }

  // 5. Queue for follow-up processing
  await c.env.QUEUE_JOBS.send({
    type: "contact_followup",
    data: { ...data, timestamp },
    delay_seconds: 86400, // Follow up after 24h if no response
  });

  return c.json({
    ok: true,
    message: `Got it, ${data.first_name}. Rick will reach out within 24 hours.`,
  });
});

/* Newsletter */
app.post("/newsletter", zValidator("json", NewsletterSchema), async (c) => {
  const { email, source } = c.req.valid("json");
  const timestamp = new Date().toISOString();

  // Deduplicate
  const existing = await c.env.DB.prepare(
    "SELECT id FROM newsletter_subscribers WHERE email = ?"
  )
    .bind(email)
    .first();

  if (!existing) {
    await c.env.DB.prepare(
      "INSERT INTO newsletter_subscribers (email, source, subscribed_at) VALUES (?, ?, ?)"
    )
      .bind(email, source ?? "website-footer", timestamp)
      .run();

    // Welcome email
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${c.env.CF_ACCOUNT_ID}/email/send`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${c.env.KVC_EMAIL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: { email: "welcome@app.kalivibecoding.com", name: "Rick @ KaliVibeCoding" },
          to: [{ email }],
          subject: "Welcome to the Intel Drop 📡 — KaliVibeCoding",
          html: buildWelcomeEmail(email),
        }),
      }
    );
  }

  return c.json({ ok: true, message: "You're in. Check your inbox." });
});

/* Capability Statement — track downloads */
app.get("/capability-statement", async (c) => {
  const ip = c.req.header("CF-Connecting-IP") ?? "unknown";

  // Log download
  await c.env.DB.prepare(
    "INSERT INTO capability_downloads (ip, downloaded_at) VALUES (?, ?)"
  )
    .bind(ip, new Date().toISOString())
    .run();

  // Serve from R2
  const file = await c.env.R2_ASSETS.get("docs/KVC-Capability-Statement-2026.pdf");

  if (!file) {
    return c.json({ error: "File not found" }, 404);
  }

  return new Response(file.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="KaliVibeCoding-Capability-Statement-2026.pdf"',
      "Cache-Control": "no-store",
    },
  });
});

/* ─── Email Templates ────────────────────────────────────────────────────── */

function buildConfirmationEmail(data: z.infer<typeof ContactSchema>): string {
  const typeLabel: Record<string, string> = {
    pilot: "Pilot Program Request",
    partnership: "Partnership Inquiry",
    government: "Government / Federal Contract",
    corporate: "Corporate Training",
    press: "Press & Media",
    general: "General Inquiry",
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { background: #1e1e24; color: #f0f0f0; font-family: Montserrat, Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
    .logo { font-size: 28px; font-weight: 900; color: #FF69B4; margin-bottom: 32px; }
    .card { background: #25252d; border: 1px solid rgba(240,240,240,0.1); border-radius: 16px; padding: 32px; margin-bottom: 24px; }
    .accent { color: #FF69B4; }
    .gold { color: #FFD700; }
    .blue { color: #87CEEB; }
    .muted { color: #9ca3af; font-size: 14px; }
    .btn { display: inline-block; background: #FFD700; color: #000; font-weight: 700; padding: 14px 28px; border-radius: 999px; text-decoration: none; margin-top: 24px; }
    .footer { margin-top: 40px; font-size: 12px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">KaliVibeCoding</div>
    <div class="card">
      <h1 style="font-size: 24px; margin-bottom: 16px;">
        Got it, <span class="accent">${data.first_name}.</span>
      </h1>
      <p style="line-height: 26px; color: #d1d5db; margin-bottom: 20px;">
        Your <strong class="gold">${typeLabel[data.inquiry_type]}</strong> came through. Rick reviews every submission personally and responds within 24 hours.
      </p>
      <div style="background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.2); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
        <p class="muted" style="margin-bottom: 6px;">Your message:</p>
        <p style="font-style: italic; color: #e5e7eb; line-height: 22px;">"${data.message}"</p>
      </div>
      <p class="muted">
        While you wait — check out the programs at
        <a href="https://www.kalivibecoding.com/programs" style="color: #87CEEB;">kalivibecoding.com/programs</a>
        or subscribe to our YouTube channel for weekly builds.
      </p>
      <a href="https://www.youtube.com/@KaliVibe-Coding" class="btn">Watch Free Tutorials →</a>
    </div>
    <div class="footer">
      <p>KaliVibeCoding · Venice Beach, CA</p>
      <p>Code to the Rhythm. Build by the Beat.</p>
      <p style="margin-top: 8px;">
        <a href="https://www.kalivibecoding.com" style="color: #9ca3af;">kalivibecoding.com</a> ·
        <a href="mailto:hello@kalivibecoding.com" style="color: #9ca3af;">hello@kalivibecoding.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

function buildInternalNotification(
  data: z.infer<typeof ContactSchema>,
  timestamp: string
): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #1e1e24; color: #f0f0f0; font-family: Montserrat, Arial, sans-serif; margin: 0; padding: 40px 24px; }
    .badge { display: inline-block; background: #FF69B4; color: #fff; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-bottom: 20px; }
    table { border-collapse: collapse; width: 100%; max-width: 560px; }
    td { padding: 10px 0; border-bottom: 1px solid rgba(240,240,240,0.1); vertical-align: top; }
    .label { color: #9ca3af; font-size: 12px; font-weight: 700; text-transform: uppercase; width: 140px; }
    .value { color: #f0f0f0; }
  </style>
</head>
<body>
  <div class="badge">🔥 New ${data.inquiry_type.toUpperCase()} Submission</div>
  <table>
    <tr><td class="label">Name</td><td class="value">${data.first_name} ${data.last_name}</td></tr>
    <tr><td class="label">Email</td><td class="value"><a href="mailto:${data.email}" style="color:#87CEEB">${data.email}</a></td></tr>
    <tr><td class="label">Organization</td><td class="value">${data.organization ?? "—"}</td></tr>
    <tr><td class="label">Participants</td><td class="value">${data.participants ?? "—"}</td></tr>
    <tr><td class="label">Timeline</td><td class="value">${data.timeline ?? "—"}</td></tr>
    <tr><td class="label">Type</td><td class="value">${data.inquiry_type}</td></tr>
    <tr><td class="label">Submitted</td><td class="value">${timestamp}</td></tr>
    <tr><td class="label">Message</td><td class="value" style="white-space:pre-wrap">${data.message}</td></tr>
  </table>
</body>
</html>`;
}

function buildWelcomeEmail(email: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { background: #1e1e24; color: #f0f0f0; font-family: Montserrat, Arial, sans-serif; margin: 0; padding: 40px 24px; }
    .container { max-width: 560px; margin: 0 auto; }
    .logo { font-size: 28px; font-weight: 900; color: #FF69B4; margin-bottom: 32px; }
    .btn { display: inline-block; background: #FF69B4; color: #fff; font-weight: 700; padding: 14px 28px; border-radius: 999px; text-decoration: none; margin: 20px 8px 0 0; }
    .footer { margin-top: 40px; font-size: 12px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">KaliVibeCoding 📡</div>
    <h1 style="font-size: 28px; margin-bottom: 16px; color: #FFD700;">Welcome to the Intel Drop.</h1>
    <p style="line-height: 26px; color: #d1d5db; margin-bottom: 20px;">
      You're now on the list. Every week: real AI builds, automation workflows, and systems that actually ship.
      No spam. Just signal.
    </p>
    <p style="line-height: 26px; color: #d1d5db; margin-bottom: 8px;">While you're here —</p>
    <a href="https://www.youtube.com/@KaliVibe-Coding" class="btn">▶ Watch on YouTube</a>
    <a href="https://www.kalivibecoding.com/programs" class="btn" style="background: #87CEEB; color: #000;">View Programs</a>
    <div class="footer">
      <p>KaliVibeCoding · Venice Beach, CA · <a href="mailto:hello@kalivibecoding.com" style="color: #9ca3af;">hello@kalivibecoding.com</a></p>
      <p>Code to the Rhythm. Build by the Beat.</p>
      <p><a href="https://www.kalivibecoding.com/unsubscribe?email=${encodeURIComponent(email)}" style="color: #6b7280;">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`;
}

export default app;
