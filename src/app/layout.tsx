import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Eagle Pathway Tech Agency — Custom Software Engineering, Cloud & Production Systems",
  description: "Eagle Pathway Tech Agency is the full-cycle software engineering and product studio building bespoke systems, scalable digital platforms, mobile apps, and enterprise infrastructure for clients worldwide.",
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
    title: "Eagle Pathway Tech Agency — Custom Software Engineering & Production Systems",
    description: "The full-cycle software engineering and product studio building bespoke systems, scalable cloud platforms, and custom digital software for clients worldwide.",
    url: "https://tech.eaglespathway.com",
    siteName: "Eagle Pathway Tech Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Pathway Tech Agency — Custom Software Engineering Studio",
    description: "Building custom production software, scalable cloud systems, and bespoke digital platforms for clients worldwide.",
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
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="antialiased bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen transition-colors duration-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
