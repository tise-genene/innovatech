'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Check, 
  Copy, 
  Terminal,
  Activity,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface SystemItem {
  id: string;
  index: string;
  name: string;
  category: string;
  status: string;
  stack: string;
  targetDomain?: string;
  liveUrl?: string;
  description: string;
  specs: { label: string; value: string }[];
}

export default function Hero() {
  const [activeSystemId, setActiveSystemId] = useState<string>('lms');
  const [simProvider, setSimProvider] = useState<'telebirr' | 'cbe'>('telebirr');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [edgeLatency, setEdgeLatency] = useState<number>(14);
  const [isPinging, setIsPinging] = useState<boolean>(false);

  const handlePingCluster = () => {
    soundEngine.playVerify();
    setIsPinging(true);
    setTimeout(() => {
      setEdgeLatency(Math.floor(Math.random() * 5) + 12);
      setIsPinging(false);
      soundEngine.playSuccess();
    }, 450);
  };

  const systems: SystemItem[] = [
    {
      id: 'lms',
      index: '01',
      name: 'Eagle Pathway LMS & SIS',
      category: 'EdTech Enterprise ERP',
      status: 'Live Deployment',
      stack: 'Next.js 16 • TypeScript • Supabase • Postgres RLS',
      targetDomain: 'lms.eaglespathway.com',
      liveUrl: 'https://school-mgmt-api.vercel.app/',
      description: 'Unified cloud School Information System powering admissions, localized curriculum grading, attendance pipelines, and teacher-parent synchronization.',
      specs: [
        { label: 'Data Isolation', value: 'Multi-Tenant Row Level Security (RLS)' },
        { label: 'Query SLA', value: '< 16ms edge-resolved database reads' },
        { label: 'Access Control', value: 'Role-Based (Admin, Dept Head, Teacher, Student, Parent)' },
        { label: 'Target Domain', value: 'lms.eaglespathway.com' }
      ]
    },
    {
      id: 'receipt',
      index: '02',
      name: 'VerifyReceipt Engine',
      category: 'FinTech Fraud Defense',
      status: 'Proprietary Core',
      stack: 'Dart • Flutter • Deterministic Regex • Font Heuristics',
      targetDomain: 'Local Binary / API Adapter',
      liveUrl: '#contact',
      description: 'Zero-trust transaction slip validator engineered to parse, verify, and catch digitally altered payment receipts from Telebirr and Commercial Bank of Ethiopia (CBE).',
      specs: [
        { label: 'Execution', value: 'Sub-45ms offline-first binary' },
        { label: 'Coverage', value: 'Telebirr, CBE Birr, Awash Bank' },
        { label: 'Tamper Engine', value: 'Kerning & font-weight compression heuristic' },
        { label: 'Integration', value: 'REST API & Merchant Webhooks' }
      ]
    },
    {
      id: 'core',
      index: '03',
      name: 'Eagle Pathway Core Portal',
      category: 'Opportunity Discovery',
      status: 'Production Live',
      stack: 'Next.js • React • Node.js • Cloudflare Edge',
      targetDomain: 'eaglespathway.com',
      liveUrl: 'https://www.eaglespathway.com/',
      description: 'International scholarship and mentorship discovery engine connecting African scholars with global university opportunities and structured roadmaps.',
      specs: [
        { label: 'Distribution', value: 'Cloudflare global edge network' },
        { label: 'Latency Target', value: '< 180ms TTFB on regional networks' },
        { label: 'Data Model', value: 'Incremental Static Regeneration (ISR)' },
        { label: 'Target Domain', value: 'eaglespathway.com' }
      ]
    },
    {
      id: 'admin',
      index: '04',
      name: 'Eagle Pathway Admin Command',
      category: 'Institutional Governance',
      status: 'Secured Production',
      stack: 'React • TypeScript • Granular RBAC • Audit Ledger',
      targetDomain: 'admin.eaglespathway.com',
      liveUrl: 'https://www.admin.eaglespathway.com/',
      description: 'Administrative command center for platform governance, institutional credential verification, automated document audits, and system monitoring.',
      specs: [
        { label: 'Authentication', value: 'Zero-trust gateway with instant session invalidation' },
        { label: 'Audit Logging', value: '100% immutable operational ledger' },
        { label: 'Scope', value: 'Cross-institution governance' },
        { label: 'Target Domain', value: 'admin.eaglespathway.com' }
      ]
    },
    {
      id: 'bot',
      index: '05',
      name: 'EagleBot Telegram Worker',
      category: 'Autonomous Automation',
      status: 'Active Queue',
      stack: 'Python • AsyncIO • Redis Queue • FastAPI',
      targetDomain: 'Worker Cluster',
      liveUrl: '#contact',
      description: 'Non-blocking asynchronous event queue resolving high-volume applicant questions, deadline broadcasts, and automated database sync.',
      specs: [
        { label: 'Daily Throughput', value: '10,000+ operations / day' },
        { label: 'Broker', value: 'Redis in-memory queue' },
        { label: 'Webhook SLA', value: '< 25ms acknowledgement' },
        { label: 'Drop Rate', value: '0.00% under peak deadline load' }
      ]
    }
  ];

  const current = systems.find(s => s.id === activeSystemId) || systems[0];

  const runVerificationSimulation = () => {
    soundEngine.playVerify();
    setIsVerifying(true);
    setVerified(false);
    setTimeout(() => {
      setIsVerifying(false);
      setVerified(true);
      soundEngine.playSuccess();
    }, 600);
  };

  const copyPayload = () => {
    const payload = JSON.stringify({
      gateway: simProvider,
      transactionId: simProvider === 'telebirr' ? 'TB88392019482' : 'FT24098920134',
      status: 'CONFIRMED_VALID',
      tamperScore: 0.998,
      timestamp: '2026-10-25T13:20:00+03:00'
    }, null, 2);
    navigator.clipboard.writeText(payload);
    soundEngine.playSuccess();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 studio-grid-lines border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Two-Column Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start mb-16 lg:mb-20">
          
          {/* Left Column: Eyebrow, Headline, Value Prop, CTAs, Highlights */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>[ STUDIO // ADDIS ABABA ]</span>
              <span className="text-neutral-400 dark:text-neutral-600">—</span>
              <span>PROD: tech.eaglespathway.com</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.06]">
              Architecting production software and systems that endure.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed font-normal">
              We are a full-cycle software engineering and digital product studio. We architect and build bespoke production systems, scalable cloud platforms, mobile applications, and custom software tailored to whatever your vision demands.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#systems"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 transition-colors shadow-xs"
              >
                Explore Production Systems
              </a>

              <a
                href="https://school-mgmt-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-xs font-medium text-neutral-900 border border-neutral-300 hover:border-neutral-900 dark:text-white dark:border-neutral-800 dark:hover:border-neutral-600 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Launch LMS Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              </a>

              <Link
                href="#contact"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-xs font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
              >
                Start an Architecture Brief
              </Link>
            </div>

            {/* Architectural Reliability Highlights */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-850 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Edge Query SLA</div>
                <div className="text-base font-semibold text-neutral-950 dark:text-white mt-0.5">&lt; 16ms</div>
                <div className="text-[10px] text-neutral-500">Postgres RLS</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Fraud Detection</div>
                <div className="text-base font-semibold text-neutral-950 dark:text-white mt-0.5">99.8% Conf.</div>
                <div className="text-[10px] text-neutral-500">Sub-45ms Binary</div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Drop Rate</div>
                <div className="text-base font-semibold text-neutral-950 dark:text-white mt-0.5">0.00% Peak</div>
                <div className="text-[10px] text-neutral-500">Redis Async Queue</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Production Telemetry HUD */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-200">
              
              {/* Console Header Bar */}
              <div className="p-3.5 sm:p-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/90 dark:bg-neutral-900/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-neutral-700 dark:text-neutral-300">
                    CLUSTER // ET-ADDIS-01
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    OPERATIONAL
                  </span>
                  <button
                    onClick={handlePingCluster}
                    title="Ping Production Cluster"
                    className="p-1 rounded text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Edge Latency & Health Gauge */}
              <div className="p-4 border-b border-neutral-200 dark:border-neutral-800/80 grid grid-cols-2 gap-3 bg-neutral-50/40 dark:bg-neutral-900/20">
                <div className="p-3 rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase">
                    <span>Regional TTFB</span>
                    <Activity className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div className="text-lg font-bold font-mono text-neutral-950 dark:text-white mt-1">
                    {edgeLatency}ms
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Addis Ababa Edge Node
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/60">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase">
                    <span>Active Clusters</span>
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div className="text-lg font-bold font-mono text-neutral-950 dark:text-white mt-1">
                    5 / 5 Healthy
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Zero-Trust Gateway
                  </div>
                </div>
              </div>

              {/* Quick Select Stacks */}
              <div className="p-4 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 flex items-center justify-between pb-1">
                  <span>Core Production Engines</span>
                  <span>STATUS</span>
                </div>

                {/* LMS Node */}
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playSwitch();
                    setActiveSystemId('lms');
                  }}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    activeSystemId === 'lms'
                      ? 'border-neutral-950 dark:border-white bg-neutral-100/70 dark:bg-neutral-900'
                      : 'border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-neutral-950 dark:text-white">
                        Eagle Pathway LMS & SIS
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        RLS
                      </span>
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      lms.eaglespathway.com • Multi-tenant ERP
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                    ONLINE
                  </span>
                </button>

                {/* VerifyReceipt Node */}
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playSwitch();
                    setActiveSystemId('receipt');
                  }}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    activeSystemId === 'receipt'
                      ? 'border-neutral-950 dark:border-white bg-neutral-100/70 dark:bg-neutral-900'
                      : 'border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-neutral-950 dark:text-white">
                        VerifyReceipt Engine
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        FinTech
                      </span>
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      Telebirr & CBE Slip Fraud Defense
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                    SHIELDED
                  </span>
                </button>

                {/* EagleBot Worker */}
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playSwitch();
                    setActiveSystemId('bot');
                  }}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    activeSystemId === 'bot'
                      ? 'border-neutral-950 dark:border-white bg-neutral-100/70 dark:bg-neutral-900'
                      : 'border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-950'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-neutral-950 dark:text-white">
                        EagleBot Async Worker
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        Redis
                      </span>
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                      10,000+ operations/day event queue
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                    ACTIVE
                  </span>
                </button>
              </div>

              {/* Streaming Event Log Terminal */}
              <div className="p-3 sm:p-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-neutral-300 font-mono text-[10px] space-y-1">
                <div className="flex items-center justify-between text-neutral-500 pb-1 border-b border-neutral-900">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-neutral-400" />
                    VERIFIED CLUSTER LOG
                  </span>
                  <span className="text-emerald-400 animate-pulse">STREAMING</span>
                </div>
                <div className="space-y-1 pt-1 overflow-hidden">
                  <div className="text-emerald-400 truncate">✓ [telebirr_engine] parsed #TB88392019482 (0.998 conf)</div>
                  <div className="text-neutral-400 truncate">✓ [lms_edge] rls_token issued tenant: school_849</div>
                  <div className="text-neutral-500 truncate">✓ [cloudflare_dns] 16ms TLS handshake Addis Ababa</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* PRODUCTION ARCHITECTURE LEDGER                                      */}
        {/* =================================================================== */}
        <div id="systems" className="pt-8 border-t border-neutral-200 dark:border-neutral-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                SYSTEM CATALOG // ACTIVE CLUSTERS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Core Production Infrastructure
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
              <span>5 Verified Engineering Systems</span>
            </div>
          </div>

          {/* Ledger Table Container */}
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-neutral-50/50 dark:bg-neutral-950">
            {/* System Row Selector Header */}
            <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/40">
              {systems.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setActiveSystemId(s.id);
                  }}
                  className={`p-3.5 text-left transition-colors cursor-pointer ${
                    activeSystemId === s.id
                      ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white font-semibold shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-900/20'
                  }`}
                >
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    {s.index} //
                  </span>
                  <span className="text-xs truncate block mt-0.5">
                    {s.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Active System Details Ledger */}
            <div className="p-6 sm:p-8 bg-white dark:bg-neutral-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  {/* Top Header of Active System */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-neutral-500 uppercase">
                          {current.category}
                        </span>
                        <span className="text-neutral-400 dark:text-neutral-600">•</span>
                        <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-medium">
                          {current.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
                        {current.name}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed pt-1">
                        {current.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {current.liveUrl && current.liveUrl.startsWith('http') && (
                        <a
                          href={current.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundEngine.playClick()}
                          className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>Launch Live Portal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {current.liveUrl && current.liveUrl.startsWith('#') && (
                        <Link
                          href={current.liveUrl}
                          onClick={() => soundEngine.playClick()}
                          className="px-4 py-2 rounded-full text-xs font-medium text-neutral-900 border border-neutral-300 hover:border-neutral-900 dark:text-white dark:border-neutral-700 dark:hover:border-neutral-500 transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>Inquire For Deployment</span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* VerifyReceipt Simulator Special Interactive Module */}
                  {current.id === 'receipt' && (
                    <div className="p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                        <div>
                          <span className="text-xs font-mono font-semibold text-neutral-900 dark:text-white uppercase block">
                            VerifyReceipt Parser // Live Heuristic Inspection
                          </span>
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">
                            Simulate deterministic parsing on Ethiopian banking and mobile money payment slips:
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              soundEngine.playSwitch();
                              setSimProvider('telebirr');
                              setVerified(false);
                            }}
                            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                              simProvider === 'telebirr'
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold'
                                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-300 dark:border-neutral-800'
                            }`}
                          >
                            Telebirr Slip
                          </button>
                          <button
                            onClick={() => {
                              soundEngine.playSwitch();
                              setSimProvider('cbe');
                              setVerified(false);
                            }}
                            className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                              simProvider === 'cbe'
                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold'
                                : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-300 dark:border-neutral-800'
                            }`}
                          >
                            CBE Bank Slip
                          </button>
                          <button
                            onClick={runVerificationSimulation}
                            disabled={isVerifying}
                            className="px-3.5 py-1 rounded text-xs font-mono font-semibold bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 cursor-pointer"
                          >
                            {isVerifying ? 'Analyzing...' : 'Run Parser'}
                          </button>
                        </div>
                      </div>

                      {/* Monospaced Output Console */}
                      <div className="p-4 rounded bg-neutral-950 dark:bg-black border border-neutral-800 font-mono text-xs space-y-1.5 text-neutral-200">
                        <div className="flex items-center justify-between text-neutral-400 pb-1 border-b border-neutral-850 text-[11px]">
                          <span>ENGINE: DART_OCR_REGEX_V2</span>
                          <button
                            onClick={copyPayload}
                            className="text-neutral-300 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            {copiedCode ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedCode ? 'Copied' : 'Copy JSON'}</span>
                          </button>
                        </div>
                        <div className="text-neutral-400 pt-1">
                          INPUT: {simProvider === 'telebirr' ? 'TELEBIRR_REF_TX984128.png' : 'CBE_TRANSFER_FT77319.png'}
                        </div>
                        {isVerifying && (
                          <div className="text-white animate-pulse">
                            Processing font kerning heuristics and transaction signatures...
                          </div>
                        )}
                        {verified && (
                          <div className="space-y-0.5 text-neutral-100">
                            <div>[STATUS: AUTHENTIC_PAYMENT_CONFIRMED]</div>
                            <div>REF: {simProvider === 'telebirr' ? 'TB88392019482' : 'FT24098920134'} // ZERO ALTERATION DETECTED</div>
                            <div className="text-white font-bold">CONFIDENCE: 99.8% LEGITIMATE SLIP</div>
                          </div>
                        )}
                        {!isVerifying && !verified && (
                          <div className="text-neutral-500">
                            Click &quot;Run Parser&quot; to test instant offline verification.
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Architecture Specification Ledger Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {current.specs.map((spec, i) => (
                      <div key={i} className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-850 bg-neutral-50 dark:bg-neutral-900/30 space-y-1">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-neutral-900 dark:text-white block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Stack Line */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                    <div className="text-neutral-600 dark:text-neutral-400">
                      <span className="text-neutral-500">ENGINEERED WITH: </span>
                      <span className="text-neutral-900 dark:text-neutral-200 font-medium">{current.stack}</span>
                    </div>
                    {current.targetDomain && (
                      <div className="text-neutral-600 dark:text-neutral-400">
                        <span className="text-neutral-500">MAPPING: </span>
                        <code className="text-neutral-950 dark:text-white font-semibold">{current.targetDomain}</code>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
