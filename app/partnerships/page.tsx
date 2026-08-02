import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Partnerships — KaliVibeCoding",
  description:
    "Partner with KaliVibeCoding Institute. School districts, cities, workforce boards, and corporations — bring AI education to your community.",
  alternates: { canonical: "https://www.kalivibecoding.com/partnerships" },
};

const partnerTypes = [
  {
    type: "Schools & Districts",
    slug: "schools",
    icon: "🏫",
    color: "pink" as const,
    headline: "Bring AI skills to your students.",
    desc: "Partner to bring KVC programs directly into your classrooms or after-school programs. CSTA-aligned, no budget required for qualifying pilots.",
    benefits: [
      "Free pilot for qualifying Title I schools",
      "Teacher training included",
      "Student certifications upon completion",
      "Curriculum mapped to CSTA K-12 standards",
      "Career connections for graduating seniors",
    ],
    cta: "Apply for a School Pilot",
  },
  {
    type: "Cities & Counties",
    slug: "cities",
    icon: "🏙️",
    color: "blue" as const,
    headline: "Upskill your workforce.",
    desc: "City-sponsored AI literacy programs for residents, municipal employees, and community members. Custom-fit to your economic development goals.",
    benefits: [
      "Aligns with digital equity and workforce development goals",
      "Multi-cohort capacity for large-scale deployment",
      "Community impact reporting for elected officials",
      "Bilingual curriculum options available",
      "Integration with existing workforce development programs",
    ],
    cta: "Talk to a City Partnership Rep",
  },
  {
    type: "Workforce Boards",
    slug: "workforce-boards",
    icon: "📋",
    color: "gold" as const,
    headline: "WIOA-aligned AI training.",
    desc: "Expand your approved training provider list with KVC's WIOA-eligible programs. Full outcome reporting, credential tracking, and data compliance built in.",
    benefits: [
      "WIOA Title I, III, and Perkins V eligible",
      "ITA-compatible pricing structures",
      "MIS data reporting and submission support",
      "High-wage, high-demand occupation alignment",
      "90-day employment outcome tracking",
    ],
    cta: "Become an Approved Provider",
  },
  {
    type: "Corporate Partners",
    slug: "corporate",
    icon: "🏢",
    color: "pink" as const,
    headline: "Upskill your team. Sponsor a cohort.",
    desc: "Deploy AI and automation training for your employees, or sponsor a community cohort and source your next hire from KVC graduates.",
    benefits: [
      "Custom corporate training packages",
      "AI tools adoption workshops",
      "Automation ROI assessment and implementation",
      "Pipeline to trained KVC graduates for hiring",
      "Branded sponsorship of community cohorts",
    ],
    cta: "Explore Corporate Options",
  },
];

const colorCls = {
  pink: { glow: "card-glow-pink", text: "var(--color-kvc-pink)", chip: "chip-pink", btn: "btn-kvc-pink" },
  blue: { glow: "card-glow-blue", text: "var(--color-kvc-blue)", chip: "chip-blue", btn: "btn-kvc-blue" },
  gold: { glow: "card-glow-gold", text: "var(--color-kvc-gold)", chip: "chip-gold", btn: "btn-kvc-gold" },
};

export default function PartnershipsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        {/* Hero */}
        <section className="section-kvc-sm" style={{ textAlign: "center" }}>
          <div className="container-kvc" style={{ maxWidth: "800px" }}>
            <span className="chip-kvc chip-gold mb-4">Partnerships</span>
            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(36px, 6vw, 60px)",
                marginTop: "16px",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Build <span className="text-gradient-kvc">with us.</span>
            </h1>
            <p
              style={{
                color: "var(--color-kvc-muted)",
                fontSize: "20px",
                lineHeight: "32px",
                marginBottom: "36px",
              }}
            >
              KaliVibeCoding partners with schools, cities, workforce boards, and
              corporations to bring real AI education where it's needed most.
            </p>
            <Link href="/contact?type=partnership" className="btn-kvc-gold">
              Start a Partnership Conversation
            </Link>
          </div>
        </section>

        {/* Partner Type Cards */}
        <section className="section-kvc">
          <div className="container-kvc">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
                gap: "24px",
              }}
            >
              {partnerTypes.map((p) => {
                const c = colorCls[p.color];
                return (
                  <div
                    key={p.slug}
                    className={`card-kvc ${c.glow}`}
                    style={{ padding: "36px" }}
                  >
                    <div style={{ fontSize: "40px", marginBottom: "20px" }}>{p.icon}</div>
                    <span className={`chip-kvc ${c.chip} mb-3`}>{p.type}</span>
                    <h2
                      className="font-heading"
                      style={{
                        fontSize: "22px",
                        color: c.text,
                        marginTop: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      {p.headline}
                    </h2>
                    <p
                      style={{
                        color: "var(--color-kvc-muted)",
                        lineHeight: "26px",
                        marginBottom: "24px",
                        fontSize: "15px",
                      }}
                    >
                      {p.desc}
                    </p>
                    <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: "28px" }}>
                      {p.benefits.map((b) => (
                        <li
                          key={b}
                          style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                            fontSize: "14px",
                            color: "var(--color-kvc-muted)",
                          }}
                        >
                          <span style={{ color: c.text, flexShrink: 0 }}>✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact?type=partnership" className={c.btn}>
                      {p.cta}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section
          className="section-kvc-sm"
          style={{
            background: "linear-gradient(135deg, rgba(255,105,180,0.04) 0%, rgba(135,206,235,0.04) 100%)",
          }}
        >
          <div className="container-kvc" style={{ textAlign: "center", maxWidth: "700px" }}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                color: "var(--color-kvc-text)",
                marginBottom: "16px",
              }}
            >
              Why organizations partner with{" "}
              <span className="text-glow-pink">KVC</span>
            </h2>
            <p
              style={{
                color: "var(--color-kvc-muted)",
                lineHeight: "28px",
                fontSize: "17px",
                marginBottom: "36px",
              }}
            >
              We don't drop a curriculum and disappear. We embed with your
              community, measure outcomes, and build programs that produce
              real career results — not just certificates.
            </p>
            <Link href="/impact" className="btn-kvc-ghost">
              See Our Impact →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
