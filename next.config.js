/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esta linha é necessária para as Imagens do Next.js
  // funcionarem no site estático final (no deploy).
  // Não vai quebrar seu localhost.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;