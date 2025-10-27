// components/Hero.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground'; // Importando o componente da animação

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center text-center bg-[#0d1117] overflow-hidden"
    >
      {/* A animação é adicionada aqui, no fundo */}
      <ParticleBackground />

      {/* O conteúdo principal fica por cima OK */}
      <motion.div
        className="relative z-10" // Garantindo que o conteúdo fique na frente
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-4">
          Olá, eu sou <span className="text-teal-400">Lucas Fernandes</span>.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 mb-10">
          Software Developer
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://github.com/iamlucasbr" target="_blank" className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-md transition-transform duration-300 hover:bg-teal-600 hover:scale-105">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/lucasfernandesbr" target="_blank" rel="noopener noreferrer" className="border border-gray-700 text-gray-300 font-semibold py-3 px-8 rounded-md transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:scale-105">
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;