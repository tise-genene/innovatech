'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Cpu, 
  Terminal,
  ShieldCheck,
  Zap,
  Activity,
  Play,
  RotateCcw,
  Copy,
  Check,
  Clock,
  Radio
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface EcosystemItem {
  id: 'lms' | 'core' | 'admin' | 'receipt' | 'bot';
  tabLabel: string;
  specNum: string;
  name: string;
  badge: string;
  category: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  domainTarget?: string;
  statusText: string;
  statusType: 'live' | 'staging' | 'core';
  metrics: { label: string; value: string }[];
  techStack: string[];
  blueprintSchema: string[];
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'lms' | 'core' | 'admin' | 'receipt' | 'bot'>('lms');
  const [viewMode, setViewMode] = useState<'overview' | 'blueprint'>('overview');
  
  // Dynamic Studio Clock & Telemetry
  const [timeString, setTimeString] = useState('12:00:00 EAT');
  const [copiedPayload, setCopiedPayload] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Addis Ababa is UTC+3
      const eatTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setTimeString(`${eatTime} EAT (UTC+3)`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Interactive VerifyReceipt Simulator State
  const [simProvider, setSimProvider] = useState<'telebirr' | 'cbe'>('telebirr');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simComplete, setSimComplete] = useState(false);

  const runSimulation = () => {
    soundEngine.playVerify();
    setIsSimulating(true);
    setSimComplete(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimComplete(true);
      soundEngine.playSuccess();
    }, 750);
  };

  const handleTabChange = (tabId: 'lms' | 'core' | 'admin' | 'receipt' | 'bot') => {
    soundEngine.playSwitch();
    setActiveTab(tabId);
    if (tabId === 'receipt') {
      setSimComplete(false);
    }
  };

  const copySimPayload = () => {
    const payload = JSON.stringify({
      provider: simProvider,
      transactionRef: simProvider === 'telebirr' ? 'TB88392019482' : 'FT24098920134',
      amount: '2,500.00 ETB',
      timestamp: '2026-10-25T12:22:00+03:00',
      hashDigest: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    }, null, 2);
    navigator.clipboard.writeText(payload);
    soundEngine.playSuccess();
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  const ecosystem: Record<string, EcosystemItem> = {
    lms: {
      id: 'lms',
      tabLabel: 'Eagle LMS',
      specNum: 'SPEC // 01',
      name: 'Eagle Pathway LMS & SIS',
      badge: 'Flagship EdTech Suite',
      category: 'Multi-Tenant School ERP & Learning Management',
      tagline: 'End-to-end academic institution management: student admissions, grade computation, attendance tracking & parent portals.',
      description: 'Engineered to replace fragmented paper records and scattered spreadsheets with a unified cloud system for schools, teachers, students, and parents across East Africa.',
      liveUrl: 'https://school-mgmt-api.vercel.app/',
      domainTarget: 'lms.eaglespathway.com',
      statusText: 'Live Deployment • Mapping to lms.eaglespathway.com',
      statusType: 'live',
      metrics: [
        { label: 'Multi-Role RBAC', value: 'Admin, Teacher, Student, Guardian' },
        { label: 'Query Latency', value: '< 16ms Edge DB' },
        { label: 'Data Architecture', value: 'Multi-Tenant Isolated Schema' },
        { label: 'Availability', value: '99.98% High Uptime' }
      ],
      techStack: ['Next.js 16', 'TypeScript', 'Supabase / Postgres', 'Tailwind CSS', 'REST APIs'],
      blueprintSchema: [
        'TENANT_ISOLATION: STRICT_ROW_LEVEL_SECURITY (RLS)',
        'GRADING_ENGINE: LOCALIZED_ETHIOPIAN_CURRICULUM_WEIGHTS',
        'AUTH: SECURE_JWT_SESSION_EXPIRATION + REFRESH_ROTATION',
        'REALTIME_SYNC: SUPABASE_CHANGEFEED_BROADCASTS'
      ]
    },
    core: {
      id: 'core',
      tabLabel: 'Eagle Core',
      specNum: 'SPEC // 02',
      name: 'Eagle Pathway Core Platform',
      badge: 'Global Mobility & Scholarships',
      category: 'Opportunity Discovery & Academic Mentorship',
      tagline: 'Connecting African students to verified international scholarships, career roadmaps & specialized tutoring.',
      description: 'A comprehensive discovery platform empowering the next generation of African talent to navigate university admissions, international scholarship funding, and high-impact career roadmaps.',
      liveUrl: 'https://www.eaglespathway.com/',
      statusText: 'Production Deployment (eaglespathway.com)',
      statusType: 'live',
      metrics: [
        { label: 'Target Audience', value: 'High School & University Scholars' },
        { label: 'Coverage', value: 'Global University Admissions' },
        { label: 'Optimization', value: 'Sub-second Edge SSR' },
        { label: 'CDN Distribution', value: 'Global Cloudflare Network' }
      ],
      techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Cloudflare'],
      blueprintSchema: [
        'INDEXING: INCREMENTAL_STATIC_REGENERATION (ISR_CACHE)',
        'QUERY_FILTER: MULTI_DIMENSIONAL_SCHOLARSHIP_TAXONOMY',
        'PORTFOLIO_BUILDER: STANDARDIZED_ACADEMIC_RESUME_PARSER',
        'LATENCY_TARGET: < 200MS_TTFB_ON_MOBILE_NETWORKS'
      ]
    },
    admin: {
      id: 'admin',
      tabLabel: 'Admin Ops',
      specNum: 'SPEC // 03',
      name: 'Eagle Pathway Admin Command',
      badge: 'Enterprise Operations',
      category: 'Institutional Compliance & Operations Command',
      tagline: 'Centralized administrative control center for institutional governance, educator vetting, and telemetry audit.',
      description: 'The secure administrative backbone coordinating partner institutions, verifying credentialed educators, auditing transactions, and monitoring ecosystem telemetry.',
      liveUrl: 'https://www.admin.eaglespathway.com/',
      statusText: 'Production Control Center (admin.eaglespathway.com)',
      statusType: 'live',
      metrics: [
        { label: 'Access Control', value: 'Granular Multi-Tier RBAC' },
        { label: 'Audit Logging', value: 'Immutable Timestamp Ledger' },
        { label: 'Session Security', value: 'Instant Revocation Enforced' },
        { label: 'Operations Scope', value: 'Ecosystem-Wide Governance' }
      ],
      techStack: ['React', 'TypeScript', 'PostgreSQL', 'OAuth2 Session Guards', 'Audit Telemetry'],
      blueprintSchema: [
        'SECURITY_POLICY: ZERO_TRUST_ADMIN_ACCESS_ROUTING',
        'DOCUMENT_SCREENING: AUTOMATED_ACCREDITATION_PIPELINE',
        'EVENT_STREAMING: LIVE_AUDIT_LOG_TELEMETRY',
        'COMPLIANCE: INSTITUTIONAL_DATA_PRIVACY_ENFORCED'
      ]
    },
    receipt: {
      id: 'receipt',
      tabLabel: 'VerifyReceipt',
      specNum: 'SPEC // 04',
      name: 'VerifyReceipt FinTech Engine',
      badge: 'FinTech Fraud Prevention',
      category: 'Automated Banking & Mobile Money Slip Validation',
      tagline: 'Instant transaction verification & fraud detection for Telebirr, CBE Birr, and Ethiopian commercial banks.',
      description: 'A specialized verification engine that parses, authenticates, and validates payment slips from Ethiopian commercial banks and mobile wallets to prevent merchant fraud.',
      liveUrl: '#contact',
      statusText: 'Core FinTech Fraud Prevention Engine',
      statusType: 'core',
      metrics: [
        { label: 'Supported Gateways', value: 'Telebirr, CBE Birr, Awash Bank' },
        { label: 'Slip Parsing Time', value: '< 45ms Local Heuristics' },
        { label: 'Tamper Detection', value: 'Font Weight, Regex, Timestamp' },
        { label: 'Architecture', value: 'Offline-First Dart / Flutter Core' }
      ],
      techStack: ['Dart', 'Flutter', 'Regex Heuristic Matchers', 'OCR Heuristics', 'Bank Format Specs'],
      blueprintSchema: [
        'REGEX_PATTERN: DETERMINISTIC_TELEBIRR_REF_MATCH',
        'TAMPER_CHECK: FONT_KERNING_AND_COMPRESSION_ANALYZER',
        'LEDGER_RECONCILIATION: AUTOMATED_MERCHANT_WEBHOOKS',
        'EXECUTION: OFFLINE_CAPABLE_LIGHTWEIGHT_BINARY'
      ]
    },
    bot: {
      id: 'bot',
      tabLabel: 'EagleBot',
      specNum: 'SPEC // 05',
      name: 'EagleBot Automation Pipeline',
      badge: 'High-Concurrency Bot',
      category: 'Asynchronous Telegram Event Engine',
      tagline: 'Automated conversational pipeline processing applicant questions, opportunity broadcasts, and lead workflows.',
      description: 'An asynchronous bot architecture engineered to resolve thousands of repetitive student inquiries, broadcast opportunity alerts, and integrate leads directly into data pipelines.',
      liveUrl: '#contact',
      statusText: 'Active Production Worker Queue',
      statusType: 'core',
      metrics: [
        { label: 'Throughput', value: '10,000+ Queries / Day' },
        { label: 'Queue Architecture', value: 'Redis Non-Blocking Worker' },
        { label: 'Drop Rate', value: '0.00% Under Load' },
        { label: 'Webhook Latency', value: '< 25ms End-to-End' }
      ],
      techStack: ['Python', 'Telegram Bot API', 'Redis Event Queue', 'FastAPI', 'AsyncIO Workers'],
      blueprintSchema: [
        'ASYNC_EVENT_LOOP: NON_BLOCKING_PYTHON_COROUTINES',
        'QUEUE_BROKER: REDIS_IN_MEMORY_TASK_DISPATCHER',
        'LEAD_SYNC: WEBHOOK_TO_POSTGRESQL_PIPELINE',
        'CONTAINERIZATION: DOCKERIZED_LOW_FOOTPRINT_WORKER'
      ]
    }
  };

  const current = ecosystem[activeTab];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-blueprint-grid">
      {/* Subtle Blueprint Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-[#0099ff]/12 via-[#6366f1]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Studio Technical Telemetry Eyebrow */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-100/90 dark:bg-[#0f1219]/90 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md"
          >
            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">SYS 99.98% NOMINAL</span>
            </span>
            <span className="text-slate-400 dark:text-slate-600">//</span>
            <span className="text-[#0099ff] font-semibold">EAGLE PATHWAY STUDIO</span>
            <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">//</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] hidden sm:inline flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#0099ff]" />
              {timeString}
            </span>
            <span className="text-slate-400 dark:text-slate-600 hidden md:inline">//</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] hidden md:inline flex items-center gap-1">
              <Radio className="w-3 h-3 text-emerald-400" />
              PING: 18ms (ADDIS ➔ EDGE)
            </span>
          </motion.div>
        </div>

        {/* Hero Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06]"
          >
            Engineering Software That{' '}
            <span className="bg-gradient-to-r from-[#0099ff] via-cyan-400 to-[#6366f1] bg-clip-text text-transparent">
              Operates at Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We are the software engineering studio powering <strong className="text-slate-900 dark:text-white font-semibold">Eagle Pathway</strong>, high-precision FinTech verification engines, and scalable SaaS platforms built for East Africa and global markets.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <a
              href="#products"
              onClick={() => soundEngine.playClick()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] shadow-lg shadow-[#0099ff]/25 flex items-center justify-center gap-2.5 transition-all duration-200"
            >
              <span>Explore Live Systems</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://school-mgmt-api.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#11141c] border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/25 flex items-center justify-center gap-2 transition-all duration-200 shadow-xs"
            >
              <span>Launch LMS Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0099ff]" />
            </a>

            <Link
              href="#contact"
              onClick={() => soundEngine.playClick()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white border border-transparent hover:border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <span>Scope a Project</span>
            </Link>
          </motion.div>

          {/* Precision Blueprint Telemetry Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-600 dark:text-slate-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff]" />
              Domain: <code className="text-slate-900 dark:text-white font-semibold">tech.eaglespathway.com</code>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff]" />
              LMS Target: <code className="text-slate-900 dark:text-white font-semibold">lms.eaglespathway.com</code>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Verified Core Systems: <strong className="text-emerald-500 font-bold">5 Active Deployments</strong>
            </span>
          </motion.div>
        </div>

        {/* =================================================================== */}
        {/* INTERACTIVE ECOSYSTEM RUNTIME CONSOLE                               */}
        {/* =================================================================== */}
        <motion.div
          id="products"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl studio-card overflow-hidden shadow-2xl relative"
        >
          {/* Top Window Chrome Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#0c0e14]/90 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#0099ff]" />
                <span>RUNTIME_CONSOLE // EAGLE PATHWAY ECOSYSTEM</span>
              </span>
            </div>

            {/* Mode Switcher: Specs vs Blueprint */}
            <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-white/5 p-0.5 rounded-lg self-start sm:self-auto border border-slate-300 dark:border-white/5">
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setViewMode('overview');
                }}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  viewMode === 'overview'
                    ? 'bg-[#0099ff] text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setViewMode('blueprint');
                }}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  viewMode === 'blueprint'
                    ? 'bg-[#0099ff] text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                Blueprint Schema
              </button>
            </div>
          </div>

          {/* Product Tabs Navigation */}
          <div className="flex items-center overflow-x-auto border-b border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#080a0f]/70 px-4 py-2 gap-2 scrollbar-none">
            {Object.values(ecosystem).map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono shrink-0 transition-all ${
                  activeTab === item.id
                    ? 'bg-white dark:bg-[#141822] text-[#0099ff] font-bold border border-blue-500/30 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="text-[10px] text-slate-400">{item.specNum}</span>
                <span>{item.tabLabel}</span>
                {item.id === 'receipt' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 sm:p-8 bg-white/80 dark:bg-[#0a0c10]/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + viewMode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Product Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold tracking-wider bg-blue-500/10 text-[#0099ff] border border-blue-500/20">
                        {current.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {current.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {current.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                      {current.tagline}
                    </p>
                  </div>

                  {/* Actions / Live Links */}
                  <div className="flex flex-wrap items-center gap-2.5 self-start md:self-center shrink-0">
                    {current.liveUrl && current.liveUrl.startsWith('http') && (
                      <a
                        href={current.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundEngine.playClick()}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] transition-colors shadow-sm"
                      >
                        <span>Launch Live Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {current.liveUrl && current.liveUrl.startsWith('#') && (
                      <Link
                        href={current.liveUrl}
                        onClick={() => soundEngine.playClick()}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] transition-colors shadow-sm"
                      >
                        <span>Inquire For Integration</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* =================================================================== */}
                {/* SPECIAL INTERACTIVE DEMO: VERIFYRECEIPT ENGINE SIMULATOR            */}
                {/* =================================================================== */}
                {activeTab === 'receipt' && (
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#0f1219] border border-blue-500/20 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#0099ff] uppercase tracking-wider block">
                          Interactive Live Simulator // Slip Verification Pipeline
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          Test real-time deterministic verification heuristic for Ethiopian payment slips:
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            soundEngine.playSwitch();
                            setSimProvider('telebirr');
                            setSimComplete(false);
                          }}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                            simProvider === 'telebirr'
                              ? 'bg-[#0099ff] text-white font-semibold'
                              : 'bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          Telebirr Slip
                        </button>
                        <button
                          onClick={() => {
                            soundEngine.playSwitch();
                            setSimProvider('cbe');
                            setSimComplete(false);
                          }}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                            simProvider === 'cbe'
                              ? 'bg-[#0099ff] text-white font-semibold'
                              : 'bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          CBE Bank Slip
                        </button>
                        <button
                          onClick={runSimulation}
                          disabled={isSimulating}
                          className="px-3.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 shadow-xs cursor-pointer"
                        >
                          {isSimulating ? (
                            <>
                              <Activity className="w-3.5 h-3.5 animate-spin" />
                              <span>Parsing...</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>Run Verification</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Simulation Output Terminal */}
                    <div className="p-4 rounded-lg bg-slate-900 dark:bg-[#060709] border border-slate-800 dark:border-white/10 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1.5 border-b border-slate-800">
                        <span>ENGINE: DART_OCR_REGEX_V2.1 // OFFLINE_FIRST</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={copySimPayload}
                            className="text-[#0099ff] hover:underline flex items-center gap-1 text-[10px]"
                          >
                            {copiedPayload ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedPayload ? 'Copied JSON' : 'Copy JSON Payload'}</span>
                          </button>
                          <span>TARGET: {simProvider.toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="text-slate-300 pt-1">
                        &gt; Loaded Slip: {simProvider === 'telebirr' ? 'REC-ET-TELEBIRR-984920412.png' : 'REC-CBE-ET-TX773910394.png'}
                      </div>
                      {isSimulating && (
                        <div className="text-[#0099ff] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#0099ff] animate-ping" />
                          Running transaction regex heuristics & font kerning analysis...
                        </div>
                      )}
                      {simComplete && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-1 text-emerald-400"
                        >
                          <div>[✔] TRANSACTION REF: {simProvider === 'telebirr' ? 'TB88392019482' : 'FT24098920134'} VALIDATED</div>
                          <div>[✔] TIMESTAMP: 2026-10-25 12:22 UTC+3 (CONFIRMED_WITHIN_WINDOW)</div>
                          <div>[✔] FONT_COMPRESSION_HEURISTIC: NO_ALTERATION_DETECTED (CONFIDENCE: 99.8%)</div>
                          <div className="text-white font-bold pt-1">
                            STATUS: LEGITIMATE PAYMENT // ZERO FRAUD DETECTED
                          </div>
                        </motion.div>
                      )}
                      {!isSimulating && !simComplete && (
                        <div className="text-slate-500">
                          Click &quot;Run Verification&quot; to execute live parser simulation.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* View Mode: Overview vs Blueprint Schema */}
                {viewMode === 'overview' ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Column: Solution Scope & Capabilities */}
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                        Production Specifications & Capabilities
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {current.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {current.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-[#0f1219] border border-slate-200 dark:border-white/5 space-y-0.5"
                          >
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              {metric.label}
                            </span>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Stack & Deployment Telemetry */}
                    <div className="md:col-span-5 space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                        Production Architecture & Stack
                      </h4>
                      
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0f1219] border border-slate-200 dark:border-white/5 space-y-3.5">
                        <div>
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-2">
                            Core Technologies
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {current.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                            Current Deployment Status
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                              {current.statusText}
                            </span>
                          </div>
                        </div>

                        {current.domainTarget && (
                          <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                              Domain Routing
                            </span>
                            <span className="text-xs font-mono text-[#0099ff] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                              {current.domainTarget}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Blueprint Schema View */
                  <div className="p-5 rounded-xl bg-slate-900 dark:bg-[#060709] border border-slate-800 dark:border-white/10 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                      <span>SYSTEM_BLUEPRINT_TOPOLOGY // {current.id.toUpperCase()}</span>
                      <span className="text-emerald-400">SCHEMA_CONTRACT: VERIFIED</span>
                    </div>
                    <div className="space-y-2 text-slate-300">
                      {current.blueprintSchema.map((schemaLine, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#0099ff] select-none">&gt;&gt;</span>
                          <span className="text-slate-200">{schemaLine}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
                      <span>STRICT_TYPESCRIPT_AND_POSTGRES_CONSTRAINTS_ENFORCED</span>
                      <span>ADDIS_ABABA_STUDIO</span>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
