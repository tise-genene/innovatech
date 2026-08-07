import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering & Services — Innova Tech',
  description: 'Product Development, Full-stack Engineering, AI Solutions, and Digital Growth services by Innova Tech.',
};

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
