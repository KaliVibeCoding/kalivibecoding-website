import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About — KaliVibeCoding",
  description:
    "Rick Jefferson is an AI systems architect and full-stack engineer specializing in automation, agent-based systems, and scalable workforce education.",
  alternates: { canonical: "https://www.kalivibecoding.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section className="section-kvc">
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: "64px",
                alignItems: "center",
              }}
            >
              {/* Portrait */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "2px solid rgba(255,105,180,0.3)",
                    boxShadow: "var(--shadow-glow-pink)",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://cdn.abacus.ai/images/df46850a-d15d-437b-8d04-688c8d10f31d.png"
                    alt="Rick Jefferson — Founder & AI Architect at KaliVibeCoding"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                {/* Floating chip */}
                <div
                  className="card-kvc"
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "-24px",
                    padding: "12px 20px",
                    boxShadow: "var(--shadow-glow-gold)",
                    border: "1px solid rgba(255,215,0,0.3)",
                  }}
                >
                  <p
                    className="font-mono"
                    style={{ fontSize: "12px", color: "var(--color-kvc-gold)" }}
                  >
                    📍 Venice Beach, CA
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-kvc-text)" }}>
                    Founder & AI Architect
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <span className="chip-kvc chip-pink mb-4">The Architect</span>
                <h1
                  className="font-heading"
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    marginTop: "16px",
                    marginBottom: "24px",
                    color: "var(--color-kvc-text)",
                  }}
                >
                  Rick{" "}
                  <span className="text-glow-pink">Jefferson</span>
                </h1>

                <p
                  style={{
                    color: "var(--color-kvc-muted)",
                    lineHeight: "28px",
                    marginBottom: "20px",
                    fontSize: "17px",
                  }}
                >
                  Rick Jefferson is an AI systems architect and full-stack engineer
                  specializing in automation, agent-based systems, and scalable
                  workforce education. As the founder of KaliVibeCoding Institute,
                  he leads initiatives that bridge the gap between traditional
                  education and the demands of an AI-driven economy.
                </p>

                <p
                  style={{
                    color: "var(--color-kvc-muted)",
                    lineHeight: "28px",
                    marginBottom: "32px",
                    fontSize: "17px",
                  }}
                >
                  KaliVibeCoding is a next-generation AI systems and automation
                  brand that prioritizes systems that run autonomously and generate
                  real leverage. Every build emphasizes clarity, speed, and
                  long-term value — no fluff, no templates, no recycled advice.
                </p>

                <blockquote
                  className="card-kvc"
                  style={{
                    padding: "20px 24px",
                    borderLeft: "3px solid var(--color-kvc-gold)",
                    marginBottom: "32px",
                    background: "rgba(255,215,0,0.06)",
                  }}
                >
                  <p
                    className="font-heading"
                    style={{
                      fontSize: "20px",
                      color: "var(--color-kvc-gold)",
                      fontStyle: "italic",
                    }}
                  >
                    "Build once. Systemize forever."
                  </p>
                  <footer
                    style={{
                      marginTop: "8px",
                      fontSize: "13px",
                      color: "var(--color-kvc-muted)",
                    }}
                  >
                    — Rick Jefferson, KaliVibeCoding
                  </footer>
                </blockquote>

                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/contact?type=pilot" className="btn-kvc-gold">
                    Request a Pilot
                  </Link>
                  <Link
                    href="https://linkedin.com/in/rickjeffersonkvc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-kvc-ghost"
                  >
                    LinkedIn →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section
          className="section-kvc"
          style={{ background: "rgba(135,206,235,0.03)" }}
        >
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
            >
              <div className="card-kvc card-glow-pink p-10">
                <h2
                  className="font-heading"
                  style={{
                    fontSize: "28px",
                    color: "var(--color-kvc-pink)",
                    marginBottom: "16px",
                  }}
                >
                  Mission
                </h2>
                <p style={{ color: "var(--color-kvc-muted)", lineHeight: "28px" }}>
                  KaliVibeCoding exists to deliver accessible, future-ready education
                  in artificial intelligence, automation, and software systems —
                  preparing students, workers, and communities for high-wage,
                  technology-driven careers through hands-on, real-world training.
                </p>
              </div>

              <div className="card-kvc card-glow-blue p-10">
                <h2
                  className="font-heading"
                  style={{
                    fontSize: "28px",
                    color: "var(--color-kvc-blue)",
                    marginBottom: "16px",
                  }}
                >
                  Vision
                </h2>
                <p style={{ color: "var(--color-kvc-muted)", lineHeight: "28px" }}>
                  To become a nationally recognized leader in AI workforce education,
                  empowering underserved and emerging communities with the technical
                  skills, systems thinking, and ownership mindset required to compete
                  in the modern digital economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Rules */}
        <section className="section-kvc">
          <div className="container-kvc" style={{ maxWidth: "800px" }}>
            <h2
              className="font-heading text-center"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              What makes KVC{" "}
              <span className="text-glow-gold">untouchable</span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "40px",
              }}
            >
              {[
                {
                  title: "One-song build efficiency",
                  desc: "Complete, deployable, real — before the track ends.",
                  icon: "🎵",
                },
                {
                  title: "Enterprise thinking without enterprise bloat",
                  desc: "We build like seasoned engineers. We move like founders.",
                  icon: "🏗️",
                },
                {
                  title: "Education rooted in execution",
                  desc: "No theory without practice. No content without a deploy.",
                  icon: "⚡",
                },
                {
                  title: "Brand clarity most tech creators never reach",
                  desc: "California Neon-Noir. Consistent. Owned.",
                  icon: "🌴",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-kvc card-glow-gold"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "20px 24px",
                  }}
                >
                  <span style={{ fontSize: "28px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        color: "var(--color-kvc-gold)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ color: "var(--color-kvc-muted)", fontSize: "15px" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
