'use client';

import { useTheme } from '@/contexts/ThemeContext';

const contactDetails = [
  {
    title: 'Email',
    info: 'info@innovatech.et',
  },
  {
    title: 'Phone',
    info: '+251 932508910',
  },
  {
    title: 'Location',
    info: 'Addis Ababa, Ethiopia',
  },
];

export default function ContactInfo() {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
          Contact Information
        </h2>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index}>
            <div className={`text-sm font-medium mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {detail.title}
            </div>
            <div className={`text-lg ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
              {detail.info}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className={`pt-8 border-t ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'}`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-[#1A1A1A]' : 'text-white'}`}>
          Follow Us
        </h3>
        <div className="flex gap-4">
          {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className={`text-sm hover:text-[#00AEEF] transition-colors ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
