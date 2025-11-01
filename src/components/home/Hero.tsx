'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#00AEEF] rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#00AEEF] rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Building Digital Experiences That{' '}
            <span className="text-[#00AEEF]">Perform</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Web, Mobile, AI, Design & Marketing — all under one roof. We turn ideas into scalable, high-impact solutions.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link
              href="/contact"
              className="bg-[#00AEEF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0090c9] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Work With Us
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1A1A1A] transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '9', label: 'Services Offered' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#00AEEF] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

