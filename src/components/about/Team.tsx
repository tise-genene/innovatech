'use client';

import { useTheme } from '@/contexts/ThemeContext';

const teamMembers = [
  {
    name: 'Bekalu Teketel T.',
    role: 'Video Editor | Graphic Designer | Marketing Specialist',
    upworkUrl: 'https://www.upwork.com/freelancers/~0135ea11e94cfe1b1c',
  },
  {
    name: 'Genene T.',
    role: 'Developer & Creative Professional',
    upworkUrl: 'https://upwork.com/freelancers/~0168af3ce207f551f3',
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-8 rounded-lg border hover:border-[#00AEEF] transition-colors ${
                theme === 'light'
                  ? 'bg-white border-gray-200'
                  : 'bg-[#0f172a] border-gray-800'
              }`}
            >
              <div className={`w-20 h-20 mb-4 rounded-full flex items-center justify-center text-2xl font-bold ${
                theme === 'light'
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-[#1a2332] text-gray-600'
              }`}>
                {member.name.charAt(0)}
              </div>

              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
              }`}>
                {member.name}
              </h3>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {member.role}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
