import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  { href: "https://www.youtube.com/@KaliVibe-Coding", label: "YouTube", icon: "▶" },
  { href: "https://x.com/KaliVibeCoding", label: "Twitter / X", icon: "𝕏" },
  { href: "https://github.com/KaliVibeCoding", label: "GitHub", icon: "⌥" },
  { href: "https://www.twitch.tv/kalivibecoding", label: "Twitch", icon: "◉" },
  { href: "https://patreon.com/KaliVibeCoding", label: "Patreon", icon: "P" },
  { href: "https://www.instagram.com/kalivibecoding", label: "Instagram", icon: "◈" },
  { href: "https://www.tiktok.com/@kalivibecoding", label: "TikTok", icon: "♪" },
  { href: "https://rumble.com/user/KaliVibeCoding", label: "Rumble", icon: "R" },
  { href: "https://linkedin.com/in/rickjeffersonkvc", label: "LinkedIn", icon: "in" },
];

const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { href: "/programs/ai-foundations", label: "AI Foundations" },
      { href: "/programs/automation-systems", label: "Automation & Systems" },
      { href: "/programs/full-stack-engineering", label: "Full-Stack Engineering" },
      { href: "/programs/career-workforce", label: "Career Readiness" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { href: "/partnerships/schools", label: "Schools & Districts" },
      { href: "/partnerships/cities", label: "Cities" },
      { href: "/partnerships/workforce-boards", label: "Workforce Boards" },
      { href: "/partnerships/corporate", label: "Corporate" },
    ],
  },
  {
    title: "Government",
    links: [
      { href: "/government-contracts/capability-statement", label: "Capability Statement" },
      { href: "/government-contracts/naics-psc", label: "NAICS / PSC Codes" },
      { href: "/government-contracts/team-with-us", label: "Team With Us" },
      { href: "/government-contracts", label: "Federal Overview" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/impact", label: "Impact" },
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-kvc-bg-dark)",
        borderTop: "1px solid var(--color-kvc-border)",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div className="container-kvc">
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4, 1fr)",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <Image
                src="https://cdn.abacus.ai/images/134ce4b7-b0d1-4ba8-8655-3afd323fb646.png"
                alt="KaliVibeCoding"
                width={32}
                height={32}
                style={{ borderRadius: "8px" }}
              />
              <span
                className="font-heading"
                style={{ fontSize: "20px", color: "var(--color-kvc-pink)" }}
              >
                KaliVibeCoding
              </span>
            </Link>

            <p
              style={{
                color: "var(--color-kvc-muted)",
                fontSize: "14px",
                lineHeight: "22px",
                marginBottom: "20px",
                maxWidth: "240px",
              }}
            >
              Applied AI & automation education for the workforce. Code to the
              Rhythm. Build by the Beat.
            </p>

            {/* Founder */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <Image
                src="https://cdn.abacus.ai/images/df46850a-d15d-437b-8d04-688c8d10f31d.png"
                alt="Rick Jefferson"
                width={36}
                height={36}
                style={{ borderRadius: "50%", border: "2px solid var(--color-kvc-pink)" }}
              />
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-kvc-text)" }}>
                  Rick Jefferson
                </p>
                <p style={{ fontSize: "12px", color: "var(--color-kvc-muted)" }}>
                  Founder & AI Architect
                </p>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                "hello@kalivibecoding.com",
                "partnerships@kalivibecoding.com",
                "contracts@kalivibecoding.com",
              ].map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  style={{
                    color: "var(--color-kvc-muted)",
                    fontSize: "12px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-kvc-blue)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-kvc-muted)")
                  }
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-kvc-text)",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: "var(--color-kvc-muted)",
                        fontSize: "14px",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--color-kvc-text)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--color-kvc-muted)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          className="card-kvc"
          style={{
            padding: "32px",
            marginBottom: "40px",
            background: "rgba(255,105,180,0.06)",
            border: "1px solid rgba(255,105,180,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h4
                className="font-heading"
                style={{ fontSize: "20px", color: "var(--color-kvc-text)", marginBottom: "6px" }}
              >
                The Intel Drop 📡
              </h4>
              <p style={{ color: "var(--color-kvc-muted)", fontSize: "14px" }}>
                Weekly AI builds, automation techniques, and workforce education
                updates. No spam. Just signal.
              </p>
            </div>
            <form
              style={{ display: "flex", gap: "12px", minWidth: "300px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="input-kvc"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="btn-kvc-pink"
                style={{ whiteSpace: "nowrap" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "32px",
            justifyContent: "center",
          }}
        >
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                background: "var(--color-kvc-bg-card)",
                border: "1px solid var(--color-kvc-border)",
                borderRadius: "10px",
                color: "var(--color-kvc-muted)",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,105,180,0.12)";
                el.style.color = "var(--color-kvc-pink)";
                el.style.borderColor = "rgba(255,105,180,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--color-kvc-bg-card)";
                el.style.color = "var(--color-kvc-muted)";
                el.style.borderColor = "var(--color-kvc-border)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-kvc-border)",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--color-kvc-muted)" }}>
            © {year} KaliVibeCoding. All Rights Reserved. Built with a Vibe in Venice Beach, CA.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: "/accessibility", label: "Accessibility" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "13px",
                  color: "var(--color-kvc-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p
            style={{ fontSize: "12px", color: "var(--color-kvc-muted)" }}
          >
            #KaliVibeCoding #AI #Automation #LearnToCode #RickJefferson
          </p>
        </div>
      </div>
    </footer>
  );
}
