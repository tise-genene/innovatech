'use client';

import { useTheme } from '@/contexts/ThemeContext';

const teamMembers = [
  {
    name: 'Dawit Alemayehu',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 10+ years in tech innovation.',
  },
  {
    name: 'Sara Bekele',
    role: 'Lead Designer',
    bio: 'Creative expert specializing in user-centered design.',
  },
  {
    name: 'Michael Tesfaye',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern frameworks.',
  },
  {
    name: 'Hanna Kebede',
    role: 'Marketing Director',
    bio: 'Digital marketing strategist driving measurable results.',
  },
];

export default function Team() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#1a2332] border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            Our Team
          </h2>
          <p className={`text-lg max-w-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Meet the talented professionals behind Innova Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className={`aspect-square rounded-lg mb-4 ${
                theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
              }`}></div>
              <h3 className={`text-lg font-semibold mb-1 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {member.name}
              </h3>
              <p className="text-[#00AEEF] text-sm mb-2">{member.role}</p>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
