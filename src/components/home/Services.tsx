'use client';

import { useState } from 'react';
import { Check, Cpu, Shield, Zap, Terminal, Activity, Server, Lock } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface BentoItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  stack: string[];
  icon: typeof Cpu;
  colSpan: string;
  renderWidget: () => React.ReactNode;
}

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const bentoItems: BentoItem[] = [
    {
      id: 'fullstack',
      num: '01',
      title: 'Full-Stack Platforms & SIS',
      subtitle: 'Multi-Tenant SaaS & Educational Cloud Systems',
      description: 'We architect and build full-scale web platforms from zero to production. Specialized in multi-tenant data schemas, localized educational rubrics, and high-concurrency portals.',
      icon: Cpu,
      colSpan: 'lg:col-span-7',
      capabilities: [
        'Multi-Tenant School Management Systems (SIS & LMS)',
        'Role-Based Access Control (RBAC) & Audit Trails',
        'Sub-second page rendering using Next.js 16 App Router',
        'Relational schema design with PostgreSQL and Supabase RLS',
      ],
      stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Supabase RLS', 'Tailwind CSS'],
      renderWidget: () => (
        <div className="mt-5 p-3.5 rounded-xl bg-slate-900/95 dark:bg-black/90 border border-slate-800 text-[11px] font-mono text-cyan-300 shadow-inner">
          <div className="flex items-center justify-between text-slate-500 mb-2 text-[10px]">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Server className="w-3 h-3 text-sky-400" />
              TENANT INGRESS // ADDIS_PREP_01
            </span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              0.8ms Cached
            </span>
          </div>
          <code className="text-slate-300 block text-[11px]">
            SELECT * FROM transcripts WHERE tenant_id = &apos;addis_prep&apos; AND rls_verified = true;
          </code>
        </div>
      ),
    },
    {
      id: 'fintech',
      num: '02',
      title: 'FinTech & Payment Systems',
      subtitle: 'Banking Integrations & Receipt Anti-Fraud',
      description: 'High-security transaction workflows, mobile money integration, and automated fraud prevention built specifically for Ethiopian financial rails.',
      icon: Shield,
      colSpan: 'lg:col-span-5',
      capabilities: [
        'Deterministic payment receipt verification (Telebirr & CBE)',
        'Payment gateway orchestration (Telebirr API, CBE Birr, Stripe)',
        'Ledger consistency, idempotent webhooks & transactional locks',
        'High-throughput offline verification binaries in Dart & Flutter',
      ],
      stack: ['Dart', 'Flutter', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL'],
      renderWidget: () => (
        <div className="mt-5 p-3.5 rounded-xl bg-slate-900/95 dark:bg-black/90 border border-slate-800 text-[11px] font-mono space-y-2 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-[10px] flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-400" />
              TELEBIRR FORENSIC CHECK
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
              AUTHENTIC
            </span>
          </div>
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Modulo-97: MATCH</span>
            <span className="text-emerald-400 font-semibold">Sub-45ms Binary</span>
          </div>
        </div>
      ),
    },
    {
      id: 'automation',
      num: '03',
      title: 'Autonomous AI & Event Queues',
      subtitle: 'High-Throughput Telegram Bots & Background Queues',
      description: 'Eliminate manual bottlenecks with custom conversational agents, asynchronous job workers, and automated lead pipelines.',
      icon: Zap,
      colSpan: 'lg:col-span-5',
      capabilities: [
        'Asynchronous Telegram service bots handling 10,000+ msgs/day',
        'Redis-backed background task dispatchers and event queues',
        'Automated database sync & applicant qualification pipelines',
        'Contextual retrieval augmented generation (RAG) search',
      ],
      stack: ['Python', 'Telegram API', 'Redis', 'FastAPI', 'AsyncIO', 'PostgreSQL'],
      renderWidget: () => (
        <div className="mt-5 p-3.5 rounded-xl bg-slate-900/95 dark:bg-black/90 border border-slate-800 text-[11px] font-mono space-y-2 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-[10px] flex items-center gap-1">
              <Activity className="w-3 h-3 text-cyan-400" />
              REDIS STREAM WORKER
            </span>
            <span className="text-cyan-400 font-bold text-[10px]">14,920 ops/day</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 h-full w-[92%] animate-pulse" />
          </div>
          <div className="text-[10px] text-slate-400 flex justify-between">
            <span>Workers: 8 Cores</span>
            <span className="text-emerald-400 font-semibold">Drop Rate: 0.00%</span>
          </div>
        </div>
      ),
    },
    {
      id: 'audits',
      num: '04',
      title: 'Technical Audits & System Hardening',
      subtitle: 'Performance Tuning, Security, & Type-Safety',
      description: 'Rigorous engineering reviews and architectural refactors that resolve technical debt, eliminate memory leaks, and optimize web vitals.',
      icon: Terminal,
      colSpan: 'lg:col-span-7',
      capabilities: [
        'Codebase & database security vulnerability audits',
        'Core Web Vitals & bundle-size optimization',
        'Migration of legacy codebases to strict TypeScript',
        'Production infrastructure cost and latency reduction',
      ],
      stack: ['TypeScript', 'Next.js Turbopack', 'PostgreSQL Query Analyzer', 'Lighthouse'],
      renderWidget: () => (
        <div className="mt-5 grid grid-cols-3 gap-2 font-mono">
          <div className="p-2.5 rounded-xl bg-slate-900/95 dark:bg-black/90 border border-slate-800 text-center">
            <div className="text-lg font-bold text-emerald-400">100</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Performance</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/95 dark:bg-black/90 border border-slate-800 text-center">
            <div className="text-lg font-bold text-sky-400">0 Err</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Strict Types</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/95 dark:bg-black/90 border border-slate-800 text-center">
            <div className="text-lg font-bold text-cyan-400">A+</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Security Tier</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="capabilities" className="py-24 lg:py-32 relative border-b border-black/[0.08] dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#06070a] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] text-slate-700 dark:text-zinc-300 font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>Core Disciplines • Full-Stack Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.06]">
              Engineering{' '}
              <span className="text-slate-500 dark:text-zinc-400 font-normal">
                capabilities.
              </span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md leading-relaxed font-light">
            We operate as dedicated software architects and full-stack builders. No generic templates, throwaway low-code hacks, or fragile prototypes.
          </p>
        </div>

        {/* Dribbble-Grade Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseEnter={() => {
                  setHoveredCard(item.id);
                  soundEngine.playKeystroke();
                }}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${item.colSpan} relative p-8 rounded-2xl border border-slate-200 dark:border-neutral-800/80 bg-white/90 dark:bg-neutral-950/70 hover:border-sky-500/40 dark:hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300 shadow-xs group overflow-hidden backdrop-blur-xl flex flex-col justify-between`}
              >
                {/* Dynamic Mouse Spotlight Radial Overlay */}
                {isHovered && (
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                    style={{
                      background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.08), transparent 75%)`,
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/20 text-sky-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-500/50 dark:group-hover:border-cyan-500/50 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-neutral-500 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                      [{item.num}]
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold mt-1 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6">
                    {item.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-neutral-300 font-mono">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Micro-Widget */}
                  {item.renderWidget()}
                </div>

                {/* Deliverables & Stack Footer */}
                <div className="relative z-10 pt-6 mt-6 border-t border-slate-200 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
