import Hero from '@/components/home/Hero';
import Portfolio from '@/components/home/Portfolio';
import DeepTechLab from '@/components/home/DeepTechLab';
import Manifesto from '@/components/home/Manifesto';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Process from '@/components/home/Process';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#06070a] text-slate-900 dark:text-white transition-colors duration-300">
      <Hero />
      <Portfolio />
      <DeepTechLab />
      <Manifesto />
      <Services />
      <WhyChooseUs />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
