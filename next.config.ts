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
};

export default nextConfig;
