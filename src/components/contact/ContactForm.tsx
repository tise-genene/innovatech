'use client';

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactForm() {
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
    <div className={`rounded-lg border p-8 ${
      theme === 'light' ? 'bg-white border-gray-200' : 'bg-[#0f172a] border-gray-800'
    }`}>
      <h2 className={`text-2xl font-bold mb-6 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
        Send us a Message
      </h2>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">Thank you! We'll get back to you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-[#1a2332] border-gray-700 text-white'
            }`}
          />
        </div>

        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-[#1a2332] border-gray-700 text-white'
            }`}
          />
        </div>

        <div>
          <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-[#1a2332] border-gray-700 text-white'
            }`}
          />
        </div>

        <div>
          <label htmlFor="service" className={`block text-sm font-medium mb-2 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-[#1a2332] border-gray-700 text-white'
            }`}
          >
            <option value="">Select a service</option>
            <option value="web-development">Web & App Development</option>
            <option value="ai-integration">AI Apps & Integration</option>
            <option value="product-design">Product Design</option>
            <option value="branding">Branding & Logo Design</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="social-media">Social Media Management</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00AEEF] resize-none ${
              theme === 'light'
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-[#1a2332] border-gray-700 text-white'
            }`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00AEEF] text-white px-6 py-3 rounded-lg hover:bg-[#0090c9] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
