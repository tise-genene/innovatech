'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  TrendingUp, 
  Code2, 
  Bot, 
  GraduationCap, 
  CreditCard, 
  ShoppingBag, 
  Building2 
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: 'ai' | 'saas' | 'corporate' | 'ecommerce';
  badge: string;
  shortDesc: string;
  fullDesc: string;
  imageBg: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  icon: any;
  liveUrl?: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'saas' | 'corporate'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'eagle-pathway',
      name: 'Eagle Pathway',
      category: 'ai',
      badge: 'Featured AI Platform',
      shortDesc: 'AI-driven educational guidance & career pathway mapping engine for African students and professionals.',
      fullDesc: 'Eagle Pathway leverages modern large language models and vectorized skills databases to evaluate student academic backgrounds and provide personalized career progression roadmaps, mentorship pairings, and automated course recommendations.',
      imageBg: 'from-blue-600/30 via-cyan-500/20 to-indigo-900/40',
      techStack: ['Next.js 16', 'Python / FastAPI', 'OpenAI API', 'Vector DB', 'Tailwind CSS', 'PostgreSQL'],
      metrics: [
        { label: 'Active Users', value: '45,000+' },
        { label: 'Accuracy Rating', value: '96.8%' },
        { label: 'Career Outcomes', value: '3.4x Growth' },
      ],
      highlights: [
        'Personalized LLM career coaching bot with Amharic & English support',
        'Interactive skill gap analyzer and resume enhancement engine',
        'Seamless integration with local university degree frameworks',
      ],
      icon: GraduationCap,
      liveUrl: 'https://eaglepathway.et',
    },
    {
      id: 'eagle-bot',
      name: 'EagleBot',
      category: 'ai',
      badge: 'Conversational AI System',
      shortDesc: 'Multi-channel intelligent bot platform for customer support, automated CRM, and sales conversion.',
      fullDesc: 'EagleBot bridges messaging applications (Telegram, WhatsApp, Web) with backend enterprise databases to handle thousands of concurrent support queries, order tracking requests, and lead qualifications autonomously.',
      imageBg: 'from-indigo-600/30 via-purple-500/20 to-[#00aeef]/30',
      techStack: ['React', 'Node.js', 'Telegram API', 'OpenAI Workflows', 'Redis', 'Webhooks'],
      metrics: [
        { label: 'Response Latency', value: '< 400ms' },
        { label: 'Queries Handled', value: '1.2M+' },
        { label: 'Support Cost Saved', value: '65%' },
      ],
      highlights: [
        'Automated multi-lingual conversation routing and sentiment analysis',
        'Custom workflow triggers connecting directly to local ERPs',
        'Real-time analytics dashboard with agent handover controls',
      ],
      icon: Bot,
      liveUrl: 'https://eaglebot.et',
    },
    {
      id: 'fintech-saas',
      name: 'OmniPay FinTech SaaS',
      category: 'saas',
      badge: 'Enterprise SaaS',
      shortDesc: 'Next-generation subscription billing, automated invoicing, and financial ledger platform.',
      fullDesc: 'Built for fast-growing African digital businesses, OmniPay simplifies cross-border payment aggregation, multi-currency invoicing, tax calculations, and real-time revenue analytics.',
      imageBg: 'from-emerald-600/30 via-[#00aeef]/20 to-slate-900',
      techStack: ['Next.js 16', 'TypeScript', 'Stripe', 'Telebirr API', 'Node.js', 'PostgreSQL'],
      metrics: [
        { label: 'Volume Processed', value: '$12M+' },
        { label: 'Transaction Speed', value: '99.99%' },
        { label: 'Churn Reduction', value: '28%' },
      ],
      highlights: [
        'Native integration with Ethiopian local payment gateways (Telebirr, CBE Birr, Chapa)',
        'Automated recurring billing engine with failed transaction retry logic',
        'Comprehensive financial reconciliation dashboard for accounting teams',
      ],
      icon: CreditCard,
    },
    {
      id: 'headless-ecommerce',
      name: 'Afrimart Digital Retail Engine',
      category: 'ecommerce',
      badge: 'E-Commerce Platform',
      shortDesc: 'High-conversion headless e-commerce storefront with instant search and sub-second page loads.',
      fullDesc: 'Designed for enterprise retail brands seeking high performance on mobile networks. Features offline cart sync, rapid checkout pipelines, and intelligent product recommendations.',
      imageBg: 'from-amber-600/30 via-orange-500/20 to-purple-900/30',
      techStack: ['Next.js 16', 'GraphQL', 'Shopify Headless', 'Tailwind CSS', 'Vercel Edge'],
      metrics: [
        { label: 'Page Load Speed', value: '0.4s' },
        { label: 'Mobile Conversion', value: '+142%' },
        { label: 'Catalog Size', value: '50k+ SKUs' },
      ],
      highlights: [
        'Ultra-fast progressive web app (PWA) optimized for low bandwidth',
        'Instant multi-attribute search and dynamic filter system',
        'Automated inventory sync across multiple fulfillment hubs',
      ],
      icon: ShoppingBag,
    },
    {
      id: 'banking-portal',
      name: 'Abyssinia Secure Banking Portal',
      category: 'corporate',
      badge: 'Banking & Enterprise',
      shortDesc: 'Bank-grade corporate banking dashboard with biometric auth, audit logging, and asset tracking.',
      fullDesc: 'A mission-critical enterprise portal built for institutional banking clients, enabling multi-tier transaction approval workflows, liquidity analytics, and automated compliance auditing.',
      imageBg: 'from-cyan-600/30 via-blue-700/20 to-slate-950',
      techStack: ['React', 'TypeScript', 'Node.js', 'Microservices', 'Docker', 'OAuth2 / WebAuthn'],
      metrics: [
        { label: 'Security Score', value: '100% Audit' },
        { label: 'Daily Transfers', value: '$5M+' },
        { label: 'Zero Downtime', value: '365 Days' },
      ],
      highlights: [
        'Multi-signature authorization flows for corporate wire transfers',
        'End-to-end audit trailing compliant with central bank standards',
        'Dark & light mode high-density financial data charts',
      ],
      icon: Building2,
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-[#00aeef]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Product Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Engineering &{' '}
              <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
                Digital Products
              </span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              We take full responsibility for product design, architecture, and deployment. Here is a selection of real-world platforms built for our partners.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-lg shadow-[#00aeef]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'ai'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-lg shadow-[#00aeef]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Systems
            </button>
            <button
              onClick={() => setSelectedCategory('saas')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'saas'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-lg shadow-[#00aeef]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SaaS Platforms
            </button>
            <button
              onClick={() => setSelectedCategory('corporate')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'corporate'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-lg shadow-[#00aeef]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Banking & Enterprise
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl border border-white/10 glass-card overflow-hidden hover:border-[#00aeef]/50 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Visual Header / Mock Graphic */}
                <div className={`h-48 p-6 bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex flex-col justify-between border-b border-white/10`}>
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[11px] font-mono text-[#00aeef] font-semibold">
                      {project.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-white">
                      <IconComponent className="w-4 h-4 text-[#00aeef]" />
                    </div>
                  </div>

                  {/* Graphic Mock Content */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00aeef] transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <span key={i} className="flex items-center gap-1 bg-slate-950/60 px-2 py-0.5 rounded border border-white/5">
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          <strong className="text-white">{m.value}</strong> {m.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00aeef]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Engineered With:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-[#00aeef] hover:text-white flex items-center gap-1.5 group/btn transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                        aria-label="View Live Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Modal Popup for Case Study */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-950 border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-xs font-mono text-[#00aeef]">
                    {activeProject.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeProject.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProject.fullDesc}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/90 border border-white/10">
                  {activeProject.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-[#00aeef]">{m.value}</div>
                      <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Key Deliverables & Architectural Features
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {activeProject.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400">Full Tech Stack Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Close Overview
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-xs font-semibold text-white shadow-lg shadow-[#00aeef]/20 flex items-center gap-2"
                  >
                    <span>Build Similar Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
