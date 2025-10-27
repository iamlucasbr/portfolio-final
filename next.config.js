/** @type {import('next').NextConfig} */

// Detecta se estamos rodando o build de produção (no GitHub Actions)
const isProductionBuild = process.env.NODE_ENV === 'production';

const nextConfig = {
  // SÓ VAI ATIVAR O 'export' DURANTE O BUILD DE PRODUÇÃO (no GitHub)
  // Isso corrige o 'npm run dev' (localhost)
  output: isProductionBuild ? 'export' : undefined,

  // ESSA LINHA É NECESSÁRIA QUANDO SE USA 'output: "export"'
  // para as imagens do Next.js funcionarem no site final
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
