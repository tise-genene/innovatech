'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const testimonials = [
  {
    name: 'Abebe Kebede',
    position: 'CEO, TechStartup Ethiopia',
    text: 'Innova Tech transformed our digital presence completely. Their web development team delivered beyond our expectations.',
  },
  {
    name: 'Chaltu Lemma',
    position: 'Marketing Director, E-commerce Solutions',
    text: 'Their product design expertise is unmatched. They created an intuitive and beautiful interface that boosted our user engagement.',
  },
  {
    name: 'Solomon Tadesse',
    position: 'Founder, AI Innovations',
    text: 'The AI integration services provided by Innova Tech gave us a competitive edge. Highly professional team!',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#1a2332] border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            What Clients Say
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className={`p-8 rounded-lg border ${
            theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0f172a] border-gray-800'
          }`}>
            <p className={`text-lg mb-6 leading-relaxed ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              "{testimonials[activeIndex].text}"
            </p>
            <div>
              <div className={`font-semibold ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {testimonials[activeIndex].name}
              </div>
              <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {testimonials[activeIndex].position}
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-[#00AEEF]' : 'w-2 bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
