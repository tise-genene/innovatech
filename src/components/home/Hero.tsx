'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Play, 
  RefreshCw,
  Scan,
  Copy,
  Check,
  Code2,
  Network,
  Sparkles
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Hero() {
  const [activeSystemId, setActiveSystemId] = useState<string>('lms');
  const [consoleTab, setConsoleTab] = useState<'telemetry' | 'spec' | 'flow'>('telemetry');
  const [isPinging, setIsPinging] = useState(false);
  const [edgeLatency, setEdgeLatency] = useState(12);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handlePing = () => {
    soundEngine.playVerify();
    setIsPinging(true);
    setTimeout(() => {
      setEdgeLatency(Math.floor(Math.random() * 4) + 10);
      setIsPinging(false);
      soundEngine.playSuccess();
    }, 380);
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
      nodes: ['Client Edge', 'RLS Boundary', 'PostgreSQL DB', 'Parent Sync Push'],
      spec: `// GET /api/v1/schools/eagle-pathway/telemetry
{
  "status": "HEALTHY",
  "edge_cluster": "ADD-EAST-01",
  "rls_isolation": "VERIFIED_ISOLATED",
  "tenant_id": "ep_prod_84920",
  "query_latency_ms": 14.2
}`,
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
      nodes: ['Raw Image Buffer', 'Modulo-97 Checksum', 'Font Kerning Heuristic', 'Verified Receipt Token'],
      spec: `// POST /v1/forensics/verify-receipt
{
  "slip_hash": "sha256:e3b0c44298fc1c149afb",
  "modulo_97_valid": true,
  "kerning_deviation": 0.0014,
  "fraud_score": 0.002,
  "verdict": "GENUINE_TRANSACTION"
}`,
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
      nodes: ['Cloudflare Anycast', 'Edge Cache Ingress', 'ISR Revalidation', 'Global Scholar CDN'],
      spec: `// GET /v1/mobility/scholars/query
{
  "global_cache_hit": true,
  "ttfb_global_avg": "178ms",
  "active_regions": ["ET", "KE", "NG", "RW", "US", "DE"],
  "compression": "brotli"
}`,
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
      nodes: ['Auth Guard', 'RBAC Token Audit', 'Signed Audit Log', 'Immutable Ledger State'],
      spec: `// POST /v1/audit/zero-trust/session
{
  "rbac_clearance": "SUPER_ADMIN_TIER_1",
  "credential_fingerprint": "ed25519:7a4c...",
  "hardware_token": "YubiKey_FIDO2_PASS",
  "session_state": "ENCRYPTED_ISOLATED"
}`,
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
      nodes: ['Telegram Webhook', 'Redis FIFO Queue', 'Python Async Worker', 'DB Ingestion Pool'],
      spec: `// GET /v1/workers/redis-cluster/throughput
{
  "queue_depth": 0,
  "throughput_ops_per_sec": 420,
  "daily_dispatched": 14920,
  "dead_letter_count": 0,
  "queue_latency": "1.2ms"
}`,
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeSystemId) || systems[0];

  const handleCopySpec = () => {
    navigator.clipboard.writeText(currentSystem.spec);
    soundEngine.playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 studio-grid-lines border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#06070a] overflow-hidden transition-colors">
      
      {/* Dynamic Ambient Plasma Beams */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-sky-500/10 dark:bg-cyan-500/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[380px] bg-indigo-600/10 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-950/60 border border-slate-300 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 animate-ping" />
            <span>MISSION-CRITICAL SYSTEMS // DEEP-TECH STUDIO</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-neutral-400">
            <span className="text-slate-300 dark:text-neutral-600">—</span>
            <span>ADDIS ABABA [9.0249° N, 38.7469° E]</span>
            <span className="text-slate-300 dark:text-neutral-600">/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              GLOBAL CLUSTER ONLINE
            </span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16 lg:mb-24">
          
          {/* Left Column: Massive Kinetic Typography & Directives */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.02]">
              Software Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">
                the Uncompromising.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 max-w-xl leading-relaxed font-light">
              We architect high-throughput multi-tenant cloud platforms, sub-45ms FinTech fraud defense engines, and autonomous agent infrastructure for visionary enterprises worldwide.
            </p>

            {/* High-Impact Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 shadow-md dark:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Initiate Architecture Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#lab"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3.5 rounded-full text-xs font-mono font-medium text-slate-800 dark:text-white border border-slate-300 hover:border-slate-900 dark:border-neutral-700 dark:hover:border-cyan-400 bg-white dark:bg-neutral-900/60 transition-all flex items-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-cyan-400" />
                <span>Explore Deep-Tech Lab</span>
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
              <div className="p-2.5 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-neutral-900/30">
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Edge Query SLA</div>
                <div className="text-xl font-bold font-mono text-sky-600 dark:text-cyan-400 mt-0.5">&lt; 16ms</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">Postgres RLS</div>
              </div>

              <div className="p-2.5 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-neutral-900/30">
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Fraud Detection</div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">99.8% Conf.</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">Sub-45ms Binary</div>
              </div>

              <div className="p-2.5 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-neutral-900/30">
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Peak Concurrency</div>
                <div className="text-xl font-bold font-mono text-slate-900 dark:text-white mt-0.5">10M+ Req/s</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">Auto-Partitioned</div>
              </div>

              <div className="p-2.5 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-neutral-900/30">
                <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider">Queue Drop Rate</div>
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">0.00%</div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">Redis Async Broker</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Ecosystem Matrix Console */}
          <div className="lg:col-span-5 w-full">
            <div 
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              className="relative rounded-2xl border border-slate-200 dark:border-cyan-500/30 bg-white/95 dark:bg-neutral-950/85 backdrop-blur-2xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300"
            >
              
              {/* Dynamic Cursor Spotlight Radial Mask (Dribbble Signature) */}
              {isCardHovered && (
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300 z-0"
                  style={{
                    background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.12), transparent 75%)`,
                  }}
                />
              )}

              {/* Console Header Bar */}
              <div className="relative z-10 p-4 border-b border-slate-200 dark:border-neutral-800 bg-slate-50/80 dark:bg-neutral-900/60 flex items-center justify-between">
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
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
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

              {/* System Selector Buttons with Framer Motion Sliding Pill */}
              <div className="relative z-10 p-2.5 border-b border-slate-200 dark:border-neutral-800/80 bg-slate-50/40 dark:bg-neutral-950/40 flex items-center gap-1 overflow-x-auto no-scrollbar">
                {systems.map((s) => {
                  const isActive = activeSystemId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        soundEngine.playSwitch();
                        setActiveSystemId(s.id);
                      }}
                      className={`relative px-3 py-1.5 rounded-lg text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer z-10 ${
                        isActive
                          ? 'text-sky-700 dark:text-cyan-300 font-bold'
                          : 'text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSystemHighlight"
                          className="absolute inset-0 rounded-lg bg-sky-500/15 dark:bg-cyan-500/20 border border-sky-500/30 dark:border-cyan-500/40 shadow-xs -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span>{s.index}. {s.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Console Mode Sub-Tabs (Telemetry / Live Spec / Flow) */}
              <div className="relative z-10 px-6 pt-4 flex items-center justify-between border-b border-slate-100 dark:border-neutral-900 pb-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      soundEngine.playKeystroke();
                      setConsoleTab('telemetry');
                    }}
                    className={`text-[10px] font-mono px-2 py-1 rounded transition-colors cursor-pointer ${
                      consoleTab === 'telemetry'
                        ? 'bg-slate-200 dark:bg-neutral-800 text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-500 hover:text-slate-900 dark:text-neutral-500 dark:hover:text-neutral-300'
                    }`}
                  >
                    [ 01 // TELEMETRY ]
                  </button>

                  <button
                    onClick={() => {
                      soundEngine.playKeystroke();
                      setConsoleTab('spec');
                    }}
                    className={`text-[10px] font-mono px-2 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                      consoleTab === 'spec'
                        ? 'bg-slate-200 dark:bg-neutral-800 text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-500 hover:text-slate-900 dark:text-neutral-500 dark:hover:text-neutral-300'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>[ 02 // LIVE SPEC ]</span>
                  </button>

                  <button
                    onClick={() => {
                      soundEngine.playKeystroke();
                      setConsoleTab('flow');
                    }}
                    className={`text-[10px] font-mono px-2 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                      consoleTab === 'flow'
                        ? 'bg-slate-200 dark:bg-neutral-800 text-slate-900 dark:text-white font-semibold'
                        : 'text-slate-500 hover:text-slate-900 dark:text-neutral-500 dark:hover:text-neutral-300'
                    }`}
                  >
                    <Network className="w-3 h-3" />
                    <span>[ 03 // PIPELINE ]</span>
                  </button>
                </div>

                {consoleTab === 'spec' && (
                  <button
                    onClick={handleCopySpec}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-sky-600 dark:text-cyan-400 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY JSON</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Active System Telemetry Display */}
              <div className="relative z-10 p-6 space-y-4">
                
                {/* Header Title & Metric */}
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

                {/* Tab Switcher Content */}
                <AnimatePresence mode="wait">
                  {consoleTab === 'telemetry' && (
                    <motion.div
                      key="telemetry"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="space-y-4"
                    >
                      <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-mono">
                        {currentSystem.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800/80 font-mono text-[11px] space-y-1.5">
                        <div className="text-slate-500 dark:text-neutral-400">STACK: <span className="text-slate-800 dark:text-white font-medium">{currentSystem.stack}</span></div>
                        <div className="text-slate-500 dark:text-neutral-400">STATUS: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{currentSystem.status}</span></div>
                      </div>
                    </motion.div>
                  )}

                  {consoleTab === 'spec' && (
                    <motion.div
                      key="spec"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <pre className="p-3.5 rounded-xl bg-slate-950 text-cyan-300 font-mono text-[11px] leading-relaxed overflow-x-auto border border-neutral-800/90 shadow-inner">
                        {currentSystem.spec}
                      </pre>
                    </motion.div>
                  )}

                  {consoleTab === 'flow' && (
                    <motion.div
                      key="flow"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800/80 space-y-2"
                    >
                      <div className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                        Execution Pipeline Stages
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {currentSystem.nodes.map((node, i) => (
                          <div 
                            key={i} 
                            className="p-2 rounded-lg bg-white dark:bg-neutral-950/80 border border-slate-200 dark:border-neutral-800 flex items-center gap-2"
                          >
                            <span className="w-4 h-4 rounded-full bg-sky-500/10 dark:bg-cyan-500/20 text-sky-600 dark:text-cyan-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-[11px] font-mono text-slate-700 dark:text-neutral-300 truncate">
                              {node}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Action */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-neutral-900/80">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-neutral-500">DEEP-TECH PROVEN</span>
                  <a
                    href={currentSystem.liveUrl}
                    target={currentSystem.liveUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors group cursor-pointer"
                  >
                    <span>Inspect Target Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
