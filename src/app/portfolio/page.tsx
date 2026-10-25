import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Work & Case Studies — Eagle Pathway Tech Agency',
  description: 'Explore production software engineered by Eagle Pathway Tech Agency including Eagle Pathway LMS, VerifyReceipt FinTech engine, and scalable cloud systems.',
};

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      <Portfolio />
      <Contact />
    </main>
  );
}
