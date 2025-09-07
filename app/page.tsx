import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* New Hero Section */}
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

      {/* New Key Metrics Bar */}
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

      {/* The rest of the sections will be added here in the next steps */}
    </>
  );
}