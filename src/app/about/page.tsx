import About from '@/components/home/About';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Eagle Pathway Tech Agency',
  description: 'Eagle Pathway Tech Agency is a software engineering and product studio based in Addis Ababa, Ethiopia.',
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
