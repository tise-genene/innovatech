'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useTheme } from '@/contexts/ThemeContext';

const features = [
  {
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience in digital solutions.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Innovation First',
    description: 'Cutting-edge technologies and creative solutions for modern challenges.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Results Driven',
    description: 'Focused on delivering measurable outcomes and business growth.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We listen, understand, and deliver.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Agile Approach',
    description: 'Flexible and adaptive methodology ensuring timely project delivery.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Full Support',
    description: 'Ongoing support and maintenance to keep your systems running smoothly.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}
          >
            Why Choose <span className="text-[#00AEEF]">Innova Tech</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
          >
            We combine expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border-2 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                theme === 'light'
                  ? 'bg-white/80 border-gray-100 hover:border-[#00AEEF]'
                  : 'bg-white/5 border-white/10 hover:border-[#00AEEF]'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[#00AEEF] mb-4">{feature.icon}</div>
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
              }`}>
                {feature.title}
              </h3>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
