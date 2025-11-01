'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useTheme } from '@/contexts/ThemeContext';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Develop a comprehensive plan tailored to your specific needs.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create beautiful, user-friendly designs that align with your brand.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Build robust, scalable solutions using the latest technologies.',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous quality assurance to ensure flawless performance.',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Deploy your solution and provide ongoing support and optimization.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();

  return (
    <section ref={ref} className={`py-20 ${theme === 'light' ? 'bg-white' : ''}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
            } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Our <span className="text-[#00AEEF]">Process</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            A proven approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 ${
                theme === 'light' 
                  ? 'bg-white border border-gray-200' 
                  : 'bg-[#1e293b] border border-[#334155]'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`text-sm mb-2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'}`}>
                {step.number}
              </div>
              <h3 className={`text-xl mb-2 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

