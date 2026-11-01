'use client';

import { useState, FormEvent } from 'react';
import { ArrowUpRight, Check, Send, Mail } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Full-Stack Platform / SIS');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/70 dark:bg-[#06070a] relative border-b border-black/[0.08] dark:border-white/[0.08] transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-zinc-300 font-mono text-xs uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-400" />
              <span>Architecture Brief • Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Start an architecture <span className="text-slate-400 dark:text-zinc-500 font-normal">brief.</span>
            </h2>

            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              Have a high-scale product or deep-tech system to architect? Submit your technical requirements. Our engineering team in Addis Ababa reviews briefs and responds within 24 hours.
            </p>

            <div className="pt-4 space-y-3 text-xs">
              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950/40 border border-slate-200 dark:border-white/[0.08] space-y-1.5 shadow-xs">
                <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest block font-medium">Direct Inquiries</span>
                <a
                  href="mailto:contact@eaglespathway.com"
                  className="text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-zinc-300 text-sm font-medium block transition-colors font-mono"
                >
                  contact@eaglespathway.com
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-950/40 border border-slate-200 dark:border-white/[0.08] space-y-1.5 shadow-xs">
                <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest block font-medium">Headquarters & SLA</span>
                <span className="text-slate-900 dark:text-white block font-medium font-mono">Addis Ababa, Ethiopia (UTC+3)</span>
                <span className="text-emerald-600 dark:text-emerald-400 block flex items-center gap-1.5 font-medium font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Guaranteed review within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Architectural Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white dark:bg-zinc-950/60 border border-slate-200 dark:border-white/[0.08] shadow-xs relative overflow-hidden">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  Architecture Brief Received
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Your requirements have been logged. Our engineering leadership will review your specifications and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-700 dark:text-zinc-300 border border-slate-300 dark:border-white/[0.12] hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 block">
                      Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dawit Haile / Enterprise Inc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dawit@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 block">
                    Architectural Scope *
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="Full-Stack Platform / SIS">Full-Stack Enterprise Platform / SIS / ERP</option>
                    <option value="FinTech Fraud / Verification Engine">FinTech Fraud Defense / VerifyReceipt Engine</option>
                    <option value="Autonomous AI Agent & High-Volume Worker">Autonomous AI Agent & High-Volume Worker Queue</option>
                    <option value="Cloud Infrastructure & Security Audit">Cloud Infrastructure & Security Hardening</option>
                    <option value="Custom Software Engineering">Custom Bespoke Production Software</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-zinc-300 block">
                    Technical Specifications / Vision *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your user scale, target platforms, expected query throughput, or technical bottlenecks..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-950 hover:bg-slate-800 dark:text-zinc-950 dark:bg-white dark:hover:bg-zinc-200 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                  <span>{loading ? 'Submitting Specifications...' : 'Submit Architecture Brief'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
