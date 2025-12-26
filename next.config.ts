import type { NextConfig } from "next";

// Next.js 15 - experimental.turbopack
const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    // @ts-expect-error
    turbopack: {
      // options
    },
    turbopackFileSystemCacheForDev: true,
  },

  async rewrites() {
    return [
      {
        source: "/adminDashboard/:path*",
        destination:
          process.env.ENVIRONMENT === "dev"
            ? `http://localhost:3001/:path*`
            : `https://learnify-admin-dashboard-tau.vercel.app/:path*`,
      },
    ];
  },
};

export default nextConfig;
