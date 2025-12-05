"use client";
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const experiences = [
  {
    company: "Click Sales Agency - CSA",
    role: "Software Developer",
    date: "abril de 2022 - Presente",
    technologies: ["ReactJS", "NextJS", "Node.js", "PHP", "Laravel", "React Native"],
    description: "Criação de soluções modernas, escaláveis e bem pensadas, do front ao back, entregando projetos que fazem sentido tanto pra quem usa quanto pra quem mantém."
  },
  {
    company: "Tribunal Regional do Trabalho da 8ª Região - TRT8",
    role: "Analista de TI",
    date: "fevereiro de 2020 - fevereiro de 2022",
    technologies: ["ReactJS", "NextJS", "HTML5", "CSS3", "JavaScript", "Suporte de Sistemas"],
    description: "Participei do desenvolvimento e da manutenção de interfaces web responsivas, focando na melhoria da usabilidade e da acessibilidade de sistemas internos, colaborando com a equipe na criação de soluções ágeis."
  },
  {
    company: "Instituto Nacional do Seguro Social - INSS",
    role: "Analista de suporte de TI",
    date: "janeiro de 2019 - dezembro de 2020",
    technologies: ["Suporte Técnico", "Hardware", "Software", "Redes"],
    description: "Responsável por direcionar o uso da tecnologia e procedimentos internos, incluindo instalações, manutenção de computadores e prestação de serviços à Central de Ajuda para a solução dos problemas de informática."
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experiencia"
      className="relative py-24 bg-[#0d1117] overflow-hidden" // Adicionando `relative` e `overflow-hidden`
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* A animação é adicionada aqui, no fundo */}
      <ParticleBackground />

      {/*  O conteúdo principal fica por cima */}
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-20">
          Experiência Profissional
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-0 h-full w-0.5 bg-gray-800 left-1/2 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 md:mb-0 flex md:justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}></div>
              <div className="hidden md:block z-10 md:order-2">
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
              </div>
              <div className={`w-full md:w-5/12 p-6 bg-gray-900 rounded-lg border border-gray-800 transition-transform duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                <p className="text-sm font-semibold text-teal-400 mb-1">{exp.date}</p>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-md text-gray-400 mb-4">{exp.company}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="bg-gray-800 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;