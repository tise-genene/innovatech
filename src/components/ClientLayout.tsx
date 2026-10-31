'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import InteractiveCanvas from '@/components/InteractiveCanvas';
import CyberHUD from '@/components/CyberHUD';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <InteractiveCanvas />
      <CyberHUD />
      <Navbar />
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
      <Footer />
      <CommandPalette />
    </ThemeProvider>
  );
}
