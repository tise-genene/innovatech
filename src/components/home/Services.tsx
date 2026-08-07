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
  Video, 
  Globe,
  Sparkles
} from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  icon: any;
  items: { name: string; desc: string; icon: any }[];
  deliverables: string[];
  techStack: string[];
}

export default function Services() {
  const categories: ServiceCategory[] = [
    {
      id: 'product-dev',
      title: 'Product Development',
      subtitle: 'From zero to production launch',
      tagline: 'We turn rough ideas and specifications into scalable, market-ready digital products built to scale.',
      icon: Rocket,
      items: [
        { name: 'MVP Development', desc: 'Rapid 4-to-6 week build cycle to validate product hypothesis with real users.', icon: Zap },
        { name: 'SaaS Platforms', desc: 'Multi-tenant cloud architectures with subscription billing & user management.', icon: Layers },
        { name: 'Web Applications', desc: 'High-performance React/Next.js dynamic web applications with sub-second speeds.', icon: Code2 },
        { name: 'Mobile Apps', desc: 'Cross-platform iOS and Android mobile experiences using React Native.', icon: Globe },
      ],
      deliverables: ['Product Architecture Spec', 'Production Next.js / React Codebase', 'CI/CD Automated Deployment', 'User Analytics Integration'],
      techStack: ['Next.js 16', 'TypeScript', 'React Native', 'Tailwind CSS', 'Vercel / AWS'],
    },
    {
      id: 'engineering',
      title: 'Engineering',
      subtitle: 'Robust backend & infrastructure',
      tagline: 'High-concurrency systems engineered with security, clean code principles, and bulletproof reliability.',
      icon: Cpu,
      items: [
        { name: 'Full-stack Development', desc: 'End-to-end frontend and backend development with modern type safety.', icon: Code2 },
        { name: 'APIs & Backend Systems', desc: 'RESTful & GraphQL microservices engineered for speed and enterprise security.', icon: Layers },
        { name: 'Database Architecture', desc: 'Relational & NoSQL database modeling, vector indexing, and query optimization.', icon: Database },
        { name: 'Performance Optimization', desc: 'Sub-second rendering, edge caching, serverless execution, and memory audit.', icon: Zap },
      ],
      deliverables: ['OpenAPI / Swagger Specs', 'Automated Integration Testing', 'Docker & Kubernetes Setup', 'Database Migration Scripts'],
      techStack: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'],
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      subtitle: 'Intelligent AI workflows & LLM integration',
      tagline: 'Empower your software with automated reasoning, custom chatbots, vector search, and neural pipelines.',
      icon: Bot,
      items: [
        { name: 'AI-Powered Applications', desc: 'Custom enterprise tools leveraging GPT-4, Claude, and open-source models.', icon: Bot },
        { name: 'Automation Systems', desc: 'Autonomous background agent workflows reducing manual operation overhead.', icon: Zap },
        { name: 'AI Integrations (RAG)', desc: 'Knowledge base retrieval-augmented generation for instant internal search.', icon: Cpu },
      ],
      deliverables: ['Custom LLM Prompt Pipelines', 'Pinecone / PgVector Search Index', 'Telegram & Web Bot Integrations', 'AI Cost Optimization Audit'],
      techStack: ['OpenAI API', 'LangChain / LlamaIndex', 'Pinecone', 'Python', 'FastAPI', 'PgVector'],
    },
    {
      id: 'digital-growth',
      title: 'Digital Growth',
      subtitle: 'Design, identity & technical marketing',
      tagline: 'Design systems and digital assets that capture attention and convert visitors into loyal customers.',
      icon: LineChart,
      items: [
        { name: 'UI/UX Design', desc: 'User research, wireframing, interactive Figma prototypes, and sleek design systems.', icon: Palette },
        { name: 'Branding & Identity', desc: 'Logo, color palette, typography hierarchy, and brand positioning guides.', icon: Sparkles },
        { name: 'Video & Product Demos', desc: 'Motion graphics, interactive product walkthroughs, and promotional media.', icon: Video },
        { name: 'Technical Marketing', desc: 'Technical SEO optimization, conversion rate optimization (CRO), and growth funnels.', icon: LineChart },
      ],
      deliverables: ['Figma Master UI Library', 'Brand Guidelines Handbook', 'High-Res Product Mockups', 'SEO & Performance Audit'],
      techStack: ['Figma', 'Framer', 'After Effects', 'Google Analytics 4', 'Vercel Analytics'],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(categories[0]);

  return (
    <section id="services" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/10">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-[#00aeef]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Core{' '}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
              Service Categories
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            We don&apos;t offer a generic list of low-tier services. We focus exclusively on 4 core engineering pillars that move digital businesses forward.
          </p>
        </div>

        {/* Desktop Category Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-[#00aeef] shadow-xl shadow-[#00aeef]/15'
                    : 'bg-slate-950/60 border-white/10 hover:border-white/20 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? 'bg-[#00aeef] text-white' : 'bg-slate-900 text-slate-400 border border-white/5'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00aeef] animate-pulse" />
                  )}
                </div>
                <div>
                  <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1 font-mono">
                    {cat.subtitle}
                  </p>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00aeef] to-[#6366f1]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Category Content Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 glass-card p-6 sm:p-10 space-y-10 shadow-2xl"
          >
            {/* Category Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-xs font-mono text-[#00aeef]">
                    Pillar: {activeCategory.title}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{activeCategory.subtitle}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  {activeCategory.tagline}
                </p>
              </div>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-xs font-semibold text-white shadow-lg shadow-[#00aeef]/20 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shrink-0"
              >
                <span>Request Scope & Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service Sub-Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCategory.items.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-white/15 transition-all space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-[#00aeef]">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-bold text-white">{item.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Deliverables & Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/10 text-xs">
              
              {/* Key Deliverables */}
              <div className="md:col-span-7 space-y-3">
                <span className="font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Included Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCategory.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="md:col-span-5 space-y-3">
                <span className="font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Core Stack Tools:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCategory.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-slate-200"
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
