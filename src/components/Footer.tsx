'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
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
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-100 text-neutral-700 dark:bg-black dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-900 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200 dark:border-neutral-850">
          
          {/* Col 1-5: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-bold text-xs">
                EP
              </div>
              <span className="text-sm font-semibold tracking-tight text-neutral-950 dark:text-white">
                Eagle Pathway <span className="text-neutral-500 font-normal">Studio</span>
              </span>
            </Link>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              The full-cycle software engineering and product studio architecting custom platforms, scalable cloud infrastructure, and bespoke digital systems for clients worldwide.
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-500">
              <span>Addis Ababa Studio: </span>
              <span className="text-neutral-900 dark:text-neutral-300 font-medium">{ethiopiaTime || '12:00:00'} EAT (UTC+3)</span>
            </div>
          </div>

          {/* Col 6-8: Ecosystem */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-neutral-500 block">
              Ecosystem
            </span>
            <ul className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <li>
                <a 
                  href="https://school-mgmt-api.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Eagle Pathway LMS</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.eaglespathway.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Eagle Pathway Core</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.admin.eaglespathway.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Admin Command Ops</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600" />
                </a>
              </li>
              <li>
                <Link 
                  href="/#work" 
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>VerifyReceipt (FinTech)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 9-10: Navigation */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-neutral-500 block">
              Studio
            </span>
            <ul className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <li><Link href="/#work" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/#capabilities" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Capabilities</Link></li>
              <li><Link href="/#systems" className="hover:text-neutral-950 dark:hover:text-white transition-colors">System Catalog</Link></li>
              <li><Link href="/#about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Inquiries</Link></li>
            </ul>
          </div>

          {/* Col 11-12: Contact */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-neutral-500 block">
              Direct Contact
            </span>
            <div className="space-y-1 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <a 
                href="mailto:contact@eaglespathway.com" 
                className="text-neutral-950 dark:text-white hover:underline block font-medium"
              >
                contact@eaglespathway.com
              </a>
              <p className="text-neutral-500 text-[11px] pt-1">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Eagle Pathway Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>tech.eaglespathway.com</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
