import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Government Contracts — KaliVibeCoding",
  description:
    "KaliVibeCoding Institute provides AI and automation workforce training for federal and state agencies. WIOA-aligned. NAICS 611420, 611430, 541512, 541715.",
  alternates: { canonical: "https://www.kalivibecoding.com/government-contracts" },
  keywords: [
    "WIOA training provider",
    "AI workforce training federal contract",
    "NAICS 611420",
    "NAICS 541512",
    "PSC U012",
    "technology training government",
    "KaliVibeCoding Institute",
  ],
};

const naicsCodes = [
  {
    code: "611420",
    title: "Computer Training",
    desc: "Vocational and technical instruction in computer operation, programming, and AI applications.",
  },
  {
    code: "611430",
    title: "Professional and Management Development Training",
    desc: "Training programs for AI literacy, digital transformation, and technology adoption.",
  },
  {
    code: "541512",
    title: "Computer Systems Design Services",
    desc: "Custom AI system architecture, automation engineering, and technical consulting.",
  },
  {
    code: "541715",
    title: "Research and Development in Computer Science",
    desc: "Applied AI research, agent-based systems development, and AI curriculum R&D.",
  },
];

const pscCodes = [
  { code: "U012", title: "Training – Computer" },
  { code: "U099", title: "Training – Other" },
  { code: "R408", title: "Program Management/Support Services" },
  { code: "R499", title: "Support Services – Other" },
];

const capabilities = [
  {
    icon: "🤖",
    title: "AI & Automation Training",
    desc: "Cohort-based AI literacy and automation systems training aligned with WIOA Title I workforce development requirements.",
  },
  {
    icon: "🏛️",
    title: "Curriculum Development",
    desc: "Custom AI curriculum development for federal agencies, community colleges, and workforce development boards.",
  },
  {
    icon: "⚡",
    title: "Rapid Deployment",
    desc: "Pilots deployed within 30 days. Full cohort programs in 60 days. WIOA outcome tracking built in.",
  },
  {
    icon: "📊",
    title: "Outcome Measurement",
    desc: "Pre/post assessments, employment tracking, credential attainment reporting, and federal data compliance.",
  },
  {
    icon: "🔗",
    title: "Systems Integration",
    desc: "AI integration consulting and training for agency-specific platforms, databases, and legacy systems.",
  },
  {
    icon: "📋",
    title: "Compliance & Reporting",
    desc: "WIOA Title I, Title III, and Perkins V compliant. Section 508 accessible materials. MIS data submission support.",
  },
];

