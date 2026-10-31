'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search,
  Rocket
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCommandPalette = () => {
    soundEngine.playClick();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  const triggerHyperdrive = () => {
    soundEngine.playWarp();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toggle-hyperdrive'));
    }
  };

  const navLinks = [
    { href: '/#orbital', label: 'Orbital 3D' },
    { href: '/#silicon', label: 'Silicon' },
    { href: '/#work', label: 'Systems' },
    { href: '/#crucible', label: 'Crucible' },
    { href: '/#verify-receipt', label: 'Fraud Lab' },
    { href: '/#terminal', label: 'CLI 3.0' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-cyan-500/15 ${
        isScrolled ? 'py-3 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark */}
          <Link 
            href="/" 
            onClick={() => soundEngine.playClick()}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/30 dark:border-cyan-500/40 text-sky-600 dark:text-cyan-300 flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              EP
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Eagle Pathway</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 border border-sky-500/20 dark:border-cyan-500/20">
                STUDIO
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => soundEngine.playSwitch()}
                className="text-xs font-mono font-medium text-slate-600 hover:text-slate-950 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Falcon Hyperdrive Ignition Button */}
            <button
              onClick={triggerHyperdrive}
              aria-label="Ignite Falcon Hyperdrive"
              title="Ignite Falcon Hyperdrive (Warp Velocity)"
              className="px-2.5 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 dark:border-amber-400/30 dark:bg-amber-400/10 dark:hover:bg-amber-400/20 transition-all cursor-pointer group flex items-center gap-1.5"
            >
              <Rocket className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Launch</span>
            </button>

            <button
              onClick={openCommandPalette}
              aria-label="Open command palette"
              title="Command menu (⌘K)"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {mounted && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            )}

            <Link
              href="#contact"
              onClick={() => soundEngine.playClick()}
              className="px-4 py-2 rounded-full text-xs font-mono font-bold text-white bg-slate-950 hover:bg-slate-800 dark:text-black dark:bg-cyan-400 dark:hover:bg-cyan-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all cursor-pointer"
            >
              Start Brief
            </Link>
          </div>

          {/* Mobile Menu Button (Below lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={triggerHyperdrive}
              aria-label="Ignite Falcon Hyperdrive"
              title="Ignite Falcon Hyperdrive"
              className="p-1.5 text-amber-600 dark:text-amber-400"
            >
              <Rocket className="w-4 h-4" />
            </button>

            <button
              onClick={openCommandPalette}
              aria-label="Open command menu"
              className="p-1.5 text-slate-600 dark:text-neutral-400"
            >
              <Search className="w-4 h-4" />
            </button>

            {mounted && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                aria-label="Toggle theme"
                className="p-1.5 text-slate-600 dark:text-neutral-400"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            )}

            <button
              onClick={() => {
                soundEngine.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
              className="p-1.5 text-slate-700 dark:text-neutral-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setIsMobileMenuOpen(false);
                  }}
                  className="py-1.5 text-sm font-mono font-medium text-slate-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-neutral-800">
              <Link
                href="#contact"
                onClick={() => {
                  soundEngine.playClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full block text-center py-2.5 rounded-full text-xs font-mono font-bold text-white bg-slate-950 hover:bg-slate-800 dark:text-black dark:bg-cyan-400 transition-colors"
              >
                Start Architecture Brief
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
