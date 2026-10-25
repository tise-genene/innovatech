'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { 
  Search, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Globe, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  ArrowRight,
  Code2,
  Mail,
  X
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

interface CommandItem {
  id: string;
  category: 'Ecosystem' | 'Tools & Tests' | 'Navigation' | 'Studio Preferences';
  title: string;
  subtitle: string;
  icon: any;
  action: () => void;
  shortcut?: string;
  badge?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSoundEnabled(soundEngine.getEnabled());
    const unsub = soundEngine.subscribe(setSoundEnabled);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundEngine.playClick();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        soundEngine.playClick();
        setIsOpen(false);
      }
    };

    const handleOpenCustom = () => {
      soundEngine.playClick();
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleOpenCustom);
    return () => {
      unsub();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleOpenCustom);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  const copyApiCurl = () => {
    const curl = `curl -X POST https://tech.eaglespathway.com/api/v1/verify \\
  -H "Content-Type: application/json" \\
  -d '{"provider":"telebirr","rawText":"TxID: T238719842 Confirmed. 2,500.00 ETB transferred."}'`;
    navigator.clipboard.writeText(curl);
    soundEngine.playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commands: CommandItem[] = [
    {
      id: 'lms-demo',
      category: 'Ecosystem',
      title: 'Launch Eagle Pathway LMS Demo',
      subtitle: 'Open active production deployment on Vercel',
      icon: GraduationCap,
      action: () => {
        window.open('https://school-mgmt-api.vercel.app/', '_blank');
        setIsOpen(false);
      },
      badge: 'lms.eaglespathway.com',
    },
    {
      id: 'verify-receipt',
      category: 'Tools & Tests',
      title: 'Run VerifyReceipt Slip Parser',
      subtitle: 'Scroll to interactive FinTech slip simulator',
      icon: ShieldCheck,
      action: () => {
        setIsOpen(false);
        const hero = document.getElementById('runtime-console');
        hero?.scrollIntoView({ behavior: 'smooth' });
      },
      badge: 'Live Simulator',
    },
    {
      id: 'eagle-portal',
      category: 'Ecosystem',
      title: 'Visit Eagle Pathway Portal',
      subtitle: 'Official international student mentorship ecosystem',
      icon: Globe,
      action: () => {
        window.open('https://www.eaglespathway.com/', '_blank');
        setIsOpen(false);
      },
      badge: 'eaglespathway.com',
    },
    {
      id: 'admin-portal',
      category: 'Ecosystem',
      title: 'Eagle Pathway Admin Command',
      subtitle: 'Administrative governance portal',
      icon: Terminal,
      action: () => {
        window.open('https://www.admin.eaglespathway.com/', '_blank');
        setIsOpen(false);
      },
      badge: 'admin.eaglespathway.com',
    },
    {
      id: 'copy-curl',
      category: 'Tools & Tests',
      title: copied ? 'cURL Command Copied to Clipboard!' : 'Copy VerifyReceipt cURL API Spec',
      subtitle: 'POST /api/v1/verify sample request payload',
      icon: copied ? Check : Copy,
      action: copyApiCurl,
      badge: copied ? 'Copied' : 'POST /verify',
    },
    {
      id: 'nav-case-studies',
      category: 'Navigation',
      title: 'Explore Bento Case Studies',
      subtitle: 'View our production engineering portfolio',
      icon: Code2,
      action: () => {
        setIsOpen(false);
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-capabilities',
      category: 'Navigation',
      title: 'Inspect Engineering Capabilities',
      subtitle: 'Architecture deliverables & stack matrix',
      icon: Terminal,
      action: () => {
        setIsOpen(false);
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'nav-start-project',
      category: 'Navigation',
      title: 'Start an Architecture Brief',
      subtitle: 'Use interactive project scoping console',
      icon: Mail,
      action: () => {
        setIsOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'toggle-sound',
      category: 'Studio Preferences',
      title: soundEnabled ? 'Mute Studio Audio FX' : 'Enable Studio Audio FX',
      subtitle: 'Synthesized Web Audio clicks and telemetry chirps',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        soundEngine.toggle();
      },
      badge: soundEnabled ? 'Audio: ON' : 'Audio: OFF',
    },
    {
      id: 'toggle-theme',
      category: 'Studio Preferences',
      title: `Switch to ${theme === 'dark' ? 'Swiss Light' : 'Obsidian Dark'} Mode`,
      subtitle: 'Adjust studio visual tone',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        soundEngine.playClick();
        setTheme(theme === 'dark' ? 'light' : 'dark');
      },
    },
  ];

  const filtered = commands.filter((cmd) => {
    const q = search.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      (cmd.badge && cmd.badge.toLowerCase().includes(q))
    );
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              soundEngine.playClick();
              setIsOpen(false);
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#090b10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 text-white"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-[#0c0e14]">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type a command, product, or action... (e.g. 'LMS', 'Verify', 'Audio')"
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-hidden font-mono"
              />
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setIsOpen(false);
                }}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/5">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-xs font-mono">
                  No commands match &ldquo;{search}&rdquo;. Try &ldquo;LMS&rdquo;, &ldquo;Verify&rdquo;, or &ldquo;Sound&rdquo;.
                </div>
              ) : (
                filtered.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        soundEngine.playClick();
                        cmd.action();
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#0099ff] group-hover:scale-105 transition-transform shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white group-hover:text-[#0099ff] transition-colors truncate">
                              {cmd.title}
                            </span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {cmd.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5 font-sans">
                            {cmd.subtitle}
                          </p>
                        </div>
                      </div>

                      {cmd.badge && (
                        <span className="text-[10px] font-mono text-[#0099ff] bg-[#0099ff]/10 px-2 py-0.5 rounded border border-[#0099ff]/20 shrink-0 ml-2">
                          {cmd.badge}
                        </span>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Telemetry */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#060709] border-t border-white/5 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span>Navigate with click or arrow keys</span>
                <span>•</span>
                <span>ESC to exit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-400">EAGLE PATHWAY RUNTIME v2.4</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
