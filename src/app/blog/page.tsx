import type { Metadata } from 'next';
import Contact from '@/components/home/Contact';

export const metadata: Metadata = {
  title: 'Engineering Insights & Tech Blog — Eagle Pathway Tech Agency',
  description: 'Technical articles, system architecture case studies, and engineering insights from Eagle Pathway Tech Agency.',
};

export default function BlogPage() {
  return (
    <main className="pt-32 min-h-screen bg-white dark:bg-black text-neutral-950 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400 text-xs font-mono">
          Eagle Pathway Engineering Journal
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white">
          Software & AI Engineering Insights
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Deep dives into Next.js 16 architectures, LLM RAG pipelines, FastAPI microservices, and Ethiopian tech ecosystem developments. Coming soon.
        </p>
      </div>
      <Contact />
    </main>
  );
}
