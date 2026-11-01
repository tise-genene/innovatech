'use client';

import { ShieldCheck, Cpu, Code2, Clock } from 'lucide-react';

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
    <section id="why-us" className="py-24 lg:py-32 relative border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#06070a] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 font-mono text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-400" />
              <span>Engineering Principles • Standards</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Engineering <span className="text-slate-400 dark:text-zinc-500 font-normal">principles.</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed">
            How we approach systems architecture. We build platforms that are durable, verifiable, and easy to maintain across decades.
          </p>
        </div>

        {/* 4 Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num} 
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/60 dark:bg-zinc-950/40 hover:bg-white dark:hover:bg-zinc-900/60 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 font-semibold block">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-200/60 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
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
