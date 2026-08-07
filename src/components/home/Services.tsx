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
  Sparkles 
} from 'lucide-react';

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
}

export default function Services() {
  const categories: ServiceCategory[] = [
    {
      num: '01',
      id: 'product-dev',
      title: 'Product Development',
      summary: 'Building SaaS platforms, MVPs, and custom applications.',
      tagline: 'We turn ambitious concepts into scalable, market-ready digital products built for growth.',
      icon: Rocket,
      items: [
        { name: 'MVP Development', desc: 'Rapid 4-to-6 week build cycles to validate core product features with real users.' },
        { name: 'SaaS Platforms', desc: 'Multi-tenant cloud platforms with subscription billing, team management, and role RBAC.' },
        { name: 'Web Applications', desc: 'High-speed React & Next.js 16 dynamic web applications with sub-second performance.' },
        { name: 'Mobile Apps', desc: 'Cross-platform iOS and Android mobile experiences engineered with React Native.' },
      ],
      deliverables: ['PRD Product Specs', 'Next.js 16 Production Codebase', 'Automated CI/CD Deployment', 'Analytics Setup'],
      techStack: ['Next.js 16', 'TypeScript', 'React Native', 'Tailwind CSS', 'Vercel / AWS'],
    },
    {
      num: '02',
      id: 'engineering',
      title: 'Engineering Solutions',
      summary: 'Full-stack development, APIs, databases, automation.',
      tagline: 'High-concurrency backend architectures engineered for security, clean code, and zero downtime.',
      icon: Cpu,
      items: [
        { name: 'Full-stack Engineering', desc: 'Type-safe frontend and backend architectures with comprehensive test coverage.' },
        { name: 'APIs & Microservices', desc: 'RESTful & GraphQL services built for high concurrency and enterprise security.' },
        { name: 'Database Architecture', desc: 'Relational PostgreSQL schema design, vector DB indexing, and query tuning.' },
        { name: 'Performance Optimization', desc: 'Sub-second page loading, edge caching, serverless execution, and memory audit.' },
      ],
      deliverables: ['OpenAPI / Swagger Specs', 'Integration Test Suites', 'Docker Setup', 'Database Migration Scripts'],
      techStack: ['Node.js', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'],
    },
    {
      num: '03',
      id: 'ai-systems',
      title: 'AI Systems',
      summary: 'AI applications, integrations, intelligent workflows.',
      tagline: 'Empower your software with automated reasoning, custom chatbots, vector search, and neural pipelines.',
      icon: Bot,
      items: [
        { name: 'AI Applications', desc: 'Custom enterprise software tools leveraging GPT-4, Claude, and open-source models.' },
        { name: 'Automation Workflows', desc: 'Autonomous background agent queues eliminating repetitive manual operational tasks.' },
        { name: 'RAG & Vector Integrations', desc: 'Retrieval-augmented generation knowledge bases for instant contextual search.' },
      ],
      deliverables: ['Custom LLM Pipelines', 'PgVector / Pinecone Index', 'Telegram & Web Bot Setup', 'AI Cost Audit'],
      techStack: ['OpenAI API', 'LangChain', 'Pinecone', 'Python', 'FastAPI', 'PgVector'],
    },
    {
      num: '04',
      id: 'design-growth',
      title: 'Design & Growth',
      summary: 'UI/UX, branding, content, marketing.',
      tagline: 'Design systems and digital assets that capture attention and turn visitors into loyal paying customers.',
      icon: LineChart,
      items: [
        { name: 'UI/UX Product Design', desc: 'User research, wireframing, interactive Figma prototypes, and sleek design systems.' },
        { name: 'Branding & Identity', desc: 'Visual identity, logo design, color palettes, typography hierarchy, and brand guides.' },
        { name: 'Content & Demos', desc: 'High-impact product demo videos, interactive walkthroughs, and technical content.' },
        { name: 'Growth & SEO', desc: 'Technical SEO optimization, conversion rate optimization (CRO), and user funnels.' },
      ],
      deliverables: ['Figma UI System', 'Brand Guidelines Handbook', 'Product Demo Visuals', 'Technical SEO Audit'],
      techStack: ['Figma', 'Framer', 'After Effects', 'GA4 Analytics', 'Vercel Analytics'],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(categories[0]);

  return (
    <section id="services" className="py-24 bg-white dark:bg-[#08090a] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#00aeef]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our 4 Core{' '}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
              Service Pillars
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Instead of fragmented service cards, we organize our capabilities into 4 dedicated product engineering categories.
          </p>
        </div>

        {/* 4 Large Category Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-slate-900/90 border-[#00aeef] shadow-xl shadow-[#00aeef]/15'
                    : 'theme-card text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black font-mono ${isActive ? 'text-[#00aeef]' : 'text-slate-400 dark:text-slate-500'}`}>
                    {cat.num}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-[#00aeef] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${isActive ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl theme-card p-6 sm:p-10 space-y-10 shadow-xl"
          >
            {/* Category Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#00aeef]/10 border border-[#00aeef]/30 text-xs font-mono text-[#00aeef] font-semibold">
                    Category {activeCategory.num}: {activeCategory.title}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {activeCategory.tagline}
                </p>
              </div>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00aeef] to-[#6366f1] text-xs font-semibold text-white shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shrink-0"
              >
                <span>Request Category Scope</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Sub-items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCategory.items.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-2"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00aeef]" />
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Deliverables & Stack Footer */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-slate-200 dark:border-white/10 text-xs">
              <div className="md:col-span-7 space-y-3">
                <span className="font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                  Included Deliverables:
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

              <div className="md:col-span-5 space-y-3">
                <span className="font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCategory.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 font-mono text-slate-800 dark:text-slate-200"
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
