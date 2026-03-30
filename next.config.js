/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica y estable
  images: {
    // Solo WebP para compatibilidad
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
