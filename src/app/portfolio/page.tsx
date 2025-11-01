import type { Metadata } from 'next';
import Hero from '@/components/portfolio/Hero';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio - Innova Tech | Our Work & Case Studies',
  description: 'Explore our portfolio of successful projects across web development, design, and digital marketing.',
};

export default function PortfolioPage() {
  return (
    <main>
      <Hero />
      <PortfolioGrid />
    </main>
  );
}

