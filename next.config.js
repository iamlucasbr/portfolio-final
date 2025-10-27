/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso é necessário para as Imagens do Next.js 
  // funcionarem no site estático final.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
