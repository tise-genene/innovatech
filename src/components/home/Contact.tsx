'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Send } from 'lucide-react';
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
    soundEngine.playClick();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundEngine.playSuccess();
    }, 700);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              [ 06 // CONTACT & INQUIRIES ]
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Start an architecture brief.
            </h2>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Have a product or system to architect? Send us your technical requirements. Our engineering team in Addis Ababa reviews briefs and responds within 24 hours.
            </p>

            <div className="pt-4 space-y-3 text-xs font-mono">
              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 space-y-1">
                <span className="text-neutral-500 uppercase block">DIRECT EMAIL INQUIRIES</span>
                <a
                  href="mailto:contact@eaglespathway.com"
                  className="text-neutral-950 dark:text-white hover:underline text-sm font-semibold block"
                >
                  contact@eaglespathway.com
                </a>
              </div>

              <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 space-y-1">
                <span className="text-neutral-500 uppercase block">STUDIO LOCATION & SLA</span>
                <span className="text-neutral-800 dark:text-neutral-300 block">Addis Ababa, Ethiopia (UTC+3)</span>
                <span className="text-neutral-500 block">Guaranteed review within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form */}
          <div className="lg:col-span-7 p-8 rounded-xl bg-neutral-50/50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                  Brief Transmitted
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Thank you. Our engineering team has received your brief and will review your scope within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-full text-xs font-mono text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-600 dark:text-neutral-400 block">
                      Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dawit Haile"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-950 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-600 dark:text-neutral-400 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dawit@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-950 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-600 dark:text-neutral-400 block">
                    Primary Architectural Discipline *
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-950 dark:text-white focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-500 transition-colors"
                  >
                    <option>Full-Stack Platform / SIS (Next.js & PostgreSQL)</option>
                    <option>FinTech Fraud Detection & Slip Verification (VerifyReceipt)</option>
                    <option>Autonomous Telegram Worker & AI Queue</option>
                    <option>Codebase Security & Performance Audit</option>
                    <option>Custom Digital System Architecture</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-600 dark:text-neutral-400 block">
                    System Requirements & Scope Notes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current system, target concurrency, timeline, or integration requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-950 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:text-black dark:bg-white dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {loading ? 'Transmitting Brief...' : 'Transmit Architecture Brief'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
