'use client';

import React from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MevTrading",
  description: "A modern trading bot platform.",
};

const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/bots", label: "AI Bots" },
    { href: "/affiliate", label: "Affiliate" },
    { href: "/qa", label: "Q&A" },
  ];

  return (
    <header className="header w-full p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--link-color)'}}>
          <Link href="/">MevTrading</Link>
        </h1>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <React.Fragment key={link.href}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={link.href} className="font-semibold" style={{ '--hover-color': 'var(--link-hover-color)', color: 'var(--text-primary)' } as any} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                {link.label}
              </Link>
            </React.Fragment>
          ))}
           <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Dashboard
            </Link>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link href="/login" className="font-semibold" style={{ '--hover-color': 'var(--link-hover-color)', color: 'var(--text-primary)' } as any} onMouseOver={(e) => e.currentTarget.style.color = 'var(--hover-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
              Login
            </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer w-full p-6 text-center mt-10">
      <p>&copy; 2025 MevTrading. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="#" className="hover:underline">Privacy Policy</Link>
        <Link href="#" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}