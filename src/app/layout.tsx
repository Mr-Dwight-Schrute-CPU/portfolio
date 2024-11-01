'use client'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

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

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {mounted ? (
          
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        ) : (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
