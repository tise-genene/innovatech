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
  title: "Eagle Pathway Tech Agency — Software Engineering, LMS & Production Systems",
  description: "Eagle Pathway Tech Agency is the software engineering & product studio building multi-tenant LMS suites, FinTech receipt verification engines, and scalable digital systems in Addis Ababa, Ethiopia.",
  metadataBase: new URL("https://tech.eaglespathway.com"),
  keywords: [
    "Eagle Pathway",
    "Eagle Pathway Tech Agency",
    "Eagle Pathway LMS",
    "tech.eaglespathway.com",
    "VerifyReceipt",
    "FinTech Verification Ethiopia",
    "Ethiopian Software Engineering Studio",
    "Telebirr Integration",
    "CBE Receipt Verification",
    "Addis Ababa Tech Agency",
    "Next.js Full Stack Studio"
  ],
  authors: [{ name: "Eagle Pathway Tech Team", url: "https://tech.eaglespathway.com" }],
  creator: "Eagle Pathway Tech Agency",
  publisher: "Eagle Pathway",
  openGraph: {
    title: "Eagle Pathway Tech Agency — Software Engineering & Production Systems",
    description: "The software engineering and product studio powering the Eagle Pathway educational suite, FinTech verification, and scalable cloud systems in East Africa.",
    url: "https://tech.eaglespathway.com",
    siteName: "Eagle Pathway Tech Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Pathway Tech Agency — Software Engineering Studio",
    description: "Building production software, LMS platforms, and FinTech tools. Based in Addis Ababa, Ethiopia.",
    creator: "@eaglespathway",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
