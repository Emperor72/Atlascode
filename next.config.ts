import type { NextConfig } from 'next';

/**
 * Static export: `npm run build` writes a fully static site to /out
 * (works on Vercel, Netlify, GitHub Pages, Cloudflare Pages or any shared hosting).
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