export default function GovernmentContractsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section className="section-kvc-sm">
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span className="chip-kvc chip-blue">Government</span>
                  <span className="chip-kvc chip-gold">WIOA-Aligned</span>
                </div>
                <h1
                  className="font-heading"
                  style={{
                    fontSize: "clamp(32px, 5vw, 52px)",
                    color: "var(--color-kvc-text)",
                    marginBottom: "20px",
                    lineHeight: "1.15",
                  }}
                >
                  AI Workforce Training for{" "}
                  <span className="text-glow-blue">Federal & State Partners</span>
                </h1>
                <p
                  style={{
                    color: "var(--color-kvc-muted)",
                    fontSize: "18px",
                    lineHeight: "30px",
                    marginBottom: "32px",
                  }}
                >
                  KaliVibeCoding Institute delivers rapid-deployment AI and automation
                  workforce training for government agencies, workforce development
                  boards, and federally-funded education programs.
                </p>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    href="/government-contracts/capability-statement"
                    className="btn-kvc-blue"
                  >
                    Download Capability Statement
                  </Link>
                  <Link href="/contact?type=government" className="btn-kvc-ghost">
                    Start a Conversation →
                  </Link>
                </div>
              </div>

              {/* NAICS / PSC cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {naicsCodes.map((n) => (
                  <div
                    key={n.code}
                    className="card-kvc"
                    style={{ padding: "16px" }}
                  >
                    <code className="code-kvc" style={{ fontSize: "13px", marginBottom: "8px" }}>
                      NAICS {n.code}
                    </code>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--color-kvc-text)",
                        marginBottom: "6px",
                        marginTop: "8px",
                      }}
                    >
                      {n.title}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--color-kvc-muted)", lineHeight: "18px" }}>
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          className="section-kvc"
          style={{ background: "rgba(135,206,235,0.03)" }}
        >
          <div className="container-kvc">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "var(--color-kvc-text)",
                }}
              >
                Core <span className="text-glow-blue">Capabilities</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="card-kvc card-glow-blue"
                  style={{ padding: "28px" }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>{cap.icon}</div>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "var(--color-kvc-blue)",
                      marginBottom: "10px",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p style={{ color: "var(--color-kvc-muted)", lineHeight: "24px", fontSize: "14px" }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PSC Codes + WIOA */}
        <section className="section-kvc-sm">
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
            >
              {/* PSC */}
              <div className="card-kvc card-glow-gold" style={{ padding: "32px" }}>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "22px",
                    color: "var(--color-kvc-gold)",
                    marginBottom: "20px",
                  }}
                >
                  PSC Codes
                </h3>
                {pscCodes.map((p) => (
                  <div
                    key={p.code}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      paddingBottom: "12px",
                      marginBottom: "12px",
                      borderBottom: "1px solid var(--color-kvc-border)",
                    }}
                  >
                    <code className="code-kvc" style={{ fontSize: "13px", minWidth: "48px" }}>
                      {p.code}
                    </code>
                    <span style={{ color: "var(--color-kvc-muted)", fontSize: "14px" }}>
                      {p.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* WIOA */}
              <div className="card-kvc card-glow-pink" style={{ padding: "32px" }}>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "22px",
                    color: "var(--color-kvc-pink)",
                    marginBottom: "20px",
                  }}
                >
                  WIOA Alignment
                </h3>
                {[
                  "Title I — Adult, Dislocated Worker, Youth programs",
                  "Title III — Wagner-Peyser Employment Service",
                  "Perkins V — Career and Technical Education",
                  "Section 508 accessible curriculum",
                  "LVER / DVOP compatible for veteran participants",
                  "MIS reporting and data submission support",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <span style={{ color: "var(--color-kvc-pink)", flexShrink: 0 }}>✓</span>
                    <span style={{ color: "var(--color-kvc-muted)", fontSize: "14px", lineHeight: "22px" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SAM.gov + UEI */}
        <section className="section-kvc-sm">
          <div className="container-kvc" style={{ maxWidth: "720px", textAlign: "center" }}>
            <div
              className="card-kvc"
              style={{
                padding: "40px",
                background: "rgba(255,215,0,0.04)",
                border: "1px solid rgba(255,215,0,0.2)",
              }}
            >
              <h3
                className="font-heading"
                style={{
                  fontSize: "22px",
                  color: "var(--color-kvc-gold)",
                  marginBottom: "20px",
                }}
              >
                Vendor Information
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  textAlign: "left",
                  marginBottom: "28px",
                }}
              >
                {[
                  { label: "Legal Name", val: "KaliVibeCoding Institute" },
                  { label: "DBA", val: "KaliVibeCoding" },
                  { label: "Entity Type", val: "Educational Institution / LLC" },
                  { label: "Registration", val: "SAM.gov Active" },
                  { label: "Socioeconomic Status", val: "Small Business" },
                  { label: "Business Contact", val: "contracts@kalivibecoding.com" },
                ].map((row) => (
                  <div key={row.label}>
                    <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "var(--color-kvc-muted)", marginBottom: "4px", letterSpacing: "0.06em" }}>
                      {row.label}
                    </p>
                    <p style={{ fontSize: "14px", color: "var(--color-kvc-text)", fontWeight: 600 }}>
                      {row.val}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/government-contracts/capability-statement"
                  className="btn-kvc-gold"
                >
                  Download Capability Statement
                </Link>
                <Link href="/contact?type=government" className="btn-kvc-ghost">
                  Team With Us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
