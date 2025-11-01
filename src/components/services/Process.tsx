'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

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

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-[#00AEEF]">Process</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            A proven approach to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-8 bg-[#F2F2F2] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl font-bold text-[#00AEEF] opacity-20 absolute top-4 right-4">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

