'use client';

import { useTheme } from '@/contexts/ThemeContext';

const milestones = [
  { year: '2019', title: 'Company Founded', description: 'Innova Tech was established in Addis Ababa.' },
  { year: '2020', title: 'First Major Client', description: 'Secured partnership with leading Ethiopian e-commerce platform.' },
  { year: '2021', title: 'Team Expansion', description: 'Grew our team to 10+ talented professionals.' },
  { year: '2022', title: 'AI Integration', description: 'Launched AI and machine learning services.' },
  { year: '2023', title: '100+ Projects', description: 'Delivered over 100 successful projects.' },
  { year: '2024', title: 'Regional Recognition', description: 'Named top digital agency in East Africa.' },
];

export default function Timeline() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            Our Journey
          </h2>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-8">
              <div className="flex-shrink-0 w-24">
                <div className="text-2xl font-bold text-[#00AEEF]">{milestone.year}</div>
              </div>
              <div className={`flex-1 pb-8 ${
                index !== milestones.length - 1 ? 'border-b' : ''
              } ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                  {milestone.title}
                </h3>
                <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
