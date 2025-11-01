'use client';

import { useTheme } from '@/contexts/ThemeContext';

const reasons = [
  {
    title: 'Innovative Solutions',
    description: 'We bring fresh ideas and cutting-edge technologies to every project.',
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your vision is our priority. We work closely with you to deliver tailored solutions.',
  },
  {
    title: 'Measurable Results',
    description: 'Our strategies are data-driven, focusing on tangible outcomes for your business.',
  },
  {
    title: 'Expert Team',
    description: 'A multidisciplinary team of seasoned professionals in development, design, and marketing.',
  },
];

export default function WhyChooseUs() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8">
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {reason.title}
              </h3>
              <p className={`leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
