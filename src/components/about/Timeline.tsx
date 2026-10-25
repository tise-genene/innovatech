'use client';

import { useTheme } from '@/contexts/ThemeContext';

const milestones = [
  { year: '2019', title: 'Agency Founded', description: 'Eagle Pathway Tech Agency was established in Addis Ababa.' },
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

        {/* Timeline with Vertical Line */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-20 top-0 bottom-0 w-px ${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
          }`}></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Year Badge */}
                <div className="flex-shrink-0 w-32 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                    theme === 'light' 
                      ? 'bg-white border-gray-200' 
                      : 'bg-[#0f172a] border-gray-800'
                  }`}>
                    <span className="text-lg font-bold text-[#00AEEF]">{milestone.year.slice(2)}</span>
                  </div>
                  {/* Connecting dot on line */}
                  <div className={`absolute left-8 top-8 w-2 h-2 rounded-full ${
                    theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 p-6 rounded-lg border group hover:border-[#00AEEF] transition-all ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 hover:shadow-lg'
                    : 'bg-[#1a2332] border-gray-800 hover:shadow-lg hover:shadow-[#00AEEF]/10'
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-[#00AEEF] transition-colors ${
                    theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
                  }`}>
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
      </div>
    </section>
  );
}
