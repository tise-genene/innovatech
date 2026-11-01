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
  Search
} from 'lucide-react';
import { soundEngine } from '@/lib/sound';
import BrandLogo from '@/components/BrandLogo';

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

  const navLinks = [
    { href: '/#work', label: 'Systems' },
    { href: '/#lab', label: 'Deep-Tech Lab' },
    { href: '/#manifesto', label: 'Manifesto' },
    { href: '/#capabilities', label: 'Capabilities' },
    { href: '/#methodology', label: 'Process' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 dark:bg-[#06070a]/95 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] ${
        isScrolled ? 'py-3 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <BrandLogo size="md" variant="raptor" />
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Eagle Pathway</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-white/[0.08] dark:text-zinc-300 border border-slate-200 dark:border-white/[0.1]">
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
                className="text-xs font-medium text-slate-600 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              aria-label="Open command palette"
              title="Command menu (⌘K)"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
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
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
              </button>
            )}

            <Link
              href="#contact"
              onClick={() => soundEngine.playClick()}
              className="px-4 py-2 rounded-full text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-sm transition-all cursor-pointer"
            >
              Start Brief
            </Link>
          </div>

          {/* Mobile Menu Button (Below lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openCommandPalette}
              aria-label="Open command menu"
              className="p-2 text-zinc-600 dark:text-zinc-400"
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
                className="p-2 text-zinc-600 dark:text-zinc-400"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
              </button>
            )}

            <button
              onClick={() => {
                soundEngine.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
              className="p-2 text-zinc-700 dark:text-zinc-300"
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1.5 text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08]">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center py-2.5 rounded-full text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
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
