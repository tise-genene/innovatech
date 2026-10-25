'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Palette, 
  Code2, 
  Rocket, 
  Terminal, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Architect & Scope',
      subtitle: 'PRD & Tech Strategy',
      description: 'We align on business goals, user personas, technical constraints, data schemas, and sprint roadmaps.',
      icon: Search,
      deliverables: ['Product Specs (PRD)', 'Database Architecture', 'Milestone Sprint Roadmap'],
      timeframe: 'Week 1',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      subtitle: 'UI/UX & Design System',
      description: 'We build interactive Figma prototypes, component design tokens, and user flow wireframes.',
      icon: Palette,
      deliverables: ['Figma UI System', 'Interactive User Flows', 'API Contract Specs'],
      timeframe: 'Weeks 2 - 3',
    },
    {
      number: '03',
      title: 'Engineer & Integrate',
      subtitle: 'Type-Safe Execution',
      description: 'Full-stack engineers write type-safe frontend components, microservices, and FinTech/API integrations.',
      icon: Code2,
      deliverables: ['Bi-Weekly Demo Deployments', 'Clean TypeScript Codebase', 'Automated Test Coverage'],
      timeframe: 'Weeks 4 - 6',
    },
    {
      number: '04',
      title: 'Deploy & Support',
      subtitle: 'Zero-Downtime Release',
      description: 'Production rollout on Vercel/AWS, domain routing, telemetry setup, and continuous post-launch SLAs.',
      icon: Rocket,
      deliverables: ['Production Cloud Deployment', 'Telemetry & Health Monitoring', 'SLA Engineering Support'],
      timeframe: 'Week 7+',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-[#0c0e14] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-[#0099ff]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Structured Sprint Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Build & Ship
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Transparent milestones, direct GitHub commits, and predictable delivery without chaos.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl studio-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-slate-400 dark:text-slate-500 group-hover:text-[#0099ff] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0099ff]">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-xs font-mono text-[#0099ff] mt-0.5">{step.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-white/5 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
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

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] shadow-sm transition-all"
          >
            <span>Plan Your Project Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
