'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Code2, 
  Zap, 
  Handshake, 
  Globe2, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Users,
      title: 'Full Product Team',
      description: 'You get a complete, dedicated engineering squad under one roof: product managers, full-stack developers, UI/UX designers, and QA engineers.',
      badge: 'Dedicated Product Squad',
    },
    {
      icon: Code2,
      title: 'Modern Engineering Stack',
      description: 'Zero legacy bloat. We engineer exclusively with Next.js 16, TypeScript, Supabase, Python FastAPI, PostgreSQL, and tailored AI models.',
      badge: 'Modern Tech Stack',
    },
    {
      icon: Zap,
      title: 'Fast Startup Execution',
      description: 'We move at startup speed, delivering production MVPs in 4-to-8 weeks while enforcing strict type safety and automated testing.',
      badge: 'Rapid 4-8 Wk Velocity',
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnership',
      description: 'We build long-term relationships with SLA commitments, post-launch scaling support, continuous code audits, and feature iteration.',
      badge: 'Post-Launch Partnership',
    },
    {
      icon: Globe2,
      title: 'Ethiopian + Global Perspective',
      description: 'Rooted in Addis Ababa, Ethiopia, we pair deep regional payment/fintech insight with Silicon Valley & European coding standards.',
      badge: 'Addis HQ • Global Delivery',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 dark:bg-[#08090a] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00aeef]/10 via-indigo-500/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#00aeef]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Companies Choose{' '}
            <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
              Innova Tech
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            We bridge the gap between expensive legacy consultancies and unpredictable freelancers.
          </p>
        </div>

        {/* 5 Differentiators Grid */}
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
                className="p-8 rounded-2xl theme-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00aeef]/10 border border-[#00aeef]/30 flex items-center justify-center text-[#00aeef] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00aeef] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#00aeef] font-semibold bg-[#00aeef]/10 px-2.5 py-1 rounded-md border border-[#00aeef]/20">
                    {item.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 opacity-80" />
                </div>
              </motion.div>
            );
          })}

          {/* Special Stat Highlight Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00aeef]/10 via-indigo-500/10 to-transparent border border-[#00aeef]/30 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00aeef]">
                Innova Studio Guarantee
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Engineered For Scalability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When you partner with Innova Tech, you are hiring a technical co-founder mindset that cares deeply about your product retention, conversion, and code longevity.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-800 dark:text-white font-bold">100% In-House Senior Team</span>
              <span className="text-emerald-500 font-bold">5.0 ★ Rate</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
