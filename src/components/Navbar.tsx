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
    { href: '/#work', label: 'Work' },
    { href: '/#capabilities', label: 'Capabilities' },
    { href: '/#systems', label: 'Ecosystem' },
    { href: '/#why-us', label: 'Methodology' },
    { href: '/#about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3 studio-nav shadow-sm'
          : 'py-5 bg-transparent'
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
            <div className="w-7 h-7 rounded bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-bold text-xs tracking-tighter">
              EP
            </div>
            <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
              Eagle Pathway <span className="text-neutral-500 font-normal">Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => soundEngine.playSwitch()}
                className="text-xs font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              aria-label="Open command palette"
              title="Command menu (⌘K)"
              className="p-1.5 rounded text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
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
                className="p-1.5 rounded text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <Link
              href="#contact"
              onClick={() => soundEngine.playClick()}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors duration-150"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openCommandPalette}
              aria-label="Open command menu"
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
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
                className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={() => {
                soundEngine.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
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
            className="md:hidden mt-2 mx-4 p-5 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-3"
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
                  className="py-1 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <Link
                href="#contact"
                onClick={() => {
                  soundEngine.playClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full block text-center py-2 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors"
              >
                Inquire
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
