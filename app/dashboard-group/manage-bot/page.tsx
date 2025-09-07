import React from 'react';
import Link from 'next/link';

const AccountCard = ({ accountNumber, botName }: { accountNumber: string; botName: string; }) => (
  <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50 flex justify-between items-center">
    <div>
      <p className="text-lg font-semibold">{accountNumber}</p>
      <p className="text-gray-400">{botName}</p>
    </div>
    <Link href={`/dashboard?account=${accountNumber}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
      Manage
    </Link>
  </div>
);

export default function ManageBotPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">Manage Bot</h1>
      <p className="text-lg text-gray-400 mb-8">Monitor and control your automated trading bots</p>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Link href="/connect-account" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto text-center">
          Add New Account
        </Link>
        <div className="relative w-full md:w-auto flex-grow">
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="space-y-6">
        <AccountCard accountNumber="1006135897" botName="MevTrading Forex AI Gold" />
        {/* Add more AccountCard components as needed */}
      </div>
    </div>
  );
}