'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Satellite, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  Sparkles,
  Maximize2,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

// Internal instruments
import OrbitalGlobe from '@/components/home/OrbitalGlobe';
import SiliconLedger from '@/components/home/SiliconLedger';
import LoadCrucible from '@/components/home/LoadCrucible';
import VerifyReceiptLab from '@/components/home/VerifyReceiptLab';
import CyberTerminal from '@/components/home/CyberTerminal';

type LabTab = 'orbital' | 'silicon' | 'crucible' | 'verify-receipt' | 'terminal';

interface LabInstrument {
  id: LabTab;
  index: string;
  name: string;
  badge: string;
  icon: any;
  summary: string;
  metric: string;
}

const INSTRUMENTS: LabInstrument[] = [
  {
    id: 'orbital',
    index: '01',
    name: '3D Orbital Constellation',
    badge: 'NASA / Starlink Math',
    icon: Satellite,
    summary: 'Low-Earth orbit satellite mesh with Doppler telemetry lock across global ground stations.',
    metric: '12 Sats • 5 Relays',
  },
  {
    id: 'silicon',
    index: '02',
    name: 'Silicon Micro-Architecture',
    badge: 'Hardware Primitives',
    icon: Cpu,
    summary: 'Deterministic heuristic ALU, multi-tenant RLS isolation gate, and live SHA-256 block digest miner.',
    metric: '< 16ms Edge Read SLA',
  },
  {
    id: 'crucible',
    index: '03',
    name: '10M Concurrency Crucible',
    badge: 'Stress Engine',
    icon: Zap,
    summary: 'High-throughput browser load generator simulating 10,000,000 req/sec across distributed clusters.',
    metric: '10M+ Req/s Zero-Drop',
  },
  {
    id: 'verify-receipt',
    index: '04',
    name: 'VerifyReceipt™ Forensics',
    badge: 'FinTech Defense',
    icon: ShieldCheck,
    summary: 'Sub-45ms binary engine catching altered digital payment screenshots from Telebirr and CBE.',
    metric: '99.8% Conf. Rate',
  },
  {
    id: 'terminal',
    index: '05',
    name: 'CLI 3.0 Operating Terminal',
    badge: 'Interactive Shell',
    icon: Terminal,
    summary: 'Direct operating shell executing in-browser CPU benchmarks, edge deployments, and warp vectors.',
    metric: 'CLI 3.0.4-PROD',
  },
];

export default function DeepTechLab() {
  const [activeTab, setActiveTab] = useState<LabTab>('orbital');

  // Sync with URL hashes for deep links (#orbital, #silicon, etc.)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as LabTab;
      if (['orbital', 'silicon', 'crucible', 'verify-receipt', 'terminal'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentInstrument = INSTRUMENTS.find((i) => i.id === activeTab) || INSTRUMENTS[0];

  return (
    <section id="lab" className="py-24 lg:py-36 relative border-b border-black/[0.08] dark:border-white/[0.08] bg-slate-50/70 dark:bg-[#07090e] transition-colors overflow-hidden">
      
      {/* Dynamic Specular Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/[0.07] dark:from-cyan-500/[0.08] to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-500/[0.05] dark:bg-purple-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Lab Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
              <span>ADVANCED SYSTEMS LABORATORY // NASA-GRADE SUITE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              The Deep-Tech{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                Laboratory.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-400 mt-4 leading-relaxed font-light">
              Interact directly with our low-level engineering primitives. From 3D orbital constellations and sub-45ms heuristic vector ALUs to 10M req/sec distributed concurrency stress testing.
            </p>
          </div>

          {/* Current Instrument Telemetry Pill */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 dark:bg-neutral-900/90 border border-black/[0.08] dark:border-white/[0.08] shadow-sm backdrop-blur-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div className="font-mono text-xs">
              <div className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-wider">ACTIVE INSTRUMENT</div>
              <div className="text-slate-900 dark:text-white font-bold">{currentInstrument.name}</div>
            </div>
          </div>
        </div>

        {/* Master Instrument Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {INSTRUMENTS.map((inst) => {
            const isActive = activeTab === inst.id;
            const Icon = inst.icon;
            return (
              <button
                key={inst.id}
                onClick={() => {
                  soundEngine.playSwitch();
                  setActiveTab(inst.id);
                  if (typeof window !== 'undefined') {
                    window.history.replaceState(null, '', `#${inst.id}`);
                  }
                }}
                className={`relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer group ${
                  isActive
                    ? 'bg-white dark:bg-neutral-900 border-sky-500/50 dark:border-cyan-500/60 shadow-lg dark:shadow-[0_0_30px_rgba(0,240,255,0.15)] ring-1 ring-sky-500/30 dark:ring-cyan-500/40'
                    : 'bg-white/70 dark:bg-neutral-950/60 border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.15] dark:hover:border-white/[0.15] hover:bg-white dark:hover:bg-neutral-900/70'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-[10px] text-slate-500 dark:text-neutral-500 font-bold">
                    {inst.index}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive 
                      ? 'bg-sky-500/15 text-sky-700 dark:bg-cyan-500/20 dark:text-cyan-300' 
                      : 'bg-slate-100 dark:bg-neutral-800 text-slate-500 dark:text-neutral-400'
                  }`}>
                    {inst.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-sky-600 dark:text-cyan-400' : 'text-slate-600 dark:text-neutral-400'
                  }`} />
                  <div className="text-xs font-bold font-mono tracking-tight text-slate-900 dark:text-white truncate">
                    {inst.name.split(' ')[0]} {inst.name.split(' ')[1] || ''}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                  {inst.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Master Instrument Display Frame */}
        <div className="relative rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/95 dark:bg-[#05070c] shadow-2xl overflow-hidden">
          
          {/* Window Control Header */}
          <div className="px-6 py-3.5 border-b border-black/[0.08] dark:border-white/[0.08] bg-slate-50/80 dark:bg-neutral-900/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white tracking-wider">
                EAGLE LAB // {currentInstrument.name.toUpperCase()}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-neutral-400">
              <span>{currentInstrument.summary}</span>
            </div>
          </div>

          {/* Active Instrument Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === 'orbital' && (
                <motion.div
                  key="orbital"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <OrbitalGlobe />
                </motion.div>
              )}

              {activeTab === 'silicon' && (
                <motion.div
                  key="silicon"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <SiliconLedger />
                </motion.div>
              )}

              {activeTab === 'crucible' && (
                <motion.div
                  key="crucible"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <LoadCrucible />
                </motion.div>
              )}

              {activeTab === 'verify-receipt' && (
                <motion.div
                  key="verify-receipt"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <VerifyReceiptLab />
                </motion.div>
              )}

              {activeTab === 'terminal' && (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <CyberTerminal />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
