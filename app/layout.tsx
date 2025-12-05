import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
});

export const metadata: Metadata = {
  
  metadataBase: new URL('https://www.iamlucasdev.com'),

  title: 'Lucas Fernandes | Desenvolvedor de Software',
  description: 'Portfólio de Lucas Fernandes, desenvolvedor de software especialista em React, Next.js, Node.js, PHP e Laravel.',
  keywords: ['Desenvolvedor', 'Software', 'React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'Full-Stack', 'Portfólio'],

  openGraph: {
    title: 'Lucas Fernandes | Desenvolvedor de Software',
    description: 'Portfólio de desenvolvimento de software com projetos em React, Next.js, Node.js e mais.',
    url: 'https://www.iamlucasdev.com',
    siteName: 'Portfólio de Lucas Fernandes',
    images: [
      {
        
        url: '/seoweb.png', 
        width: 1200,
        height: 630,
        alt: 'Apresentação do Portfólio de Lucas Fernandes',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}