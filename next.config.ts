import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
