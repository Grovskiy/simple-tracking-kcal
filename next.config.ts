import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  ...(process.env.NODE_ENV === 'production'
    ? {
        basePath: '/simple-tracking-kcal',
      }
    : {}),
};

export default nextConfig;
