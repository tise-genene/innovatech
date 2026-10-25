'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Globe, 
  CheckCircle2,
  ArrowUpRight
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
    <footer className="relative bg-slate-900 text-slate-100 dark:bg-[#060709] dark:text-slate-200 border-t border-slate-800 dark:border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 dark:border-white/10">
          
          {/* Logo & Tagline (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0099ff] to-[#6366f1] p-0.5 shadow-sm">
                <div className="w-full h-full bg-[#060709] rounded-[7px] flex items-center justify-center">
                  <span className="text-white font-mono font-black text-sm">EP</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold tracking-tight text-white">EAGLE PATHWAY</span>
                  <span className="text-base font-medium tracking-tight text-[#0099ff]">TECH</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  tech.eaglespathway.com
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The software engineering and product studio behind the Eagle Pathway ecosystem, FinTech verification tooling, and scalable cloud systems in East Africa.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 dark:bg-white/5 border border-slate-700 dark:border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Addis Ababa: <strong className="text-white">{ethiopiaTime || 'UTC+3'}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 dark:bg-white/5 border border-slate-700 dark:border-white/10 text-xs font-mono text-slate-300">
                <Globe className="w-3.5 h-3.5 text-[#0099ff]" />
                <span>Global Delivery</span>
              </div>
            </div>
          </div>

          {/* Eagle Pathway Suite Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Eagle Pathway Suite
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li>
                <a 
                  href="https://school-mgmt-api.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0099ff] transition-colors flex items-center justify-between group"
                >
                  <span>Eagle Pathway LMS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.eaglespathway.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0099ff] transition-colors flex items-center justify-between group"
                >
                  <span>Eagle Pathway Core</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.admin.eaglespathway.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0099ff] transition-colors flex items-center justify-between group"
                >
                  <span>Admin Command Portal</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <Link 
                  href="/#work" 
                  className="hover:text-[#0099ff] transition-colors flex items-center justify-between group"
                >
                  <span>VerifyReceipt (FinTech)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/#work" 
                  className="hover:text-[#0099ff] transition-colors flex items-center justify-between group"
                >
                  <span>EagleBot Telegram AI</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Navigation (Col 9-10) */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Studio
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              <li><Link href="/#products" className="hover:text-[#0099ff] transition-colors">Ecosystem</Link></li>
              <li><Link href="/#work" className="hover:text-[#0099ff] transition-colors">Case Studies</Link></li>
              <li><Link href="/#services" className="hover:text-[#0099ff] transition-colors">Capabilities</Link></li>
              <li><Link href="/#about" className="hover:text-[#0099ff] transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-[#0099ff] transition-colors">Start Project</Link></li>
            </ul>
          </div>

          {/* Contact / Inquiries (Col 11-12) */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-xs text-slate-300 font-mono">
              <p className="text-slate-400">Project scoping & technical partnerships:</p>
              <a 
                href="mailto:contact@eaglespathway.com" 
                className="text-[#0099ff] hover:underline block truncate"
              >
                contact@eaglespathway.com
              </a>
              <p className="pt-2 text-slate-500 text-[11px]">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Eagle Pathway Tech Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Domain: tech.eaglespathway.com</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 dark:bg-white/5 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
