import React from 'react';
import Link from 'next/link';

// Feature Card Component
const FeatureCard = ({ title }: { title: string }) => (
  <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50 text-left">
    {/* Placeholder for an icon */}
    <div className="w-12 h-12 bg-blue-600/20 rounded-lg mb-4"></div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">Advanced settings and full control over your trading parameters.</p>
  </div>
);

// Bot Card Component
const BotCard = ({ name, market, profit }: { name: string, market: string, profit: string }) => (
  <div className="p-8 rounded-lg border border-gray-700 bg-gray-800/50 transform hover:-translate-y-2 transition-transform">
    <h3 className="text-2xl font-bold mb-2 text-blue-400">{name}</h3>
    <p className="text-lg font-semibold mb-4 text-gray-300">{market}</p>
    <p className="text-gray-400">Estimated Monthly Profit:</p>
    <p className="text-4xl font-bold text-white mt-2">{profit}</p>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Best AI Trading Bots for Gold, Forex & Crypto
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-400">
          Our specialized AI trading bots are engineered for precision and performance in the Gold, Forex, and Crypto markets.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Link href="#bots" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
            Get AI Trading Bot
          </Link>
        </div>
        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center">
            <p className="text-gray-500">MevTrading AI Bot Demo Video</p>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex justify-around text-center max-w-4xl mx-auto p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <div>
              <p className="text-3xl font-bold text-blue-500">3</p>
              <p className="text-gray-400">Trading Bots</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-500">24/7</p>
              <p className="text-gray-400">Automated Trading</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-500">96%+</p>
              <p className="text-gray-400">Win Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Trading Features Section */}
      <section className="py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Trading Features</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Everything you need for automated, intelligent trading, right at your fingertips.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="SL/TP Management" />
            <FeatureCard title="Trailing Stop" />
            <FeatureCard title="Martingale Strategy" />
            <FeatureCard title="Grid System" />
            <FeatureCard title="News Filter" />
            <FeatureCard title="Time Filter" />
            <FeatureCard title="Lot Size Control" />
            <FeatureCard title="Symbol Filtering" />
            <FeatureCard title="24/7 Support" />
          </div>
        </div>
      </section>

      {/* Our Trading Bots Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Trading Bots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BotCard name="Forex AI Gold" market="Forex & Gold Market" profit="15% - 25%" />
            <BotCard name="HFT AI" market="High-Frequency Trading" profit="30% - 50%" />
            <BotCard name="Crypto Arbitrage AI" market="Crypto Arbitrage" profit="5% - 10%" />
          </div>
        </div>
      </section>

      {/* Affiliate Program Section */}
      <section className="py-24">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="p-8 rounded-lg border border-blue-500/50 bg-blue-900/20">
            <h2 className="text-4xl font-bold mb-4">Join Our Affiliate Program</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
              Earn a 20% commission for every new user you refer. We provide all the tools and support you need to succeed.
            </p>
            <div className="flex justify-center items-center gap-8 my-8">
                <div className="text-left">
                    <p className="font-semibold text-xl">✓ Easy Sharing</p>
                    <p className="text-gray-400">Share your unique link anywhere.</p>
                </div>
                <div className="text-left">
                    <p className="font-semibold text-xl">✓ USDT BEP20 Payouts</p>
                    <p className="text-gray-400">Fast and reliable crypto payments.</p>
                </div>
            </div>
            <Link href="#affiliate" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
              Join Affiliate Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}