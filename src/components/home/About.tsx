'use client';

import { ArrowUpRight } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              [ 05 // ABOUT THE STUDIO ]
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Engineering high-concurrency systems from Addis Ababa for global markets.
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              Eagle Pathway Studio is the digital product and software engineering team powering the <strong className="text-neutral-950 dark:text-white font-medium">Eagle Pathway ecosystem</strong>. We design, build, and maintain production web platforms, FinTech verification tooling, and distributed backend systems.
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Rooted in Addis Ababa, Ethiopia, we pair deep regional financial expertise (integrating Telebirr, CBE Birr, and banking fraud verification) with modern, strict engineering standards. We build software that performs reliably under real-world conditions.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://school-mgmt-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-5 py-2.5 rounded-full text-white bg-neutral-900 hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 font-semibold transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Launch LMS Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.eaglespathway.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-5 py-2.5 rounded-full text-neutral-900 border border-neutral-300 hover:border-neutral-900 dark:text-white dark:border-neutral-800 dark:hover:border-neutral-600 font-medium transition-colors inline-flex items-center gap-1.5"
              >
                <span>eaglespathway.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Spec Card */}
          <div className="lg:col-span-5 p-8 rounded-xl bg-neutral-50/50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 space-y-6 shadow-xs">
            <div className="space-y-1">
              <span className="text-xs font-mono text-neutral-500 uppercase block">
                ORGANIZATIONAL IDENTITY
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                Eagle Pathway Studio
              </h3>
              <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                Domain: tech.eaglespathway.com
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-850 text-xs font-mono divide-y divide-neutral-200 dark:divide-neutral-900">
              <div className="flex justify-between py-2">
                <span className="text-neutral-500">HEADQUARTERS</span>
                <span className="text-neutral-950 dark:text-white font-medium">Addis Ababa, Ethiopia (UTC+3)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500">CORE FOCUS</span>
                <span className="text-neutral-950 dark:text-white font-medium">EdTech ERP, FinTech & Automation</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500">INFRASTRUCTURE</span>
                <span className="text-neutral-950 dark:text-white font-medium">Next.js 16, Supabase, PostgreSQL</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-500">CODE OWNERSHIP</span>
                <span className="text-neutral-950 dark:text-white font-medium">100% Client Repository IP</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
