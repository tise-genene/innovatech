'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
              theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
              Building Digital Experiences That Perform
            </h1>

            <p className={`text-xl mb-8 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Web, Mobile, AI, Design & Marketing — all under one roof. We turn ideas into scalable, high-impact solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#00AEEF] text-white px-8 py-3 rounded-lg hover:bg-[#0090c9] transition-colors text-center font-medium"
              >
                Work With Us
              </Link>
              <Link
                href="/portfolio"
                className={`px-8 py-3 rounded-lg border transition-colors text-center font-medium ${
                  theme === 'light'
                    ? 'border-gray-300 text-gray-700 hover:border-gray-400'
                    : 'border-gray-700 text-gray-300 hover:border-gray-600'
                }`}
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right - Code Window */}
          <div className="hidden lg:block">
            <div className={`rounded-lg border overflow-hidden ${
              theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#1a2332] border-gray-800'
            }`}>
              {/* Window Controls */}
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#0f172a] border-gray-800'
              }`}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className={theme === 'light' ? 'text-gray-800' : 'text-gray-200'}>
                  <code>
                    <span className="text-purple-500">const</span> <span className="text-yellow-500">innovaTech</span> = {'{\n'}
                    {'  '}name: <span className="text-green-500">'Innova Tech'</span>,{'\n'}
                    {'  '}services: [{'\n'}
                    {'    '}<span className="text-green-500">'Web Dev'</span>,{'\n'}
                    {'    '}<span className="text-green-500">'AI Solutions'</span>,{'\n'}
                    {'    '}<span className="text-green-500">'Design'</span>,{'\n'}
                    {'    '}<span className="text-green-500">'Marketing'</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}location: <span className="text-green-500">'Addis Ababa'</span>,{'\n'}
                    {'  '}mission: <span className="text-green-500">'Build & Deliver'</span>,{'\n'}
                    {'  '}<span className="text-blue-400">getStarted</span>: () =&gt; {'{'}
                    {'\n    '}console.<span className="text-yellow-500">log</span>(<span className="text-green-500">'Let\'s create!'</span>)
                    {'\n  }'}
                    {'\n}'};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Carousel */}
        <div className={`mt-20 pt-12 border-t ${
          theme === 'light' ? 'border-gray-200' : 'border-gray-800'
        }`}>
          <p className={`text-sm mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Technologies we work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'Node.js', icon: '◆' },
                { name: 'Python', icon: 'Py' },
                { name: 'Tailwind', icon: '🎨' },
                { name: 'MongoDB', icon: 'M' },
                { name: 'PostgreSQL', icon: 'PG' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
                // Duplicate for seamless loop
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'Node.js', icon: '◆' },
                { name: 'Python', icon: 'Py' },
                { name: 'Tailwind', icon: '🎨' },
                { name: 'MongoDB', icon: 'M' },
                { name: 'PostgreSQL', icon: 'PG' },
                { name: 'AWS', icon: '☁️' },
                { name: 'Docker', icon: '🐳' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 flex-shrink-0 group cursor-default"
                >
                  <div className={`w-16 h-16 rounded-lg border flex items-center justify-center text-xl font-semibold transition-all duration-300 group-hover:scale-110 group-hover:border-[#00AEEF] ${
                    theme === 'light'
                      ? 'border-gray-200 bg-white group-hover:shadow-lg'
                      : 'border-gray-800 bg-[#1a2332] group-hover:shadow-lg group-hover:shadow-[#00AEEF]/20'
                  }`}>
                    {tech.icon}
                  </div>
                  <span className={`text-xs font-medium whitespace-nowrap group-hover:text-[#00AEEF] transition-colors ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
