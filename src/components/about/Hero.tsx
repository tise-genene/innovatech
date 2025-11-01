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
            About Us
          </h1>
          <p className={`text-xl leading-relaxed ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            We're a digital agency based in Addis Ababa, Ethiopia, delivering innovative solutions in web development, AI integration, product design, branding, and digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
}
