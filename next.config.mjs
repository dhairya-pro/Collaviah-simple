/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ensure fonts are optimized and fetched at build time, not runtime.
  // This prevents failures on Render where Google Fonts may be unreachable
  // during server startup.
  optimizeFonts: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // Optimize lucide-react barrel imports to reduce per-page JS.
  // NOTE: framer-motion is intentionally excluded — it handles its own
  // tree-shaking internally and including it here triggers a Next.js 14.2.x
  // bug with _document resolution during static page generation.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
