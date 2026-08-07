import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Innova Tech — Software Development, AI Systems & Digital Solutions",
  description: "Innova Tech helps startups and businesses build SaaS platforms, web applications, AI solutions, and digital experiences with a reliable engineering team based in Addis Ababa, Ethiopia.",
  keywords: [
    "Innova Tech",
    "Software Development Ethiopia",
    "AI Systems Addis Ababa",
    "SaaS Platform Development",
    "Web Application Engineering",
    "Ethiopian Tech Agency",
    "Digital Product Studio",
    "Eagle Pathway",
    "EagleBot",
    "Full-Stack Engineering Partner"
  ],
  authors: [{ name: "Innova Tech Team", url: "https://innovatech.et" }],
  creator: "Innova Tech",
  publisher: "Innova Tech Ltd",
  openGraph: {
    title: "Innova Tech — Software Development, AI Systems & Digital Solutions",
    description: "Building digital software products from idea to scale with a reliable engineering team in Addis Ababa, Ethiopia.",
    url: "https://innovatech.et",
    siteName: "Innova Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innova Tech — Software Development & AI Studio",
    description: "Building digital software products from idea to scale. Based in Addis Ababa, Ethiopia.",
    creator: "@innovatech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="antialiased bg-[#070a12] text-slate-100 min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
