import React from 'react';

// A simple placeholder for a chart, using SVG to draw a generic line graph.
const ChartPlaceholder = () => (
  <div className="bg-gray-100 rounded-lg p-4 my-4 border border-gray-200">
    <svg viewBox="0 0 100 50" className="w-full h-auto">
      <polyline
        fill="none"
        stroke="#4f46e5"
        strokeWidth="2"
        points="0,45 10,40 20,30 30,35 40,25 50,20 60,25 70,15 80,10 90,5 100,10"
      />
    </svg>
  </div>
);

// A component for displaying a list of features for a bot
const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="list-disc list-inside text-left text-gray-600 mt-4 space-y-2">
    {features.map((feature, index) => <li key={index}>{feature}</li>)}
  </ul>
);

export default function BotsPage() {
  const bitForexFeatures = [
    "High-Frequency Trading",
    "Advanced Risk Management",
    "Multi-Currency Support",
    "24/7 Operation"
  ];

  const capyFeatures = [
    "Trend-Following Strategy",
    "Low Drawdown Design",
    "Auto Lot Sizing",
    "Telegram Notifications"
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">Our AI Trading Bots</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* BIT Forex Bot Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">BIT Forex Bot</h2>
            <p className="text-gray-600 mb-4">Optimized for high-speed forex markets, focusing on stability and consistent returns.</p>
            <ChartPlaceholder />
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Features:</h3>
            <FeatureList features={bitForexFeatures} />
          </div>

          {/* CAPY Bot Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">CAPY Bot (VIP)</h2>
            <p className="text-gray-600 mb-4">A premium bot designed for steady growth, available through our VIP subscription.</p>
            <ChartPlaceholder />
            <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Features:</h3>
            <FeatureList features={capyFeatures} />
          </div>

        </div>
      </div>
    </div>
  );
}
