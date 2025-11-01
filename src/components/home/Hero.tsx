'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
            theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
          }`}>
            Building Digital Experiences That Perform
          </h1>

          <p className={`text-xl mb-8 max-w-2xl ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Web, Mobile, AI, Design & Marketing — all under one roof. We turn ideas into scalable, high-impact solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#00AEEF] text-white px-8 py-3 rounded-lg hover:bg-[#0090c9] transition-colors text-center font-medium"
            >
              Work With Us
            </Link>
            <Link
              href="/portfolio"
              className={`px-8 py-3 rounded-lg border transition-colors text-center font-medium ${
                theme === 'light'
                  ? 'border-gray-300 text-gray-700 hover:border-gray-400'
                  : 'border-gray-700 text-gray-300 hover:border-gray-600'
              }`}
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Simple Stats */}
        <div className={`mt-20 pt-12 border-t grid grid-cols-2 md:grid-cols-4 gap-8 ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-800'
        }`}>
          {[
            { label: 'Projects Completed', value: '100+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Team Members', value: '15+' },
            { label: 'Years Experience', value: '5+' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-[#00AEEF] mb-1">{stat.value}</div>
              <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
