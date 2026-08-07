'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Users, 
  ShieldCheck, 
  HeartHandshake 
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#070a12] relative overflow-hidden border-t border-white/10">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00aeef]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-[#00aeef]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Based in Addis Ababa, Ethiopia</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Building World-Class Software From East Africa For The{' '}
              <span className="bg-gradient-to-r from-[#00aeef] to-[#6366f1] bg-clip-text text-transparent">
                Global Market
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
              Innova Tech is a software development and digital solutions company based in Addis Ababa, Ethiopia. We help companies transform ideas into scalable digital products.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Founded by passion-driven software architects and engineering leaders, Innova Tech brings together elite Ethiopian software talent to solve complex technical challenges. Whether you are an early-stage founder seeking rapid MVP execution or an enterprise optimizing complex backend pipelines, we engineer software that delivers measurable business growth.
            </p>

            {/* Core Values / Culture Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#00aeef]">
                  <Terminal className="w-4 h-4" />
                  <h4 className="text-xs font-mono font-bold uppercase text-white">Engineering Excellence</h4>
                </div>
                <p className="text-xs text-slate-300">
                  Strict type safety, automated tests, clean code patterns, and zero compromise on security.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400">
                  <HeartHandshake className="w-4 h-4" />
                  <h4 className="text-xs font-mono font-bold uppercase text-white">Client-First Partnership</h4>
                </div>
                <p className="text-xs text-slate-300">
                  Transparent daily comms, shared GitHub repos, clear sprint deliverables, and zero hidden costs.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Senior Ethiopian Engineers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Agile Scrum Workflows
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Global Standards Compliance
              </span>
            </div>
          </motion.div>

          {/* Right Column: Visual Credibility Card / HQ Window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl border border-white/10 glass-card p-6 sm:p-8 space-y-6 relative shadow-2xl overflow-hidden"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00aeef]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-[#00aeef]" />
                  <span className="text-sm font-bold text-white">Innova Tech HQ</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-[11px] font-mono text-emerald-400 font-semibold">
                  Active Operation
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Location:</span>
                  <span className="font-semibold text-white">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Core Focus:</span>
                  <span className="font-semibold text-white">Software, AI Systems & Growth</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Team Composition:</span>
                  <span className="font-semibold text-white">Full-Stack, AI, UI/UX, QA</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400 font-mono">Engagement Models:</span>
                  <span className="font-semibold text-[#00aeef]">Fixed Scope / Dedicated Squad</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400 font-mono">Languages:</span>
                  <span className="font-semibold text-white">English, Amharic</span>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 space-y-2">
              <p className="text-xs italic text-slate-300 leading-relaxed">
                &ldquo;Our mission is to establish Ethiopia as an undisputed global hub for software engineering excellence, delivering products that compete with the best tech studios in Silicon Valley and Europe.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-[#00aeef] font-semibold">
                — Innova Tech Engineering Leadership Team
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
