'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <div
      ref={ref}
      className={`rounded-2xl shadow-xl p-8 transition-all duration-700 ${
        theme === 'light' ? 'bg-white' : 'bg-[#1e293b] border border-[#334155]'
      } ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      <h2 className={`text-3xl font-bold mb-6 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
        Send us a Message
      </h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">Thank you! We'll get back to you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className={`block font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-white border-gray-300 text-gray-900' 
                : 'bg-[#0f172a] border-[#334155] text-white'
            }`}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className={`block font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-white border-gray-300 text-gray-900' 
                : 'bg-[#0f172a] border-[#334155] text-white'
            }`}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="company" className={`block font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-white border-gray-300 text-gray-900' 
                : 'bg-[#0f172a] border-[#334155] text-white'
            }`}
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="service" className={`block font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300 ${
              theme === 'light' 
                ? 'bg-white border-gray-300 text-gray-900' 
                : 'bg-[#0f172a] border-[#334155] text-white'
            }`}
          >
            <option value="">Select a service</option>
            <option value="web-development">Web & App Development</option>
            <option value="ai-integration">AI Apps & Integration</option>
            <option value="product-design">Product Design</option>
            <option value="branding">Branding & Logo Design</option>
            <option value="ai-ml">AI & Machine Learning</option>
            <option value="video-animation">Video & Animation</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="social-media">Social Media Management</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={`block font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300 resize-none ${
              theme === 'light' 
                ? 'bg-white border-gray-300 text-gray-900' 
                : 'bg-[#0f172a] border-[#334155] text-white'
            }`}
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00AEEF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0090c9] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

