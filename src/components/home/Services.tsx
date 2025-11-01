'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';

const services = [
  {
    title: 'Web & App Development',
    description: 'Custom websites and mobile applications built with cutting-edge technologies.',
    icon: '💻',
  },
  {
    title: 'AI Apps & Integration',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    icon: '🤖',
  },
  {
    title: 'Product Design',
    description: 'User-centered design that delivers exceptional experiences.',
    icon: '🎨',
  },
  {
    title: 'Branding & Logo Design',
    description: 'Create memorable brand identities that resonate with your audience.',
    icon: '🎯',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions to automate and optimize your business processes.',
    icon: '🧠',
  },
  {
    title: 'Video & Animation',
    description: 'Engaging video content and animations that tell your story.',
    icon: '🎬',
  },
  {
    title: 'Graphic Design',
    description: 'Eye-catching graphics for print, digital, and presentation needs.',
    icon: '✏️',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    icon: '📈',
  },
  {
    title: 'Social Media Management',
    description: 'Build and engage your community across all social platforms.',
    icon: '📱',
  },
];

'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const services = [
  {
    title: 'Web & App Development',
    description: 'Custom websites and mobile applications built with cutting-edge technologies.',
    icon: '💻',
  },
  {
    title: 'AI Apps & Integration',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    icon: '🤖',
  },
  {
    title: 'Product Design',
    description: 'User-centered design that delivers exceptional experiences.',
    icon: '🎨',
  },
  {
    title: 'Branding & Logo Design',
    description: 'Create memorable brand identities that resonate with your audience.',
    icon: '🎯',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions to automate and optimize your business processes.',
    icon: '🧠',
  },
  {
    title: 'Video & Animation',
    description: 'Engaging video content and animations that tell your story.',
    icon: '🎬',
  },
  {
    title: 'Graphic Design',
    description: 'Eye-catching graphics for print, digital, and presentation needs.',
    icon: '✏️',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    icon: '📈',
  },
  {
    title: 'Social Media Management',
    description: 'Build and engage your community across all social platforms.',
    icon: '📱',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our <span className="text-[#00AEEF]">Services</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-[#00AEEF] font-semibold hover:underline inline-flex items-center group"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

