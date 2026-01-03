import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "../Provider/ThemeProvider";
import Navbar from "../components/Navbar";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SSH Softtech",
  description: "A fast-growing technology and AI solutions company delivering intelligent, scalable, and business-ready software products for startups, SMEs, and enterprises.",
  keywords: ['Software company', 'AI agents', 'Custom software solutions', 'Web Development', 'Mobile App Development', 'AI Chatbots', 'Machine Learning', 'Data Analytics', 'Cloud Solutions', 'Saas Development', 'E-commerce Development', 'Online Store Development', 'Top Rated software agency', 'Startup', 'SSH Softtech'],
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)'
      }
    ],
  },
  openGraph: {
    title: "SSH Softtech",
    description: "A fast-growing technology and AI solutions company delivering intelligent, scalable, and business-ready software products for startups, SMEs, and enterprises.",
    type: "website",
    images: [
      {
        url: "https://www.sshsofttech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SSH Softtech",
      },
    ],
    siteName: "SSH Softtech",
    locale: "en",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${inter.className} w-full antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="w-full flex flex-col">
            <Navbar />
            <main className="flex flex-1 flex-col">
              {children}
            </main>
            <Footer />
            <ChatWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
