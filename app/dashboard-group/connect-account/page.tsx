import React from 'react';
import Link from 'next/link';

const BotPlanCard = ({ name, description, monthlyReturn, riskLevel, upgradeRequired = false }: {
  name: string;
  description: string;
  monthlyReturn: string;
  riskLevel: string;
  upgradeRequired?: boolean;
}) => (
  <div className="p-8 rounded-lg border border-gray-700 bg-gray-800/50 text-center flex flex-col h-full">
    <h3 className="text-3xl font-bold mb-2 text-blue-400">{name}</h3>
    <p className="text-gray-400 mb-4 flex-grow">{description}</p>

    <div className="mb-6">
      <p className="text-gray-400">Monthly Return</p>
      <p className="text-4xl font-bold text-white">{monthlyReturn}</p>
    </div>

    <div className="mb-6">
      <p className="text-gray-400">Risk Level</p>
      <p className="text-xl font-bold text-white">{riskLevel}</p>
    </div>

    {upgradeRequired ? (
      <Link href="#upgrade" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 mt-auto">
        Upgrade to Access
      </Link>
    ) : (
      <Link href="#select" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 mt-auto">
        Select Plan
      </Link>
    )}
  </div>
);

export default function ConnectAccountPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <Link href="/dashboard" className="text-blue-500 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Dashboard
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center mb-4">Choose Your Trading Bot</h1>
      <p className="text-lg text-gray-400 text-center mb-12">
        Select a Trading Bot plan that matches your trading style and risk preference
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BotPlanCard
          name="MevTrading Forex AI Gold"
          description="Precision smart scalping for XAUUSD (Gold)"
          monthlyReturn="50% to 200%"
          riskLevel="Very Low"
          upgradeRequired={false}
        />
        <BotPlanCard
          name="MevTrading HFT AI"
          description="Stable Trading logic optimized for EURUSD & USDJPY"
          monthlyReturn="200% to 500%"
          riskLevel="Low"
          upgradeRequired={true}
        />
        <BotPlanCard
          name="MevTrading Crypto Arbitrage AI"
          description="Multi-Exchange Crypto Arbitrage AI Bot for Bybit and Binance"
          monthlyReturn="600% to 1000%"
          riskLevel="Medium"
          upgradeRequired={true}
        />
      </div>
    </div>
  );
}