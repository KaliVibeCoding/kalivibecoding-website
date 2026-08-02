# KaliVibeCoding — kalivibecoding.com

Production website for KaliVibeCoding — AI systems education, workforce training, and government contracting.

**Code to the Rhythm. Build by the Beat.**

## Stack

- **Frontend**: Next.js 16.2.4 (App Router + Turbopack + React Compiler)
- **Styling**: Tailwind CSS 4.2.4 (CSS-only `@theme` config)
- **Language**: TypeScript 5.9.2 (strict)
- **Backend API**: Cloudflare Workers (Hono 4.12.23)
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2
- **Email**: Cloudflare Email Workers
- **CRM**: GoHighLevel (webhook integration)
- **Hosting**: Cloudflare Pages (frontend) + Workers (API)

## Local Development

```bash
# Install dependencies
pnpm install

# Run Next.js dev server
pnpm dev

# In another terminal — run Worker locally
cd worker
pnpm install
pnpm dev
```

## Deploy

### 1. Create Cloudflare Resources

```bash
# D1 Database
wrangler d1 create kalivibecoding-db

# KV Namespaces
wrangler kv namespace create kalivibecoding-sessions
wrangler kv namespace create kalivibecoding-cache
wrangler kv namespace create kalivibecoding-ratelimit

# R2 Bucket
wrangler r2 bucket create kalivibecoding-assets

# Queue
wrangler queues create kalivibecoding-jobs
```

### 2. Update wrangler.toml

Paste the generated IDs from step 1 into `worker/wrangler.toml`.

### 3. Set Secrets

```bash
cd worker
wrangler secret put KVC_EMAIL_TOKEN
wrangler secret put GHL_WEBHOOK_URL
wrangler secret put SENTRY_DSN
```

### 4. Run DB Migration

```bash
cd worker
pnpm db:migrate
```

### 5. Deploy Worker

```bash
cd worker
pnpm deploy
```

### 6. Deploy Frontend to Cloudflare Pages

```bash
pnpm build
wrangler pages deploy .next --project-name kalivibecoding
```

## Design System

California Neon-Noir — dark, focused, electric.

| Token | Value |
|-------|-------|
| Background | `#1E1E24` |
| Pink | `#FF69B4` |
| Blue | `#87CEEB` |
| Gold | `#FFD700` |
| Heading font | Lobster |
| Body font | Montserrat |
| Mono font | Fira Code |

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Home — hero, programs, partnerships, government, pricing |
| `/programs` | All 4 program tracks |
| `/partnerships` | Schools, cities, workforce boards, corporate |
| `/government-contracts` | NAICS/PSC codes, capabilities, WIOA alignment |
| `/government-contracts/capability-statement` | Full PDF capability statement |
| `/about` | Rick Jefferson bio, mission, vision |
| `/contact` | Contact + pilot request form |
| `/impact` | Stats, testimonials, outcomes |

## Brand

**KaliVibeCoding**
Venice Beach, CA
hello@kalivibecoding.com

© 2026 KaliVibeCoding. All Rights Reserved.
