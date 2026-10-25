'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Terminal,
  ArrowUpRight,
  Layers,
  Sparkles,
  Cpu,
  Radio,
  FileCode2
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Contact() {
  // Configurator state
  const [selectedComponents, setSelectedComponents] = useState<string[]>([
    'Multi-Tenant SIS / LMS'
  ]);
  const [velocity, setVelocity] = useState<'sprint' | 'scale' | 'retainer'>('sprint');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const architectureOptions = [
    { id: 'lms', label: 'Multi-Tenant SIS / LMS', tag: 'EDTECH' },
    { id: 'fintech', label: 'VerifyReceipt FinTech Engine', tag: 'FINTECH' },
    { id: 'bot', label: 'Telegram AI Automation Bot', tag: 'AUTOMATION' },
    { id: 'cloud', label: 'Cloud Edge CDN & PostgreSQL RLS', tag: 'INFRA' },
    { id: 'mobile', label: 'Cross-Platform Mobile (Flutter)', tag: 'MOBILE' },
    { id: 'audit', label: 'Codebase & Security Audit', tag: 'SECURITY' },
  ];

  const toggleComponent = (label: string) => {
    soundEngine.playSwitch();
    if (selectedComponents.includes(label)) {
      if (selectedComponents.length > 1) {
        setSelectedComponents(selectedComponents.filter((c) => c !== label));
      }
    } else {
      setSelectedComponents([...selectedComponents, label]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    soundEngine.playClick();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      soundEngine.playSuccess();
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#060709] relative overflow-hidden border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-[#0099ff]">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Project Scoping Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Scope Your System Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Configure your technical requirements below. Our engineering squad in Addis Ababa will review the generated brief and return an architectural plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Configurator */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl studio-card space-y-6 shadow-xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>1. Select Architecture Components</span>
                <span className="text-[11px] font-mono text-[#0099ff] font-normal">
                  {selectedComponents.length} Selected
                </span>
              </h3>

              {/* Component Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {architectureOptions.map((opt) => {
                  const isSelected = selectedComponents.includes(opt.label);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleComponent(opt.label)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0099ff]/10 border-[#0099ff]/50 text-slate-900 dark:text-white font-medium shadow-xs'
                          : 'bg-slate-100/60 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-[#0099ff]' : 'bg-slate-300 dark:bg-slate-600'}`} />
                        <span className="text-xs truncate">{opt.label}</span>
                      </div>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-500 shrink-0">
                        {opt.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Velocity Selection */}
              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-white/10">
                <h4 className="text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                  2. Delivery Velocity & Scope Model
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'sprint', label: '4-Week Sprint', desc: 'Rapid MVP Release' },
                    { id: 'scale', label: '8-12 Weeks', desc: 'Full Production Suite' },
                    { id: 'retainer', label: 'Dedicated Retainer', desc: 'Continuous Engineering SLA' },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => {
                        soundEngine.playSwitch();
                        setVelocity(v.id as any);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        velocity === v.id
                          ? 'bg-[#0099ff]/10 border-[#0099ff] text-slate-900 dark:text-white font-semibold'
                          : 'bg-slate-100/60 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span className="text-xs block font-mono">{v.label}</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">{v.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Fields */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-200 dark:border-white/10">
                <h4 className="text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                  3. Contact Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Name / Org *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dawit Haile"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060709] text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-[#0099ff]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dawit@organization.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060709] text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-[#0099ff]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Project Notes & Target Milestones (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Existing codebase, current stack, or specific launch date constraints..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#060709] text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-[#0099ff]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] shadow-md shadow-[#0099ff]/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Synthesizing Architecture Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Architecture Brief</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Live Synthesized PRD Terminal Box & Direct Studio Info */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Terminal Spec Box */}
            <div className="rounded-2xl bg-slate-900 dark:bg-[#090b10] border border-slate-800 dark:border-white/10 p-5 shadow-2xl font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <FileCode2 className="w-3.5 h-3.5 text-[#0099ff]" />
                  <span>SPEC_PREVIEW.json</span>
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  REALTIME SYNTHESIS
                </span>
              </div>

              <div className="space-y-2 text-slate-300 text-[11px] leading-relaxed">
                <div>
                  <span className="text-slate-500">&quot;studio&quot;:</span> &quot;Eagle Pathway Tech Agency&quot;,
                </div>
                <div>
                  <span className="text-slate-500">&quot;targetVelocity&quot;:</span> &quot;{velocity.toUpperCase()}&quot;,
                </div>
                <div>
                  <span className="text-slate-500">&quot;components&quot;:</span> [
                  <div className="pl-4 text-[#0099ff]">
                    {selectedComponents.map((c, i) => (
                      <div key={i}>&quot;{c}&quot;{i < selectedComponents.length - 1 ? ',' : ''}</div>
                    ))}
                  </div>
                  ],
                </div>
                <div>
                  <span className="text-slate-500">&quot;estimatedDelivery&quot;:</span> &quot;{
                    velocity === 'sprint' ? '4-6 Weeks to Production' : velocity === 'scale' ? '8-12 Weeks Full Rollout' : 'Continuous Dedicated Capacity'
                  }&quot;,
                </div>
                <div>
                  <span className="text-slate-500">&quot;turnaroundSLA&quot;:</span> &quot;&lt; 24 Hours Guaranteed Review&quot;
                </div>
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs"
                >
                  [✔] Brief transmitted to lead engineer. Expecting technical roadmap proposal shortly.
                </motion.div>
              )}
            </div>

            {/* Direct Studio Contacts */}
            <div className="p-6 rounded-2xl studio-card space-y-4">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                Direct Engineering Lead
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0099ff] shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Direct Email</span>
                    <a href="mailto:contact@eaglespathway.com" className="font-semibold text-slate-900 dark:text-white hover:text-[#0099ff] transition-colors">
                      contact@eaglespathway.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0099ff] shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Engineering Studio HQ</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Addis Ababa, Ethiopia (UTC+3)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Turnaround SLA</span>
                    <span className="font-medium text-emerald-500 font-mono">
                      Guaranteed reply &lt; 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Strict NDA Pill */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strict Mutual NDA Protected by Default</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
