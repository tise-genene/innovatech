'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function CTA() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#1a2332] border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
          }`}>
            Ready to Start Your Project?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00AEEF] text-white px-8 py-3 rounded-lg hover:bg-[#0090c9] transition-colors font-medium"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
