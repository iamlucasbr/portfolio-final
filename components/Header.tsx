// components/Header.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

//  Ícones SVG 
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Formação", href: "#formacao" },
    { name: "Projetos", href: "#projetos" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#0d1117] bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-5">
            <Link href="https://www.instagram.com/iamlucasbr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><InstagramIcon /></Link>
            <Link href="https://www.youtube.com/@iamlucasbroficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube"><YoutubeIcon /></Link>
            <Link href="https://www.linkedin.com/in/lucasfernandesbr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon /></Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center text-gray-300">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="hover:text-teal-400 transition-colors">{link.name}</Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none" aria-label="Abrir menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 w-3/4 h-full bg-[#0d1117] border-l border-gray-800 p-8 z-50 md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="text-gray-300 focus:outline-none" aria-label="Fechar menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-8 text-xl">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;