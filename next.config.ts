import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      { hostname: "cdn.abacus.ai" },
      { hostname: "storage.googleapis.com" },
      { hostname: "kalivibecoding.com" },
      { hostname: "r2.cloudflarestorage.com" },
      { hostname: "9a3c0d0f1bc8bb5c83574905b6e13680.r2.cloudflarestorage.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "/programs",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
