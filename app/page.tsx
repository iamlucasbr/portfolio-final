// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills'; 
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Skills /> {}
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}