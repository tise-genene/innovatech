import type { Metadata } from 'next';
import Hero from '@/components/blog/Hero';
import BlogGrid from '@/components/blog/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog - Innova Tech | Tech Insights & Digital Trends',
  description: 'Latest articles on web development, design, AI, and digital marketing trends.',
};

export default function BlogPage() {
  return (
    <main>
      <Hero />
      <BlogGrid />
    </main>
  );
}

