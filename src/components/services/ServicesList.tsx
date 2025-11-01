'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
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
    icon: '💻',
    color: 'from-blue-500 to-blue-600',
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
    icon: '🤖',
    color: 'from-purple-500 to-purple-600',
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
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
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
    icon: '🎯',
    color: 'from-red-500 to-red-600',
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
    icon: '🧠',
    color: 'from-indigo-500 to-indigo-600',
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
    icon: '🎬',
    color: 'from-yellow-500 to-yellow-600',
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
    icon: '✏️',
    color: 'from-green-500 to-green-600',
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
    icon: '📈',
    color: 'from-orange-500 to-orange-600',
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
    icon: '📱',
    color: 'from-teal-500 to-teal-600',
  },
];

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 bg-[#F2F2F2]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="flex items-center">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#00AEEF] mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block bg-[#00AEEF] text-white px-6 py-3 rounded-full hover:bg-[#0090c9] transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

