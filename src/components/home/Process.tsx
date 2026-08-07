'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Palette, 
  Code2, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      subtitle: 'Goals & Requirements',
      description: 'We align on business goals, target audience, technical constraints, feature specs, and sprint roadmaps.',
      icon: Search,
      deliverables: ['Product Requirement Document (PRD)', 'Tech Stack Blueprint', 'Sprint Roadmap & Estimates'],
      timeframe: 'Week 1',
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Experience & Architecture',
      description: 'We craft high-fidelity Figma UI/UX designs, interactive prototypes, design tokens, and database schemas.',
      icon: Palette,
      deliverables: ['Interactive Figma Prototype', 'Component Design System', 'Database & API Architecture'],
      timeframe: 'Weeks 2 - 3',
    },
    {
      number: '03',
      title: 'Build',
      subtitle: 'Development & AI Systems',
      description: 'Senior engineers develop type-safe frontend components, microservices, and AI integrations with automated testing.',
      icon: Code2,
      deliverables: ['Weekly Demo Releases', 'Clean TypeScript & Python Code', 'Automated Test Coverage'],
      timeframe: 'Weeks 4 - 6',
    },
    {
      number: '04',
      title: 'Launch',
      subtitle: 'Deploy & Continuous SLA',
      description: 'Production deployment on Vercel/AWS, SSL configuration, security auditing, and post-launch technical SLA support.',
      icon: Rocket,
      deliverables: ['Zero-Downtime Release', 'Analytics & Monitoring Setup', 'Post-Launch Tech Support'],
      timeframe: 'Week 7+',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-[#08090a] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#00aeef]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our 4-Step Product{' '}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
              Development Workflow
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Transparent sprint milestones ensuring predictable delivery times and zero surprises.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl theme-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-slate-400 dark:text-slate-500 group-hover:text-[#00aeef] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00aeef] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-xs font-mono text-[#00aeef] mt-0.5">{step.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/5 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#00aeef] to-[#6366f1] hover:opacity-95 shadow-md transition-all"
          >
            <span>Discuss Your Product Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
