import type { Metadata } from 'next';
import Hero from '@/components/contact/Hero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us - Innova Tech | Get in Touch',
  description: 'Contact Innova Tech for your digital needs. Located in Addis Ababa, Ethiopia. Schedule a consultation today.',
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <div className="py-20 bg-[#F2F2F2]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}

