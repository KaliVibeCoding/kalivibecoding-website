import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact — KaliVibeCoding",
  description:
    "Request a pilot program, explore partnerships, or talk to Rick directly. We respond within 24 hours.",
  alternates: { canonical: "https://www.kalivibecoding.com/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        <ContactHero />
        <ContactForm />
        <ContactDetails />
      </main>
      <Footer />
    </>
  );
}

function ContactHero() {
  return (
    <section className="section-kvc-sm" style={{ textAlign: "center" }}>
      <div className="container-kvc">
        <span className="chip-kvc chip-pink mb-4">Get In Touch</span>
        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            marginTop: "16px",
            color: "var(--color-kvc-text)",
            marginBottom: "16px",
          }}
        >
          Let&apos;s build{" "}
          <span className="text-glow-gold">something real.</span>
        </h1>
        <p
          style={{
            color: "var(--color-kvc-muted)",
            fontSize: "20px",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: "32px",
          }}
        >
          Pilot request, partnership inquiry, government contract, or just want
          to talk to Rick — this is the door.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="section-kvc-sm">
      <div className="container-kvc" style={{ maxWidth: "720px" }}>
        <div className="card-kvc p-12">
          <form
            action="https://kalivibecoding-api.kalivibecoding.com/contact"
            method="POST"
          >
            {/* Type select */}
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="inquiry_type"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-kvc-text)",
                  marginBottom: "8px",
                }}
              >
                What brings you here?
              </label>
              <select
                id="inquiry_type"
                name="inquiry_type"
                className="input-kvc"
                style={{
                  appearance: "none",
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'8\' viewBox=\'0 0 12 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%239ca3af\' stroke-width=\'1.5\' stroke-linecap=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                }}
              >
                <option value="pilot">Request a Pilot Program</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="government">Government / Federal Contract</option>
                <option value="corporate">Corporate Training</option>
                <option value="press">Press & Media</option>
                <option value="general">General Question</option>
              </select>
            </div>

            {/* Name */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  htmlFor="first_name"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-kvc-text)",
                    marginBottom: "8px",
                  }}
                >
                  First Name <span style={{ color: "var(--color-kvc-pink)" }}>*</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  placeholder="Marcus"
                  className="input-kvc"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-kvc-text)",
                    marginBottom: "8px",
                  }}
                >
                  Last Name <span style={{ color: "var(--color-kvc-pink)" }}>*</span>
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  placeholder="Webb"
                  className="input-kvc"
                />
              </div>
            </div>

            {/* Email / Org */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-kvc-text)",
                    marginBottom: "8px",
                  }}
                >
                  Email <span style={{ color: "var(--color-kvc-pink)" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="marcus@royse-isd.net"
                  className="input-kvc"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-kvc-text)",
                    marginBottom: "8px",
                  }}
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Royse City ISD"
                  className="input-kvc"
                />
              </div>
            </div>

            {/* Participants / Budget */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  htmlFor="participants"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-kvc-text)",
                    marginBottom: "8px",
                  }}
                >
                  Estimated Participants
                </label>
                <select id="participants" name="participants" className="input-kvc">
                  <option value="">Select range</option>
                  <option value="1-30">1 – 30</option>
                  <option value="31-100">31 – 100</option>
                  <option value="101-500">101 – 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-kvc-text)",
                    marginBottom: "8px",
                  }}
                >
                  Timeline
                </label>
                <select id="timeline" name="timeline" className="input-kvc">
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3mo">1 – 3 months</option>
                  <option value="3-6mo">3 – 6 months</option>
                  <option value="6mo+">6+ months</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "28px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-kvc-text)",
                  marginBottom: "8px",
                }}
              >
                Tell us about your needs{" "}
                <span style={{ color: "var(--color-kvc-pink)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Describe your community, program goals, and what success looks like for your participants."
                className="input-kvc"
                style={{ resize: "vertical", minHeight: "120px" }}
              />
            </div>

            <button type="submit" className="btn-kvc-gold" style={{ width: "100%", justifyContent: "center", fontSize: "16px", padding: "16px" }}>
              Send It →
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "var(--color-kvc-muted)",
                marginTop: "16px",
              }}
            >
              We respond within 24 hours. No spam ever. Promise.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactDetails() {
  const contacts = [
    { role: "General", email: "hello@kalivibecoding.com", color: "var(--color-kvc-text)" },
    { role: "Partnerships", email: "partnerships@kalivibecoding.com", color: "var(--color-kvc-pink)" },
    { role: "Federal / Contracts", email: "contracts@kalivibecoding.com", color: "var(--color-kvc-blue)" },
    { role: "Press & Media", email: "press@kalivibecoding.com", color: "var(--color-kvc-gold)" },
    { role: "Rick (Personal)", email: "rick@kalivibecoding.com", color: "var(--color-kvc-pink)" },
  ];

  return (
    <section className="section-kvc-sm">
      <div className="container-kvc" style={{ maxWidth: "720px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {contacts.map((c) => (
            <div key={c.email} className="card-kvc p-6">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: c.color,
                  marginBottom: "8px",
                }}
              >
                {c.role}
              </p>
              <a
                href={`mailto:${c.email}`}
                style={{
                  color: "var(--color-kvc-text)",
                  fontSize: "14px",
                  textDecoration: "none",
                  wordBreak: "break-all",
                }}
              >
                {c.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
