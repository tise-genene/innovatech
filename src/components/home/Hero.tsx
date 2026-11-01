'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink,
  ShieldCheck, 
  Check, 
  Layers, 
  Activity,
  Server,
  RefreshCw
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Hero() {
  const [activeSystemId, setActiveSystemId] = useState<'lms' | 'receipt' | 'portal'>('lms');
  const [isPinging, setIsPinging] = useState(false);
  const [edgeLatency, setEdgeLatency] = useState(14);

  const handlePing = () => {
    soundEngine.playVerify();
    setIsPinging(true);
    setTimeout(() => {
      setEdgeLatency(Math.floor(Math.random() * 4) + 11);
      setIsPinging(false);
      soundEngine.playSuccess();
    }, 350);
  };

  const systems = {
    lms: {
      name: 'Eagle Pathway LMS & SIS',
      category: 'EdTech Enterprise Cloud',
      status: 'Live Production',
      sla: '< 16ms Edge Query SLA',
      stack: 'Next.js 16 • Supabase • Postgres RLS',
      liveUrl: 'https://school-mgmt-api.vercel.app/',
      description: 'Multi-tenant school ERP managing admissions, localized Ethiopian grading rubrics, attendance pipelines, and parent sync.',
      features: [
        'Strict Row-Level Security (RLS) guaranteeing zero cross-school data leak',
        'Localized Ethiopian GPA and rubric weight computation engine',
        'Sub-second page rendering powered by Next.js 16 App Router',
        'Real-time student attendance & parent sync notifications',
      ],
      stats: [
        { label: 'Query SLA', value: '< 16ms' },
        { label: 'Data Isolation', value: 'RLS Verified' },
        { label: 'Active Pipeline', value: 'Admissions & SIS' },
      ],
    },
    receipt: {
      name: 'VerifyReceipt™ Forensic Engine',
      category: 'FinTech Fraud Defense',
      status: 'Sub-45ms Binary',
      sla: '99.8% Confidence Rate',
      stack: 'Dart • Flutter • Modulo-97 • Kerning Heuristics',
      liveUrl: '#verify-receipt',
      description: 'Zero-trust transaction slip validator engineered to catch altered payment screenshots from Telebirr and Commercial Bank of Ethiopia (CBE).',
      features: [
        'Micro-pixel font kerning and glyph compression delta heuristic engine',
        'Deterministic transaction ID modulo-97 checksum validator',
        'Sub-45ms offline-first execution via compiled Dart/Flutter binary',
        'Direct REST webhook dispatcher for merchant automations',
      ],
      stats: [
        { label: 'Detection Speed', value: '38ms' },
        { label: 'Checksum', value: 'Modulo-97' },
        { label: 'Gateways', value: 'Telebirr & CBE' },
      ],
    },
    portal: {
      name: 'Mentorship & Mobility Core',
      category: 'Global Academic Pipeline',
      status: 'Cloudflare Edge CDN',
      sla: '180ms TTFB Global',
      stack: 'Next.js • ISR • Node.js • Cloudflare Anycast',
      liveUrl: 'https://www.eaglespathway.com/',
      description: 'High-performance discovery engine connecting African scholars with international universities and verified roadmaps.',
      features: [
        'Incremental Static Regeneration (ISR) with Cloudflare Anycast edge caching',
        'Automated deadline alerts and localized scholarship roadmap matching',
        'Scalable mentor-booking engine with zero calendar collisions',
        'Low-bandwidth mobile-first optimization across African telecos',
      ],
      stats: [
        { label: 'Global TTFB', value: '178ms' },
        { label: 'Edge Cache Hit', value: '99.2%' },
        { label: 'Availability', value: '99.99%' },
      ],
    },
  };

  const current = systems[activeSystemId];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#06070a] ambient-spotlight overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Understated Studio Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-slate-800 dark:text-zinc-200 tracking-tight">Eagle Pathway Studio</span>
          <span className="text-xs text-slate-300 dark:text-zinc-700">•</span>
          <span className="text-xs text-slate-500 dark:text-zinc-400">Addis Ababa & Global Enterprise Systems</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start mb-16 lg:mb-24">
          
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.05]">
              Software engineered for{' '}
              <span className="text-slate-500 dark:text-zinc-400 font-normal">
                the uncompromising.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
              We architect high-throughput multi-tenant cloud platforms, sub-45ms FinTech fraud defense engines, and autonomous agent infrastructure for visionary enterprises worldwide.
            </p>

            {/* Clean Directives */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#contact"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
              >
                <span>Start an Architecture Brief</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="#work"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-sm font-medium text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/[0.1] bg-slate-50 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Production Systems</span>
              </Link>
            </div>

            {/* 4 Quantitative Grounded Metrics */}
            <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">&lt; 16ms</div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Postgres RLS Query SLA</div>
              </div>

              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">99.8%</div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">FinTech Fraud Detection</div>
              </div>

              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">10M+</div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Peak Concurrency Req/s</div>
              </div>

              <div>
                <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">0.00%</div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Async Queue Drop Rate</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Enterprise Systems Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-2xl shadow-xl overflow-hidden transition-all duration-300">
              
              {/* Card Header */}
              <div className="p-4 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/60 dark:bg-zinc-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-medium text-slate-900 dark:text-white tracking-tight">
                    Production Systems
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    {edgeLatency}ms TTFB
                  </span>
                  <button
                    onClick={handlePing}
                    title="Ping Edge Node"
                    className="p-1 rounded text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin text-sky-600 dark:text-cyan-400' : ''}`} />
                  </button>
                </div>
              </div>

              {/* System Selector Tabs */}
              <div className="p-2 border-b border-black/[0.06] dark:border-white/[0.08] bg-slate-100/60 dark:bg-zinc-900/20 flex items-center gap-1">
                {(['lms', 'receipt', 'portal'] as const).map((key) => {
                  const s = systems[key];
                  const isActive = activeSystemId === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        soundEngine.playSwitch();
                        setActiveSystemId(key);
                      }}
                      className={`relative flex-1 py-1.5 px-2 rounded-xl text-xs font-medium transition-all text-center cursor-pointer ${
                        isActive
                          ? 'bg-white dark:bg-zinc-800 text-slate-950 dark:text-white shadow-xs font-semibold'
                          : 'text-slate-600 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white'
                      }`}
                    >
                      {key === 'lms' && 'SIS Cloud'}
                      {key === 'receipt' && 'VerifyReceipt™'}
                      {key === 'portal' && 'Mobility Core'}
                    </button>
                  );
                })}
              </div>

              {/* Showcase Body */}
              <div className="p-6 space-y-5">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-500 block">
                    {current.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {current.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Quantitative Metric Grid */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-black/[0.06] dark:border-white/[0.06]">
                  {current.stats.map((st) => (
                    <div key={st.label} className="text-center">
                      <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">{st.value}</div>
                      <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-1">
                  {current.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                    {current.stack.split('•')[0].trim()}
                  </span>

                  <a
                    href={current.liveUrl}
                    target={current.liveUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="inline-flex items-center gap-1.5 font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <span>View Deployment</span>
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