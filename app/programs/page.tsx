import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Programs — KaliVibeCoding",
  description:
    "AI Foundations, Automation Systems, Full-Stack Engineering, and Career Workforce programs. Hands-on. Real deploys. No filler.",
  alternates: { canonical: "https://www.kalivibecoding.com/programs" },
};

const programs = [
  {
    slug: "ai-foundations",
    title: "AI Foundations",
    tag: "Beginner → Intermediate",
    color: "pink" as const,
    duration: "8 Weeks",
    format: "Live Virtual + Async",
    icon: "🤖",
    description:
      "The zero-to-deploy AI literacy program. Students go from zero to building and deploying their first AI-powered application using Cloudflare Workers AI, Hono, and Next.js.",
    outcomes: [
      "Build and deploy a production AI application",
      "Understand LLM architecture and prompt engineering",
      "Wire AI into real workflows using APIs and agents",
      "Create a portfolio-ready project",
    ],
    naics: "611420",
    wioa: true,
  },
  {
    slug: "automation-systems",
    title: "Automation Systems",
    tag: "Intermediate → Advanced",
    color: "gold" as const,
    duration: "10 Weeks",
    format: "Live Virtual + Hands-On Labs",
    icon: "⚡",
    description:
      "Build automated business systems that run without you. Covers GoHighLevel, n8n, Zapier, Make, Cloudflare Queues, and custom Worker-based pipelines.",
    outcomes: [
      "Design and deploy end-to-end automation workflows",
      "Build CRM automation with GoHighLevel",
      "Connect systems with webhooks, queues, and workers",
      "Automate marketing, sales, and operations",
    ],
    naics: "541512",
    wioa: true,
  },
  {
    slug: "full-stack-engineering",
    title: "Full-Stack Engineering",
    tag: "Intermediate → Advanced",
    color: "blue" as const,
    duration: "16 Weeks",
    format: "Live Virtual + Project-Based",
    icon: "🏗️",
    description:
      "The complete modern engineering curriculum. TypeScript, Next.js 16, Cloudflare Workers, D1, Stripe, Supabase — built and deployed, not just studied.",
    outcomes: [
      "Ship full-stack applications using the modern Cloudflare stack",
      "Master TypeScript, React Server Components, and Hono",
      "Build, test, and deploy to production",
      "Career-ready for mid-to-senior engineering roles",
    ],
    naics: "541512",
    wioa: true,
  },
  {
    slug: "career-workforce",
    title: "Career & Workforce",
    tag: "All Levels",
    color: "pink" as const,
    duration: "4 Weeks",
    format: "Cohort-Based",
    icon: "🎓",
    description:
      "For workforce boards, community colleges, and WIOA-funded programs. Builds the foundational AI literacy and technical skills needed to enter the tech workforce.",
    outcomes: [
      "Entry-level AI and automation skills",
      "Portfolio and GitHub presence",
      "Job-readiness coaching and mock interviews",
      "Aligned with WIOA Title I requirements",
    ],
    naics: "611420",
    wioa: true,
  },
];

