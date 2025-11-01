'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref);
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
      className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Send us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">Thank you! We'll get back to you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300"
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
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AEEF] transition-all duration-300 resize-none"
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

