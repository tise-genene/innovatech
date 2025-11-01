'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const services = [
  { title: 'Web & App Development', description: 'Custom websites and mobile applications built with modern technologies.' },
  { title: 'AI Apps & Integration', description: 'Intelligent solutions powered by artificial intelligence.' },
  { title: 'Product Design', description: 'User-centered design that delivers exceptional experiences.' },
  { title: 'Branding & Logo Design', description: 'Create memorable brand identities that resonate.' },
  { title: 'Digital Marketing', description: 'Data-driven marketing strategies to grow your presence.' },
  { title: 'Social Media Management', description: 'Build and engage your community across platforms.' },
];

export default function Services() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
            Services
          </h2>
          <p className={`text-lg max-w-2xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Comprehensive digital solutions to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border ${
                theme === 'light'
                  ? 'border-gray-200 hover:border-gray-300'
                  : 'border-gray-800 hover:border-gray-700'
              } transition-colors`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {service.title}
              </h3>
              <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-[#00AEEF] text-sm font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
