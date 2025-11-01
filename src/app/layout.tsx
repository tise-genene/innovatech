import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innova Tech - Digital Agency in Addis Ababa | Web Development, Design & Marketing",
  description: "Leading digital agency in Addis Ababa, Ethiopia. We offer web development, app development, AI integration, product design, branding, and digital marketing services.",
  keywords: ["digital agency", "web development", "app development", "AI integration", "branding", "digital marketing", "Addis Ababa", "Ethiopia"],
  authors: [{ name: "Innova Tech" }],
  openGraph: {
    title: "Innova Tech - Digital Agency in Addis Ababa",
    description: "Leading digital agency offering web development, design, and marketing services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
