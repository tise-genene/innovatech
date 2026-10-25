'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Cpu, 
  Bot, 
  LineChart, 
  Check, 
  ArrowRight, 
  Layers, 
  Code2, 
  Database, 
  Zap, 
  Palette, 
  Terminal,
  FileCode2,
  Copy
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface ServiceCategory {
  num: string;
  id: string;
  title: string;
  summary: string;
  tagline: string;
  icon: any;
  items: { name: string; desc: string }[];
  deliverables: string[];
  techStack: string[];
  codeContract: string;
}

export default function Services() {
  const categories: ServiceCategory[] = [
    {
      num: '01',
      id: 'product-dev',
      title: 'Full-Stack Platforms & LMS',
      summary: 'Building multi-tenant SaaS, educational portals, and web applications.',
      tagline: 'We architect and build full-scale digital software products from zero to production deployment.',
      icon: Rocket,
      items: [
        { name: 'SaaS & Portal Engineering', desc: 'Multi-tenant cloud platforms featuring role-based RBAC, subscription billing, and audit logs.' },
        { name: 'Educational SIS & LMS', desc: 'School administration suites, grading engines, attendance trackers, and student-parent portals.' },
        { name: 'High-Performance Web Apps', desc: 'Sub-second page rendering using Next.js 16 App Router, TypeScript, and server components.' },
        { name: 'Cross-Platform Mobile', desc: 'Production iOS and Android applications engineered with React Native and Flutter/Dart.' },
      ],
      deliverables: ['Production Next.js Codebase', 'Database Schema & Migrations', 'CI/CD Automated Deployments', 'Comprehensive Documentation'],
      techStack: ['Next.js 16', 'TypeScript', 'Supabase / Postgres', 'Tailwind CSS', 'Vercel / AWS'],
      codeContract: `// CONTRACT: Institutional Multi-Tenant Isolation
export interface TenantContract {
  tenantId: string;
  institutionName: string;
  curriculumModel: "ETHIOPIAN_NATIONAL" | "CAMBRIDGE_IGCSE";
  databaseSchema: string; // Isolated Postgres Schema
  activeEnrolledStudents: number;
}`
    },
    {
      num: '02',
      id: 'fintech-engineering',
      title: 'FinTech & Payment Systems',
      summary: 'Ethiopian banking integrations, Telebirr APIs, and receipt verification.',
      tagline: 'High-security transaction workflows, mobile money integration, and automated fraud prevention.',
      icon: Cpu,
      items: [
        { name: 'Receipt Verification Engines', desc: 'Automated verification parsers detecting forged payment slips from Telebirr and CBE.' },
        { name: 'Payment Gateway Integration', desc: 'Seamless checkout pipelines connecting local mobile money (Telebirr, CBE Birr) and Stripe.' },
        { name: 'High-Concurrency Backends', desc: 'RESTful and asynchronous microservices designed for zero-downtime transaction pipelines.' },
        { name: 'Database Query Tuning', desc: 'Relational PostgreSQL indexing, transaction locking, and ledger consistency.' },
      ],
      deliverables: ['Banking API Adapters', 'Fraud Verification Test Suite', 'OpenAPI / Swagger Specs', 'Secure Webhook Queue'],
      techStack: ['TypeScript', 'Dart', 'Node.js', 'Python FastAPI', 'PostgreSQL', 'Telebirr API'],
      codeContract: `// CONTRACT: FinTech Slip Validation Response
export interface SlipValidationResponse {
  transactionId: string;
  provider: "telebirr" | "cbe_birr" | "awash";
  amountInETB: number;
  timestamp: string;
  tamperConfidenceScore: number; // 0.00 (tampered) to 1.00 (authentic)
  isFraudulent: boolean;
}`
    },
    {
      num: '03',
      id: 'ai-automation',
      title: 'AI & Operational Automation',
      summary: 'Telegram bots, automated pipelines, and intelligent workflows.',
      tagline: 'Eliminate repetitive manual bottlenecks with custom conversational agents and background event loops.',
      icon: Bot,
      items: [
        { name: 'High-Throughput Telegram Bots', desc: 'Asynchronous bots handling thousands of customer or student queries with zero latency.' },
        { name: 'Operational Event Queues', desc: 'Background workers that parse leads, dispatch automated emails, and update CRM records.' },
        { name: 'RAG Knowledge Integrations', desc: 'Contextual retrieval augmented generation for instant documentation and institutional search.' },
      ],
      deliverables: ['Custom Telegram Bot Engine', 'Redis Event Worker Pipeline', 'LLM Prompt Architecture', 'Integration Webhooks'],
      techStack: ['Python', 'Telegram API', 'Redis', 'FastAPI', 'OpenAI / Claude', 'PgVector'],
      codeContract: `// CONTRACT: Async Worker Job Payload
export interface BotEventJob {
  eventId: string;
  channel: "telegram" | "whatsapp" | "webhook";
  senderId: string;
  intent: "SCHOLARSHIP_QUERY" | "ADMISSION_STATUS" | "SUPPORT";
  enqueuedAt: number;
}`
    },
    {
      num: '04',
      id: 'design-systems',
      title: 'Product Design & System Audits',
      summary: 'Design systems, technical audits, and performance tuning.',
      tagline: 'Precision UI/UX interfaces and rigorous code audits that elevate usability and technical durability.',
      icon: LineChart,
      items: [
        { name: 'Design Systems & UI/UX', desc: 'Figma component libraries, responsive design layouts, and accessible design tokens.' },
        { name: 'Codebase & Security Audits', desc: 'Deep-dive reviews of legacy codebases for memory leaks, type vulnerabilities, and security flaws.' },
        { name: 'Web Performance Tuning', desc: 'Optimizing bundle size, font loading, Core Web Vitals, and serverless execution latency.' },
      ],
      deliverables: ['Figma Component Library', 'Technical Audit Report', 'Web Vitals Optimization Report', 'Architectural Roadmap'],
      techStack: ['Figma', 'TypeScript', 'Lighthouse', 'Vercel Analytics', 'Next.js Turbopack'],
      codeContract: `// CONTRACT: Code Audit Deliverable SLA
export interface AuditReportDeliverable {
  securityVulnerabilitiesCount: number;
  coreWebVitalsScore: { lcp: number; fid: number; cls: number };
  bundleSizeReductionPercent: number;
  refactoringRoadmap: string[];
}`
    },
  ];

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(categories[0]);
  const [showCode, setShowCode] = useState(false);

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0c0e14] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-[#0099ff]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Studio Capabilities & Technical Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            We don&apos;t offer generic outsource packages. We engineer focused systems designed for real business demands.
          </p>
        </div>

        {/* 4 Large Category Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundEngine.playSwitch();
                  setActiveCategory(cat);
                  setShowCode(false);
                }}
                className={`p-6 rounded-2xl text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-[#11141c] border-2 border-[#0099ff] shadow-lg'
                    : 'studio-card text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xl font-bold font-mono ${isActive ? 'text-[#0099ff]' : 'text-slate-400 dark:text-slate-500'}`}>
                    {cat.num}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-[#0099ff] text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-xs mt-1 leading-relaxed line-clamp-2 ${isActive ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    {cat.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl studio-card p-6 sm:p-9 space-y-8 shadow-xl"
          >
            {/* Category Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-[#0099ff] border border-blue-500/20">
                    Category {activeCategory.num}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {activeCategory.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {activeCategory.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setShowCode(!showCode);
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <FileCode2 className="w-3.5 h-3.5 text-[#0099ff]" />
                  <span>{showCode ? 'Hide Interface Contract' : 'Preview Interface Contract'}</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => soundEngine.playClick()}
                  className="px-5 py-2.5 rounded-xl bg-[#0099ff] hover:bg-[#0088e0] text-xs font-semibold text-white shadow-sm flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <span>Scope a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Optional Code Contract Preview */}
            <AnimatePresence>
              {showCode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <pre className="p-4 rounded-xl bg-[#040507] border border-blue-500/20 text-[#0099ff] font-mono text-xs overflow-x-auto leading-relaxed">
                    <code>{activeCategory.codeContract}</code>
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sub-items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCategory.items.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-[#060709] border border-slate-200 dark:border-white/5 space-y-1.5"
                >
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff]" />
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Deliverables & Stack Footer */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-200 dark:border-white/10 text-xs">
              <div className="md:col-span-7 space-y-2.5">
                <span className="font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Engineering Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCategory.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 space-y-2.5">
                <span className="font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCategory.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[11px] text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
