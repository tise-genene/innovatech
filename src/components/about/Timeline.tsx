'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Innova Tech was established in Addis Ababa with a vision to transform digital landscape.',
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Successfully delivered our first enterprise-level web application for a leading Ethiopian bank.',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 15+ talented professionals across design, development, and marketing.',
  },
  {
    year: '2022',
    title: 'AI Integration Services',
    description: 'Launched AI and machine learning services, becoming pioneers in Ethiopia.',
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Awarded "Best Digital Agency" by Ethiopian Tech Association.',
  },
  {
    year: '2024',
    title: '100+ Projects',
    description: 'Reached milestone of 100 successful projects across various industries.',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-[#00AEEF]">Journey</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Milestones and achievements that shaped our story
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex gap-8 mb-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              } ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-1">
                {index % 2 === 0 && (
                  <div className="text-right pr-8">
                    <div className="inline-block bg-[#00AEEF] text-white text-3xl font-bold px-6 py-3 rounded-full mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[#00AEEF] rounded-full"></div>
                {index < milestones.length - 1 && (
                  <div className="w-1 h-full bg-gray-300 flex-grow"></div>
                )}
              </div>

              <div className="flex-1">
                {index % 2 !== 0 && (
                  <div className="pl-8">
                    <div className="inline-block bg-[#00AEEF] text-white text-3xl font-bold px-6 py-3 rounded-full mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

