import Hero from '@/components/home/Hero';
import OrbitalGlobe from '@/components/home/OrbitalGlobe';
import SiliconLedger from '@/components/home/SiliconLedger';
import LoadCrucible from '@/components/home/LoadCrucible';
import VerifyReceiptLab from '@/components/home/VerifyReceiptLab';
import Portfolio from '@/components/home/Portfolio';
import CyberTerminal from '@/components/home/CyberTerminal';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Process from '@/components/home/Process';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#02040b] text-slate-900 dark:text-white transition-colors duration-300">
      <Hero />
      <OrbitalGlobe />
      <SiliconLedger />
      <LoadCrucible />
      <VerifyReceiptLab />
      <Portfolio />
      <CyberTerminal />
      <Services />
      <WhyChooseUs />
      <Process />
      <About />
      <Contact />
    </main>
  );
}
