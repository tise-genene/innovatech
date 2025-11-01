'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const blogPosts = [
  {
    title: '10 Web Design Trends for 2024',
    excerpt: 'Explore the latest design trends shaping the web in 2024.',
    category: 'Design',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
  },
  {
    title: 'How AI is Transforming Digital Marketing',
    excerpt: 'Discover how artificial intelligence is revolutionizing marketing strategies.',
    category: 'Marketing',
    date: 'Jan 10, 2024',
    readTime: '7 min read',
  },
  {
    title: 'Building Scalable Web Applications',
    excerpt: 'Best practices for developing applications that grow with your business.',
    category: 'Development',
    date: 'Jan 5, 2024',
    readTime: '10 min read',
  },
  {
    title: 'The Future of UX Design',
    excerpt: 'Emerging trends and technologies in user experience design.',
    category: 'Design',
    date: 'Dec 28, 2023',
    readTime: '6 min read',
  },
  {
    title: 'SEO Strategies That Actually Work',
    excerpt: 'Proven techniques to improve your search engine rankings.',
    category: 'Marketing',
    date: 'Dec 20, 2023',
    readTime: '8 min read',
  },
  {
    title: 'Introduction to Machine Learning',
    excerpt: 'A beginner-friendly guide to understanding machine learning concepts.',
    category: 'AI',
    date: 'Dec 15, 2023',
    readTime: '12 min read',
  },
];

export default function BlogGrid() {
  const { theme } = useTheme();

  return (
    <section className={`py-20 border-t ${
      theme === 'light' ? 'border-gray-200' : 'border-gray-800'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href="#"
              className={`rounded-lg border overflow-hidden hover:border-[#00AEEF] transition-colors ${
                theme === 'light' ? 'border-gray-200' : 'border-gray-800'
              }`}
            >
              <div className={`aspect-video ${
                theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
              }`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm mb-3">
                  <span className="text-[#00AEEF]">{post.category}</span>
                  <span className={theme === 'light' ? 'text-gray-500' : 'text-gray-500'}>•</span>
                  <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>{post.date}</span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
                  {post.title}
                </h3>
                <p className={`text-sm mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {post.excerpt}
                </p>
                <div className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'}`}>
                  {post.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
