'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveCanvas from '@/components/InteractiveCanvas';
import CommandPalette from '@/components/CommandPalette';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <InteractiveCanvas />
      <Navbar />
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
      <Footer />
      <CommandPalette />
    </ThemeProvider>
  );
}
