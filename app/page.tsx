import React from 'react';
import Link from 'next/link';

// Helper component for feature cards
const FeatureCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="card h-full">
    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--link-color)'}}>{title}</h3>
    <p className="text-lg" style={{ color: 'var(--text-secondary)'}}>{children}</p>
  </div>
);

export default function Home() {
  return (
    <div className="animate-fade-in-down">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Automate Your Trades with AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)'}}>
          Leverage our advanced AI bots, BIT Forex and CAPY, to navigate the markets. Choose a plan that fits your style.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/bots" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Explore The Bots
          </Link>
          <Link href="/affiliate" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Join Affiliate
          </Link>
        </div>
      </section>

      {/* Bots Introduction */}
      <section className="my-24">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our AI Trading Bots</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card text-center">
            <h3 className="text-3xl font-bold mb-3">BIT Forex Bot</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)'}}>
              A sophisticated bot designed for the forex market, focusing on stable, long-term growth.
            </p>
            <img src="https://placehold.co/600x400/000000/FFFFFF/png?text=BIT+Forex+Chart" alt="BIT Forex Performance Chart" className="rounded-lg mx-auto" />
          </div>
          <div className="card text-center">
            <h3 className="text-3xl font-bold mb-3">CAPY Bot</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)'}}>
              An aggressive, high-frequency bot aiming for rapid gains in volatile markets.
            </p>
            <img src="https://placehold.co/600x400/000000/FFFFFF/png?text=CAPY+Bot+Chart" alt="CAPY Bot Performance Chart" className="rounded-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* Main Features Highlight */}
      <section className="my-24">
        <h2 className="text-4xl font-bold text-center mb-12">Core Features at a Glance</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard title="Automated Management">
            Set your risk with automatic stop-loss and take-profit. Our bots handle the rest 24/7.
          </FeatureCard>
          <FeatureCard title="Full Control">
            Adjust lot sizes, filter symbols, and set time restrictions to match your trading strategy.
          </FeatureCard>
          <FeatureCard title="Stay Notified">
            Receive real-time trade alerts and updates directly to your Telegram.
          </FeatureCard>
        </div>
      </section>

      {/* Affiliate Program Intro */}
      <section className="my-24 card text-center bg-blue-900/20 border-blue-500/30">
          <h2 className="text-4xl font-bold mb-4">Become a Partner</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--text-secondary)'}}>
            Earn significant commissions by referring users. We offer two lucrative partnership models: revenue sharing or subscription-based fees.
          </p>
          <Link href="/affiliate" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Learn More & Earn
          </Link>
      </section>
    </div>
  );
}