"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
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
            
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Sou desenvolvedor de software e meu objetivo é criar aplicações web de alta qualidade, focando em performance, escalabilidade e na experiência do usuário. Trabalho principalmente com ReactJS, NextJS, Node.js, PHP/Laravel e React Native, do front ao back, entregando projetos que fazem sentido tanto pra quem usa quanto pra quem mantém. 
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Busco constantemente novos desafios e aprender novas tecnologias para aprimorar minhas habilidades e entregar as melhores soluções possíveis.
              Meu diferencial está em juntar código limpo com visão de produto. Gosto de entender o contexto, propor soluções e fazer parte de times que buscam mais do que só entregar tarefa.
            </p>

            {/* PARÁGRAFO 3 merchandising Click Sales */}
            <p className="text-lg text-gray-400 leading-relaxed">
              Essa visão estratégica é a base da <span className="text-teal-400 font-semibold">Click Sales Agency</span>, empresa que fundei para transformar tecnologia em resultados reais de negócio. Nela, unifico engenharia de software e inteligência comercial para criar soluções digitais de alto impacto.
            </p>

            <div className="mt-4">
              <a 
                href="https://clicksales.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 font-medium hover:text-teal-300 hover:underline transition-all"
              >
                Conhecer a Click Sales
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-80 h-80">
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