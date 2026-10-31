'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Send, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Full-Stack Platform / SIS');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    soundEngine.playWarp();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundEngine.playSuccess();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/70 dark:bg-[#01040a] relative border-b border-slate-200 dark:border-neutral-800 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/20 dark:border-cyan-500/25 text-sky-700 dark:text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5 animate-pulse text-sky-600 dark:text-cyan-400" />
              <span>[ 07 // INITIATE TRANSMISSION ]</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Start an architecture <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400">brief.</span>
            </h2>

            <p className="text-sm text-slate-600 dark:text-neutral-300 leading-relaxed font-light">
              Have a high-scale product or deep-tech system to architect? Submit your technical requirements. Our engineering team in Addis Ababa reviews briefs and responds within 24 hours.
            </p>

            <div className="pt-4 space-y-3 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-950/70 border border-slate-200 dark:border-neutral-800 space-y-1.5 shadow-sm">
                <span className="text-[10px] text-sky-600 dark:text-cyan-400 uppercase tracking-widest block font-bold">DIRECT TRANSMISSION</span>
                <a
                  href="mailto:contact@eaglespathway.com"
                  className="text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-300 text-sm font-semibold block transition-colors"
                >
                  contact@eaglespathway.com
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-950/70 border border-slate-200 dark:border-neutral-800 space-y-1.5 shadow-sm">
                <span className="text-[10px] text-sky-600 dark:text-cyan-400 uppercase tracking-widest block font-bold">HQ LOCATION & SLA</span>
                <span className="text-slate-900 dark:text-white block font-medium">Addis Ababa, Ethiopia (UTC+3)</span>
                <span className="text-emerald-600 dark:text-emerald-400 block flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Guaranteed review within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cyber-Brutalist High-Craft Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-neutral-950/80 border border-slate-200 dark:border-neutral-800/90 shadow-xl relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black font-mono text-slate-900 dark:text-white">
                  BRIEF TRANSMITTED
                </h3>
                <p className="text-xs text-slate-600 dark:text-neutral-300 max-w-sm mx-auto leading-relaxed font-mono">
                  Payload verified and logged to queue. Our engineering leadership will review your specifications within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono text-sky-600 dark:text-cyan-400 border border-sky-500/40 dark:border-cyan-500/40 hover:bg-sky-500/10 dark:hover:bg-cyan-500/10 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 block uppercase tracking-wider">
                      Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onFocus={() => soundEngine.playKeystroke()}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dawit Haile / Enterprise Inc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-neutral-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-400 transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 block uppercase tracking-wider">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onFocus={() => soundEngine.playKeystroke()}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dawit@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-neutral-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-400 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 block uppercase tracking-wider">
                    Architectural Scope *
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => {
                      soundEngine.playSwitch();
                      setScope(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-neutral-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-400 transition-all font-mono cursor-pointer"
                  >
                    <option value="Full-Stack Platform / SIS">Full-Stack Enterprise Platform / SIS / ERP</option>
                    <option value="FinTech Fraud / Verification Engine">FinTech Fraud Defense / VerifyReceipt Engine</option>
                    <option value="Autonomous AI Agent & Telegram Worker">Autonomous AI Agent & High-Volume Worker Queue</option>
                    <option value="Cloud Infrastructure & Security Audit">Cloud Infrastructure & Security Hardening</option>
                    <option value="Custom Software Engineering">Custom Bespoke Production Software</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 block uppercase tracking-wider">
                    Technical Specifications / Vision *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onFocus={() => soundEngine.playKeystroke()}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your user scale, target platforms, expected query throughput, or technical bottlenecks..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-neutral-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-400 transition-all font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 shadow-md dark:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>{loading ? 'TRANSMITTING ENCRYPTED PAYLOAD...' : 'TRANSMIT ARCHITECTURE BRIEF'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
