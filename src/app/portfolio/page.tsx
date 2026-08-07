import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Work & Case Studies — Innova Tech',
  description: 'Explore software projects engineered by Innova Tech including Eagle Pathway, EagleBot, SaaS platforms, and enterprise banking portals.',
};

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      <Portfolio />
      <Contact />
    </main>
  );
}
