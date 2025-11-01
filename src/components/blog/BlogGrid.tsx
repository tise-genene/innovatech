'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the latest trends and technologies shaping modern web development.',
    author: 'Daniel Girma',
    date: 'October 15, 2024',
    category: 'Web Development',
    readTime: '5 min read',
    image: '💻',
  },
  {
    id: 2,
    title: 'AI Integration: A Game Changer for Businesses',
    excerpt: 'How artificial intelligence is transforming business operations and customer experiences.',
    author: 'Yohannes Haile',
    date: 'October 10, 2024',
    category: 'AI/ML',
    readTime: '7 min read',
    image: '🤖',
  },
  {
    id: 3,
    title: 'Design Principles for Better UX',
    excerpt: 'Essential design principles that create intuitive and engaging user experiences.',
    author: 'Marta Bekele',
    date: 'October 5, 2024',
    category: 'Design',
    readTime: '6 min read',
    image: '🎨',
  },
  {
    id: 4,
    title: 'Digital Marketing Strategies That Work',
    excerpt: 'Proven strategies to boost your online presence and drive conversions.',
    author: 'Sara Ahmed',
    date: 'September 30, 2024',
    category: 'Marketing',
    readTime: '8 min read',
    image: '📈',
  },
  {
    id: 5,
    title: 'Building Scalable Mobile Applications',
    excerpt: 'Best practices for developing mobile apps that grow with your business.',
    author: 'Daniel Girma',
    date: 'September 25, 2024',
    category: 'Mobile Development',
    readTime: '6 min read',
    image: '📱',
  },
  {
    id: 6,
    title: 'Brand Identity: More Than Just a Logo',
    excerpt: 'Understanding the components of a strong and memorable brand identity.',
    author: 'Marta Bekele',
    date: 'September 20, 2024',
    category: 'Branding',
    readTime: '5 min read',
    image: '🎯',
  },
  {
    id: 7,
    title: 'Machine Learning for Business Analytics',
    excerpt: 'Leveraging ML to extract insights and make data-driven decisions.',
    author: 'Yohannes Haile',
    date: 'September 15, 2024',
    category: 'AI/ML',
    readTime: '9 min read',
    image: '🧠',
  },
  {
    id: 8,
    title: 'Social Media Trends in Ethiopia',
    excerpt: 'Latest social media trends and how businesses can leverage them.',
    author: 'Sara Ahmed',
    date: 'September 10, 2024',
    category: 'Social Media',
    readTime: '4 min read',
    image: '📲',
  },
  {
    id: 9,
    title: 'The Power of Animation in Digital Marketing',
    excerpt: 'How animations and motion graphics enhance engagement and conversions.',
    author: 'Marta Bekele',
    date: 'September 5, 2024',
    category: 'Design',
    readTime: '5 min read',
    image: '🎬',
  },
];

export default function BlogGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 bg-[#F2F2F2]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Featured Article */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-80 lg:h-auto bg-gradient-to-br from-[#00AEEF] to-[#0090c9] flex items-center justify-center">
                <div className="text-9xl">{articles[0].image}</div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-sm text-[#00AEEF] font-semibold mb-2">
                  Featured Article
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{articles[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{articles[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{articles[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${articles[0].id}`}
                  className="inline-block bg-[#00AEEF] text-white px-6 py-3 rounded-full hover:bg-[#0090c9] transition-all duration-300 font-semibold w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <div
              key={article.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-[#00AEEF] to-[#0090c9] flex items-center justify-center">
                <div className="text-6xl">{article.image}</div>
              </div>
              <div className="p-6">
                <div className="text-xs text-[#00AEEF] font-semibold mb-2 uppercase">
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <span>{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                <Link
                  href={`/blog/${article.id}`}
                  className="text-[#00AEEF] font-semibold hover:underline inline-flex items-center group"
                >
                  Read More
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
            </div>
          ))}
        </div>

        {/* Newsletter Subscribe */}
        <div
          className={`mt-16 bg-gradient-to-r from-[#00AEEF] to-[#0090c9] rounded-2xl p-8 lg:p-12 text-center transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-white text-lg mb-6">
            Get the latest insights and updates delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#00AEEF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

