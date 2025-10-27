// components/About.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'; // IMPORTAÇÃO ADICIONADA
import ParticleBackground from './ParticleBackground';

const About = () => {
  return (
    <motion.section
      id="sobre"
      className="relative py-24 bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <ParticleBackground />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-left">Sobre Mim</h2>
            {/*Pegar meu resumo do Linkedin e adicionar */}
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Sou desenvolvedor de software e meu objetivo é criar aplicações web de alta qualidade, focando em performance, escalabilidade e na experiência do usuário. Trabalho principalmente com ReactJS, NextJS, Node.js, PHP/Laravel e React Native, do front ao back, entregando projetos que fazem sentido tanto pra quem usa quanto pra quem mantém. 
            </p>
            {/* Pegar meu resumo do Linkedin e adicionar */}
            <p className="text-lg text-gray-400 leading-relaxed">
              Busco constantemente novos desafios e aprender novas tecnologias para aprimorar minhas habilidades e entregar as melhores soluções possíveis.
              Meu diferencial está em juntar código limpo com visão de produto. Gosto de entender o contexto, propor soluções e fazer parte de times que buscam mais do que só entregar tarefa.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-80 h-80">
              {/* TAG <img> SUBSTITUÍDA POR <Image> para fins de OTIMIZAÇÃO */}
              <Image
                src="/fotoperfil3.jpeg"
                alt="Foto de Lucas Fernandes"
                width={750} 
                height={750}
                className="rounded-lg object-cover w-full h-full shadow-2xl shadow-teal-500/20"
                priority
              />
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-teal-500/50 rounded-lg -z-10"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;