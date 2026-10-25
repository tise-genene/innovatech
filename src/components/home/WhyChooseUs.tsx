'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  Zap, 
  Handshake, 
  Globe2, 
  ShieldCheck,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Code2,
      title: 'Full Product Engineering Squad',
      description: 'You get a battle-tested technical team under one roof: software architects, full-stack engineers, database designers, and QA specialists who actually ship.',
      badge: 'Dedicated Engineering Squad',
    },
    {
      icon: Terminal,
      title: 'Modern Type-Safe Tech Stack',
      description: 'Zero legacy bloat. We engineer exclusively with Next.js 16, TypeScript, Supabase, PostgreSQL, Python FastAPI, and containerized microservices.',
      badge: 'Strict Type-Safety',
    },
    {
      icon: Zap,
      title: 'Rapid Startup Velocity',
      description: 'We move with startup speed. We ship production-grade MVPs and platforms in 4-to-8 weeks with rigorous automated tests and zero compromise on security.',
      badge: '4-8 Week Sprint Velocity',
    },
    {
      icon: Globe2,
      title: 'East African Insight • Global Standards',
      description: 'Rooted in Addis Ababa, Ethiopia, we pair deep regional FinTech and mobile money expertise (Telebirr, CBE) with world-class engineering standards.',
      badge: 'FinTech & Regional Depth',
    },
    {
      icon: Handshake,
      title: 'High-Trust Technical Partnership',
      description: 'We operate as your technical co-founder: transparent GitHub PRs, daily asynchronous syncs, clear milestone deliverables, and long-term scaling SLAs.',
      badge: 'Direct Code Ownership',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 dark:bg-[#060709] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#0099ff]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Principles & Guarantees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Founders & Teams Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            We bridge the gap between expensive, bloated consultancies and fragile, unverified freelancer teams.
          </p>
        </div>

        {/* 5 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-7 rounded-2xl studio-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0099ff] transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0099ff] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#0099ff] font-semibold bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            );
          })}

          {/* Highlight Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#0099ff]/10 via-[#6366f1]/5 to-transparent border border-[#0099ff]/30 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0099ff]">
                Eagle Pathway Studio Commitment
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Zero Tech Debt Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Every line of code is structured for long-term maintainability. You get clean repository trees, complete documentation, and automated deployment pipelines from day one.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-800 dark:text-white font-semibold">100% Code Ownership</span>
              <span className="text-emerald-500 font-bold">Production Ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
