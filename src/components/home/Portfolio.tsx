'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Check, 
  Copy, 
  Terminal,
  X,
  Code2
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface Project {
  id: string;
  num: string;
  name: string;
  category: string;
  scope: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  liveUrl?: string;
  apiSnippet: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const projects: Project[] = [
    {
      id: 'lms',
      num: '01',
      name: 'Eagle Pathway LMS & SIS',
      category: 'EdTech Enterprise Architecture',
      scope: 'Multi-Tenant School ERP & Student Portal',
      summary: 'Centralized school administration system managing admissions, academic terms, grading engines, and guardian communication.',
      problem: 'Schools across East Africa struggled with disconnected manual spreadsheets, causing lost student historical transcripts, delayed term report generation, and zero parent visibility.',
      solution: 'Engineered a cloud-native School Information System featuring localized Ethiopian grading rubrics, strict tenant data isolation, and sub-second attendance tracking.',
      architecture: [
        'PostgreSQL Row-Level Security (RLS) ensuring absolute tenant isolation',
        'Custom GPA and term computation engine supporting localized weights',
        'Next.js 16 App Router with server-side rendered student & admin portals',
        'Automated Supabase database changefeed events'
      ],
      stack: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Supabase RLS', 'Tailwind CSS'],
      liveUrl: 'https://school-mgmt-api.vercel.app/',
      apiSnippet: `// GET /api/v1/schools/:id/transcripts
export async function GET(req: Request, { params }: RouteParams) {
  const session = await authenticateTenant(req);
  const transcript = await db.transcripts.findUnique({
    where: { studentId: params.id, tenantId: session.tenantId },
    include: { terms: true, gpaCalculations: true }
  });
  return NextResponse.json({ status: "success", data: transcript });
}`
    },
    {
      id: 'receipt',
      num: '02',
      name: 'VerifyReceipt Engine',
      category: 'FinTech Fraud Defense',
      scope: 'Deterministic Slip Validation Parser',
      summary: 'Instant verification and counterfeit slip detection engine for Ethiopian commercial banks and mobile wallets.',
      problem: 'Merchants and digital businesses in Ethiopia suffer major revenue leakage from fraudulent, digitally altered payment screenshots purporting to be valid transfers.',
      solution: 'Engineered a zero-trust verification parser that validates transaction identifiers, checks cryptographic timestamps, inspects font kerning compression, and flags manipulated receipts.',
      architecture: [
        'Deterministic regex matchers for Telebirr and Commercial Bank of Ethiopia (CBE)',
        'Font kerning and compression artifact heuristic engine',
        'Offline-capable Dart/Flutter binary for high-throughput merchant execution',
        'Extensible adapter pattern for Ethiopian commercial banks'
      ],
      stack: ['Dart', 'Flutter', 'Regex Heuristics', 'OCR Normalization', 'Telebirr API'],
      liveUrl: '#contact',
      apiSnippet: `// VerifyReceipt Offline Engine
final slipResult = VerifyReceiptEngine.analyzeSlip(
  slipBytes: imageBytes,
  gateway: PaymentGateway.telebirr,
  timeToleranceWindow: Duration(hours: 24),
);
if (slipResult.isTampered) {
  throw FraudSlipException(slipResult.fraudReasons);
}`
    },
    {
      id: 'core',
      num: '03',
      name: 'Eagle Pathway Core Portal',
      category: 'Global Academic Mobility',
      scope: 'Mentorship & Opportunity Discovery Engine',
      summary: 'Discovery engine connecting African scholars with verified international scholarships, career roadmaps, and tutors.',
      problem: 'African students encounter scattered, unreliable information when searching for verified international scholarships and structured academic mentorship.',
      solution: 'A centralized portal featuring curated scholarship databases, deadline alerts, tutor booking, and step-by-step application guidance.',
      architecture: [
        'Incremental Static Regeneration (ISR) with edge caching for scholarship updates',
        'Multi-dimensional taxonomy filter across countries, degree levels, and financial aid',
        'Student profile portfolio builder tailored for university admissions',
        'Global edge routing via Cloudflare'
      ],
      stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Cloudflare'],
      liveUrl: 'https://www.eaglespathway.com/',
      apiSnippet: `// GET /api/v1/scholarships
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const results = await searchScholarships(searchParams);
  return NextResponse.json({ results }, { headers: { 'Cache-Control': 's-maxage=3600' } });
}`
    },
    {
      id: 'admin',
      num: '04',
      name: 'Eagle Pathway Admin Command',
      category: 'Operations & Compliance',
      scope: 'Centralized Administrative Control Center',
      summary: 'Centralized administrative control center for institutional governance, educator vetting, and telemetry audit.',
      problem: 'Managing multiple education partners, verifying tutor credentials, and monitoring applicant pipelines requires bank-grade administrative controls.',
      solution: 'A secure operations dashboard delivering granular oversight, automated document verification workflows, and audit-logged operations.',
      architecture: [
        'Multi-factor authenticated admin gateway with strict session invalidation',
        'Document inspection and verified badge approval pipelines',
        'Live ecosystem health metrics and transaction monitoring'
      ],
      stack: ['React', 'TypeScript', 'RBAC Security', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://www.admin.eaglespathway.com/',
      apiSnippet: `// POST /api/admin/verify-educator
export async function POST(req: Request) {
  const admin = await requireRole(req, ['SUPER_ADMIN', 'COMPLIANCE_LEAD']);
  const { tutorId, status } = await req.json();
  await auditLog(admin.id, 'EDUCATOR_VERIFIED', { tutorId, status });
  return NextResponse.json({ updated: true });
}`
    },
    {
      id: 'bot',
      num: '05',
      name: 'EagleBot Telegram Worker',
      category: 'Autonomous Event Queues',
      scope: 'High-Concurrency Conversational Pipeline',
      summary: 'Asynchronous event queue managing applicant questions, scholarship deadline broadcasts, and automated database sync.',
      problem: 'High-volume applicant questions during scholarship deadlines overwhelm manual teams, creating response lag and dropped leads.',
      solution: 'An asynchronous bot architecture processing incoming questions, executing contextual guidance, and registering candidate leads automatically.',
      architecture: [
        'Non-blocking asynchronous Python coroutine event loops',
        'Redis queue managing spikes during scholarship announcement deadlines',
        'Webhook integrations pushing qualified student leads into Eagle Pathway databases'
      ],
      stack: ['Python', 'Telegram Bot API', 'Redis Queue', 'FastAPI', 'AsyncIO'],
      liveUrl: '#contact',
      apiSnippet: `@router.post("/telegram-webhook")
async def handle_update(update: TelegramUpdate, bg_tasks: BackgroundTasks):
    bg_tasks.add_task(task_queue.dispatch, update.message)
    return {"status": "enqueued"}`
    },
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    soundEngine.playSuccess();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="work" className="py-24 lg:py-32 border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-2">
              [ 02 // CASE STUDIES ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Selected Systems
            </h2>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Real software systems engineered from zero to production. We structure every codebase for verifiable security, maintainability, and scale.
          </p>
        </div>

        {/* Case Studies List (Architectural Ledger) */}
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-t border-b border-neutral-200 dark:border-neutral-800">
          {projects.map((project) => (
            <div
              key={project.id}
              className="py-10 group transition-colors duration-150 hover:bg-neutral-50 dark:hover:bg-neutral-950/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Num & Title */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="text-xs font-mono text-neutral-500 block">
                    {project.num} // {project.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                    {project.scope}
                  </p>
                  
                  {project.liveUrl && (
                    <div className="pt-2">
                      {project.liveUrl.startsWith('http') ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundEngine.playClick()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-950 dark:text-white hover:underline"
                        >
                          <span>Open Live Portal</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                        </a>
                      ) : (
                        <Link
                          href={project.liveUrl}
                          onClick={() => soundEngine.playClick()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-950 dark:text-white hover:underline"
                        >
                          <span>Inquire For System Deployment</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                {/* Middle: Problem & Engineering Solution */}
                <div className="lg:col-span-5 space-y-4 text-xs">
                  <div>
                    <span className="font-mono text-neutral-500 uppercase block mb-1">
                      Problem Context:
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-neutral-500 uppercase block mb-1">
                      Engineering Approach:
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Right: Stack & Architecture Inspector Trigger */}
                <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-neutral-500 uppercase text-xs block mb-2">
                      Core Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-800 bg-neutral-100 border border-neutral-200 dark:text-neutral-300 dark:bg-neutral-900 dark:border-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      setSelectedProject(project);
                    }}
                    className="self-start text-xs font-mono text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer pt-2"
                  >
                    <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                    <span>View Architecture Contract</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Code Contract Modal */}
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
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-10 text-neutral-950 dark:text-white"
            >
              <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block">
                    {selectedProject.num} // ARCHITECTURE CONTRACT
                  </span>
                  <h3 className="text-base font-bold text-neutral-950 dark:text-white">
                    {selectedProject.name}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedProject(null);
                  }}
                  className="p-1 rounded text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 space-y-4 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-neutral-500 text-[10px] uppercase block">Architectural Deliverables:</span>
                  <ul className="space-y-1 list-disc list-inside text-neutral-700 dark:text-neutral-300 text-xs">
                    {selectedProject.architecture.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 text-[10px] uppercase">Implementation Endpoint:</span>
                    <button
                      onClick={() => copyCode(selectedProject.apiSnippet)}
                      className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-600 dark:text-white" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded bg-neutral-950 text-neutral-200 border border-neutral-800 overflow-x-auto text-[11px] leading-relaxed">
                    <code>{selectedProject.apiSnippet}</code>
                  </pre>
                </div>
              </div>

              <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedProject(null);
                  }}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
