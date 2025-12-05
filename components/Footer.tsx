"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground';

// Importando os ícones das tecnologias
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript, TbBrandTailwind } from "react-icons/tb";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-[#0d1117] border-t border-gray-800 py-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* A ANIMAÇÃO ADICIONADA */}
      <ParticleBackground />

      <div className="container mx-auto px-6 text-center text-gray-500 relative z-10">

        <div className="mb-6">
          <p className="text-gray-400 mb-2">E-mail para contato:</p>
          <a 
            href="mailto:contato@iamlucasdev.com" 
            className="text-lg font-semibold text-white hover:text-teal-400 transition-colors"
          >
            contato@iamlucasdev.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-4 mb-6">
          <p className="text-sm text-gray-400">Feito por Lucas Fernandes usando</p>
          <div className="flex items-center gap-3">
            <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" title="Next.js">
              <TbBrandNextjs className="text-gray-500 hover:text-white text-2xl transition-colors" />
            </Link>
            <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React">
              <FaReact className="text-gray-500 hover:text-[#61DAFB] text-2xl transition-colors" />
            </Link>
            <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" title="TypeScript">
              <TbBrandTypescript className="text-gray-500 hover:text-[#3178C6] text-2xl transition-colors" />
            </Link>
            <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title="Tailwind CSS">
              <TbBrandTailwind className="text-gray-500 hover:text-[#06B6D4] text-2xl transition-colors" />
            </Link>
          </div>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;