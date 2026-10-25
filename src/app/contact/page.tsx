import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a Project — Eagle Pathway Tech Agency',
  description: 'Have a product or software system to engineer? Partner with Eagle Pathway Tech Agency in Addis Ababa, Ethiopia.',
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  );
}
