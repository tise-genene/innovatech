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
  ArrowUpRight, 
  Terminal, 
  Code2, 
  Layers, 
  Sparkles, 
  Workflow, 
  Users, 
  Mail 
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#work', label: 'Portfolio', icon: Code2 },
    { href: '/#services', label: 'Services', icon: Layers },
    { href: '/#why-us', label: 'Why Us', icon: Sparkles },
    { href: '/#process', label: 'Process', icon: Workflow },
    { href: '/#about', label: 'About', icon: Users },
    { href: '/#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 theme-nav shadow-lg shadow-black/5 dark:shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00aeef] to-[#6366f1] p-0.5 shadow-md shadow-[#00aeef]/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 dark:bg-[#08090a] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-[#00aeef]" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                  INNOVA
                </span>
                <span className="text-xl font-extrabold tracking-tight text-[#00aeef]">
                  TECH
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-slate-600 dark:text-slate-400 uppercase font-semibold">
                Software Product Studio
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-200/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-300 dark:border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00aeef] dark:hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-slate-300/60 dark:hover:bg-white/10"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00aeef]" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-3">
            
            {/* next-themes Switcher */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-xs"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            )}

            {/* Primary CTA */}
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#00aeef] to-[#6366f1] hover:from-[#0090c9] hover:to-[#4f46e5] shadow-md shadow-[#00aeef]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Mobile Drawer Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-100/95 dark:bg-[#08090a]/95 backdrop-blur-2xl border-b border-slate-300 dark:border-white/10 px-6 py-6 space-y-4 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800/80 hover:text-[#00aeef] transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#00aeef]" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-300 dark:border-white/10 flex flex-col gap-3">
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00aeef] to-[#6366f1] shadow-lg shadow-[#00aeef]/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-slate-600 dark:text-slate-400 font-mono pt-2">
                📍 Based in Addis Ababa, Ethiopia • Serving Global Clients
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
