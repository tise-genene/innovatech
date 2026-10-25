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
import AudioToggle from '@/components/AudioToggle';
import { soundEngine } from '@/lib/sound';

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

  const openCommandPalette = () => {
    soundEngine.playClick();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-command-palette'));
    }
  };

  const navLinks = [
    { href: '/#products', label: 'Products' },
    { href: '/#services', label: 'Services' },
    { href: '/#why-us', label: 'Craft' },
    { href: '/#process', label: 'Process' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 studio-nav shadow-lg shadow-black/20'
          : 'py-4.5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Minimal Single-Line */}
          <Link 
            href="/" 
            onClick={() => soundEngine.playClick()}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0099ff] to-[#6366f1] p-0.5 transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-[#060709] rounded-[6px] flex items-center justify-center">
                <span className="text-white font-mono font-black text-xs tracking-tight">EP</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                Eagle Pathway
              </span>
              <span className="text-sm font-semibold tracking-tight text-[#0099ff]">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Crisp 1-word links */}
          <nav className="hidden md:flex items-center gap-0.5 bg-slate-100/90 dark:bg-[#11141c]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => soundEngine.playSwitch()}
                className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-[#0099ff] dark:hover:text-white px-3 py-1 rounded-full transition-all duration-150 hover:bg-slate-200/50 dark:hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions: Clean Icons & Compact CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Command Palette Trigger Icon */}
            <button
              onClick={openCommandPalette}
              aria-label="Open command palette (⌘K)"
              title="Open Command Menu (⌘K)"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11141c] text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Audio Toggle (Icon-only) */}
            <AudioToggle />

            {/* Theme Toggle (Icon-only) */}
            {mounted && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11141c] text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Start a Project CTA Button */}
            <Link
              href="/#contact"
              onClick={() => soundEngine.playClick()}
              className="ml-1 inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] transition-colors shadow-sm"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={openCommandPalette}
              aria-label="Open command palette"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11141c] text-slate-700 dark:text-slate-300"
            >
              <Search className="w-4 h-4" />
            </button>

            <AudioToggle />

            {mounted && (
              <button
                onClick={() => {
                  soundEngine.playClick();
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                aria-label="Toggle theme"
                className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11141c] text-slate-700 dark:text-slate-300"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => {
                soundEngine.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#11141c] text-slate-700 dark:text-slate-300"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-white dark:bg-[#11141c] border border-slate-200 dark:border-white/10 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#0099ff] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/10">
              <Link
                href="/#contact"
                onClick={() => {
                  soundEngine.playClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0099ff] hover:bg-[#0088e0] transition-colors"
              >
                Start Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
