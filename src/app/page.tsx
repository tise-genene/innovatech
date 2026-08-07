import Hero from '@/components/home/Hero';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Process from '@/components/home/Process';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Hero />
      <Portfolio />
      <Services />
      <WhyChooseUs />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
