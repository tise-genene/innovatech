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
      subtitle: 'Understand goals & requirements',
      description: 'We align on business goals, target audience, feature prioritization, technical constraints, and project milestones.',
      icon: Search,
      deliverables: ['Product Requirement Document (PRD)', 'Tech Stack Selection', 'Sprint Roadmap & Milestones'],
      timeframe: 'Week 1',
      color: 'from-[#00aeef] to-cyan-500',
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Product experience & architecture',
      description: 'We craft high-fidelity Figma UI/UX designs, interactive prototypes, micro-animations, and database schemas.',
      icon: Palette,
      deliverables: ['Clickable Figma Prototype', 'Component Design System', 'Database & API Architecture'],
      timeframe: 'Weeks 2 - 3',
      color: 'from-cyan-500 to-indigo-500',
    },
    {
      number: '03',
      title: 'Build',
      subtitle: 'Develop scalable solutions',
      description: 'Our senior engineers build type-safe frontend components, microservices, and AI integrations with automated testing.',
      icon: Code2,
      deliverables: ['Weekly Working Software Demos', 'Clean TypeScript & Python Code', 'Automated Test Suites'],
      timeframe: 'Weeks 4 - 6',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      number: '04',
      title: 'Launch',
      subtitle: 'Deploy, optimize, and support',
      description: 'We handle production deployment on Vercel/AWS, configure domain SSL, run security audits, and provide ongoing maintenance.',
      icon: Rocket,
      deliverables: ['Zero-Downtime Live Release', 'Analytics & Monitoring Setup', 'Post-Launch Technical Support'],
      timeframe: 'Week 7+',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/10">
      {/* Background Grid Pattern */}
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-[#00aeef]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our 4-Step Software{' '}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            No guesswork. We follow a battle-tested engineering methodology that guarantees transparent milestones and on-time delivery.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 glass-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#00aeef]/50 transition-all duration-300"
              >
                {/* Step Top Bar */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-slate-400 group-hover:text-[#00aeef] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#00aeef] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-xs font-mono text-[#00aeef] mt-0.5">{step.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Process CTA Banner */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#00aeef] to-[#6366f1] hover:opacity-95 shadow-xl shadow-[#00aeef]/20 transition-all"
          >
            <span>Have a Product Vision? Discuss Your Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
