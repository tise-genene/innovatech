'use client';

import { ArrowUpRight, Globe2, Shield, MapPin } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#02050e] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>[ 06 // ABOUT THE STUDIO ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Engineering high-concurrency systems from Addis Ababa for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">global markets.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed font-light">
              Eagle Pathway Studio is an elite software engineering and deep-tech product agency. We partner with founders, enterprises, and institutions to architect, engineer, and deploy bespoke production systems — from multi-tenant cloud platforms to mission-critical financial defense engines.
            </p>

            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">
              Rooted in Addis Ababa, Ethiopia, we pair deep regional financial engineering (integrating Telebirr, CBE Birr, and zero-trust slip forensics) with world-class, uncompromising software craftsmanship. We build software that performs flawlessly under peak load.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://school-mgmt-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-white bg-slate-950 hover:bg-slate-800 dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 font-bold shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Launch LMS Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.eaglespathway.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-6 py-3 rounded-full text-slate-800 dark:text-white border border-slate-300 hover:border-slate-900 dark:border-neutral-700 dark:hover:border-cyan-400 bg-slate-50 dark:bg-neutral-900/60 font-medium transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>eaglespathway.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Spec HUD Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-50 dark:bg-neutral-950/70 border border-slate-200 dark:border-neutral-800/80 shadow-md space-y-6 transition-all">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-widest block font-bold">
                ORGANIZATIONAL IDENTITY
              </span>
              <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                Eagle Pathway Studio
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-neutral-400">
                PROD: tech.eaglespathway.com
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-neutral-800 text-xs font-mono divide-y divide-slate-200 dark:divide-neutral-900">
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-neutral-400">HEADQUARTERS</span>
                <span className="text-slate-900 dark:text-white font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
                  Addis Ababa, Ethiopia (UTC+3)
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-neutral-400">CORE FOCUS</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">EdTech ERP, FinTech & Automation</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-neutral-400">INFRASTRUCTURE</span>
                <span className="text-slate-900 dark:text-white font-medium">Next.js 16, Supabase, PostgreSQL</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-neutral-400">CODE OWNERSHIP</span>
                <span className="text-sky-600 dark:text-cyan-400 font-semibold">100% Client Repository IP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
