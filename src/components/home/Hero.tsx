'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
              Building Digital Experiences That{' '}
              <span className="text-[#00AEEF]">Perform</span>
            </h1>

            <p className={`text-xl mb-8 leading-relaxed ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Web, Mobile, AI, Design & Marketing — all under one roof. We turn ideas into scalable, high-impact solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#00AEEF] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#0090c9] transition-all duration-300 text-center"
              >
                Work With Us
              </Link>
              <Link
                href="/portfolio"
                className={`backdrop-blur-sm border px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 text-center ${
                  theme === 'light'
                    ? 'bg-white border-gray-200 text-[#1A1A1A] hover:bg-gray-50'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              {/* Code Window Mockup */}
              <div className={`backdrop-blur-md border rounded-2xl p-6 shadow-2xl ${
                theme === 'light'
                  ? 'bg-white/80 border-gray-200'
                  : 'bg-[#1e293b]/50 border-white/10'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300">solution</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"innovative"</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-400">function</span>
                    <span className="text-yellow-300">buildApp</span>
                    <span className="text-white">() {'{'}</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-300">return</span>
                    <span className="text-green-300">"success"</span>
                  </div>
                  <div className="text-white">{'}'}</div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-[#00AEEF] text-white text-2xl p-4 rounded-xl shadow-lg">
                  💻
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white text-2xl p-4 rounded-xl shadow-lg">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons - Infinite Loop */}
        <div className={`mt-20 border-t pt-12 overflow-hidden ${
          theme === 'light' ? 'border-gray-200' : 'border-white/10'
        }`}>
          <p className={`text-center mb-8 text-sm uppercase tracking-wider ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Technologies We Master
          </p>
          <div className="relative">
            <div className="flex animate-scroll">
              {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 group cursor-pointer mx-8 flex-shrink-0"
                >
                  <div className={`w-16 h-16 backdrop-blur-sm border rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-white/80 border-gray-200 group-hover:bg-white'
                      : 'bg-white/5 border-white/10 group-hover:bg-white/10'
                  }`}>
                    {tech.icon}
                  </div>
                  <span className={`text-xs group-hover:text-[#00AEEF] transition-colors whitespace-nowrap ${
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
