'use client'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

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

// can not add metadata because of client component

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = "KunalNasa - Portfolio";
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/Images/AppLogo.ico";
    document.head.appendChild(favicon);
  }, []);

  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {mounted ? (
          
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Toaster/>
          </ThemeProvider>
        ) : (
          <>
            <Navbar />
            {children}
            <Toaster/>
          </>
        )}
      </body>
    </html>
  );
}