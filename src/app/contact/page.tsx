import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a Project — Innova Tech',
  description: 'Have a product idea? Let us build it together. Get in touch with Innova Tech engineering team in Addis Ababa, Ethiopia.',
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  );
}
