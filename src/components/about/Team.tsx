'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const teamMembers = [
  {
    name: 'Abebe Tesfaye',
    role: 'CEO & Founder',
    image: '👨‍💼',
    bio: 'Visionary leader with 10+ years in digital innovation.',
  },
  {
    name: 'Marta Bekele',
    role: 'Creative Director',
    image: '👩‍🎨',
    bio: 'Award-winning designer passionate about user experience.',
  },
  {
    name: 'Daniel Girma',
    role: 'Lead Developer',
    image: '👨‍💻',
    bio: 'Full-stack expert specializing in modern web technologies.',
  },
  {
    name: 'Sara Ahmed',
    role: 'Marketing Strategist',
    image: '👩‍💼',
    bio: 'Data-driven marketer with proven track record of success.',
  },
  {
    name: 'Yohannes Haile',
    role: 'AI Engineer',
    image: '👨‍🔬',
    bio: 'Machine learning specialist building intelligent solutions.',
  },
  {
    name: 'Rahel Kebede',
    role: 'Project Manager',
    image: '👩‍💼',
    bio: 'Agile expert ensuring seamless project delivery.',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 bg-[#F2F2F2]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Meet Our <span className="text-[#00AEEF]">Team</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Talented professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#00AEEF] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

