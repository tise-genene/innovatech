'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  GraduationCap, 
  Bot, 
  CreditCard, 
  ShoppingBag, 
  Building2 
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  category: 'ai' | 'saas' | 'corporate' | 'ecommerce';
  badge: string;
  problem: string;
  solution: string;
  imageBg: string;
  techStackString: string;
  techTags: string[];
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
      badge: 'Education & Career Platform',
      problem: 'African students face fragmented information when searching for academic tutoring, verified international scholarships, and structured career roadmaps.',
      solution: 'Education platform connecting students with tutors, scholarships, and career opportunities powered by automated skill matching and localized guidance.',
      imageBg: 'from-blue-600/20 via-cyan-500/10 to-indigo-900/30 dark:from-blue-600/30 dark:via-cyan-500/20 dark:to-indigo-900/40',
      techStackString: 'Next.js • React Native • Supabase • PostgreSQL',
      techTags: ['Next.js', 'React Native', 'Supabase', 'PostgreSQL', 'Python'],
      icon: GraduationCap,
      liveUrl: 'https://eaglepathway.et',
    },
    {
      id: 'eagle-bot',
      name: 'EagleBot AI',
      category: 'ai',
      badge: 'Conversational AI System',
      problem: 'High customer support response times and expensive manual phone center operations during peak inquiry hours across Telegram and WhatsApp.',
      solution: 'Intelligent multi-channel conversational bot that resolves 80%+ of routine support queries and syncs leads directly into local ERP systems.',
      imageBg: 'from-indigo-600/20 via-purple-500/10 to-[#00aeef]/20 dark:from-indigo-600/30 dark:via-purple-500/20 dark:to-[#00aeef]/30',
      techStackString: 'React • Node.js • OpenAI Workflows • Redis • Webhooks',
      techTags: ['React', 'Node.js', 'OpenAI', 'Redis', 'Telegram API'],
      icon: Bot,
      liveUrl: 'https://eaglebot.et',
    },
    {
      id: 'omnipay-saas',
      name: 'OmniPay SaaS',
      category: 'saas',
      badge: 'FinTech Billing Engine',
      problem: 'Lack of unified subscription billing and automated cross-currency invoicing for regional software businesses in East Africa.',
      solution: 'Enterprise recurring billing engine integrating local mobile money (Telebirr, CBE Birr) and international credit cards into a single dashboard.',
      imageBg: 'from-emerald-600/20 via-cyan-600/10 to-slate-900/30 dark:from-emerald-600/30 dark:via-[#00aeef]/20 dark:to-slate-950',
      techStackString: 'Next.js • TypeScript • Stripe • Telebirr API • PostgreSQL',
      techTags: ['Next.js 16', 'TypeScript', 'Stripe', 'Telebirr API', 'PostgreSQL'],
      icon: CreditCard,
    },
    {
      id: 'afrimart-ecommerce',
      name: 'Afrimart Retail Engine',
      category: 'ecommerce',
      badge: 'Headless E-Commerce',
      problem: 'Slow page loads on low-bandwidth mobile networks leading to high cart abandonment rates for regional retail brands.',
      solution: 'Sub-second progressive web app with instant local catalog search, offline cart sync, and lightweight checkout pipelines.',
      imageBg: 'from-amber-600/20 via-orange-500/10 to-purple-900/20 dark:from-amber-600/30 dark:via-orange-500/20 dark:to-purple-900/30',
      techStackString: 'Next.js • GraphQL • Shopify Headless • Tailwind CSS',
      techTags: ['Next.js', 'GraphQL', 'Shopify', 'Tailwind CSS'],
      icon: ShoppingBag,
    },
    {
      id: 'abyssinia-banking',
      name: 'Abyssinia Corporate Portal',
      category: 'corporate',
      badge: 'Banking & Enterprise',
      problem: 'Legacy institutional banking dashboards lacked multi-tier approval workflows, audit trails, and biometric authentication for corporate wires.',
      solution: 'Bank-grade corporate treasury dashboard featuring multi-signature approvals, automated compliance checks, and real-time liquidity graphs.',
      imageBg: 'from-cyan-600/20 via-blue-700/10 to-slate-950/40 dark:from-cyan-600/30 dark:via-blue-700/20 dark:to-slate-950',
      techStackString: 'React • TypeScript • Node.js • Microservices • OAuth2',
      techTags: ['React', 'TypeScript', 'Node.js', 'Docker', 'WebAuthn'],
      icon: Building2,
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-[#08090a] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      {/* Background Radial Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#00aeef]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Product Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Case Studies &{' '}
              <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
                Digital Products
              </span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We take full responsibility for product design, architecture, and engineering. Explore real-world software products built for our partners.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-300 dark:border-white/10 shadow-sm">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'ai'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI Systems
            </button>
            <button
              onClick={() => setSelectedCategory('saas')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'saas'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SaaS Platforms
            </button>
            <button
              onClick={() => setSelectedCategory('corporate')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'corporate'
                  ? 'bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl theme-card overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header / Mock Banner */}
                <div className={`h-48 p-6 bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex flex-col justify-between border-b border-slate-200 dark:border-white/10`}>
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-[11px] font-mono text-[#00aeef] font-semibold shadow-xs">
                      {project.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white">
                      <IconComponent className="w-4 h-4 text-[#00aeef]" />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00aeef] transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00aeef]/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  
                  {/* Problem & Solution */}
                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-rose-500 font-semibold block">
                        The Challenge:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-500 font-semibold block">
                        The Solution:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium mt-0.5">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                      Technology Stack:
                    </span>
                    <div className="text-xs font-mono text-[#00aeef] font-medium bg-slate-100 dark:bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
                      {project.techStackString}
                    </div>
                  </div>

                  {/* Case Study Modal CTA */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-[#00aeef] hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 group/btn transition-colors"
                    >
                      <span>Read Full Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-slate-800 dark:hover:text-white p-1 rounded transition-colors"
                        aria-label="View Live Site"
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl"
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-xs font-mono text-[#00aeef]">
                    {activeProject.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {activeProject.name}
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 space-y-1">
                    <span className="font-mono uppercase font-bold text-rose-500 block text-xs">Business Challenge</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{activeProject.problem}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                    <span className="font-mono uppercase font-bold text-emerald-500 block text-xs">Architectural Solution</span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{activeProject.solution}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Technology Stack Implemented:</span>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techTags.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Close Overview
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-xs font-semibold text-white shadow-md flex items-center gap-2"
                  >
                    <span>Build Similar Product</span>
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
