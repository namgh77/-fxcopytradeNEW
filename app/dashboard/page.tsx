import React from 'react';

// Helper component for statistics cards
const StatCard = ({ title, value, change }: { title: string, value: string, change?: string }) => (
  <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
    <p className="text-sm text-gray-400">{title}</p>
    <p className="text-3xl font-bold mt-1">{value}</p>
    {change && <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{change}</p>}
  </div>
);

// Helper component for the Bot status cards
const BotStatusCard = ({ name, status }: { name: string, status: 'Active' | 'Paused' }) => (
    <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50 flex justify-between items-center">
        <div>
            <p className="font-semibold">{name}</p>
            <p className={`text-sm ${status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>{status}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md text-sm">
            Settings
        </button>
    </div>
);


export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Stats Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Current Balance" value="$12,450.78" change="+2.5%" />
        <StatCard title="Total Profit" value="$2,450.78" />
        <StatCard title="Win Rate" value="96.2%" />
        <StatCard title="Today's P/L" value="-$54.12" change="-0.43%" />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Chart & Table) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Chart Placeholder */}
          <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50 h-96 flex items-center justify-center">
            <p className="text-gray-500">Performance Chart Placeholder</p>
          </div>
          {/* Table Placeholder */}
          <div className="p-6 rounded-lg border border-gray-700 bg-gray-800/50">
            <h3 className="text-xl font-semibold mb-4">Open Trades</h3>
            <div className="flex items-center justify-center h-48">
                <p className="text-gray-500">Trade History Table Placeholder</p>
            </div>
          </div>
        </div>

        {/* Right Column (Bot Management) */}
        <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold">Bot Management</h2>
            <BotStatusCard name="Forex AI Gold" status="Active" />
            <BotStatusCard name="HFT AI" status="Active" />
            <BotStatusCard name="Crypto Arbitrage AI" status="Paused" />
        </div>

      </div>
    </div>
  );
}