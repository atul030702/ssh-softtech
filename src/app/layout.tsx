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
          defaultTheme="system"
          enableSystem
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
