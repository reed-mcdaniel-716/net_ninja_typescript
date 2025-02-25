import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* checks that references in links actually exist */
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
