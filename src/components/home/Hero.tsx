'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Play, 
  Cpu, 
  Layers, 
  RefreshCw,
  Scan,
  Globe2
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Hero() {
  const [activeSystemId, setActiveSystemId] = useState<string>('lms');
  const [isPinging, setIsPinging] = useState(false);
  const [edgeLatency, setEdgeLatency] = useState(12);

  const handlePing = () => {
    soundEngine.playVerify();
    setIsPinging(true);
    setTimeout(() => {
      setEdgeLatency(Math.floor(Math.random() * 4) + 10);
      setIsPinging(false);
      soundEngine.playSuccess();
    }, 400);
  };

  const systems = [
    {
      id: 'lms',
      index: '01',
      name: 'Eagle Pathway LMS & SIS',
      category: 'EdTech Enterprise Cloud',
      status: 'Live Production',
      stack: 'Next.js 16 • Supabase • Postgres RLS',
      liveUrl: 'https://school-mgmt-api.vercel.app/',
      metric: '< 16ms Edge SLA',
      description: 'Multi-tenant school ERP managing admissions, localized Ethiopian grading, attendance, and parent sync.',
    },
    {
      id: 'receipt',
      index: '02',
      name: 'VerifyReceipt™ Engine',
      category: 'FinTech Fraud Defense',
      status: 'Sub-45ms Binary',
      stack: 'Dart • Flutter • Modulo-97 • Kerning Heuristics',
      liveUrl: '#verify-receipt',
      metric: '99.8% Conf. Rate',
      description: 'Zero-trust transaction slip validator engineered to catch altered payment screenshots from Telebirr & CBE.',
    },
    {
      id: 'portal',
      index: '03',
      name: 'Mentorship & Mobility Core',
      category: 'Scholarship Pipeline',
      status: 'Global Cloudflare Edge',
      stack: 'Next.js • ISR • Node.js • Edge Cache',
      liveUrl: 'https://www.eaglespathway.com/',
      metric: '180ms TTFB Global',
      description: 'Discovery engine connecting African scholars with international universities and structured roadmaps.',
    },
    {
      id: 'admin',
      index: '04',
      name: 'Eagle Admin Command',
      category: 'Governance & RBAC',
      status: 'Immutable Ledger',
      stack: 'React • TypeScript • Audit Logs',
      liveUrl: 'https://www.admin.eaglespathway.com/',
      metric: 'Zero-Trust Gate',
      description: 'Command center for institutional credential audits, platform governance, and telemetry monitoring.',
    },
    {
      id: 'worker',
      index: '05',
      name: 'Async Telegram Worker',
      category: 'Autonomous Automation',
      status: 'Redis Event Queue',
      stack: 'Python • AsyncIO • Redis • FastAPI',
      liveUrl: '#crucible',
      metric: '10k+ Ops/Day',
      description: 'Non-blocking event queue resolving high-volume applicant questions and automated database synchronization.',
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeSystemId) || systems[0];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 studio-grid-lines border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#02040b] overflow-hidden transition-colors">
      
      {/* Dynamic Ambient Plasma Beams */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-sky-500/10 dark:bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-950/60 border border-slate-300 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 animate-ping" />
            <span>AUTONOMOUS PRODUCTION ENGINES // DEEP-TECH STUDIO</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-neutral-400">
            <span className="text-slate-300 dark:text-neutral-600">—</span>
            <span>ADDIS ABABA [9.0249° N, 38.7469° E]</span>
            <span className="text-slate-300 dark:text-neutral-600">/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">GLOBAL CLUSTER ONLINE</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16 lg:mb-24">
          
          {/* Left Column: Massive Kinetic Typography & Directives */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.03]">
              Systems Built{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                Beyond Imagination.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 max-w-xl leading-relaxed font-light">
              We are a premier software engineering and deep-tech studio. We architect bespoke multi-tenant ERPs, sub-45ms FinTech fraud defense engines, asynchronous AI worker queues, and scalable cloud platforms for visionary enterprises.
            </p>

            {/* High-Impact Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://school-mgmt-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 shadow-md dark:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch LMS Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#verify-receipt"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3.5 rounded-full text-xs font-mono font-medium text-slate-800 dark:text-white border border-slate-300 hover:border-slate-900 dark:border-neutral-700 dark:hover:border-cyan-400 bg-white dark:bg-neutral-900/60 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Scan className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Inspect Fraud Lab</span>
              </a>

              <a
                href="#crucible"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3.5 rounded-full text-xs font-mono font-medium text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                Stress Engine (10M req/s) →
              </a>
            </div>

            {/* 4 Core Quantitative Metrics */}
            <div className="pt-8 border-t border-slate-200 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              <div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Edge Query SLA</div>
                <div className="text-xl font-bold font-mono text-sky-600 dark:text-cyan-400 mt-0.5">&lt; 16ms</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400">Postgres RLS</div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Fraud Detection</div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">99.8% Conf.</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400">Sub-45ms Binary</div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Peak Concurrency</div>
                <div className="text-xl font-bold font-mono text-slate-900 dark:text-white mt-0.5">10M+ Req/s</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400">Auto-Partitioned</div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Queue Drop Rate</div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">0.00%</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400">Redis Async Broker</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Ecosystem Matrix Console */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-white dark:bg-neutral-950/80 backdrop-blur-xl shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Console Header Bar */}
              <div className="p-4 border-b border-slate-200 dark:border-neutral-800 bg-slate-50/80 dark:bg-neutral-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white tracking-wider">
                    ECOSYSTEM // MISSION CONTROL
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {edgeLatency}ms TTFB
                  </span>
                  <button
                    onClick={handlePing}
                    title="Ping Edge Cluster"
                    className="p-1 rounded text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin text-sky-600 dark:text-cyan-400' : ''}`} />
                  </button>
                </div>
              </div>

              {/* System Selector Buttons */}
              <div className="p-3 border-b border-slate-200 dark:border-neutral-800/80 bg-slate-50/40 dark:bg-neutral-950/40 flex items-center gap-1.5 overflow-x-auto">
                {systems.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      soundEngine.playSwitch();
                      setActiveSystemId(s.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all whitespace-nowrap cursor-pointer ${
                      activeSystemId === s.id
                        ? 'bg-sky-500/15 text-sky-700 dark:bg-cyan-500/20 dark:text-cyan-300 border border-sky-500/30 dark:border-cyan-500/40 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-900/60'
                    }`}
                  >
                    {s.index}. {s.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Active System Telemetry Display */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-widest block font-bold">
                      {currentSystem.category}
                    </span>
                    <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-0.5">
                      {currentSystem.name}
                    </h3>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    {currentSystem.metric}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-mono">
                  {currentSystem.description}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800/80 font-mono text-[11px] space-y-1.5">
                  <div className="text-slate-500 dark:text-neutral-400">STACK: <span className="text-slate-800 dark:text-white font-medium">{currentSystem.stack}</span></div>
                  <div className="text-slate-500 dark:text-neutral-400">STATUS: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{currentSystem.status}</span></div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-neutral-400">DEEP-TECH PROVEN</span>
                  <a
                    href={currentSystem.liveUrl}
                    target={currentSystem.liveUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Inspect Target Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
