'use client';

import { ShieldCheck, Cpu, Code2, Clock } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function WhyChooseUs() {
  const principles = [
    {
      num: '01',
      title: 'Direct Code Ownership',
      icon: Code2,
      description: 'You own 100% of the repository, database migrations, Dockerfiles, and intellectual property. Zero vendor lock-in or proprietary runtime traps.',
    },
    {
      num: '02',
      title: 'Strict Type-Safety & RLS',
      icon: Cpu,
      description: 'Every interface and database entity is statically verified. We build with Next.js 16, TypeScript, and Postgres Row Level Security designed to scale.',
    },
    {
      num: '03',
      title: 'East African Financial Rails',
      icon: ShieldCheck,
      description: 'Deep regional FinTech expertise. We engineer deterministic verification and payment gateways for Telebirr, CBE Birr, and Ethiopian commercial banks.',
    },
    {
      num: '04',
      title: 'Continuous Edge Deployment',
      icon: Clock,
      description: 'Disciplined 2-week sprint releases with demonstrable staging PRs. You see working, production-grade software deployed every single cycle.',
    },
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#02050d] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>[ 04 // METHODOLOGY ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Principles</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            How we approach software architecture. We build systems that are durable, verifiable, and easy to maintain across decades.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num} 
                onMouseEnter={() => soundEngine.playKeystroke()}
                className="p-6 rounded-2xl border border-slate-200 dark:border-neutral-800/80 bg-slate-50 dark:bg-neutral-950/60 hover:bg-white dark:hover:bg-neutral-900/50 hover:border-sky-500/40 dark:hover:border-cyan-500/40 hover:shadow-lg transition-all duration-200 space-y-4 shadow-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-bold block">
                    [{item.num} // TENET]
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
