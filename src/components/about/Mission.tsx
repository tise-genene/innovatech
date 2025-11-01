'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Mission() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
              Our Mission
            </h2>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              To empower businesses with cutting-edge digital solutions that drive growth and innovation. We believe in creating meaningful experiences that resonate with users and deliver measurable results.
            </p>
          </div>
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
              Our Vision
            </h2>
            <p className={`leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              To be the leading digital agency in East Africa, recognized for our innovative solutions, exceptional service, and commitment to client success. We aim to bridge the gap between technology and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
