'use client';

import { ArrowUpRight, Globe2, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#06070a] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 font-mono text-xs uppercase tracking-wider mb-2">
              <Globe2 className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-400" />
              <span>About the Studio • Pedigree & Focus</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Engineering mission-critical systems from Addis Ababa for <span className="text-slate-400 dark:text-zinc-500 font-normal">global markets.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-light">
              Eagle Pathway Studio is a specialized software engineering and deep-tech product agency. We partner with founders, enterprises, and institutions to architect, engineer, and deploy bespoke production systems — from multi-tenant cloud platforms to mission-critical financial defense engines.
            </p>

            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Rooted in Addis Ababa, Ethiopia, we pair deep regional financial engineering (integrating Telebirr, CBE Birr, and zero-trust slip forensics) with world-class, uncompromising software craftsmanship. We build software that performs flawlessly under peak load.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://school-mgmt-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-white bg-slate-950 hover:bg-slate-800 dark:text-zinc-950 dark:bg-white dark:hover:bg-zinc-200 font-semibold shadow-xs transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Launch LMS Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.eaglespathway.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-slate-800 dark:text-zinc-200 border border-slate-300 hover:border-slate-900 dark:border-white/[0.12] dark:hover:border-white/30 bg-transparent font-medium transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>eaglespathway.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Spec HUD Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-slate-50 dark:bg-zinc-950/40 border border-slate-200 dark:border-white/[0.08] shadow-xs space-y-6 transition-all">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest block font-medium">
                Studio Identity
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Eagle Pathway Studio
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 block">
                tech.eaglespathway.com
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/[0.08] text-xs font-mono divide-y divide-slate-200 dark:divide-white/[0.06]">
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-zinc-400">HEADQUARTERS</span>
                <span className="text-slate-900 dark:text-white font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-400" />
                  Addis Ababa, Ethiopia (UTC+3)
                </span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-zinc-400">CORE FOCUS</span>
                <span className="text-slate-900 dark:text-white font-medium">EdTech ERP, FinTech & Automation</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-zinc-400">INFRASTRUCTURE</span>
                <span className="text-slate-900 dark:text-white font-medium">Next.js 16, Supabase, PostgreSQL</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-slate-500 dark:text-zinc-400">CODE OWNERSHIP</span>
                <span className="text-slate-900 dark:text-white font-medium">100% Client Repository IP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
