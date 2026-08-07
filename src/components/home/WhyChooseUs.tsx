'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  Code2, 
  MessageSquare, 
  Handshake, 
  Globe2, 
  Sparkles, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Zap,
      title: 'Startup Speed + Engineering Rigor',
      description: 'We deploy rapid MVPs in weeks, maintaining strict unit tests, type safety, and clean software architecture.',
      highlight: '4-8 Week Launch Cycle',
    },
    {
      icon: Users,
      title: 'Full Product Team Under One Roof',
      description: 'No managing fragmented freelancers. You get dedicated product managers, full-stack engineers, UI/UX designers, and QA testers.',
      highlight: 'Dedicated Squad',
    },
    {
      icon: Code2,
      title: 'Modern Technology Stack',
      description: 'We build exclusively with high-performance frameworks: Next.js 16, TypeScript, Python FastAPI, Tailored AI Models, and Postgres.',
      highlight: 'Zero Legacy Debt',
    },
    {
      icon: MessageSquare,
      title: 'Clear & Transparent Communication',
      description: 'Direct Slack / Discord channels, weekly live sprint demos, linear issue tracking, and total code repository visibility.',
      highlight: 'Daily Syncs & Code Access',
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnership Mindset',
      description: 'We don&apos;t just build code and abandon you. We assist with post-launch scale, performance audits, and continuous updates.',
      highlight: 'Post-Launch SLA',
    },
    {
      icon: Globe2,
      title: 'Ethiopian Market Context & Global Delivery',
      description: 'Deep understanding of local East African payments, telecommunications, and regulatory ecosystems, paired with international code benchmarks.',
      highlight: 'Addis Ababa HQ • Global Standards',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-white/10">
      {/* Radial Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00aeef]/10 via-indigo-500/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-[#00aeef]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Companies Work With{' '}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
              Innova Tech
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            We bridge the gap between chaotic offshore outsourcing and expensive legacy consultancies.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-2xl border border-white/10 glass-card hover:border-[#00aeef]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00aeef]/20 to-indigo-500/20 border border-[#00aeef]/30 flex items-center justify-center text-[#00aeef] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00aeef] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#00aeef] font-semibold bg-[#00aeef]/10 px-2.5 py-1 rounded-md border border-[#00aeef]/20">
                    {item.highlight}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400 opacity-80" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Metric Stats Strip */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950/80 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-white">30+</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Products Launched</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#00aeef]">99.9%</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Client Retention</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-white">&lt; 24h</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Support Turnaround</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-indigo-400">100%</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">In-House Talent</div>
          </div>
        </div>

      </div>
    </section>
  );
}
