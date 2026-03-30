/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de imágenes - configuración estable
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 días
  },

  // Optimización básica
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Experimental features estables
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
};

module.exports = nextConfig;
