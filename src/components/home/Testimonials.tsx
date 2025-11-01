'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { useTheme } from '@/contexts/ThemeContext';

const testimonials = [
  {
    name: 'Abebe Kebede',
    position: 'CEO, TechStartup Ethiopia',
    image: '👨‍💼',
    text: 'Innova Tech transformed our digital presence completely. Their web development team delivered beyond our expectations, and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Sara Mohammed',
    position: 'Marketing Director, Fashion Brand',
    image: '👩‍💼',
    text: 'Working with Innova Tech was a game-changer for our brand. Their design and marketing expertise helped us reach new heights in our industry.',
    rating: 5,
  },
  {
    name: 'Daniel Tesfaye',
    position: 'Founder, E-commerce Platform',
    image: '👨‍💻',
    text: 'The AI integration and app development services provided by Innova Tech gave us a competitive edge. Highly professional and innovative team!',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <section ref={ref} className={`py-20 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            What Our <span className="text-[#00AEEF]">Clients Say</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
          >
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm border ${
            theme === 'light'
              ? 'bg-white border-gray-200'
              : 'bg-white/5 border-white/10'
          }`}>
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl mb-4">{testimonials[activeIndex].image}</div>
              <div className="flex mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className={`text-xl mb-6 italic leading-relaxed ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                "{testimonials[activeIndex].text}"
              </p>
              <h4 className={`text-2xl font-bold ${
                theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
              }`}>
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-[#00AEEF] font-medium">
                {testimonials[activeIndex].position}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[#00AEEF] w-8'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos - Infinite Carousel */}
        <div
          className={`mt-16 transition-all duration-700 delay-400 overflow-hidden ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className={`text-center mb-8 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>Trusted by leading companies</p>
          <div className="relative">
            <div className="flex animate-scroll">
              {[
                'Tech Startups',
                'E-commerce Brands',
                'SaaS Companies',
                'Digital Agencies',
                'FinTech Platforms',
                'Healthcare Tech',
                'EdTech Solutions',
                'Real Estate Tech',
                'Marketing Firms',
                'Consulting Groups',
                // Duplicate for seamless loop
                'Tech Startups',
                'E-commerce Brands',
                'SaaS Companies',
                'Digital Agencies',
                'FinTech Platforms',
                'Healthcare Tech',
                'EdTech Solutions',
                'Real Estate Tech',
                'Marketing Firms',
                'Consulting Groups',
              ].map((company, index) => (
                <div
                  key={index}
                  className={`text-lg md:text-xl font-bold whitespace-nowrap mx-8 hover:text-[#00AEEF] transition-colors duration-300 opacity-60 hover:opacity-100 ${
                    theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
                  }`}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

