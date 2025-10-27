// components/Projects.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; //IMPORTAÇÃO PARA ADICIONAR
import ParticleBackground from './ParticleBackground';

const myProjects = [
  {
    title: "Click Sales | Software House",
    description: "A Click Sales é uma Software House especialista na criação de sites, interfaces e sistemas, focado em performance e usabilidade para otimizar processos de negócio dos clientes.",
    tags: ["ReactJS", "Next.js", "Node.js", "PHP & Laravel", "React Native" ,],
    imageUrl: "/logo-clicksales.png", 
    liveUrl: "https://oficialclicksales-vwkc4.ondigitalocean.app/",
    repoUrl: "https://github.com/iamlucasbr"
  },
  {
    title: "Vincci | Landing Page",
    description: "Criação de uma landing page institucional para a rede de Vincci, com foco em uma identidade visual forte, experiência do usuário e otimização para conversão. Inovando sua vida com água pura e saúde.",
    tags: ["HTML5", "CSS3","JavaScript", "UX/UI", "NuxtJS", "Figma"],
    imageUrl: "/vincci.png", 
    liveUrl: "https://restaurantes.vincci.pt/",
    repoUrl: "https://github.com/iamlucasbr"
  },
  {
    title: "Plataforma CERA | Startup",
    description: "Desenvolvimento de uma landing page para um SaaS (Software as a Service) com uma identidade visual forte e otimizada para apresentar a proposta da startup no ramo automotivo.",
    tags: ["HTML5", "CSS3", "JavaScript", "NuxtJS", "Figma"],
    imageUrl: "/cera.png", 
    liveUrl: "https://plataformacera.com.br/",
    repoUrl: "https://github.com/iamlucasbr"
  },
];

const ProjectCard = ({ project, index }: { project: typeof myProjects[0], index: number }) => (
  <motion.div
    className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex flex-col"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
  >
    {/* IMPORNTATE LUCAS: FAZER A ALTERACAO TAG <img> SUBSTITUIR POR <Image> */}
    <Image 
      src={project.imageUrl} 
      alt={`Imagem do projeto ${project.title}`} 
      width={600}   
      height={400}  
      className="w-full h-48 object-cover"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="bg-gray-800 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-6 text-sm">
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group text-gray-300 hover:text-teal-400 font-semibold transition-colors duration-300">
            <span>Ver Online</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
          </Link>
        )}
        {project.repoUrl && project.repoUrl !== "#" && (
          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="group text-gray-300 hover:text-teal-400 font-semibold transition-colors duration-300">
            <span>GitHub</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
          </Link>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <motion.section
      id="projetos"
      className="relative py-24 bg-[#0d1117] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <ParticleBackground />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;