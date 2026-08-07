import About from '@/components/home/About';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Innova Tech',
  description: 'Innova Tech is a software development and digital solutions company based in Addis Ababa, Ethiopia.',
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
