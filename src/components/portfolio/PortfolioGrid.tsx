'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import Image from 'next/image';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Branding', 'AI/ML', 'Marketing'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with payment integration and inventory management.',
    image: '🛍️',
    results: '300% increase in online sales',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Banking Mobile App',
    category: 'Mobile Apps',
    description: 'Secure mobile banking application with biometric authentication.',
    image: '💳',
    results: '50K+ downloads in first month',
    tags: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Corporate Rebrand',
    category: 'Branding',
    description: 'Complete brand identity redesign for a leading Ethiopian company.',
    image: '🎨',
    results: '85% brand recognition increase',
    tags: ['Brand Strategy', 'Logo Design', 'Guidelines'],
  },
  {
    id: 4,
    title: 'AI Chatbot Platform',
    category: 'AI/ML',
    description: 'Intelligent chatbot with natural language processing capabilities.',
    image: '🤖',
    results: '70% reduction in support tickets',
    tags: ['Python', 'TensorFlow', 'NLP'],
  },
  {
    id: 5,
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    description: 'Multi-channel marketing campaign for product launch.',
    image: '📈',
    results: '500% ROI in 3 months',
    tags: ['SEO', 'Social Media', 'PPC'],
  },
  {
    id: 6,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Analytics dashboard with real-time data visualization.',
    image: '📊',
    results: '95% user satisfaction rate',
    tags: ['React', 'D3.js', 'API'],
  },
  {
    id: 7,
    title: 'Fitness Tracking App',
    category: 'Mobile Apps',
    description: 'Health and fitness app with AI-powered workout recommendations.',
    image: '💪',
    results: '4.8 star rating on app stores',
    tags: ['Flutter', 'Firebase', 'ML Kit'],
  },
  {
    id: 8,
    title: 'Restaurant Brand Identity',
    category: 'Branding',
    description: 'Complete branding package for a new restaurant chain.',
    image: '🍽️',
    results: '10 locations opened in year one',
    tags: ['Logo', 'Menu Design', 'Packaging'],
  },
  {
    id: 9,
    title: 'Recommendation Engine',
    category: 'AI/ML',
    description: 'Machine learning system for personalized product recommendations.',
    image: '🎯',
    results: '40% increase in conversions',
    tags: ['Python', 'Scikit-learn', 'AWS'],
  },
];

export default function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section ref={ref} className="py-20 bg-[#F2F2F2]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#00AEEF] text-white shadow-lg'
                  : 'bg-white text-[#1A1A1A] hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#00AEEF] to-[#0090c9] flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <div className="text-sm text-[#00AEEF] font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex items-center text-green-600 font-semibold mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {project.results}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F2F2F2] text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

