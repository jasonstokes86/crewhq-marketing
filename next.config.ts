import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for fast Vercel deploys
  output: 'export',
  images: {
    unoptimized: true,
  },
  // App URL for links to dashboard
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.crewhq.com',
  },
};

export default nextConfig;
