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
  // Redirects for old omniconnect paths
  async redirects() {
    return [
      {
        source: "/omniconnect",
        destination: "/our-products/omniconnect",
        permanent: true,
      },
      {
        source: "/omniconnect/:path*",
        destination: "/our-products/omniconnect/:path*",
        permanent: true,

      },
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
