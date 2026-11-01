'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Manifesto() {
  const tenets = [
    {
      num: '01',
      title: 'Deterministic Code Over Probabilistic Guesswork',
      description:
        'AI language models can propose logic, draft schemas, or parse ambiguous inputs. But production databases and financial ledgers are only written to after passing strict deterministic Modulo-97 checksums, Row-Level Security rules, and type invariants.',
      tag: 'MATHEMATICAL CERTAINTY',
    },
    {
      num: '02',
      title: 'Sub-50ms Profiling & Edge Placement',
      description:
        'We reject framework bloat and bloated vendor dependencies. Every API route is profiled down to single-digit milliseconds. Database reads are partitioned and resolved at the closest edge cluster to guarantee sub-16ms query SLAs.',
      tag: 'LATENCY DETERMINISM',
    },
    {
      num: '03',
      title: 'Self-Healing Asynchronous Resilience',
      description:
        'External banking rails fail, network hops drop packets, and LLM providers suffer outages. Our systems decouple execution through Redis in-memory ring buffers and automated replay loops, achieving 0.00% message loss under burst loads.',
      tag: 'FAULT-TOLERANT CORES',
    },
  ];

  return (
    <section id="manifesto" className="py-24 lg:py-36 relative border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#06070b] transition-colors overflow-hidden">
      
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-sky-500/[0.04] dark:bg-cyan-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-900 border border-black/[0.08] dark:border-white/[0.08] text-slate-800 dark:text-neutral-300 font-mono text-[11px] uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block animate-pulse" />
            <span>ARCHITECTURAL CONVICTION // THE ENGINEERING MANIFESTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            An AI model proposes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
              Deterministic code verifies.
            </span>{' '}
            Humans command.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-400 mt-6 leading-relaxed font-light">
            In an era of hallucinating LLM wrappers and fragile glue code, we engineer software with mathematical certainty. We believe visionary enterprises deserve systems designed like flight avionics: resilient, deterministic, and auditable to the byte.
          </p>
        </div>

        {/* 3 Core Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tenets.map((tenet) => (
            <div
              key={tenet.num}
              className="p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50/60 dark:bg-neutral-950/60 backdrop-blur-xl relative group hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black font-mono text-slate-300 dark:text-neutral-700 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                  {tenet.num}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 font-semibold">
                  {tenet.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 leading-snug">
                {tenet.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed font-light">
                {tenet.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
