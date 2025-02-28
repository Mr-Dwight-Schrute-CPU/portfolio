'use client';  // Marking the file as a client component

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import MetadataProvider from "@/components/MetadataProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} dark:bg-gray-950 bg-slate-50 relative ${geistMono.variable} antialiased`}>
        {mounted ? (
          <>
            <MetadataProvider
              title="Kunal Nasa - Portfolio"
              description="Hey, I'm Kunal Nasa! Explore my portfolio, skills, and projects."
              imageUrl="/Images/AppLogo.jpeg"
              url="https://kunalnasa.xyz"
            />
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </>
        ) : (
          <>
            <Navbar />
            {children}
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}
