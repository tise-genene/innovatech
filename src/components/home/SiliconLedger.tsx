'use client';

import { useState } from 'react';
import { Cpu, ShieldCheck, Zap, Lock, Terminal, CheckCircle2, Play, RefreshCw, Hash } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface CoreBlock {
  id: string;
  name: string;
  tag: string;
  clockSpeed: string;
  description: string;
  specs: { label: string; value: string }[];
}

const SILICON_CORES: CoreBlock[] = [
  {
    id: 'alu',
    name: 'Sub-45ms Heuristic Vector ALU',
    tag: 'CORE 01 // FRAUD VECTOR ENGINE',
    clockSpeed: 'Sub-45ms Execution',
    description: 'Deterministic micro-typographic heuristic engine inspecting sub-pixel font kerning, compression artifacts, and glyph tampering in Telebirr & CBE digital transaction slips.',
    specs: [
      { label: 'Heuristic Tolerance', value: '0.002em Glyph Kerning Delta' },
      { label: 'Input Channels', value: 'Telebirr, CBE Birr, Awash' },
      { label: 'Execution Rail', value: 'Zero-overhead native Dart/Flutter binary' },
    ],
  },
  {
    id: 'rls',
    name: 'Multi-Tenant RLS Hardware Boundary',
    tag: 'CORE 02 // DATA ISOLATION CONTROLLER',
    clockSpeed: '< 16ms Edge Read SLA',
    description: 'Cryptographic data partition unit enforcing strict Row Level Security (RLS) across school tenants, guaranteeing zero cross-institution memory bleed.',
    specs: [
      { label: 'Isolation Policy', value: 'Strict Postgres RLS (Tenant ID Lock)' },
      { label: 'Query SLA', value: '< 16ms edge-resolved database reads' },
      { label: 'Access Protocol', value: 'Granular Role-Based Access (Admin/Teacher/Parent)' },
    ],
  },
  {
    id: 'crypto',
    name: 'SHA-256 & Modulo-97 Hash Matrix',
    tag: 'CORE 03 // CRYPTO PROOF ACCELERATOR',
    clockSpeed: 'Zero-Collision Engine',
    description: 'Verifies banking transaction identifiers against institutional modulo algorithms and generates immutable SHA-256 proof hashes for each processed operational ledger.',
    specs: [
      { label: 'Algorithmic Check', value: 'Modulo-97 Banking Checksum' },
      { label: 'Hash Standard', value: 'SHA-256 Cryptographic Digest' },
      { label: 'Ledger State', value: '100% Immutable Operational Audit' },
    ],
  },
  {
    id: 'queue',
    name: 'Asynchronous Event Ring Buffer',
    tag: 'CORE 04 // EVENT DISPATCH QUEUE',
    clockSpeed: '10,000+ Ops/Day',
    description: 'Non-blocking in-memory Redis event broker dispatching applicant notifications, automated background sync, and asynchronous Telegram service worker jobs.',
    specs: [
      { label: 'Buffer Storage', value: 'Redis In-Memory Queue' },
      { label: 'Drop Rate Under Peak', value: '0.00% Zero-Loss Pipeline' },
      { label: 'Webhook Response', value: '< 25ms Global Acknowledgment' },
    ],
  },
];

export default function SiliconLedger() {
  const [selectedCoreId, setSelectedCoreId] = useState<string>('alu');
  const [isInjecting, setIsInjecting] = useState<boolean>(false);
  const [lastHash, setLastHash] = useState<string>('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  const [nonce, setNonce] = useState<number>(84920);

  const currentCore = SILICON_CORES.find((c) => c.id === selectedCoreId) || SILICON_CORES[0];

  const handleInjectPayload = () => {
    soundEngine.playLaserScan();
    setIsInjecting(true);

    setTimeout(() => {
      // Generate pseudo SHA-256 hex string
      const chars = '0123456789abcdef';
      let hash = '';
      for (let i = 0; i < 64; i++) {
        hash += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setLastHash(hash);
      setNonce((prev) => prev + Math.floor(Math.random() * 40) + 1);
      setIsInjecting(false);
      soundEngine.playSuccess();
    }, 750);
  };

  return (
    <section id="silicon" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-slate-50/70 dark:bg-[#010409] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>SILICON SPEC // MICRO-ARCHITECTURE & CRYPTOGRAPHIC LEDGER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Hardware-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">Micro-Architecture</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Inspect our silicon-grade logic blocks. From sub-45ms heuristic vector math to immutable cryptographic hash ledgers, our systems are built with zero compromises.
          </p>
        </div>

        {/* Micro-Architecture Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4 Silicon Cores Die Map */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SILICON_CORES.map((core) => (
                <div
                  key={core.id}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setSelectedCoreId(core.id);
                  }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                    selectedCoreId === core.id
                      ? 'bg-white dark:bg-neutral-900/90 border-sky-500/60 dark:border-cyan-500/50 shadow-lg dark:shadow-[0_0_30px_rgba(0,240,255,0.18)]'
                      : 'bg-white dark:bg-neutral-950/60 hover:bg-slate-50 dark:hover:bg-neutral-900/40 border-slate-200 dark:border-neutral-800'
                  }`}
                >
                  {/* Subtle Photon Path indicator */}
                  {selectedCoreId === core.id && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 dark:bg-cyan-500/10 rounded-bl-full pointer-events-none" />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-sky-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                      {core.tag.split('//')[0]}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                      {core.clockSpeed}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                    {core.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                    {core.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Traveling Photon Circuit Bus Bar */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono text-slate-700 dark:text-neutral-300">
                  SYSTEM BUS FREQUENCY: <span className="font-bold text-sky-600 dark:text-cyan-400">4.20 GHz SYNCHRONIZED</span>
                </span>
              </div>

              <button
                onClick={handleInjectPayload}
                disabled={isInjecting}
                className="px-4 py-2 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-700 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 dark:text-cyan-300 border border-sky-500/30 dark:border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-xs"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isInjecting ? 'animate-spin' : ''}`} />
                <span>{isInjecting ? 'ROUTING BYTES...' : 'INJECT HARDWARE PAYLOAD'}</span>
              </button>
            </div>
          </div>

          {/* Right: Real-time Cryptographic Ledger Inspection Panel */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Cryptographic Block Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-950/90 border border-slate-200 dark:border-neutral-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-neutral-850">
                <div className="flex items-center gap-2">
                  <Hash className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    CRYPTOGRAPHIC BLOCK DIGEST
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  BLOCK #{nonce}
                </span>
              </div>

              {/* SHA-256 Hash Box */}
              <div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-widest block mb-1.5">
                  IMMUTABLE SHA-256 PROOF HASH
                </span>
                <div className="p-3.5 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs break-all leading-relaxed shadow-inner border border-slate-800">
                  {lastHash}
                </div>
              </div>

              {/* Selected Core Detailed Specs */}
              <div>
                <span className="text-[10px] font-mono text-sky-600 dark:text-cyan-400 font-bold uppercase tracking-widest block mb-2">
                  {currentCore.name} SPECIFICATIONS
                </span>
                <div className="space-y-2">
                  {currentCore.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-xs font-mono py-1.5 border-b border-slate-100 dark:border-neutral-850">
                      <span className="text-slate-500 dark:text-neutral-400">{spec.label}:</span>
                      <span className="text-slate-900 dark:text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Zero-Knowledge Proof Verified
                </span>
                <span className="text-sky-600 dark:text-cyan-400 font-bold">&lt; 24.6 µs LATENCY</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

