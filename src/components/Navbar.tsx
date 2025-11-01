'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] pt-6">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider relative z-10">
            <span className={theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}>INNOVA</span>
            <span className="text-[#00AEEF] ml-1">TECH</span>
          </Link>

          {/* Desktop Navigation - Pill Shape */}
          <div className={`hidden md:flex items-center backdrop-blur-md border rounded-full px-8 py-3 ${
            theme === 'light' 
              ? 'bg-white/80 border-gray-200' 
              : 'bg-white/10 border-white/20'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#00AEEF] transition-colors duration-300 font-medium px-6 ${
                  theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-white/80 border-gray-200 text-[#1A1A1A] hover:bg-white'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:block bg-[#00AEEF] text-white px-8 py-3 rounded-full hover:bg-[#0090c9] transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden focus:outline-none ${
              theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden mt-4 mx-4 backdrop-blur-md border rounded-2xl p-4 ${
          theme === 'light'
            ? 'bg-white/80 border-gray-200'
            : 'bg-white/10 border-white/20'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 hover:text-[#00AEEF] transition-colors duration-300 ${
                theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 bg-[#00AEEF] text-white px-6 py-3 rounded-full text-center hover:bg-[#0090c9] transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

