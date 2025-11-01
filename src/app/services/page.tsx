import type { Metadata } from 'next';
import Hero from '@/components/services/Hero';
import ServicesList from '@/components/services/ServicesList';
import Process from '@/components/services/Process';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Our Services - Innova Tech | Web Development, Design & Marketing',
  description: 'Comprehensive digital services including web development, AI integration, product design, branding, and digital marketing.',
};

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <ServicesList />
      <Process />
      <CTA />
    </main>
  );
}

