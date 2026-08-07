'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Building2, 
  HeartHandshake 
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#08090a] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#00aeef]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Based in Addis Ababa, Ethiopia • Serving Global Clients</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Building World-Class Software From East Africa For The{' '}
              <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
                Global Market
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              Innova Tech is a software development and digital solutions company based in Addis Ababa, Ethiopia. We help companies transform ideas into scalable digital products.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded by software architects and engineering leaders, Innova Tech unites top-tier Ethiopian software engineering talent to solve complex product challenges. Whether you are an early-stage founder seeking rapid MVP execution or an enterprise scaling cloud pipelines, we engineer software that delivers measurable business growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#00aeef]">
                  <Terminal className="w-4 h-4" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">Engineering Excellence</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Strict type safety, automated tests, clean software patterns, and zero compromise on security.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-indigo-500">
                  <HeartHandshake className="w-4 h-4" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 dark:text-white">Client Partnership</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Transparent daily syncs, shared GitHub repos, clear sprint deliverables, and zero hidden fees.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Senior Ethiopian Engineers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Agile Sprint Workflows
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Global Security Standards
              </span>
            </div>
          </motion.div>

          {/* Right Column Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl theme-card p-6 sm:p-8 space-y-6 relative shadow-xl overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-[#00aeef]" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Innova Tech HQ</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-500 font-semibold">
                  Active Operations
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">Location:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">Focus Areas:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">SaaS, AI Systems & Engineering</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                  <span className="text-slate-500 font-mono">Team Squad:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Full-Stack, AI, UI/UX, QA</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-mono">Languages:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">English, Amharic</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-2">
              <p className="text-xs italic text-slate-700 dark:text-slate-300 leading-relaxed">
                &ldquo;Our mission is to establish Ethiopia as an undisputed global hub for software engineering excellence, delivering products that compete with top studios worldwide.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-[#00aeef] font-semibold">
                — Innova Tech Engineering Team
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
