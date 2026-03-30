/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de imágenes
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Compresión
  compress: true,

  // Optimización de fuentes
  experimental: {
    optimizeFonts: true,
    fontLoaders: [
      { loader: "next/font/google", options: { subsets: ["latin"] } },
    ],
  },

  // Headers para caching
  async headers() {
    return [
      {
        source: "/_next/static/media/(.*).woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
