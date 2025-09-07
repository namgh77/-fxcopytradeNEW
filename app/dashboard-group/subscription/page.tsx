import React from 'react';
import Link from 'next/link';

// SidebarNav component is removed from here

const SubscriptionCard = ({ planName, price, status, expires, accounts }: {
  planName: string;
  price: string;
  status: string;
  expires: string;
  accounts: string;
}) => (
  <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
    <h3 className="text-2xl font-bold mb-2">{planName}</h3>
    <p className="text-blue-400 text-xl font-semibold mb-4">{price}</p>
    <div className="text-gray-400 text-sm mb-4">
      <p>• {status}</p>
      <p>• {expires}</p>
      <p>• {accounts}</p>
    </div>
    <Link href="#upgrade" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full text-center block">
      UPGRADE
    </Link>
  </div>
);

const TransactionItem = ({ plan, date, amount, status, transactionId }: {
  plan: string;
  date: string;
  amount: string;
  status: string;
  transactionId: string;
}) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-700 last:border-b-0">
    <div>
      <p className="font-semibold">{plan}</p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold">{amount}</p>
      <p className={`text-sm ${status === 'Confirmed' ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
      <p className="text-gray-500 text-xs">ID: {transactionId}</p>
    </div>
  </div>
);

export default function SubscriptionPage() {
  return (
    <div className="flex-grow">
      <h1 className="text-4xl font-bold mb-8">Subscription Management</h1>
      <p className="text-lg text-gray-400 mb-8">Manage your trading plans, view transaction history, and upgrade your subscription</p>

      {/* Current Subscription */}
      <div className="mb-12">
        <SubscriptionCard
          planName="MevTrading Starter"
          price="$99/month"
          status="Active"
          expires="Expires September 21, 2025"
          accounts="1 accounts"
        />
      </div>

      {/* Transaction History */}
      <h2 className="text-3xl font-bold mb-6">Transaction History</h2>
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
        <TransactionItem
          plan="starter"
          date="August 21, 2025 • CRYPTO"
          amount="99 usd"
          status="Confirmed"
          transactionId="5662556656"
        />
      </div>
    </div>
  );
}