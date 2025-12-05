"use client";
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground'; 


import { FaReact, FaNodeJs, FaPhp, FaLaravel } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React", icon: <FaReact className="h-16 w-16 text-[#61DAFB]" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="h-16 w-16 text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="h-16 w-16 text-[#339933]" /> },
  { name: "PHP", icon: <FaPhp className="h-16 w-16 text-[#777BB4]" /> },
  { name: "Laravel", icon: <FaLaravel className="h-16 w-16 text-[#FF2D20]" /> },
  { name: "React Native", icon: <TbBrandReactNative className="h-16 w-16 text-[#61DAFB]" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="relative py-24 bg-gray-900 overflow-hidden" // Adicionando `relative` e `overflow-hidden`
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/*  A animação é adicionada aqui, no fundo */}
      <ParticleBackground />

      {/* O conteúdo principal ficando por cima */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
           Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-[#0d1117] rounded-lg border-2 border-gray-800 transition-all duration-300 hover:border-teal-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {skill.icon}
              <p className="mt-4 font-semibold text-gray-400 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;