'use client';

import { GitCommit, Layers, Code, Rocket } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

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
      title: 'Design System & HUD',
      timeframe: 'Sprint 02',
      icon: GitCommit,
      description: 'Figma UI tokens, high-density telemetry dashboards, responsive layouts, and strict component contracts.',
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
    <section id="process" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#02050b] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <GitCommit className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>[ 05 // SPRINT CADENCE ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Workflow</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
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
                onMouseEnter={() => soundEngine.playKeystroke()}
                className="space-y-4 p-6 rounded-2xl bg-white dark:bg-neutral-950/70 border border-slate-200 dark:border-neutral-800/80 hover:border-sky-500/40 dark:hover:border-cyan-500/40 hover:shadow-lg transition-all duration-200 shadow-xs group"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-sky-600 dark:text-cyan-400 font-bold">[{step.num} //]</span>
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:bg-cyan-500/10 dark:text-cyan-300 text-[10px] border border-sky-500/20 dark:border-cyan-500/20 font-semibold">{step.timeframe}</span>
                </div>

                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-sky-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-light">
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
