import type { Metadata } from 'next';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';
import Timeline from '@/components/about/Timeline';

export const metadata: Metadata = {
  title: 'About Us - Innova Tech | Digital Agency in Addis Ababa',
  description: 'Learn about Innova Tech, our mission, vision, and the expert team behind Ethiopia\'s leading digital agency.',
};

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Mission />
      <Team />
      <Timeline />
    </main>
  );
}

