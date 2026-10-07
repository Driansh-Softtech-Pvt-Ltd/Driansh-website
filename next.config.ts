import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Enables modern formats for smaller image size
    formats: ["image/avif", "image/webp"],
    // Increase quality only if necessary; lower = faster load
    minimumCacheTTL: 60,
  },

  compiler: {
    // Remove console.logs in production, but keep errors for server logs
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  experimental: {
    // Improves memory and cold start time for serverless
    optimizeCss: true,
    scrollRestoration: true,
    // Enables faster static rendering (App Router only)
  },
  // Redirects for renamed and misspelled URLs
  async redirects() {
    return [
      // Old misspelled service URLs → corrected URLs (keeps search rankings).
      ...["voip", "freeswitch", "asterisk", "kamailio", "sip-js"].map((slug) => ({
        source: `/services/${slug}-devlopment-service`,
        destination: `/services/${slug}-development-service`,
        permanent: true,
      })),
      // The product was renamed from OmniConnect to EngageOne; old links keep working.
      ...["/omniconnect", "/our-products/omniconnect", "/engageone"].flatMap((source) => [
        { source, destination: "/our-products/engageone", permanent: true },
        { source: `${source}/:path*`, destination: "/our-products/engageone/:path*", permanent: true },
      ]),
    ];
  },

  // Security + performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Public assets are not content-hashed, so cache them for a day
        // instead of marking them immutable. Next.js already serves
        // /_next/static with long-lived immutable caching.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
