'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const testimonials = [
  {
    name: 'Abebe Kebede',
    position: 'CEO, TechStartup Ethiopia',
    text: 'Eagle Pathway Tech Agency transformed our digital presence completely. Their web development team delivered beyond our expectations.',
  },
  {
    name: 'Chaltu Lemma',
    position: 'Marketing Director, E-commerce Solutions',
    text: 'Their product design expertise is unmatched. They created an intuitive and beautiful interface that boosted our user engagement.',
  },
  {
    name: 'Solomon Tadesse',
    position: 'Founder, AI Innovations',
    text: 'The AI integration services provided by Eagle Pathway Tech Agency gave us a competitive edge. Highly professional team!',
  },
  {
    name: 'Sara Bekele',
    position: 'COO, Digital Marketing Agency',
    text: 'Working with Eagle Pathway Tech Agency was seamless. They understood our vision and delivered a solution that exceeded expectations.',
  },
  {
    name: 'Michael Tesfaye',
    position: 'Product Manager, FinTech Startup',
    text: 'Their attention to detail and commitment to quality is outstanding. The mobile app they built for us is incredible.',
  },
  {
    name: 'Hanna Kebede',
    position: 'Director, Healthcare Tech',
    text: 'Eagle Pathway Tech Agency brought our complex healthcare platform to life with elegant design and robust functionality.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  // Auto-loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#1a2332] border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-12">
          <h2 className={`text-4xl font-bold ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            What Clients Say
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={currentIndex + index}
              className={`p-8 rounded-lg border transition-all duration-500 ${
                theme === 'light' 
                  ? 'bg-white border-gray-200' 
                  : 'bg-[#0f172a] border-gray-800'
              }`}
            >
              <p className={`text-lg mb-6 leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                "{testimonial.text}"
              </p>
              <div>
                <div className={`font-semibold mb-1 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                  {testimonial.name}
                </div>
                <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index * 2 ? 'w-8 bg-[#00AEEF]' : 'w-2 bg-gray-400'
              }`}
              aria-label={`Go to testimonials ${index * 2 + 1}-${index * 2 + 2}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
