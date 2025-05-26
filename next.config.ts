import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    authInterrupts: true,
  },
  images: {
    remotePatterns: [{ hostname: "www.svgrepo.com" }],
  },
};

export default nextConfig;
