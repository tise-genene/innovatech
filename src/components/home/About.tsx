'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Building2, 
  HeartHandshake,
  ArrowUpRight, 
  ShieldCheck, 
  Code2
} from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0c0e14] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-[#0099ff]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Headquartered in Addis Ababa, Ethiopia • Global Delivery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Building High-Impact Software From East Africa For The{' '}
              <span className="bg-gradient-to-r from-[#0099ff] to-[#6366f1] bg-clip-text text-transparent">
                World
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Eagle Pathway Tech Agency is the software engineering & digital product studio powering the <strong className="text-slate-900 dark:text-white font-semibold">Eagle Pathway ecosystem</strong> and building high-reliability software for startups, institutions, and businesses.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded and led by full-stack software engineers from Addis Ababa, we combine deep regional FinTech expertise (integrating Telebirr, CBE Birr, and banking verification) with modern Silicon Valley software engineering standards. We don&apos;t build disposable templates — we build production-tested systems designed to withstand real user traffic and mission-critical workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl studio-card space-y-2">
                <div className="flex items-center gap-2 text-[#0099ff]">
                  <Terminal className="w-4 h-4" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">Full-Stack Craft</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Strict TypeScript typing, microservice separation, PostgreSQL schema optimization, and complete CI/CD automation.
                </p>
              </div>

              <div className="p-4 rounded-xl studio-card space-y-2">
                <div className="flex items-center gap-2 text-indigo-500">
                  <HeartHandshake className="w-4 h-4" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">Transparent Delivery</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Direct GitHub collaboration, asynchronous video demos, clean issue tracking, and zero opaque billable hours.
                </p>
              </div>
            </div>

            {/* Ecosystem Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://school-mgmt-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Launch Eagle LMS Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://www.eaglespathway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
              >
                <span>eaglespathway.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Studio Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 rounded-2xl studio-card p-6 sm:p-8 space-y-6 shadow-xl relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0099ff]/10 border border-[#0099ff]/20 flex items-center justify-center text-[#0099ff]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Eagle Pathway Tech Agency</h3>
                    <span className="text-[10px] font-mono text-slate-400">tech.eaglespathway.com</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-500 font-semibold">
                  Active Studio
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">Headquarters:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">Flagship Suite:</span>
                  <span className="font-semibold text-[#0099ff]">Eagle Pathway (LMS, Core, Admin)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">FinTech Focus:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Telebirr, CBE, Receipt Verification</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">Engineering Stack:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Next.js 16, TypeScript, Python, Dart</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-mono">Primary Language:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">English, Amharic</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#060709] border border-slate-200 dark:border-white/5 space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Studio Philosophy
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                &ldquo;We treat software engineering as an exacting craft. Real deployments, rock-solid uptime, and genuine business utility always outshine superficial marketing.&rdquo;
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
