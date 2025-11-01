'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with payment integration and admin dashboard.',
  },
  {
    title: 'AI Chatbot System',
    category: 'AI Integration',
    description: 'Intelligent customer service chatbot with natural language processing.',
  },
  {
    title: 'Mobile Banking App',
    category: 'App Development',
    description: 'Secure mobile banking application with biometric authentication.',
  },
  {
    title: 'Brand Identity Package',
    category: 'Branding',
    description: 'Complete brand identity including logo, colors, and brand guidelines.',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Product Design',
    description: 'Clean and intuitive dashboard for enterprise SaaS platform.',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive social media marketing campaign driving 300% engagement.',
  },
];

const categories = ['All', 'Web Development', 'AI Integration', 'App Development', 'Branding', 'Product Design', 'Digital Marketing'];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { theme } = useTheme();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-[#00AEEF] text-white'
                  : theme === 'light'
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
              key={index}
              className={`rounded-lg border overflow-hidden ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-800'
              }`}
            >
              <div className={`aspect-video ${
                theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
              }`}></div>
              <div className="p-6">
                <div className="text-sm text-[#00AEEF] mb-2">{project.category}</div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
