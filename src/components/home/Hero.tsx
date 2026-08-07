'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Play, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Terminal, 
  Server 
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'code' | 'ai'>('analytics');

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#00aeef]/20 via-[#6366f1]/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Abstract Tech Elements */}
      <div className="absolute top-28 left-8 sm:left-24 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/90 shadow-md animate-float text-xs font-mono text-slate-800 dark:text-slate-200">
        <Cpu className="w-3.5 h-3.5 text-[#00aeef]" />
        <span>RAG Vector Engine v2.4</span>
      </div>

      <div className="absolute top-36 right-8 sm:right-24 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/90 shadow-md animate-float text-xs font-mono text-slate-800 dark:text-slate-200" style={{ animationDelay: '2s' }}>
        <Activity className="w-3.5 h-3.5 text-emerald-500" />
        <span>99.99% Cloud Uptime</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 dark:bg-slate-900/90 border border-slate-800 dark:border-white/10 text-xs font-mono text-white dark:text-slate-200 shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Based in Addis Ababa, Ethiopia • Serving Global Clients</span>
          </motion.div>
        </div>

        {/* Hero Main Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.12]"
          >
            Building Digital Products That{' '}
            <span className="bg-gradient-to-r from-[#00aeef] via-cyan-500 to-[#6366f1] bg-clip-text text-transparent">
              Drive Real Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We design and build SaaS platforms, AI solutions, and scalable software products for startups and businesses.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00aeef] to-[#6366f1] hover:from-[#0090c9] hover:to-[#4f46e5] shadow-xl shadow-[#00aeef]/25 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-slate-950 dark:bg-slate-900 border border-slate-800 dark:border-white/15 hover:bg-slate-800 flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md"
            >
              <Play className="w-4 h-4 text-[#00aeef] fill-[#00aeef]/20" />
              <span>View Our Work</span>
            </Link>
          </motion.div>

          {/* Trust Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-800 dark:text-slate-300 font-semibold"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Startup Speed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Enterprise-Grade Code
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% In-House Talent
            </span>
          </motion.div>
        </div>

        {/* Interactive Product Studio Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden relative"
        >
          {/* Top Window Header */}
          <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs font-mono text-slate-600 dark:text-slate-400 hidden sm:inline-block">
                innovatech-product-studio.et
              </span>
            </div>

            {/* View Switcher */}
            <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-950 rounded-lg p-1 border border-slate-300 dark:border-white/5">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-[#00aeef] text-white shadow'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'code'
                    ? 'bg-[#00aeef] text-white shadow'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                API Engine
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'ai'
                    ? 'bg-[#00aeef] text-white shadow'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                AI Mesh
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 md:p-8 min-h-[300px] bg-white dark:bg-slate-950">
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Products Delivered</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      30+ <span className="text-xs font-mono text-emerald-500 font-normal">+100% Quality</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">System Uptime</span>
                    <div className="text-2xl font-bold text-emerald-500">99.99%</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Avg. Launch Sprint</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">4-8 Weeks</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Client Satisfaction</span>
                    <div className="text-2xl font-bold text-[#00aeef]">5.0 / 5.0</div>
                  </div>
                </div>

                {/* Animated Pipeline Graph */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-800 dark:text-slate-300 flex items-center gap-2 font-medium">
                      <Activity className="w-4 h-4 text-[#00aeef]" /> Live Production Metrics & Microservice Execution
                    </span>
                    <span className="text-emerald-500 font-bold">12ms latency</span>
                  </div>
                  <div className="h-24 w-full flex items-end justify-between gap-1 sm:gap-2 pt-2">
                    {[45, 60, 50, 85, 65, 95, 80, 100, 70, 90, 85, 98, 92, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-t-md overflow-hidden h-full flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: i * 0.04 }}
                          className="w-full bg-gradient-to-t from-[#00aeef] to-[#6366f1]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="font-mono text-xs text-slate-900 dark:text-slate-200 space-y-2 bg-slate-100 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-white/5 overflow-x-auto">
                <div className="text-slate-500">// Innova Tech Software Architecture Stack</div>
                <div><span className="text-purple-600 dark:text-purple-400 font-bold">import</span> &#123; <span className="text-cyan-600 dark:text-cyan-300">InnovaStudio</span> &#125; <span className="text-purple-600 dark:text-purple-400 font-bold">from</span> <span className="text-emerald-600 dark:text-emerald-300">&apos;@innovatech/core&apos;</span>;</div>
                <div className="pt-2"><span className="text-purple-600 dark:text-purple-400 font-bold">export const</span> <span className="text-blue-600 dark:text-blue-400">buildSaaSPlatform</span> = <span className="text-purple-600 dark:text-purple-400 font-bold">async</span> (startup) =&gt; &#123;</div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400 font-bold">const</span> studio = <span className="text-purple-600 dark:text-purple-400 font-bold">new</span> InnovaStudio(&#123; region: <span className="text-emerald-600 dark:text-emerald-300">&apos;AddisAbaba_GlobalDelivery&apos;</span> &#125;);</div>
                <div className="pl-4"><span className="text-purple-600 dark:text-purple-400 font-bold">return await</span> studio.deployProduct(&#123;</div>
                <div className="pl-8 text-cyan-700 dark:text-cyan-300">frontend: <span className="text-emerald-600 dark:text-emerald-300">&apos;Next.js 16 + TypeScript + Tailwind&apos;</span>,</div>
                <div className="pl-8 text-cyan-700 dark:text-cyan-300">backend: <span className="text-emerald-600 dark:text-emerald-300">&apos;Python FastAPI / Node.js Microservices&apos;</span>,</div>
                <div className="pl-8 text-cyan-700 dark:text-cyan-300">aiIntegration: <span className="text-emerald-600 dark:text-emerald-300">&apos;LLM Workflows + RAG Indexing&apos;</span>,</div>
                <div className="pl-8 text-cyan-700 dark:text-cyan-300">database: <span className="text-emerald-600 dark:text-emerald-300">&apos;PostgreSQL + Supabase + Redis&apos;</span></div>
                <div className="pl-4">&#125;);</div>
                <div>&#125;;</div>
                <div className="pt-2 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> // Status: 0 Errors • Production Ready
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-cyan-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Conversational Bots</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Custom Telegram, WhatsApp, and Web AI bots connected directly to business CRMs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Server className="w-4 h-4 text-indigo-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">RAG Vector Search</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Vectorized internal knowledge base search indexing enterprise documentation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Autonomous Agents</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Background task automation queues handling cross-platform data synchronization.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400 font-semibold mb-6">
            Engineered With Cutting-Edge Tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {['Next.js 16', 'TypeScript', 'React Native', 'Supabase', 'PostgreSQL', 'Python FastAPI', 'OpenAI API', 'Tailwind CSS', 'Docker', 'GraphQL'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold shadow-xs hover:border-[#00aeef] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
