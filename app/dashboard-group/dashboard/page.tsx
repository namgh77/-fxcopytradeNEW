import React from 'react';
import Link from 'next/link';

const DashboardCard = ({ title, value, unit, change }: { title: string; value: string; unit?: string; change?: string; }) => (
  <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
    <p className="text-sm text-gray-400">{title}</p>
    <p className="text-3xl font-bold mt-1">{value} {unit}</p>
    {change && <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{change}</p>}
  </div>
);

export default function DashboardPage() {
  return (
    <div className="flex-grow">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Add Account Button */}
      <div className="mb-8">
        <Link href="/dashboard-group/connect-account" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
          Add Account
        </Link>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="MT4/MT5 Total Balance" value="$0.00" unit="" change="+0.00%" />
        <DashboardCard title="Total Return" value="$0.00" unit="" />
        <DashboardCard title="Active Accounts" value="1" unit="" />
        <DashboardCard title="Subscription Status" value="active" unit="starter Plan" />
      </div>

      {/* Upgrade My Plan */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Upgrade My Plan</h2>
        <p className="text-gray-400 mb-6">Get access to more trading bots and advanced features.</p>
        <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
          Upgrade Now
        </Link>
      </div>

      {/* Trading Education Videos */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Trading Education Videos</h2>
        <p className="text-gray-400 mb-6">
          Watch our educational videos to learn more about trading strategies and techniques.
        </p>
        {/* Placeholder for video player or link */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg flex items-center justify-center h-48">
          <p className="text-gray-500">Video Player Placeholder</p>
        </div>
      </div>
    </div>
  );
}