'use client';

import React from 'react';
import Link from 'next/link';

export const Header = () => {
  // Updated navLinks to match mevtrading.com
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#bots", label: "Trading Bots" },
    { href: "#affiliate", label: "Affiliate" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className="header w-full p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)'}}>
          <Link href="/">MevTrading</Link>
        </h1>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="font-semibold text-lg hover:text-blue-500 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
            <Link href="#get-started" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Get Started
            </Link>
        </div>
      </div>
    </header>
  );
};