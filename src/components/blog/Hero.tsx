'use client';

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
            Blog
          </h1>
          <p className={`text-xl leading-relaxed ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Insights on technology, design, and digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
}
