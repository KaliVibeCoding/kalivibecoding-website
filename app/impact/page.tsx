import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impact — KaliVibeCoding",
  description:
    "Real outcomes. Real numbers. See the impact KaliVibeCoding has made on students, communities, and the workforce.",
  alternates: { canonical: "https://www.kalivibecoding.com/impact" },
};

const stats = [
  { number: "10,000+", label: "Monthly YouTube Students", color: "var(--color-kvc-pink)" },
  { number: "90%+", label: "Program Completion Rate", color: "var(--color-kvc-gold)" },
  { number: "4", label: "Active Programs", color: "var(--color-kvc-blue)" },
  { number: "$0", label: "Cost to Qualifying Pilots", color: "var(--color-kvc-pink)" },
];

const stories = [
  {
    quote:
      "I walked in not knowing what an API was. Eight weeks later I had a live AI application deployed on Cloudflare. That's not a certificate — that's a career.",
    name: "Cohort Graduate",
    role: "Now: Junior Developer, SaaS Startup",
    color: "pink" as const,
  },
  {
    quote:
      "KVC brought AI education to our workforce center that other vendors said was too complex. Rick's team made it accessible, practical, and measurable.",
    name: "Workforce Board Director",
    role: "Southwest Region Workforce Development Board",
    color: "blue" as const,
  },
  {
    quote:
      "The automation training changed how I run my entire business. I got 8 hours a week back in the first month.",
    name: "Small Business Owner",
    role: "E-commerce / Retail",
    color: "gold" as const,
  },
];

const colorMap = {
  pink: { glow: "card-glow-pink", text: "var(--color-kvc-pink)", border: "var(--color-kvc-pink)" },
  blue: { glow: "card-glow-blue", text: "var(--color-kvc-blue)", border: "var(--color-kvc-blue)" },
  gold: { glow: "card-glow-gold", text: "var(--color-kvc-gold)", border: "var(--color-kvc-gold)" },
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section className="section-kvc-sm" style={{ textAlign: "center" }}>
          <div className="container-kvc" style={{ maxWidth: "700px" }}>
            <span className="chip-kvc chip-gold mb-4">Impact</span>
            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(36px, 6vw, 60px)",
                marginTop: "16px",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Results, not{" "}
              <span className="text-glow-gold">receipts.</span>
            </h1>
            <p
              style={{
                color: "var(--color-kvc-muted)",
                fontSize: "20px",
                lineHeight: "32px",
              }}
            >
              Every KVC program ends with a deployed project. Every graduate has
              a codebase. Every partner gets outcome data. This is what that
              looks like.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="section-kvc-sm">
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-kvc"
                  style={{ padding: "28px", textAlign: "center" }}
                >
                  <p
                    className="font-heading"
                    style={{
                      fontSize: "44px",
                      color: s.color,
                      marginBottom: "8px",
                      lineHeight: 1,
                    }}
                  >
                    {s.number}
                  </p>
                  <p style={{ color: "var(--color-kvc-muted)", fontSize: "14px" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="section-kvc"
          style={{ background: "rgba(255,105,180,0.03)" }}
        >
          <div className="container-kvc">
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "var(--color-kvc-text)",
                }}
              >
                What they&apos;re{" "}
                <span className="text-glow-pink">saying</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {stories.map((s) => {
                const c = colorMap[s.color];
                return (
                  <div
                    key={s.name}
                    className={`card-kvc ${c.glow}`}
                    style={{ padding: "32px" }}
                  >
                    <div
                      style={{
                        fontSize: "40px",
                        color: c.text,
                        lineHeight: 1,
                        marginBottom: "20px",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      &ldquo;
                    </div>
                    <p
                      style={{
                        color: "var(--color-kvc-text)",
                        lineHeight: "28px",
                        fontSize: "16px",
                        marginBottom: "24px",
                        fontStyle: "italic",
                      }}
                    >
                      {s.quote}
                    </p>
                    <div
                      style={{
                        borderTop: `1px solid ${c.border}`,
                        paddingTop: "16px",
                        opacity: 0.7,
                      }}
                    >
                      <p style={{ fontWeight: 700, color: "var(--color-kvc-text)", fontSize: "14px" }}>
                        {s.name}
                      </p>
                      <p style={{ color: "var(--color-kvc-muted)", fontSize: "13px", marginTop: "2px" }}>
                        {s.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What outcomes look like */}
        <section className="section-kvc">
          <div className="container-kvc" style={{ maxWidth: "800px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "var(--color-kvc-text)",
                }}
              >
                What a KVC graduate{" "}
                <span className="text-glow-blue">walks away with</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                { icon: "🚀", title: "Live deployed application", desc: "Production-grade, hosted on Cloudflare or Vercel" },
                { icon: "💻", title: "GitHub portfolio", desc: "Real code commits, real projects, real history" },
                { icon: "📜", title: "KVC Certificate", desc: "Credential tied to verifiable skills, not time served" },
                { icon: "🔗", title: "Career network", desc: "Connected to KVC's employer and partner network" },
                { icon: "⚙️", title: "Working automation system", desc: "At least one business process automated" },
                { icon: "📊", title: "Technical interview readiness", desc: "Mock interviews, code reviews, portfolio walkthrough" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-kvc card-glow-blue"
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px 24px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--color-kvc-blue)", marginBottom: "4px", fontSize: "14px" }}>
                      {item.title}
                    </p>
                    <p style={{ color: "var(--color-kvc-muted)", fontSize: "13px" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="section-kvc-sm"
          style={{ textAlign: "center" }}
        >
          <div className="container-kvc" style={{ maxWidth: "600px" }}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Add your community to{" "}
              <span className="text-glow-gold">this list.</span>
            </h2>
            <p style={{ color: "var(--color-kvc-muted)", lineHeight: "28px", marginBottom: "28px" }}>
              Free pilots available. No commitment until results are measured.
              Rick answers personally within 24 hours.
            </p>
            <Link href="/contact?type=pilot" className="btn-kvc-gold">
              Request a Free Pilot →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
