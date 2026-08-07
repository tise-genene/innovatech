'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle, 
  Play, 
  Code2, 
  Cpu, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Server, 
  Globe
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'code' | 'ai'>('analytics');

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern bg-radial-gradient">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00aeef]/20 to-[#6366f1]/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Trust Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#00aeef]/30 text-xs font-mono text-slate-200 shadow-lg shadow-[#00aeef]/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-[#00aeef]" />
            <span>Based in Addis Ababa, Ethiopia</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Software Development • AI • Design • Growth</span>
          </motion.div>
        </div>

        {/* Hero Main Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            We Build Software Products{' '}
            <span className="bg-gradient-to-r from-[#00aeef] via-cyan-300 to-[#6366f1] bg-clip-text text-transparent">
              From Idea To Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Innova Tech helps startups and businesses build SaaS platforms, web applications, AI solutions, and digital experiences with a reliable engineering team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00aeef] to-[#6366f1] hover:from-[#0090c9] hover:to-[#4f46e5] shadow-xl shadow-[#00aeef]/30 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 border border-white/15 hover:bg-slate-800 hover:text-white flex items-center justify-center gap-2.5 transition-all duration-300"
            >
              <Play className="w-4 h-4 text-[#00aeef] fill-[#00aeef]/20" />
              <span>View Our Work</span>
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Startup Speed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Enterprise-Grade Code
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> 100% Ethiopian Talent
            </span>
          </motion.div>
        </div>

        {/* Interactive Studio Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl border border-white/10 glass-card shadow-2xl shadow-black/80 overflow-hidden relative"
        >
          {/* Top Window Bar */}
          <div className="px-4 py-3 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                innovatech-core-engine.v2.et
              </span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-1 border border-white/5">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-[#00aeef] text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'code'
                    ? 'bg-[#00aeef] text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Engine API
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                  activeTab === 'ai'
                    ? 'bg-[#00aeef] text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                AI Mesh
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-6 md:p-8 bg-slate-950/70 min-h-[320px]">
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400">Total Products Delivered</span>
                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                      30+ <span className="text-xs font-mono text-emerald-400">+100% Quality</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400">System Uptime</span>
                    <div className="text-2xl font-bold text-emerald-400">99.99%</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400">Avg. Launch Time</span>
                    <div className="text-2xl font-bold text-white">4-8 Weeks</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <span className="text-xs font-mono text-slate-400">Client Satisfaction</span>
                    <div className="text-2xl font-bold text-[#00aeef]">5.0 / 5.0</div>
                  </div>
                </div>

                {/* Animated Graph / Metric Mockup */}
                <div className="p-5 rounded-xl bg-slate-900/50 border border-white/5 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#00aeef]" /> Live Deployment Pipeline & AI Inference Latency
                    </span>
                    <span className="text-emerald-400 font-bold">14ms latency</span>
                  </div>
                  <div className="h-24 w-full flex items-end justify-between gap-1 sm:gap-2 pt-2">
                    {[40, 65, 45, 80, 55, 90, 85, 95, 75, 100, 88, 96, 92, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-slate-800 rounded-t-md overflow-hidden h-full flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: i * 0.04 }}
                          className="w-full bg-gradient-to-t from-[#00aeef]/40 to-[#6366f1]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="font-mono text-xs text-slate-300 space-y-2 bg-slate-900/90 p-5 rounded-xl border border-white/5 overflow-x-auto">
                <div className="text-slate-500">// Innova Tech Core SaaS Client Architecture</div>
                <div><span className="text-purple-400">import</span> &#123; <span className="text-cyan-300">InnovaEngine</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@innovatech/core&apos;</span>;</div>
                <div className="pt-2"><span className="text-purple-400">export const</span> <span className="text-blue-400">deployDigitalProduct</span> = <span className="text-purple-400">async</span> (project) =&gt; &#123;</div>
                <div className="pl-4 text-slate-300"><span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> InnovaEngine(&#123; region: <span className="text-emerald-300">&apos;AddisAbaba_GlobalMesh&apos;</span> &#125;);</div>
                <div className="pl-4 text-slate-300"><span className="text-purple-400">return await</span> client.buildProductStack(&#123;</div>
                <div className="pl-8 text-cyan-300">frontend: <span className="text-emerald-300">&apos;Next.js 16 + TypeScript + Tailwind&apos;</span>,</div>
                <div className="pl-8 text-cyan-300">backend: <span className="text-emerald-300">&apos;Node.js / FastAPI Microservices&apos;</span>,</div>
                <div className="pl-8 text-cyan-300">aiIntegration: <span className="text-emerald-300">&apos;Custom RAG + LLM Workflows&apos;</span>,</div>
                <div className="pl-8 text-cyan-300">security: <span className="text-emerald-300">&apos;Enterprise End-to-End Encryption&apos;</span></div>
                <div className="pl-4">&#125;);</div>
                <div>&#125;;</div>
                <div className="pt-2 text-emerald-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> // Build status: Ready for Production (0 Errors)
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">LLM Agent Pipelines</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom conversational, context-aware AI agents tailored to regional & global enterprise workflows.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Server className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">RAG & Vector Search</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ultra-fast vector database indexing for document processing, legal, and financial intelligence.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Automated Webhooks</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Autonomous background processing queues linking payment gateways, CRMs, and mobile bots.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Tech Stack Marquee Ticker */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold mb-6">
            Technologies & Frameworks We Master
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-85">
            {['Next.js 16', 'TypeScript', 'React Native', 'Node.js', 'Python FastAPI', 'PostgreSQL', 'OpenAI API', 'Tailwind CSS', 'Docker & Kubernetes', 'GraphQL'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-slate-900/70 border border-white/10 text-xs font-mono text-slate-300 font-medium hover:border-[#00aeef]/40 hover:text-white transition-all shadow-sm"
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
