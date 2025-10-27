/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Adiciona esta configuração para desativar a otimização de imagem no servidor,
  // tornando-a compatível com o 'export'.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;