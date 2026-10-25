'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowUpRight, 
  GraduationCap, 
  ShieldCheck, 
  Bot, 
  Mail, 
  Code2, 
  CheckCircle2, 
  Building2, 
  Terminal,
  Layers,
  Sparkles,
  Cpu,
  X,
  Copy,
  Check
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface Project {
  id: string;
  figNum: string;
  name: string;
  category: 'ecosystem' | 'fintech' | 'tools';
  badge: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  techTags: string[];
  liveUrl?: string;
  domainTarget?: string;
  isFlagship?: boolean;
  architectureBlueprint: {
    topology: string;
    throughput: string;
    latency: string;
    apiSample: string;
  };
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecosystem' | 'fintech' | 'tools'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const projects: Project[] = [
    {
      id: 'eagle-lms',
      figNum: 'FIG 01 // EDTECH-SIS',
      name: 'Eagle Pathway LMS & SIS',
      category: 'ecosystem',
      badge: 'Production EdTech Suite',
      isFlagship: true,
      summary: 'Comprehensive multi-tenant school administration, automated grading, attendance tracking & student portal.',
      problem: 'Schools in East Africa rely on disconnected manual spreadsheets, causing lost student records, delayed report cards, and lack of parent visibility.',
      solution: 'A cloud-native School Information System (SIS) and Learning Management System (LMS) unifying admissions, attendance, term grading, and teacher-parent communication.',
      architecture: [
        'Multi-tenant database schema with strict school-level data isolation',
        'Custom grade calculation engine with localized Ethiopian curriculum grading rubrics',
        'Role-based permissions (Admin, Head of Dept, Teacher, Student, Parent)',
        'Sub-second API response times built with Next.js 16 App Router & Supabase'
      ],
      techTags: ['Next.js 16', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://school-mgmt-api.vercel.app/',
      domainTarget: 'lms.eaglespathway.com',
      architectureBlueprint: {
        topology: 'Client (Next.js 16 Edge) ➔ Vercel Serverless Functions ➔ Supabase PostgreSQL (RLS Multi-Tenant)',
        throughput: '1,500 requests / second with zero degradation',
        latency: '< 16ms Edge DB query execution',
        apiSample: `// GET /api/v1/students/:id/transcript
export async function GET(req: Request, { params }: RouteParams) {
  const session = await authenticateTenant(req);
  const transcript = await db.transcripts.findUnique({
    where: { studentId: params.id, tenantId: session.tenantId },
    include: { terms: true, gpaCalculations: true }
  });
  return NextResponse.json({ status: "success", data: transcript });
}`
      }
    },
    {
      id: 'verify-receipt',
      figNum: 'FIG 02 // FINTECH-FRAUD',
      name: 'VerifyReceipt Engine',
      category: 'fintech',
      badge: 'FinTech Fraud Prevention',
      isFlagship: true,
      summary: 'Instant automated parsing and validation for Ethiopian banking and mobile money receipts (Telebirr & CBE).',
      problem: 'E-commerce vendors and service providers in Ethiopia suffer significant losses from fake, digitally manipulated transaction screenshots claiming payments.',
      solution: 'A zero-trust verification parser that decodes transaction identifiers, checks cryptographic timestamps, verifies banking format heuristics, and flags counterfeit slips.',
      architecture: [
        'Deterministic regex pattern matchers for Telebirr and Commercial Bank of Ethiopia (CBE)',
        'Transaction signature heuristic checker identifying tampered font weights and timestamps',
        'Offline-capable Dart/Flutter library designed for high-throughput merchant apps',
        'Extensible banking adapter architecture supporting Awash Bank and Dashen Bank'
      ],
      techTags: ['Dart', 'Flutter', 'FinTech Security', 'OCR Heuristics', 'Telebirr API'],
      liveUrl: '#contact',
      architectureBlueprint: {
        topology: 'Raw Slip Image / OCR Text ➔ Heuristic Normalizer ➔ Regex Pattern Matcher ➔ Tamper Detector ➔ Ledger Verifier',
        throughput: 'Sub-45ms execution per receipt slip',
        latency: 'Zero external network lag (Offline-First local binary)',
        apiSample: `// POST /api/v1/verify
final slipResult = VerifyReceiptEngine.analyzeSlip(
  slipBytes: imageBytes,
  gateway: PaymentGateway.telebirr,
  timeToleranceWindow: Duration(hours: 24),
);
if (slipResult.isTampered) {
  throw FraudSlipException(slipResult.fraudReasons);
}`
      }
    },
    {
      id: 'eagle-pathway-core',
      figNum: 'FIG 03 // PORTAL-DISCOVERY',
      name: 'Eagle Pathway Core Platform',
      category: 'ecosystem',
      badge: 'Live Student Portal',
      isFlagship: true,
      summary: 'Discovery engine connecting African students with international scholarships, tutors, and career roadmaps.',
      problem: 'African students encounter scattered, unreliable information when searching for verified international scholarships and structured academic mentorship.',
      solution: 'A centralized portal featuring curated scholarship databases, deadline alerts, tutor booking, and step-by-step application guidance.',
      architecture: [
        'High-performance static generation with incremental revalidation for scholarship updates',
        'Filter engine sorting opportunities by country, degree level, and financial aid type',
        'Student profile portfolio builder tailored for university admissions',
        'Edge-cached global distribution via Cloudflare'
      ],
      techTags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Cloudflare'],
      liveUrl: 'https://www.eaglespathway.com/',
      architectureBlueprint: {
        topology: 'Global Visitors ➔ Cloudflare Edge CDN ➔ Next.js ISR (Incremental Static Revalidation) ➔ PostgreSQL',
        throughput: '50,000+ monthly student interactions',
        latency: '< 180ms TTFB across East African cellular networks',
        apiSample: `// GET /api/v1/scholarships?country=germany&field=engineering
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const results = await searchScholarships(searchParams);
  return NextResponse.json({ results }, { headers: { 'Cache-Control': 's-maxage=3600' } });
}`
      }
    },
    {
      id: 'eagle-admin',
      figNum: 'FIG 04 // OPS-RBAC',
      name: 'Eagle Pathway Admin Command',
      category: 'ecosystem',
      badge: 'Operations & Compliance',
      summary: 'Centralized administrative control center for platform governance, tutor screening, and institutional analytics.',
      problem: 'Managing multiple education partners, verifying tutor credentials, and monitoring applicant pipelines requires bank-grade administrative controls.',
      solution: 'A secure operations dashboard delivering granular oversight, automated document verification workflows, and audit-logged operations.',
      architecture: [
        'Multi-factor authenticated admin gateway with strict session invalidation',
        'Document inspection and verified badge approval pipelines',
        'Live ecosystem health metrics and transaction monitoring'
      ],
      techTags: ['React', 'TypeScript', 'RBAC Security', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://www.admin.eaglespathway.com/',
      architectureBlueprint: {
        topology: 'Admin Client ➔ Session Guard Gateway ➔ Granular RBAC Middleware ➔ Audit Ledger DB',
        throughput: '100% Immutable audit event capture',
        latency: '< 30ms internal admin queries',
        apiSample: `// POST /api/admin/verify-educator
export async function POST(req: Request) {
  const admin = await requireRole(req, ['SUPER_ADMIN', 'COMPLIANCE_LEAD']);
  const { tutorId, status } = await req.json();
  await auditLog(admin.id, 'EDUCATOR_VERIFIED', { tutorId, status });
  return NextResponse.json({ updated: true });
}`
      }
    },
    {
      id: 'eaglebot',
      figNum: 'FIG 05 // TELEGRAM-AI',
      name: 'EagleBot Conversational AI',
      category: 'tools',
      badge: 'Telegram Automation',
      summary: 'High-throughput Telegram bot managing applicant inquiries, scholarship broadcasts, and automated FAQs.',
      problem: 'Managing high-volume applicant questions during scholarship deadlines manually leads to hours of delay and frustrated applicants.',
      solution: 'An automated Telegram service bot processing incoming questions, providing contextual guidance, and registering candidate leads automatically.',
      architecture: [
        'Asynchronous Python bot utilizing non-blocking event loops',
        'Redis queue managing high message spikes during scholarship deadline announcements',
        'Webhook integrations pushing qualified student leads into Eagle Pathway databases'
      ],
      techTags: ['Python', 'Telegram Bot API', 'Redis Queue', 'Webhooks', 'AsyncIO'],
      liveUrl: '#contact',
      architectureBlueprint: {
        topology: 'Telegram Webhook ➔ FastAPI Dispatcher ➔ Redis Task Queue ➔ Async Python Worker Cluster ➔ PostgreSQL',
        throughput: '10,000+ daily conversational interactions',
        latency: '< 25ms webhook acknowledgement',
        apiSample: `@router.post("/telegram-webhook")
async def handle_update(update: TelegramUpdate, bg_tasks: BackgroundTasks):
    bg_tasks.add_task(task_queue.dispatch, update.message)
    return {"status": "enqueued"}`
      }
    },
    {
      id: 'unmail',
      figNum: 'FIG 06 // PROTOCOL-UTIL',
      name: 'Unmail Subscription Manager',
      category: 'tools',
      badge: 'Productivity Tool',
      summary: 'One-click email cleanup and subscription management utility built with TypeScript.',
      problem: 'Inboxes get flooded with marketing newsletters and promotional clutter with hidden or deceptive unsubscribe links.',
      solution: 'A fast, privacy-focused tool that parses RFC headers to execute clean, zero-friction unsubscribes without selling user data.',
      architecture: [
        'Pure TypeScript parser analyzing List-Unsubscribe email headers',
        'Local client-side execution keeping credentials safe on user devices',
        'Lightweight, zero-telemetry architecture'
      ],
      techTags: ['TypeScript', 'Node.js', 'Email Protocols', 'RFC Standards'],
      liveUrl: '#contact',
      architectureBlueprint: {
        topology: 'Client Device IMAP / OAuth ➔ Local Header Parser ➔ RFC-2369 / RFC-8058 One-Click Execution',
        throughput: 'Zero server storage / 100% Client-Side Privacy',
        latency: 'Immediate client-side execution',
        apiSample: `export function parseUnsubscribeHeaders(headers: Headers): string | null {
  const raw = headers.get('list-unsubscribe');
  return extractMailtoOrHttpUrl(raw);
}`
      }
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const copyBlueprintCode = (code: string) => {
    navigator.clipboard.writeText(code);
    soundEngine.playSuccess();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-[#060709] relative border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#0099ff]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Verified Case Studies & Production Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Products We Engineered & Built
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              From flagship EdTech platforms serving thousands of students to specialized FinTech verification engines, explore the software architecture behind our work.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-[#11141c] border border-slate-300 dark:border-white/10 self-start md:self-auto">
            {(['all', 'ecosystem', 'fintech', 'tools'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  soundEngine.playSwitch();
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-[#0099ff] text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {filter === 'all' ? 'All Work' : filter === 'ecosystem' ? 'Eagle Pathway' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={`studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group ${
                  project.isFlagship ? 'border-[#0099ff]/30 dark:border-[#0099ff]/25' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Top Figure & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#0099ff] font-semibold tracking-wider">
                      {project.figNum}
                    </span>

                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-[#0099ff] transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Problem & Solution Box */}
                  <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#0c0e14] border border-slate-200/80 dark:border-white/5 space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block">
                        Problem Solved
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-snug">
                        {project.problem}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200 dark:border-white/5">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#0099ff] block">
                        Engineering Solution
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 mt-0.5 leading-snug">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Key Highlights
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {project.architecture.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Modal Trigger */}
                <div className="pt-6 mt-4 border-t border-slate-200 dark:border-white/5 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] flex items-center gap-1 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5 text-[#0099ff]" />
                      <span>Inspect Architecture</span>
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                        rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => soundEngine.playClick()}
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#0099ff] hover:underline"
                      >
                        <span>{project.liveUrl.startsWith('http') ? 'Live Portal' : 'Inquire'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* =================================================================== */}
      {/* ARCHITECTURE DEEP-DIVE MODAL                                       */}
      {/* =================================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                soundEngine.playClick();
                setSelectedProject(null);
              }}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-[#090b10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 text-white max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#0c0e14]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#0099ff] font-bold">
                      {selectedProject.figNum}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      // ARCHITECTURE_INSPECTOR
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {selectedProject.name}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedProject(null);
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-xs font-mono">
                {/* System Topology Diagram */}
                <div className="p-4 rounded-xl bg-[#050608] border border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Distributed Topology & Data Flow
                  </span>
                  <div className="p-3 rounded-lg bg-[#0c0e14] border border-white/5 text-[#0099ff] leading-relaxed">
                    {selectedProject.architectureBlueprint.topology}
                  </div>
                </div>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Throughput Capacity</span>
                    <span className="text-sm font-bold text-white">{selectedProject.architectureBlueprint.throughput}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Execution Latency</span>
                    <span className="text-sm font-bold text-emerald-400">{selectedProject.architectureBlueprint.latency}</span>
                  </div>
                </div>

                {/* Code Sample Contract */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Production API Contract / Implementation Code
                    </span>
                    <button
                      onClick={() => copyBlueprintCode(selectedProject.architectureBlueprint.apiSample)}
                      className="text-[11px] text-[#0099ff] hover:underline flex items-center gap-1"
                    >
                      {copiedCode ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <pre className="p-4 rounded-xl bg-[#040507] border border-white/10 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
                    <code>{selectedProject.architectureBlueprint.apiSample}</code>
                  </pre>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-4 border-t border-white/10 bg-[#0c0e14]">
                <span className="text-[10px] font-mono text-slate-500">
                  ENGINEERED BY EAGLE PATHWAY TECH AGENCY
                </span>

                {selectedProject.liveUrl && selectedProject.liveUrl.startsWith('http') && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] transition-colors"
                  >
                    <span>Launch Production App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
