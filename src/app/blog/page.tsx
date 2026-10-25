import type { Metadata } from 'next';
import Contact from '@/components/home/Contact';

export const metadata: Metadata = {
  title: 'Engineering Insights & Tech Blog — Eagle Pathway Tech Agency',
  description: 'Technical articles, system architecture case studies, and engineering insights from Eagle Pathway Tech Agency.',
};

export default function BlogPage() {
  return (
    <main className="pt-32 min-h-screen bg-[#060709] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-[#0099ff]">
          Eagle Pathway Engineering Journal
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Software & AI Engineering Insights
        </h1>
        <p className="text-base text-slate-400 max-w-2xl mx-auto">
          Deep dives into Next.js 16 architectures, LLM RAG pipelines, FastAPI microservices, and Ethiopian tech ecosystem developments. Coming soon.
        </p>
      </div>
      <Contact />
    </main>
  );
}
