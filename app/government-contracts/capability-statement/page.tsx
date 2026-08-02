import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Capability Statement — KaliVibeCoding",
  description:
    "KaliVibeCoding Institute capability statement for federal and state government contracting. AI workforce training, curriculum development, and technical consulting.",
  alternates: {
    canonical: "https://www.kalivibecoding.com/government-contracts/capability-statement",
  },
};

export default function CapabilityStatementPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section className="section-kvc-sm" style={{ textAlign: "center" }}>
          <div className="container-kvc" style={{ maxWidth: "800px" }}>
            <span className="chip-kvc chip-blue mb-4">Federal / State</span>
            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(36px, 6vw, 60px)",
                marginTop: "16px",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Capability{" "}
              <span className="text-glow-blue">Statement</span>
            </h1>
            <p
              style={{
                color: "var(--color-kvc-muted)",
                fontSize: "18px",
                lineHeight: "30px",
                marginBottom: "36px",
              }}
            >
              KaliVibeCoding Institute — AI and Automation Workforce Training Provider.
              WIOA-aligned. SAM.gov registered. Ready for federal and state contracting.
            </p>

            <a
              href="https://kalivibecoding-api.kalivibecoding.com/capability-statement"
              download
              className="btn-kvc-gold"
              style={{ fontSize: "16px", padding: "16px 32px" }}
            >
              ↓ Download PDF Capability Statement
            </a>
          </div>
        </section>

        {/* Full capability statement content */}
        <section className="section-kvc">
          <div className="container-kvc" style={{ maxWidth: "900px" }}>
            <div
              className="card-kvc"
              style={{
                padding: "56px",
                border: "1px solid rgba(135,206,235,0.2)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "48px",
                  flexWrap: "wrap",
                  gap: "24px",
                }}
              >
                <div>
                  <h2
                    className="font-heading"
                    style={{
                      fontSize: "28px",
                      color: "var(--color-kvc-pink)",
                      marginBottom: "8px",
                    }}
                  >
                    KaliVibeCoding Institute
                  </h2>
                  <p style={{ color: "var(--color-kvc-muted)", fontSize: "15px" }}>
                    AI Workforce Education & Technical Training
                  </p>
                  <p style={{ color: "var(--color-kvc-muted)", fontSize: "14px", marginTop: "4px" }}>
                    Venice Beach, CA | kalivibecoding.com
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      borderRadius: "10px",
                      padding: "12px 20px",
                      color: "#10b981",
                      fontWeight: 700,
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    ✓ SAM.gov Active Registration
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--color-kvc-muted)" }}>
                    Updated: August 2026
                  </p>
                </div>
              </div>

              {/* Core Competencies */}
              <Section title="Core Competencies" color="var(--color-kvc-blue)">
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  {[
                    "AI Foundations Training — LLMs, prompt engineering, AI tool integration",
                    "Automation Systems Training — n8n, Zapier, GoHighLevel, Cloudflare Workers",
                    "Full-Stack Engineering Education — Next.js, TypeScript, cloud deployment",
                    "Career Workforce Development — WIOA-aligned cohort programs",
                    "AI Curriculum Development — custom training materials for agencies",
                    "Technical Consulting — AI systems architecture and implementation",
                    "Train-the-Trainer programs for institutional scalability",
                    "Section 508 compliant digital learning materials",
                  ].map((item) => (
                    <ListItem key={item} text={item} />
                  ))}
                </ul>
              </Section>

              {/* Differentiators */}
              <Section title="Differentiators" color="var(--color-kvc-pink)">
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  {[
                    "Every program ends with a live, deployed application — not just a certificate",
                    "Rapid deployment: pilots live within 30 days of contract execution",
                    "Built-in outcome tracking and WIOA compliance reporting",
                    "Hands-on, project-based curriculum developed by practicing engineers",
                    "Track record of 90%+ completion rates across cohort programs",
                    "Scalable cohort model from 10 to 500+ participants simultaneously",
                    "One-song build methodology — complete, production-ready systems in single sessions",
                  ].map((item) => (
                    <ListItem key={item} text={item} color="var(--color-kvc-pink)" />
                  ))}
                </ul>
              </Section>

              {/* NAICS / PSC */}
              <Section title="NAICS & PSC Codes" color="var(--color-kvc-gold)">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--color-kvc-muted)",
                        marginBottom: "12px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      NAICS Codes
                    </p>
                    {[
                      ["611420", "Computer Training"],
                      ["611430", "Professional Development Training"],
                      ["541512", "Computer Systems Design Services"],
                      ["541715", "R&D in Computer Science"],
                    ].map(([code, title]) => (
                      <div key={code} style={{ marginBottom: "8px" }}>
                        <code className="code-kvc" style={{ fontSize: "12px", marginRight: "8px" }}>
                          {code}
                        </code>
                        <span style={{ color: "var(--color-kvc-muted)", fontSize: "13px" }}>
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--color-kvc-muted)",
                        marginBottom: "12px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      PSC Codes
                    </p>
                    {[
                      ["U012", "Training – Computer"],
                      ["U099", "Training – Other"],
                      ["R408", "Program Management/Support"],
                      ["R499", "Support Services – Other"],
                    ].map(([code, title]) => (
                      <div key={code} style={{ marginBottom: "8px" }}>
                        <code className="code-kvc" style={{ fontSize: "12px", marginRight: "8px" }}>
                          {code}
                        </code>
                        <span style={{ color: "var(--color-kvc-muted)", fontSize: "13px" }}>
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>

              {/* Past Performance */}
              <Section title="Past Performance" color="var(--color-kvc-blue)">
                <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                  {[
                    "AI Foundations cohorts delivered to community college students across California",
                    "Automation Systems training for small business development programs",
                    "Curriculum development for workforce board-sponsored AI literacy programs",
                    "Technical consulting for AI implementation at educational institutions",
                    "YouTube-based AI education reaching 10,000+ subscribers monthly",
                  ].map((item) => (
                    <ListItem key={item} text={item} color="var(--color-kvc-blue)" />
                  ))}
                </ul>
              </Section>

              {/* Contact */}
              <div
                style={{
                  background: "rgba(255,215,0,0.06)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  borderRadius: "14px",
                  padding: "28px",
                  marginTop: "40px",
                }}
              >
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "18px",
                    color: "var(--color-kvc-gold)",
                    marginBottom: "16px",
                  }}
                >
                  Contract Point of Contact
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {[
                    { label: "Name", val: "Rick Jefferson" },
                    { label: "Title", val: "Founder & Principal" },
                    { label: "Email", val: "contracts@kalivibecoding.com" },
                    { label: "Website", val: "www.kalivibecoding.com" },
                  ].map((r) => (
                    <div key={r.label}>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "var(--color-kvc-muted)",
                          marginBottom: "4px",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {r.label}
                      </p>
                      <p style={{ fontSize: "14px", color: "var(--color-kvc-text)", fontWeight: 600 }}>
                        {r.val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-kvc-sm" style={{ textAlign: "center" }}>
          <div className="container-kvc" style={{ maxWidth: "600px" }}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Ready to <span className="text-glow-gold">team with us?</span>
            </h2>
            <p style={{ color: "var(--color-kvc-muted)", lineHeight: "28px", marginBottom: "28px" }}>
              Prime contractors — we are actively seeking teaming arrangements.
              Government agencies — contact us directly for sole-source or competitive
              acquisitions.
            </p>
            <Link href="/contact?type=government" className="btn-kvc-gold">
              Start the Conversation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <h3
        className="font-heading"
        style={{
          fontSize: "18px",
          color,
          marginBottom: "16px",
          paddingBottom: "10px",
          borderBottom: `1px solid var(--color-kvc-border)`,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function ListItem({
  text,
  color = "var(--color-kvc-blue)",
}: {
  text: string;
  color?: string;
}) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        marginBottom: "10px",
        fontSize: "14px",
        color: "var(--color-kvc-muted)",
        lineHeight: "22px",
      }}
    >
      <span style={{ color, flexShrink: 0, marginTop: "2px" }}>✓</span>
      {text}
    </li>
  );
}
