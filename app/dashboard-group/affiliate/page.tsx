import React from 'react';
import Link from 'next/link';

// SidebarNav component is removed from here

export default function AffiliatePage() {
  return (
    // Removed container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8
    // Removed SidebarNav usage
    <div className="flex-grow">
      <h1 className="text-4xl font-bold mb-8">Affiliate Dashboard</h1>

      {/* Referral Link */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Referral Link</h2>
        <div className="flex items-center bg-gray-700 rounded-lg p-3">
          <p className="flex-grow text-blue-400 break-all">https://mevtrading.com/?ref=REFHWWOR-OI</p>
          <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Copy
          </button>
        </div>
        <p className="text-gray-400 text-sm mt-2">Attribution Period: 30 Days</p>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
          <p className="text-gray-400 text-sm">Total Earnings</p>
          <p className="text-3xl font-bold mt-1">$0.00</p>
        </div>
        <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
          <p className="text-gray-400 text-sm">Available Balance</p>
          <p className="text-3xl font-bold mt-1">$0.00</p>
        </div>
        <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
          <p className="text-gray-400 text-sm">Pending Earnings</p>
          <p className="text-3xl font-bold mt-1">$0.00</p>
        </div>
      </div>

      {/* Referrals and Clicks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
          <p className="text-gray-400 text-sm">Total Referrals</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
          <p className="text-gray-400 text-sm">Total Link Clicks</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
      </div>

      {/* Navigation Tabs (Placeholder) */}
      <div className="flex border-b border-gray-700 mb-8">
        <button className="py-3 px-6 text-blue-400 border-b-2 border-blue-400 font-semibold">Overview</button>
        <button className="py-3 px-6 text-gray-400 hover:text-white font-semibold">Commissions</button>
        <button className="py-3 px-6 text-gray-400 hover:text-white font-semibold">Withdrawals</button>
      </div>

      {/* USDT Wallet & Withdrawal */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
        <h2 className="text-2xl font-bold mb-4">USDT Wallet & Withdrawal</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="wallet-address" className="block text-gray-400 text-sm mb-1">USDT BEP20 Wallet Address</label>
            <div className="flex">
              <input type="text" id="wallet-address" placeholder="Enter your USDT BEP20 wallet address" className="flex-grow bg-gray-700 border border-gray-600 rounded-l-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg transition-colors">
                Update
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="withdrawal-amount" className="block text-gray-400 text-sm mb-1">Withdrawal Amount (USDT)</label>
            <div className="flex">
              <input type="number" id="withdrawal-amount" placeholder="Enter amount" className="flex-grow bg-gray-700 border border-gray-600 rounded-l-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-lg transition-colors">
                Withdraw
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">Minimum 3 days after earning required for withdrawal</p>
          </div>
        </div>
      </div>
    </div>
  );
}