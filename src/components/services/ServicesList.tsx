'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

const services = [
  {
    title: 'Web & App Development',
    description: 'Custom websites and mobile applications built with cutting-edge technologies like React, Next.js, React Native, and more.',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Mobile App Development',
      'API Development & Integration',
    ],
  },
  {
    title: 'AI Apps & Integration',
    description: 'Intelligent applications and seamless AI integration to automate processes and enhance user experiences.',
    features: [
      'Chatbot Development',
      'AI-Powered Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'AI Workflow Automation',
    ],
  },
  {
    title: 'Product Design',
    description: 'User-centered design that creates intuitive, engaging, and beautiful digital experiences.',
    features: [
      'UX/UI Design',
      'Wireframing & Prototyping',
      'User Research',
      'Interaction Design',
      'Design Systems',
    ],
  },
  {
    title: 'Branding & Logo Design',
    description: 'Create memorable brand identities that resonate with your audience and stand out in the market.',
    features: [
      'Logo Design',
      'Brand Strategy',
      'Visual Identity',
      'Brand Guidelines',
      'Rebranding Services',
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI and ML solutions to transform your data into actionable insights and intelligent systems.',
    features: [
      'Predictive Analytics',
      'Recommendation Systems',
      'Deep Learning Models',
      'Data Mining',
      'ML Model Training',
    ],
  },
  {
    title: 'Video & Animation',
    description: 'Engaging video content and animations that tell your story and captivate your audience.',
    features: [
      'Explainer Videos',
      'Motion Graphics',
      '2D/3D Animation',
      'Video Editing',
      'Corporate Videos',
    ],
  },
  {
    title: 'Graphic, Editorial & Presentation Design',
    description: 'Eye-catching graphics and professional designs for print, digital, and presentation needs.',
    features: [
      'Marketing Collateral',
      'Infographics',
      'Presentation Design',
      'Editorial Design',
      'Print Design',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence and drive conversions.',
    features: [
      'SEO Optimization',
      'PPC Campaigns',
      'Content Marketing',
      'Email Marketing',
      'Marketing Analytics',
    ],
  },
  {
    title: 'Social Media Management',
    description: 'Build and engage your community across all social platforms with strategic content.',
    features: [
      'Content Creation',
      'Community Management',
      'Social Media Strategy',
      'Influencer Marketing',
      'Analytics & Reporting',
    ],
  },
];

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();

  return (
    <section ref={ref} className={`py-20 ${theme === 'light' ? 'bg-[#F2F2F2]' : ''}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                theme === 'light' ? 'bg-white' : 'bg-[#1e293b] border border-[#334155]'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-2xl mb-3 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    • {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-block px-6 py-2 rounded-lg transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-gray-100 text-[#1A1A1A] hover:bg-[#00AEEF] hover:text-white'
                    : 'bg-[#0f172a] text-gray-300 hover:bg-[#00AEEF] hover:text-white'
                }`}
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

