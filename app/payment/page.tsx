"use client";

import React, { useState } from 'react';

const WalletAddress = ({ network, address }: { network: string; address: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{network}</h3>
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
        <p className="text-sm md:text-base text-gray-900 font-mono break-all">{address}</p>
        <button 
          onClick={handleCopy}
          className={`ml-4 px-4 py-2 rounded-md text-sm font-bold transition-colors text-white ${copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Make a Payment</h1>
          <p className="text-lg text-gray-600">Follow the instructions below to fund your account.</p>
        </div>

        {/* Wallet Addresses */}
        <section className="space-y-6 mb-12">
          <WalletAddress network="USDT (TRC20 Network)" address="TPAe44i9b3rT9uYg1gX2sZ6fJ8kH7Lce1B" />
          <WalletAddress network="USDT (ERC20 Network)" address="0x1a2B3c4D5e6F7g8H9i0J1k2L3M4n5O6p7Q8r9S0t" />
          <p className="text-center text-sm text-orange-600 font-medium">Warning: Please ensure you are sending funds to the correct network. Funds sent to the wrong network may be lost forever.</p>
        </section>

        {/* Instructions */}
        <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">How to Complete Your Payment</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Choose your preferred network (TRC20 or ERC20).</li>
            <li>Copy the wallet address provided above.</li>
            <li>Transfer the desired amount to the copied address from your personal wallet or exchange.</li>
            <li>After the transfer is confirmed, copy the Transaction ID (TxID) or Hash.</li>
            <li>Paste the Transaction ID in the form below and submit it for verification.</li>
          </ol>
        </section>

        {/* Submission Form */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Submit Your Transaction</h2>
          <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-4">
            <div>
              <label htmlFor="txid" className="block text-sm font-medium text-gray-700 mb-1">Transaction ID (TxID) / Hash</label>
              <input type="text" id="txid" placeholder="Enter your transaction ID here" className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">Submit for Verification</button>
          </form>
        </section>

      </div>
    </div>
  );
}
