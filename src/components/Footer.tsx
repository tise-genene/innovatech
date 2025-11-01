'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
  ];

  return (
    <footer className={`border-t ${
      theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0f172a] border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className={theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}>innova</span>
              <span className="text-[#00AEEF]">tech</span>
            </h3>
            <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              A digital agency delivering web development, design, and marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm hover:text-[#00AEEF] transition-colors ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
              Contact
            </h4>
            <ul className={`space-y-2 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              <li>Addis Ababa, Ethiopia</li>
              <li>info@innovatech.et</li>
              <li>+251 932508910</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-800'
        }`}>
          <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            © {currentYear} Innova Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className={`text-sm hover:text-[#00AEEF] transition-colors ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
