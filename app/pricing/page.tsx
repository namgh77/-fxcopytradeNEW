import React from 'react';
import Link from 'next/link';

const FeatureItem = ({ children, included = true }: { children: React.ReactNode; included?: boolean; }) => (
  <li className={`flex items-center text-lg ${included ? 'text-gray-300' : 'text-gray-500 line-through'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 ${included ? 'text-green-500' : 'text-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {included ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      )}
    </svg>
    {children}
  </li>
);

const PricingCard = ({ plan, price, features, ctaText, isPopular = false }: {
  plan: string;
  price: string;
  features: { text: string; included: boolean; }[];
  ctaText: string;
  isPopular?: boolean;
}) => (
  <div className={`p-8 rounded-lg border ${isPopular ? 'border-blue-500' : 'border-gray-700'} bg-gray-800/50 flex flex-col h-full ${isPopular ? 'shadow-lg shadow-blue-500/20' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        Most Popular
      </div>
    )}
    <h2 className="text-3xl font-bold mb-2">{plan}</h2>
    <p className="text-blue-400 text-4xl font-extrabold mb-6">{price}</p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <FeatureItem key={index} included={feature.included}>{feature.text}</FeatureItem>
      ))}
    </ul>
    <Link href="#upgrade" className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full text-center block ${isPopular ? 'mt-auto' : ''}`}>
      {ctaText}
    </Link>
  </div>
);

export default function PricingPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center mb-4">Upgrade Your Plan</h1>
      <p className="text-lg text-gray-400 text-center mb-12">
        Get access to more trading bots and advanced features
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <PricingCard
          plan="Pro Plan"
          price="$999/year"
          ctaText="Upgrade Now"
          isPopular={true}
          features={[
            { text: '2 Trading Accounts', included: true },
            { text: 'MevTrading Forex AI Gold Bot', included: true },
            { text: 'MevTrading HFT AI Bot', included: true },
            { text: 'MevTrading Crypto Arbitrage AI', included: false },
          ]}
        />
        <PricingCard
          plan="Unlimited Plan"
          price="$9,999Lifetime"
          ctaText="Upgrade Now"
          features={[
            { text: 'Unlimited Trading Accounts', included: true },
            { text: 'Unlimited Bot File Download', included: true },
            { text: 'MevTrading Forex AI Gold Bot', included: true },
            { text: 'MevTrading HFT AI Bot', included: true },
            { text: 'MevTrading Crypto Arbitrage AI Bot', included: true },
          ]}
        />
      </div>

      {/* Compare All Features Section */}
      <div className="text-center mb-24">
        <Link href="#compare" className="text-blue-400 hover:underline text-lg font-semibold">
          Compare All Features
        </Link>
      </div>

      {/* Why Choose MevTrading? */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose MevTrading?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-5xl font-bold text-blue-400">99.9%</p>
            <p className="text-gray-400">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-400">24/7</p>
            <p className="text-gray-400">Market Monitoring</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-400">Secure</p>
            <p className="text-gray-400">Encrypted Trading</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-blue-400">Global</p>
            <p className="text-gray-400">Broker Support</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our team can help you select the perfect plan based on your trading goals and experience level.
          </p>
          <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors mt-6 inline-block">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}