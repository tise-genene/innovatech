import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering & Capabilities — Eagle Pathway Tech Agency',
  description: 'Full-Stack Platform Engineering, LMS Development, FinTech & Payment Integrations, and AI Automation by Eagle Pathway Tech Agency.',
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
