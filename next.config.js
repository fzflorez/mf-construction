/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de imágenes
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Compresión
  compress: true,
};

module.exports = nextConfig;
