import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
