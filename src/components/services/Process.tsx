'use client';

import { useTheme } from '@/contexts/ThemeContext';

const steps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.',
  },
  {
    title: 'Planning',
    description: 'We create a detailed project roadmap with timelines, milestones, and deliverables.',
  },
  {
    title: 'Design',
    description: 'Our designers create wireframes, mockups, and prototypes for your approval.',
  },
  {
    title: 'Development',
    description: 'Our developers build your solution using best practices and modern technologies.',
  },
  {
    title: 'Testing',
    description: 'Rigorous testing ensures quality, performance, and a bug-free experience.',
  },
  {
    title: 'Launch',
    description: 'We deploy your project and provide ongoing support and maintenance.',
  },
];

export default function Process() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#1a2332] border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            Our Process
          </h2>
          <p className={`text-lg max-w-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            A streamlined approach to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-[#00AEEF] mb-3">{String(index + 1).padStart(2, '0')}</div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {step.title}
              </h3>
              <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
