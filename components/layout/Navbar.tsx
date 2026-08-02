"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/programs", label: "Programs" },
  {
    href: "#",
    label: "Partnerships",
    children: [
      { href: "/partnerships/schools", label: "Schools & Districts" },
      { href: "/partnerships/cities", label: "Cities" },
      { href: "/partnerships/workforce-boards", label: "Workforce Boards" },
      { href: "/partnerships/corporate", label: "Corporate" },
    ],
  },
  {
    href: "#",
    label: "Government",
    children: [
      {
        href: "/government-contracts/capability-statement",
        label: "Capability Statement",
      },
      { href: "/government-contracts/naics-psc", label: "NAICS / PSC Codes" },
      { href: "/government-contracts/team-with-us", label: "Team With Us" },
    ],
  },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(30,30,36,0.96)"
          : "rgba(30,30,36,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--color-kvc-border)"
          : "1px solid transparent",
      }}
    >
      <div
        className="container-kvc"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src="https://cdn.abacus.ai/images/134ce4b7-b0d1-4ba8-8655-3afd323fb646.png"
            alt="KaliVibeCoding Logo"
            width={36}
            height={36}
            style={{ borderRadius: "8px" }}
          />
          <span
            className="font-heading text-glow-pink"
            style={{ fontSize: "24px" }}
          >
            KaliVibeCoding
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
          className="hidden-mobile"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.children ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color:
                      openDropdown === link.label
                        ? "var(--color-kvc-pink)"
                        : "var(--color-kvc-muted)",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{
                      transition: "transform 0.2s ease",
                      transform:
                        openDropdown === link.label
                          ? "rotate(180deg)"
                          : "none",
                    }}
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={link.href}
                  style={{
                    color: "var(--color-kvc-muted)",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    display: "block",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--color-kvc-text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--color-kvc-muted)")
                  }
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown */}
              {link.children && openDropdown === link.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--color-kvc-bg-card)",
                    border: "1px solid var(--color-kvc-border)",
                    borderRadius: "12px",
                    padding: "8px",
                    minWidth: "200px",
                    boxShadow: "var(--shadow-card)",
                    zIndex: 200,
                  }}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        color: "var(--color-kvc-muted)",
                        textDecoration: "none",
                        fontSize: "14px",
                        borderRadius: "8px",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,105,180,0.08)";
                        el.style.color = "var(--color-kvc-text)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "transparent";
                        el.style.color = "var(--color-kvc-muted)";
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/contact"
            style={{
              color: "var(--color-kvc-muted)",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
          <Link href="/contact?type=pilot" className="btn-kvc-gold" style={{ padding: "8px 20px" }}>
            Request a Pilot
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--color-kvc-text)",
            padding: "8px",
          }}
          className="mobile-hamburger"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--color-kvc-bg-card)",
            borderTop: "1px solid var(--color-kvc-border)",
            padding: "16px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.children ? "#" : link.href}
                style={{
                  display: "block",
                  padding: "12px 0",
                  color: "var(--color-kvc-text)",
                  fontWeight: 600,
                  fontSize: "16px",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-kvc-border)",
                }}
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div style={{ paddingLeft: "16px" }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        color: "var(--color-kvc-muted)",
                        fontSize: "15px",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--color-kvc-border)",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ paddingTop: "16px" }}>
            <Link href="/contact?type=pilot" className="btn-kvc-gold" style={{ width: "100%", justifyContent: "center" }}>
              Request a Pilot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
