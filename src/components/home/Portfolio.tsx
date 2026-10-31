'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Terminal, ExternalLink, Code2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface Project {
  id: string;
  num: string;
  name: string;
  category: string;
  scope: string;
  summary: string;
  sla: string;
  stack: string[];
  liveUrl?: string;
  apiSnippet: string;
  highlights: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'lms',
    num: '01',
    name: 'Eagle Pathway LMS & SIS',
    category: 'EdTech Enterprise Architecture',
    scope: 'Multi-Tenant School Operating System',
    summary: 'Centralized school administration system managing admissions, academic terms, localized Ethiopian grading rubrics, attendance pipelines, and real-time guardian visibility.',
    sla: '< 16ms Edge Queries',
    stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Supabase RLS', 'Tailwind CSS'],
    liveUrl: 'https://school-mgmt-api.vercel.app/',
    highlights: [
      'Multi-tenant Row Level Security (RLS) guaranteeing absolute data isolation',
      'Localized Ethiopian grading & GPA computation algorithm',
      'Real-time student attendance & parent sync notifications',
      'Sub-second page loads via Next.js 16 App Router',
    ],
    apiSnippet: `// GET /api/v1/schools/:tenantId/transcripts
export async function GET(req: Request, { params }: RouteParams) {
  const session = await authenticateTenant(req);
  const transcript = await db.transcripts.findUnique({
    where: { 
      studentId: params.studentId, 
      tenantId: session.tenantId 
    },
    include: { terms: true, gpaCalculations: true }
  });
  return NextResponse.json({ status: "SUCCESS", latencyMs: 14, data: transcript });
}`,
  },
  {
    id: 'receipt',
    num: '02',
    name: 'VerifyReceipt™ Engine',
    category: 'FinTech Fraud Defense',
    scope: 'Zero-Trust Slip Forensic Validator',
    summary: 'High-throughput offline verification engine engineered to catch digitally altered or Photoshopped payment receipts across Telebirr, Commercial Bank of Ethiopia (CBE), and Awash Bank.',
    sla: 'Sub-45ms Binary',
    stack: ['Dart', 'Flutter', 'Regex Heuristics', 'OCR Normalization', 'Telebirr API'],
    liveUrl: '#verify-receipt',
    highlights: [
      'Micro-pixel kerning and font-weight compression heuristic engine',
      'Deterministic transaction ID modulo-97 checksum validator',
      'Sub-45ms execution in local offline-first Dart/Flutter binary',
      'Direct REST webhook dispatcher for merchant automations',
    ],
    apiSnippet: `// VerifyReceipt Offline Engine
final slipResult = VerifyReceiptEngine.analyzeSlip(
  slipBytes: imageBytes,
  gateway: PaymentGateway.telebirr,
  timeToleranceWindow: Duration(hours: 24),
);
if (slipResult.isTampered) {
  throw FraudSlipException(slipResult.fraudReasons);
}`,
  },
  {
    id: 'core',
    num: '03',
    name: 'Eagle Pathway Core Portal',
    category: 'Global Academic Mobility',
    scope: 'Mentorship & Opportunity Discovery Engine',
    summary: 'Centralized discovery platform connecting thousands of African scholars with verified international scholarships, career roadmaps, and global mentors.',
    sla: '< 180ms TTFB Globally',
    stack: ['Next.js', 'React', 'Node.js', 'Cloudflare Edge CDN', 'ISR'],
    liveUrl: 'https://www.eaglespathway.com/',
    highlights: [
      'Incremental Static Regeneration (ISR) with Cloudflare global caching',
      'Automated deadline alerts and localized scholarship roadmap matching',
      'Scalable mentor-booking engine with zero calendar collisions',
      'Mobile-first responsive architecture optimized for low-bandwidth networks',
    ],
    apiSnippet: `// Incremental Static Regeneration for Global Scholarships
export const revalidate = 3600; // Edge cache 1 hour
export async function getScholarshipCatalog() {
  const catalog = await fetchOpportunityStream({ cache: 'force-cache' });
  return catalog.map(formatOpportunityRoadmap);
}`,
  },
  {
    id: 'admin',
    num: '04',
    name: 'Eagle Pathway Admin Command',
    category: 'Institutional Governance',
    scope: 'Multi-Role Governance Suite',
    summary: 'High-security administrative command center managing cross-school credentials, student enrollment ledgers, automated document verification, and system telemetry.',
    sla: 'Zero-Trust Gateway',
    stack: ['React', 'TypeScript', 'Granular RBAC', 'Audit Ledger', 'Tailwind'],
    liveUrl: 'https://www.admin.eaglespathway.com/',
    highlights: [
      'Zero-trust gateway with instant session revocation across all edge nodes',
      '100% immutable operational ledger logging all admin activities',
      'Bulk student data ingestion and automated document OCR check',
      'Real-time cluster telemetry and error trace observability',
    ],
    apiSnippet: `// Zero-Trust Session Gateway Audit
export async function auditAdminAction(action: AdminActionPayload) {
  const signature = await generateCryptoSignature(action);
  await db.immutableAuditLedger.insert({
    ...action,
    signature,
    timestamp: new Date().toISOString()
  });
}`,
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'overview' | 'code'>('overview');
  const [selectedId, setSelectedId] = useState<string>('lms');
  const [copiedCode, setCopiedCode] = useState(false);

  const current = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  const handleCopy = (code: string) => {
    soundEngine.playSuccess();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="work" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#01040a] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-200 dark:border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>[ 02 // FLAGSHIP SYSTEMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Engineered Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">In Production</span>
            </h2>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Every product below was built by our engineering team from zero to production. Explore real live deployments, inspect architectural code, and verify performance benchmarks.
          </p>
        </div>

        {/* 3D Bento System Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: System Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  soundEngine.playSwitch();
                  setSelectedId(proj.id);
                }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                  selectedId === proj.id
                    ? 'bg-white dark:bg-neutral-900/90 border-sky-500/50 dark:border-cyan-500/50 shadow-md dark:shadow-[0_0_30px_rgba(0,240,255,0.18)]'
                    : 'bg-slate-50/80 hover:bg-slate-100/90 dark:bg-neutral-950/60 dark:hover:bg-neutral-900/40 border-slate-200 dark:border-neutral-800/80'
                }`}
              >
                {/* Active Indicator Glow Bar */}
                {selectedId === proj.id && (
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-sky-500 to-indigo-600 dark:from-cyan-400 dark:to-indigo-500 shadow-sm" />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-neutral-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                    [{proj.num} // {proj.category.toUpperCase()}]
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {proj.sla}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-cyan-300 transition-colors">
                  {proj.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-neutral-400 line-clamp-2 mt-1 leading-relaxed">
                  {proj.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Deep-Dive Interactive Inspection Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#050a16] shadow-xl overflow-hidden">
              
              {/* Panel Header Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-neutral-800 bg-slate-50/80 dark:bg-neutral-900/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-widest block font-bold">
                    INSPECTION SUITE
                  </span>
                  <h4 className="text-base font-bold font-mono text-slate-900 dark:text-white mt-0.5">
                    {current.name}
                  </h4>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 text-xs font-mono">
                  <button
                    onClick={() => {
                      soundEngine.playSwitch();
                      setActiveTab('overview');
                    }}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'overview'
                        ? 'bg-white text-slate-900 font-bold border border-slate-300 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/40 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white'
                    }`}
                  >
                    OVERVIEW
                  </button>
                  <button
                    onClick={() => {
                      soundEngine.playSwitch();
                      setActiveTab('code');
                    }}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-white text-slate-900 font-bold border border-slate-300 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/40 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white'
                    }`}
                  >
                    CODE BLUEPRINT
                  </button>
                </div>
              </div>

              {/* Panel Body */}
              <div className="p-6 sm:p-8">
                {activeTab === 'overview' ? (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase block mb-1">Architectural Scope</span>
                      <p className="text-sm text-slate-700 dark:text-neutral-200 leading-relaxed font-light">
                        {current.summary}
                      </p>
                    </div>

                    {/* Highlights Bullet List */}
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase block mb-2">Engineered Highlights</span>
                      <div className="space-y-2">
                        {current.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-neutral-300 font-mono">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-neutral-400 uppercase block mb-2">Production Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {current.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-xs font-mono text-slate-800 dark:text-cyan-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct Live Action Launch */}
                    {current.liveUrl && (
                      <div className="pt-4 border-t border-slate-200 dark:border-neutral-800 flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          LIVE DEPLOYMENT READY
                        </span>

                        <a
                          href={current.liveUrl}
                          target={current.liveUrl.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          onClick={() => soundEngine.playClick()}
                          className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-black text-xs font-mono font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>Open Live System</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-neutral-400">
                      <span>PRODUCTION ROUTE HANDLER</span>
                      <button
                        onClick={() => handleCopy(current.apiSnippet)}
                        className="flex items-center gap-1.5 text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'COPIED TO CLIPBOARD' : 'COPY CODE'}</span>
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-slate-950 dark:bg-black/90 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed shadow-inner">
                      <code>{current.apiSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
