// components/Education.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground'; // Importando o componente da animação

const educationHistory = [
  {
    institution: "MBA USP/Esalq",
    degree: "MBA, Engenharia de Software",
    dates: "outubro de 2025 - abril de 2027"
  },
  {
    institution: "Faci Wyden",
    degree: "Bacharelado, Sistemas da Informação",
    dates: "fevereiro de 2018 - dezembro de 2021"
  }
];

const Education = () => {
  return (
    <motion.section
      id="formacao"
      className="relative py-24 bg-gray-900 overflow-hidden" // Adicionando `relative` e `overflow-hidden`
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* A animação é adicionada aqui, no fundo */}
      <ParticleBackground />

      {/* O conteúdo principal fica por cima */}
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Formação Acadêmica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#0d1117] p-8 rounded-lg border border-gray-800 text-center transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-md text-teal-400 font-semibold mb-3">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.dates}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://www.linkedin.com/in/lucasfernandesbr"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-md font-semibold text-gray-400 hover:text-teal-400 transition-colors duration-300 inline-block"
          >
            <span>Ver Resumo</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-1">→</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-400"></span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;