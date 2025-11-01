'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
              Our <span className="text-[#00AEEF]">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              To empower businesses in Ethiopia and beyond with innovative digital solutions 
              that drive growth, enhance efficiency, and create lasting impact.
            </p>
            <p className="text-lg text-gray-600">
              We believe in leveraging technology to solve real-world problems and help our 
              clients achieve their goals through creative, scalable, and sustainable solutions.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
              Our <span className="text-[#00AEEF]">Vision</span>
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              To become the leading digital agency in East Africa, known for excellence in 
              innovation, design, and client satisfaction.
            </p>
            <p className="text-lg text-gray-600">
              We envision a future where every business, regardless of size, has access to 
              world-class digital services that enable them to compete globally.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2
            className={`text-4xl font-bold text-[#1A1A1A] text-center mb-12 transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-[#00AEEF]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest quality in everything we do.',
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative solutions.',
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency and honesty.',
              },
              {
                title: 'Collaboration',
                description: 'We work closely with clients as partners in success.',
              },
              {
                title: 'Impact',
                description: 'We focus on delivering measurable results.',
              },
              {
                title: 'Growth',
                description: 'We continuously learn and evolve with the industry.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`p-6 bg-[#F2F2F2] rounded-xl transition-all duration-700 hover:shadow-lg hover:bg-white ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-[#00AEEF] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

