'use client';

import { GitCommit, Layers, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Architect & Scope',
      timeframe: 'Sprint 01',
      icon: Layers,
      description: 'System specifications, database entity schemas, zero-trust security contracts, and deterministic milestone roadmaps.',
    },
    {
      num: '02',
      title: 'Design System & Interfaces',
      timeframe: 'Sprint 02',
      icon: GitCommit,
      description: 'Figma UI tokens, high-density interfaces, responsive layouts, and strict design token contracts.',
    },
    {
      num: '03',
      title: 'Full-Stack Execution',
      timeframe: 'Sprint 03 - 05',
      icon: Code,
      description: 'Strict TypeScript codebases, PostgreSQL RLS, FinTech fraud parsing logic, and automated CI/CD unit testing.',
    },
    {
      num: '04',
      title: 'Production Edge Rollout',
      timeframe: 'Sprint 06+',
      icon: Rocket,
      description: 'Global Cloudflare / Vercel edge deployment, custom domain DNS routing, health telemetry, and guaranteed SLAs.',
    },
  ];

  return (
    <section id="methodology" className="py-24 lg:py-32 relative border-b border-black/[0.08] dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#06070a] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 font-mono text-xs uppercase tracking-wider mb-4">
              <GitCommit className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-400" />
              <span>Delivery Workflow • Sprint Cadence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Delivery <span className="text-slate-400 dark:text-zinc-500 font-normal">workflow.</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Predictable sprint delivery with direct git repository access, automated test suites, and live staging environments at every phase.
          </p>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num} 
                className="space-y-4 p-6 rounded-2xl bg-white dark:bg-zinc-950/40 border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 dark:text-zinc-500 font-semibold">{step.num}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-zinc-300 text-[11px] border border-slate-200 dark:border-white/[0.08] font-medium">{step.timeframe}</span>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
