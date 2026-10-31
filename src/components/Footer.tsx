'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Footer() {
  const [ethiopiaTime, setEthiopiaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setEthiopiaTime(new Intl.DateTimeFormat('en-GB', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEngine.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 dark:bg-[#010308] dark:text-neutral-300 border-t border-slate-800 dark:border-neutral-800/80 pt-16 pb-12 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 dark:border-neutral-800">
          
          {/* Col 1-5: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/30 dark:border-cyan-500/30 text-sky-400 dark:text-cyan-400 flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                EP
              </div>
              <span className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                <span>Eagle Pathway</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 dark:bg-cyan-500/10 text-sky-400 dark:text-cyan-400 border border-sky-500/20 dark:border-cyan-500/20">
                  STUDIO
                </span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              The premier software engineering and deep-tech studio architecting bespoke platforms, sub-45ms FinTech fraud defense, and high-concurrency cloud systems for clients worldwide.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Addis Ababa Primary Node: </span>
              <span className="text-white font-medium">{ethiopiaTime || '12:00:00'} EAT (UTC+3)</span>
            </div>
          </div>

          {/* Col 6-8: Ecosystem */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 dark:text-cyan-400 font-bold block">
              Flagship Ecosystem
            </span>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a 
                  href="https://school-mgmt-api.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white dark:hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Eagle Pathway LMS</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.eaglespathway.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white dark:hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Mentorship Core Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.admin.eaglespathway.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white dark:hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>Admin Command Hub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="#verify-receipt" 
                  className="hover:text-white dark:hover:text-cyan-300 transition-colors flex items-center justify-between group"
                >
                  <span>VerifyReceipt™ Engine</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-400 dark:group-hover:text-cyan-400 transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Navigation & Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 dark:text-cyan-400 font-bold block">
              Transmission Rails
            </span>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block text-[10px]">DIRECT INQUIRIES</span>
                <a href="mailto:contact@eaglespathway.com" className="text-white hover:text-sky-400 dark:hover:text-cyan-300 transition-colors">
                  contact@eaglespathway.com
                </a>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 block text-[10px]">PRODUCTION HOST</span>
                <span className="text-white">tech.eaglespathway.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Eagle Pathway Tech Agency. Direct client code ownership.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>TOP OF ENGINE</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
