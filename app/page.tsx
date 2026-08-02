import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KaliVibeCoding — AI & Automation Education | Code to the Rhythm",
  description:
    "Applied AI agent architecture, automation systems, and full-stack engineering education for founders, builders, and workforce programs. Build once. Systemize forever.",
  alternates: { canonical: "https://www.kalivibecoding.com" },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <WhyKVCSection />
        <ProgramsSection />
        <OneSongBuildsSection />
        <PartnershipsSection />
        <GovernmentSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-neon-grid"
      aria-label="Hero"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at 15% 20%, rgba(255,105,180,0.18), transparent 45%), radial-gradient(800px circle at 85% 25%, rgba(135,206,235,0.18), transparent 45%)",
        }}
      />

      <div className="container-kvc relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex justify-center mb-6">
            <span className="chip-pink">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--color-kvc-pink)",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              West Coast AI Education — Venice Beach, CA
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-heading text-glow-pink mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1.1 }}
          >
            Code to the Rhythm.
            <br />
            <span className="text-gradient-kvc">Build by the Beat.</span>
          </h1>

          {/* Subhead */}
          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontSize: "20px",
              lineHeight: "32px",
              color: "var(--color-kvc-muted)",
            }}
          >
            Applied AI agent architecture, automation systems, and full-stack
            engineering — for founders, solo operators, and builders who value{" "}
            <strong style={{ color: "var(--color-kvc-text)" }}>
              ownership over virality
            </strong>
            .
          </p>

          {/* CTA Row */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link href="/contact?type=pilot" className="btn-kvc-gold">
              Request a Pilot
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/programs" className="btn-kvc-blue">
              View Programs
            </Link>
            <Link href="/government-contracts/capability-statement" className="btn-kvc-ghost">
              Download Capability Statement
            </Link>
          </div>

          {/* Social proof chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "10,000+ Learners", color: "chip-gold" },
              { label: "500K+ YouTube", color: "chip-pink" },
              { label: "200+ Open Source Projects", color: "chip-blue" },
              { label: "WIOA Aligned", color: "chip-gold" },
            ].map((item) => (
              <span key={item.label} className={`chip-kvc ${item.color}`}>
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Founder card */}
        <div
          className="card-kvc card-glow-pink mx-auto mt-16 max-w-sm p-8 text-center"
        >
          <div
            className="relative mx-auto mb-4"
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--color-kvc-pink)",
              boxShadow: "var(--shadow-glow-pink)",
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
          <p
            className="font-heading text-glow-pink mb-1"
            style={{ fontSize: "22px" }}
          >
            Rick Jefferson
          </p>
          <p style={{ color: "var(--color-kvc-muted)", fontSize: "14px" }}>
            Founder & AI Architect
          </p>
          <p
            className="mt-3 font-mono"
            style={{ fontSize: "12px", color: "var(--color-kvc-blue)" }}
          >
            "Build once. Systemize forever."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS BAR ─────────────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "10K+", label: "Active Learners" },
    { value: "500K+", label: "YouTube Subscribers" },
    { value: "200+", label: "Open Source Projects" },
    { value: "95%", label: "Placement Rate" },
    { value: "4", label: "NAICS Codes Active" },
    { value: "WIOA", label: "Grant Aligned" },
  ];

  return (
    <section
      style={{
        borderTop: "1px solid var(--color-kvc-border)",
        borderBottom: "1px solid var(--color-kvc-border)",
        padding: "40px 0",
        background: "rgba(255,105,180,0.04)",
      }}
    >
      <div className="container-kvc">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                className="font-heading text-glow-pink"
                style={{ fontSize: "32px" }}
              >
                {stat.value}
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-kvc-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY KVC ────────────────────────────────────────────────────────────────── */
function WhyKVCSection() {
  const pillars = [
    {
      icon: "🤖",
      title: "AI Agent Architecture",
      desc: "Multi-agent systems, Auto-RAG pipelines, Explainable AI, Zero-touch execution agents. Built for production — not demos.",
      color: "card-glow-pink",
      accent: "var(--color-kvc-pink)",
    },
    {
      icon: "⚡",
      title: "Automation Systems",
      desc: "Business process automation, Web→API conversion, scraping, triggers, orchestration. Revenue-driven workflows that run while you sleep.",
      color: "card-glow-blue",
      accent: "var(--color-kvc-blue)",
    },
    {
      icon: "🏗️",
      title: "Full-Stack Engineering",
      desc: "Next.js, Cloudflare Edge, secure microservices, cloud-native deployments. Enterprise thinking without enterprise bloat.",
      color: "card-glow-gold",
      accent: "var(--color-kvc-gold)",
    },
    {
      icon: "🎓",
      title: "Education & Community",
      desc: "Workforce-aligned curriculum, One-Song Builds, step-by-step systems. No-code to pro-code bridges that create real career paths.",
      color: "card-glow-pink",
      accent: "var(--color-kvc-pink)",
    },
  ];

  return (
    <section className="section-kvc" id="why-kvc">
      <div className="container-kvc">
        <div className="text-center mb-16">
          <span className="chip-kvc chip-gold mb-4">Why KaliVibeCoding</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "var(--color-kvc-text)",
              marginTop: "16px",
            }}
          >
            Enterprise thinking.{" "}
            <span className="text-glow-pink">Zero bloat.</span>
          </h2>
          <p
            style={{
              color: "var(--color-kvc-muted)",
              fontSize: "18px",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
            }}
          >
            Four pillars that turn builders into systems architects — and
            communities into talent pipelines.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`card-kvc ${p.color} p-8`}
              style={{ transition: "all 0.3s ease" }}
            >
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                {p.icon}
              </div>
              <h3
                className="font-heading"
                style={{ fontSize: "22px", color: p.accent, marginBottom: "12px" }}
              >
                {p.title}
              </h3>
              <p style={{ color: "var(--color-kvc-muted)", lineHeight: "24px" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAMS ───────────────────────────────────────────────────────────────── */
function ProgramsSection() {
  const programs = [
    {
      slug: "ai-foundations",
      title: "AI Foundations",
      desc: "AI concepts & ethics, prompt engineering, AI tools, intro to agents.",
      level: "Beginner",
      weeks: "4 weeks",
      accent: "chip-gold",
    },
    {
      slug: "automation-systems",
      title: "Automation & Systems",
      desc: "Workflow automation, business process digitization, no-code→pro-code.",
      level: "Intermediate",
      weeks: "6 weeks",
      accent: "chip-pink",
    },
    {
      slug: "full-stack-engineering",
      title: "Full-Stack Engineering",
      desc: "Web apps, APIs, cloud fundamentals, secure deployment on Cloudflare.",
      level: "Advanced",
      weeks: "8 weeks",
      accent: "chip-blue",
    },
    {
      slug: "career-workforce",
      title: "Career & Workforce Readiness",
      desc: "Portfolio projects, resume prep, interview coaching, freelance pathways.",
      level: "All Levels",
      weeks: "Ongoing",
      accent: "chip-gold",
    },
  ];

  return (
    <section
      className="section-kvc bg-neon-grid"
      id="programs"
      style={{ background: "rgba(135,206,235,0.03)" }}
    >
      <div className="container-kvc">
        <div className="text-center mb-16">
          <span className="chip-kvc chip-blue mb-4">Program Tracks</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginTop: "16px",
              color: "var(--color-kvc-text)",
            }}
          >
            Applied learning.{" "}
            <span className="text-glow-blue">Real outcomes.</span>
          </h2>
          <p
            style={{
              color: "var(--color-kvc-muted)",
              fontSize: "18px",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
            }}
          >
            Workforce-aligned curriculum built for schools, workforce boards, cities,
            and corporate partners. WIOA-eligible.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {programs.map((prog) => (
            <Link
              key={prog.slug}
              href={`/programs/${prog.slug}`}
              className="card-kvc card-glow-blue p-8"
              style={{ display: "block", textDecoration: "none" }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`chip-kvc ${prog.accent}`}>{prog.level}</span>
                <span style={{ color: "var(--color-kvc-muted)", fontSize: "13px" }}>
                  {prog.weeks}
                </span>
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: "22px",
                  color: "var(--color-kvc-text)",
                  marginBottom: "10px",
                }}
              >
                {prog.title}
              </h3>
              <p style={{ color: "var(--color-kvc-muted)", lineHeight: "22px" }}>
                {prog.desc}
              </p>
              <p
                style={{
                  marginTop: "16px",
                  color: "var(--color-kvc-blue)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Explore Program →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/programs" className="btn-kvc-blue">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── ONE-SONG BUILDS ────────────────────────────────────────────────────────── */
function OneSongBuildsSection() {
  const builds = [
    {
      title: "AI Agent in 5 Minutes",
      song: "Larry June — 6am in Sausalito",
      time: "5:00",
      level: "Beginner",
      tech: ["Python", "OpenAI", "LangChain"],
    },
    {
      title: "Next.js Edge API",
      song: "Kendrick Lamar — Money Trees",
      time: "4:12",
      level: "Intermediate",
      tech: ["Next.js", "Cloudflare", "TypeScript"],
    },
    {
      title: "RAG Pipeline from Scratch",
      song: "Nipsey Hussle — The Marathon",
      time: "5:45",
      level: "Advanced",
      tech: ["Python", "Vectorize", "FastAPI"],
    },
  ];

  return (
    <section className="section-kvc" id="one-song-builds">
      <div className="container-kvc">
        <div className="text-center mb-16">
          <span className="chip-kvc chip-pink mb-4">One-Song Builds</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginTop: "16px",
              color: "var(--color-kvc-text)",
            }}
          >
            Complete before the{" "}
            <span className="text-glow-pink">beat drops.</span>
          </h2>
          <p
            style={{
              color: "var(--color-kvc-muted)",
              fontSize: "18px",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
            }}
          >
            The KVC signature format — one song, one complete build. Efficiency
            you can feel. Code that has rhythm.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {builds.map((build) => (
            <div
              key={build.title}
              className="card-kvc card-glow-pink p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="chip-kvc chip-pink">{build.level}</span>
                <span
                  className="font-mono"
                  style={{ color: "var(--color-kvc-gold)", fontSize: "18px", fontWeight: 700 }}
                >
                  {build.time}
                </span>
              </div>

              <h3
                className="font-heading"
                style={{
                  fontSize: "22px",
                  color: "var(--color-kvc-text)",
                  marginBottom: "8px",
                }}
              >
                {build.title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  color: "var(--color-kvc-muted)",
                  marginBottom: "16px",
                  fontStyle: "italic",
                }}
              >
                🎵 {build.song}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {build.tech.map((t) => (
                  <span key={t} className="code-kvc">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href="/programs"
                className="btn-kvc-pink"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Building
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PARTNERSHIPS ───────────────────────────────────────────────────────────── */
function PartnershipsSection() {
  const partners = [
    {
      href: "/partnerships/schools",
      icon: "🏫",
      title: "Schools & Districts",
      desc: "AI curriculum integrated into K-12 and higher ed programs. Pilot-ready in 30 days.",
    },
    {
      href: "/partnerships/workforce-boards",
      icon: "🏢",
      title: "Workforce Boards",
      desc: "WIOA-aligned AI workforce training. Federal grant language ready to go.",
    },
    {
      href: "/partnerships/cities",
      icon: "🌆",
      title: "Cities & Municipalities",
      desc: "Economic mobility through applied technology. Serve your community's AI skills gap.",
    },
    {
      href: "/partnerships/corporate",
      icon: "💼",
      title: "Corporate Partners",
      desc: "Upskill your team. Build internal AI talent pipelines. Custom tracks available.",
    },
  ];

  return (
    <section
      className="section-kvc"
      id="partnerships"
      style={{ background: "rgba(255,215,0,0.03)" }}
    >
      <div className="container-kvc">
        <div className="text-center mb-16">
          <span className="chip-kvc chip-gold mb-4">Partnerships</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginTop: "16px",
              color: "var(--color-kvc-text)",
            }}
          >
            Building AI-ready{" "}
            <span className="text-glow-gold">communities.</span>
          </h2>
          <p
            style={{
              color: "var(--color-kvc-muted)",
              fontSize: "18px",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
            }}
          >
            We partner with schools, cities, workforce boards, and corporations to
            deliver applied AI education at scale.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {partners.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="card-kvc card-glow-gold p-8"
              style={{ display: "block", textDecoration: "none" }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{p.icon}</div>
              <h3
                className="font-heading"
                style={{
                  fontSize: "20px",
                  color: "var(--color-kvc-gold)",
                  marginBottom: "10px",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "var(--color-kvc-muted)", fontSize: "15px", lineHeight: "22px" }}>
                {p.desc}
              </p>
              <p
                style={{
                  marginTop: "12px",
                  color: "var(--color-kvc-gold)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Partner With Us →
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact?type=partnership" className="btn-kvc-pink">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── GOVERNMENT / FEDERAL ───────────────────────────────────────────────────── */
function GovernmentSection() {
  return (
    <section className="section-kvc" id="government">
      <div className="container-kvc">
        <div
          className="card-kvc"
          style={{
            padding: "64px",
            background:
              "linear-gradient(135deg, rgba(255,105,180,0.08) 0%, rgba(135,206,235,0.08) 100%)",
            border: "1px solid rgba(255,105,180,0.2)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="chip-kvc chip-blue mb-4">Federal Contracts</span>
              <h2
                className="font-heading"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  color: "var(--color-kvc-text)",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              >
                KaliVibeCoding{" "}
                <span className="text-glow-blue">Institute</span>
              </h2>
              <p style={{ color: "var(--color-kvc-muted)", lineHeight: "26px", marginBottom: "24px" }}>
                KaliVibeCoding Institute provides applied artificial intelligence
                and automation workforce training programs designed to support
                federal, state, and community workforce development initiatives.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {["NAICS 611420", "NAICS 611430", "NAICS 541512", "NAICS 541715"].map(
                  (code) => (
                    <span key={code} className="code-kvc" style={{ textAlign: "center" }}>
                      {code}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/government-contracts/capability-statement" className="btn-kvc-blue">
                  Download Capability Statement
                </Link>
                <Link href="/government-contracts" className="btn-kvc-ghost">
                  Learn More
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Grant Alignment", value: "WIOA, Digital Equity Act, STEM Education" },
                { label: "Geographic Focus", value: "North Texas → National Expansion" },
                { label: "PSC Codes", value: "U012, U099, R408, R499" },
                { label: "Status", value: "SAM.gov Active (in progress)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-kvc"
                  style={{ padding: "16px 20px" }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-kvc-blue)",
                      fontWeight: 600,
                      marginBottom: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--color-kvc-text)" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Rick doesn't just teach code — he teaches systems thinking. I went from struggling with Python basics to deploying AI agents in 8 weeks. That's the KVC difference.",
      name: "Jordan Kim",
      role: "Career Switcher → AI Engineer",
      company: "StartupXYZ",
    },
    {
      quote:
        "We piloted KaliVibeCoding Institute's AI Foundations program across three schools in our district. Student engagement was unlike anything we'd seen. Partnership renewed.",
      name: "Dr. Marcus Webb",
      role: "Superintendent",
      company: "Royse City ISD",
    },
    {
      quote:
        "The One-Song Build format clicked immediately. I finished a working RAG pipeline before Nipsey's track ended. Now I build like that for clients every day.",
      name: "Aaliyah Torres",
      role: "Freelance AI Developer",
      company: "Independent",
    },
  ];

  return (
    <section
      className="section-kvc"
      id="testimonials"
      style={{ background: "rgba(255,105,180,0.03)" }}
    >
      <div className="container-kvc">
        <div className="text-center mb-16">
          <span className="chip-kvc chip-pink mb-4">What They Say</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginTop: "16px",
              color: "var(--color-kvc-text)",
            }}
          >
            Results speak.{" "}
            <span className="text-glow-pink">Receipts ready.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="card-kvc card-glow-pink p-8">
              <p
                style={{
                  color: "var(--color-kvc-pink)",
                  fontSize: "32px",
                  lineHeight: 1,
                  marginBottom: "12px",
                  fontFamily: "Georgia, serif",
                }}
              >
                "
              </p>
              <p
                style={{
                  color: "var(--color-kvc-text)",
                  lineHeight: "26px",
                  marginBottom: "20px",
                  fontSize: "15px",
                }}
              >
                {t.quote}
              </p>
              <div>
                <p style={{ fontWeight: 700, color: "var(--color-kvc-text)" }}>{t.name}</p>
                <p style={{ fontSize: "13px", color: "var(--color-kvc-muted)" }}>
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ────────────────────────────────────────────────────────────────── */
function PricingSection() {
  const tiers = [
    {
      name: "Pilot",
      price: "Free",
      sub: "for qualifying orgs",
      color: "var(--color-kvc-blue)",
      chip: "chip-blue",
      features: [
        "1 program track",
        "Up to 30 participants",
        "4-week engagement",
        "Impact report included",
        "Partnership pathway",
      ],
      cta: "Request a Pilot",
      href: "/contact?type=pilot",
      btn: "btn-kvc-blue",
    },
    {
      name: "Institution",
      price: "$2,500",
      sub: "per cohort",
      color: "var(--color-kvc-pink)",
      chip: "chip-pink",
      popular: true,
      features: [
        "All 4 program tracks",
        "Up to 100 participants",
        "12-week engagement",
        "LMS integration",
        "Instructor training",
        "Monthly impact reports",
      ],
      cta: "Partner With Us",
      href: "/contact?type=partnership",
      btn: "btn-kvc-pink",
    },
    {
      name: "Enterprise",
      price: "Custom",
      sub: "for districts & corps",
      color: "var(--color-kvc-gold)",
      chip: "chip-gold",
      features: [
        "Unlimited participants",
        "Custom curriculum",
        "White-label options",
        "Dedicated instructor",
        "Federal grant support",
        "SAM.gov compliant",
      ],
      cta: "Contact Us",
      href: "/contact?type=enterprise",
      btn: "btn-kvc-gold",
    },
  ];

  return (
    <section className="section-kvc" id="pricing">
      <div className="container-kvc">
        <div className="text-center mb-16">
          <span className="chip-kvc chip-gold mb-4">Pricing</span>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginTop: "16px",
              color: "var(--color-kvc-text)",
            }}
          >
            Invest in your{" "}
            <span className="text-glow-gold">workforce.</span>
          </h2>
          <p
            style={{
              color: "var(--color-kvc-muted)",
              fontSize: "18px",
              marginTop: "16px",
              maxWidth: "520px",
              margin: "16px auto 0",
            }}
          >
            Flexible tiers for schools, workforce programs, and enterprise teams.
            Grants accepted. WIOA-eligible.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="card-kvc p-8"
              style={{
                border: tier.popular
                  ? `1px solid ${tier.color}`
                  : "1px solid var(--color-kvc-border)",
                position: "relative",
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: tier.color,
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "4px 16px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <span className={`chip-kvc ${tier.chip}`}>{tier.name}</span>

              <div style={{ margin: "20px 0" }}>
                <span
                  className="font-heading"
                  style={{ fontSize: "48px", color: tier.color }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--color-kvc-muted)",
                    marginLeft: "8px",
                  }}
                >
                  {tier.sub}
                </span>
              </div>

              <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                {tier.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      padding: "8px 0",
                      color: "var(--color-kvc-text)",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      borderBottom: "1px solid var(--color-kvc-border)",
                    }}
                  >
                    <span style={{ color: tier.color }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={tier.btn}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="section-kvc"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,105,180,0.12) 0%, rgba(135,206,235,0.12) 100%)",
        borderTop: "1px solid var(--color-kvc-border)",
      }}
    >
      <div className="container-kvc text-center">
        <h2
          className="font-heading"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            color: "var(--color-kvc-text)",
            marginBottom: "20px",
          }}
        >
          The marathon{" "}
          <span className="text-glow-pink">continues.</span>
        </h2>
        <p
          style={{
            color: "var(--color-kvc-muted)",
            fontSize: "20px",
            maxWidth: "560px",
            margin: "0 auto 40px",
            lineHeight: "32px",
          }}
        >
          "Victory is in the preparation. Success is in the persistence." Ready
          to build AI-ready communities? Start here.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact?type=pilot" className="btn-kvc-gold">
            Request a Pilot
          </Link>
          <Link href="/programs" className="btn-kvc-pink">
            View Programs
          </Link>
          <Link href="/contact" className="btn-kvc-ghost">
            Talk to Rick →
          </Link>
        </div>

        <p
          style={{
            marginTop: "48px",
            fontSize: "14px",
            color: "var(--color-kvc-muted)",
          }}
        >
          Built with a Vibe in Venice Beach, CA ·{" "}
          <a
            href="mailto:hello@kalivibecoding.com"
            style={{ color: "var(--color-kvc-blue)" }}
          >
            hello@kalivibecoding.com
          </a>
        </p>
      </div>
    </section>
  );
}
