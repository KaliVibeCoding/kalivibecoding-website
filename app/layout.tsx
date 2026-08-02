import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.kalivibecoding.com";
const SITE_NAME = "KaliVibeCoding";

export const viewport: Viewport = {
  themeColor: "#1e1e24",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KaliVibeCoding — AI & Automation Education | Code to the Rhythm",
    template: "%s | KaliVibeCoding",
  },
  description:
    "KaliVibeCoding delivers applied AI agent architecture, automation systems, and full-stack engineering education for founders, solo operators, and builders who value ownership over virality. California Neon-Noir. Build once. Systemize forever.",
  keywords: [
    "AI education",
    "automation training",
    "AI agents",
    "full-stack development",
    "workforce development",
    "AI architect",
    "Rick Jefferson",
    "KaliVibeCoding",
    "California AI education",
    "WIOA workforce training",
    "AI workforce readiness",
    "applied AI",
    "multi-agent systems",
    "LangChain",
    "OpenAI",
    "Cloudflare AI",
    "Next.js",
    "Python automation",
  ],
  authors: [{ name: "Rick Jefferson", url: SITE_URL }],
  creator: "Rick Jefferson",
  publisher: "KaliVibeCoding",
  category: "Education",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "KaliVibeCoding — AI & Automation Education",
    description:
      "Applied AI agent architecture, automation systems, and full-stack engineering. Build once. Systemize forever.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KaliVibeCoding — Code to the Rhythm. Build by the Beat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KaliVibeCoding",
    creator: "@KaliVibeCoding",
    title: "KaliVibeCoding — AI & Automation Education",
    description:
      "Applied AI agent architecture, automation systems, and full-stack engineering. Code to the Rhythm.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KaliVibeCoding",
              alternateName: "KaliVibeCoding Institute",
              url: SITE_URL,
              logo: "https://cdn.abacus.ai/images/134ce4b7-b0d1-4ba8-8655-3afd323fb646.png",
              sameAs: [
                "https://www.youtube.com/@KaliVibe-Coding",
                "https://x.com/KaliVibeCoding",
                "https://github.com/KaliVibeCoding",
                "https://www.twitch.tv/kalivibecoding",
                "https://patreon.com/KaliVibeCoding",
                "https://www.instagram.com/kalivibecoding",
                "https://www.tiktok.com/@kalivibecoding",
                "https://rumble.com/user/KaliVibeCoding",
                "https://linkedin.com/in/rickjeffersonkvc",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@kalivibecoding.com",
                contactType: "customer support",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Venice Beach",
                addressRegion: "CA",
                addressCountry: "US",
              },
              founder: {
                "@type": "Person",
                name: "Rick Jefferson",
                jobTitle: "Founder & AI Architect",
                url: "https://linkedin.com/in/rickjeffersonkvc",
                image:
                  "https://cdn.abacus.ai/images/df46850a-d15d-437b-8d04-688c8d10f31d.png",
              },
              description:
                "KaliVibeCoding delivers applied AI agent architecture, automation systems, and full-stack engineering education. Build once. Systemize forever.",
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Automation Systems",
                "Full-Stack Development",
                "AI Agents",
                "Workforce Development",
              ],
            }),
          }}
        />
        {/* JSON-LD — Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "KaliVibeCoding Institute",
              url: SITE_URL,
              description:
                "KaliVibeCoding Institute delivers accessible, future-ready education in artificial intelligence, automation, and software systems—preparing students, workers, and communities for high-wage, technology-driven careers.",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "AI & Automation Certificate",
                credentialCategory: "certificate",
              },
            }),
          }}
        />
      </head>
      <body
        style={{
          backgroundColor: "var(--color-kvc-bg)",
          color: "var(--color-kvc-text)",
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
