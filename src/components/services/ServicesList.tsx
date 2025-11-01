'use client';

import { useTheme } from '@/contexts/ThemeContext';

const services = [
  {
    title: 'Web & App Development',
    description: 'Custom websites and mobile applications built with cutting-edge technologies.',
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
    description: 'Intelligent applications and seamless AI integration to automate processes.',
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
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
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
    description: 'Create memorable brand identities that resonate with your audience.',
    features: [
      'Logo Design',
      'Brand Strategy',
      'Visual Identity',
      'Brand Guidelines',
      'Rebranding Services',
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence.',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Email Campaigns',
      'PPC Advertising',
      'Analytics & Reporting',
    ],
  },
  {
    title: 'Social Media Management',
    description: 'Build and engage your community across all social platforms.',
    features: [
      'Content Creation',
      'Community Management',
      'Social Media Strategy',
      'Influencer Marketing',
      'Performance Tracking',
    ],
  },
];

export default function ServicesList() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`pb-16 ${
                index !== services.length - 1 ? 'border-b' : ''
              } ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}
            >
              <h2 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                {service.title}
              </h2>
              <p className={`text-lg mb-6 max-w-3xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {service.description}
              </p>
              <ul className={`space-y-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
