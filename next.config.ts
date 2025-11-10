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
    // Remove all console.logs and debuggers in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    // Improves memory and cold start time for serverless
    optimizeCss: true,
    scrollRestoration: true,
    // Enables faster static rendering (App Router only)
  },

  // Security + performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
