'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#00AEEF] rounded-full blur-3xl opacity-20 bottom-0 left-0 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-[#00AEEF]">Portfolio</span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-300 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Showcasing our best work and successful client projects
          </p>
        </div>
      </div>
    </section>
  );
}

