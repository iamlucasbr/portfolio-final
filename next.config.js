/** @type {import('next').NextConfig} */
const nextConfig = {
  // ISTO É O QUE VAI CORRIGIR SEU BUILD
  output: 'export',

  // Se você usa a tag <Image> do Next.js, 
  // você provavelmente vai precisar descomentar a linha abaixo:
  // images: {
  //   unoptimized: true,
  // },
};

module.exports = nextConfig;
