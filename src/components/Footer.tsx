'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Globe, 
  CheckCircle2 
} from 'lucide-react';

export default function Footer() {
  const [ethiopiaTime, setEthiopiaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setEthiopiaTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-100 dark:bg-[#05070d] dark:text-slate-200 border-t border-slate-800 dark:border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-[#00aeef]/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 dark:border-white/10">
          
          {/* Logo & Tagline (Col 1-6) */}
          <div className="md:col-span-6 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00aeef] to-[#6366f1] p-0.5 shadow-md shadow-[#00aeef]/20">
                <div className="w-full h-full bg-[#08090a] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-[#00aeef]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold tracking-tight text-white">INNOVA</span>
                  <span className="text-xl font-bold tracking-tight text-[#00aeef]">TECH</span>
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                  Software Product Studio
                </span>
              </div>
            </Link>

            <p className="text-base text-slate-300 dark:text-slate-300 leading-relaxed max-w-md font-medium">
              Building the next generation of digital products from Ethiopia to the world.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Addis Ababa: <strong className="text-white">{ethiopiaTime || 'UTC+3'}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-white/10 text-xs font-mono text-slate-300">
                <Globe className="w-3.5 h-3.5 text-[#00aeef]" />
                <span>Global Clients</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (Col 7-9) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><Link href="/#services" className="hover:text-[#00aeef] transition-colors">Services</Link></li>
              <li><Link href="/#work" className="hover:text-[#00aeef] transition-colors">Portfolio</Link></li>
              <li><Link href="/#about" className="hover:text-[#00aeef] transition-colors">About</Link></li>
              <li><Link href="/#contact" className="hover:text-[#00aeef] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links & Location (Col 10-12) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Connect & Socials
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00aeef] shrink-0" />
                <a href="mailto:hello@innovatech.et" className="hover:text-white transition-colors">
                  hello@innovatech.et
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00aeef] shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-[#00aeef] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#00aeef]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-[#00aeef] transition-all"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#00aeef]" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Innova Tech. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ISO & Security Mindset</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