const colorMap = {
  pink: {
    glow: "card-glow-pink",
    text: "var(--color-kvc-pink)",
    chip: "chip-pink",
    btn: "btn-kvc-pink",
    border: "rgba(255,105,180,0.2)",
  },
  gold: {
    glow: "card-glow-gold",
    text: "var(--color-kvc-gold)",
    chip: "chip-gold",
    btn: "btn-kvc-gold",
    border: "rgba(255,215,0,0.2)",
  },
  blue: {
    glow: "card-glow-blue",
    text: "var(--color-kvc-blue)",
    chip: "chip-blue",
    btn: "btn-kvc-blue",
    border: "rgba(135,206,235,0.2)",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section className="section-kvc-sm" style={{ textAlign: "center" }}>
          <div className="container-kvc">
            <span className="chip-kvc chip-pink mb-4">Programs</span>
            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                marginTop: "16px",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Build real things.{" "}
              <span className="text-gradient-kvc">Ship real code.</span>
            </h1>
            <p
              style={{
                color: "var(--color-kvc-muted)",
                fontSize: "20px",
                maxWidth: "600px",
                margin: "0 auto 40px",
                lineHeight: "32px",
              }}
            >
              Every KVC program ends with a live deploy. No theory without
              execution. No certificate without a codebase.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact?type=pilot" className="btn-kvc-gold">
                Request a Pilot
              </Link>
              <Link href="/government-contracts" className="btn-kvc-ghost">
                WIOA-Eligible Programs →
              </Link>
            </div>
          </div>
        </section>

        {/* Program Cards */}
        <section className="section-kvc">
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
                gap: "28px",
              }}
            >
              {programs.map((prog) => {
                const c = colorMap[prog.color];
                return (
                  <div
                    key={prog.slug}
                    className={`card-kvc ${c.glow}`}
                    style={{ padding: "36px" }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        marginBottom: "24px",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "14px",
                          background: `rgba(${prog.color === "pink" ? "255,105,180" : prog.color === "gold" ? "255,215,0" : "135,206,235"},0.12)`,
                          border: `1px solid ${c.border}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "26px",
                          flexShrink: 0,
                        }}
                      >
                        {prog.icon}
                      </div>
                      <div>
                        <span
                          className={`chip-kvc ${c.chip}`}
                          style={{ marginBottom: "8px" }}
                        >
                          {prog.tag}
                        </span>
                        <h2
                          className="font-heading"
                          style={{
                            fontSize: "24px",
                            color: c.text,
                            marginTop: "8px",
                          }}
                        >
                          {prog.title}
                        </h2>
                      </div>
                    </div>

                    <p
                      style={{
                        color: "var(--color-kvc-muted)",
                        lineHeight: "26px",
                        marginBottom: "24px",
                        fontSize: "15px",
                      }}
                    >
                      {prog.description}
                    </p>

                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        marginBottom: "24px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(240,240,240,0.05)",
                          borderRadius: "8px",
                          padding: "8px 14px",
                          fontSize: "13px",
                        }}
                      >
                        <span style={{ color: "var(--color-kvc-muted)" }}>
                          Duration:{" "}
                        </span>
                        <span style={{ color: "var(--color-kvc-text)", fontWeight: 600 }}>
                          {prog.duration}
                        </span>
                      </div>
                      <div
                        style={{
                          background: "rgba(240,240,240,0.05)",
                          borderRadius: "8px",
                          padding: "8px 14px",
                          fontSize: "13px",
                        }}
                      >
                        <span style={{ color: "var(--color-kvc-muted)" }}>
                          Format:{" "}
                        </span>
                        <span style={{ color: "var(--color-kvc-text)", fontWeight: 600 }}>
                          {prog.format}
                        </span>
                      </div>
                      {prog.wioa && (
                        <div
                          style={{
                            background: "rgba(16,185,129,0.1)",
                            border: "1px solid rgba(16,185,129,0.3)",
                            borderRadius: "8px",
                            padding: "8px 14px",
                            fontSize: "13px",
                            color: "#10b981",
                            fontWeight: 700,
                          }}
                        >
                          ✓ WIOA Eligible
                        </div>
                      )}
                    </div>

                    {/* Outcomes */}
                    <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: "28px" }}>
                      {prog.outcomes.map((o) => (
                        <li
                          key={o}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            marginBottom: "10px",
                            fontSize: "14px",
                            color: "var(--color-kvc-muted)",
                          }}
                        >
                          <span style={{ color: c.text, flexShrink: 0, marginTop: "2px" }}>
                            ✓
                          </span>
                          {o}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <Link href={`/contact?type=pilot`} className={c.btn}>
                        Request This Program
                      </Link>
                      <code
                        className="code-kvc"
                        style={{ fontSize: "12px" }}
                      >
                        NAICS {prog.naics}
                      </code>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="section-kvc-sm"
          style={{
            background: "linear-gradient(135deg, rgba(255,105,180,0.06) 0%, rgba(135,206,235,0.06) 100%)",
          }}
        >
          <div className="container-kvc" style={{ textAlign: "center", maxWidth: "720px" }}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Ready to bring KVC to your{" "}
              <span className="text-glow-gold">community?</span>
            </h2>
            <p
              style={{
                color: "var(--color-kvc-muted)",
                fontSize: "18px",
                lineHeight: "28px",
                marginBottom: "32px",
              }}
            >
              Free pilots available for qualifying schools, cities, and workforce
              boards. No commitment until your cohort is complete and results are
              measured.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact?type=pilot" className="btn-kvc-gold">
                Request a Free Pilot
              </Link>
              <Link href="/partnerships" className="btn-kvc-ghost">
                See Partnership Options →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
