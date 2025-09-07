import React from 'react';

// A reusable component for form input fields
const InputField = ({ label, type = 'text', placeholder, id }: { label: string; type?: string; placeholder?: string; id: string; }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type={type} id={id} placeholder={placeholder} className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500" />
  </div>
);

// A reusable component for select/dropdown fields
const SelectField = ({ label, id, children }: { label: string; id: string; children: React.ReactNode }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select id={id} className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500">
      {children}
    </select>
  </div>
);

// A reusable component for checkboxes
const CheckboxField = ({ label, id }: { label: string; id: string; }) => (
  <div className="flex items-center">
    <input id={id} type="checkbox" className="h-4 w-4 bg-gray-100 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
    <label htmlFor={id} className="ml-2 text-sm text-gray-800">{label}</label>
  </div>
);


const AccountSettings = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Account Settings</h2>
    <form className="space-y-4">
      <InputField label="Account Name / Number" id="account-name" placeholder="1006135897" />
      <InputField label="Account Password" id="account-password" type="password" placeholder="•••••••••" />
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">Update Account</button>
    </form>
  </div>
);

const BotSettings = () => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">Bot Settings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SelectField label="AI Auto Lot Sizing" id="auto-lot-sizing">
        <option>Auto Risk (Balance)</option>
        <option>Fixed Lot</option>
      </SelectField>
      <InputField label="Risk Value (%)" id="risk-value" type="number" placeholder="1" />
      
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">SL/TP Management</h3>
        <div className="flex space-x-4">
          <CheckboxField label="Copy Stop Loss" id="copy-sl" />
          <CheckboxField label="Copy Take Profit" id="copy-tp" />
        </div>
      </div>

      <InputField label="Fixed SL (%)" id="fixed-sl" type="number" placeholder="0" />
      <InputField label="Fixed TP (%)" id="fixed-tp" type="number" placeholder="0" />

      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Drawdown Protection</h3>
        <InputField label="Daily Loss Limit (%)" id="daily-loss-limit" type="number" placeholder="5" />
        <InputField label="Max Open Positions" id="max-positions" type="number" placeholder="10" />
      </div>

      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Filters</h3>
        <SelectField label="Trading Hours" id="trading-hours">
          <option>24/7 Trading</option>
          <option>Custom (Coming Soon)</option>
        </SelectField>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">News Filter</label>
          <div className="bg-gray-100 border border-gray-300 p-3 rounded-md text-gray-500">Disabled (Coming Soon)</div>
        </div>
      </div>

      <div className="md:col-span-2 mt-6">
        <button type="button" className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">Reset to Default</button>
      </div>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">Manage - Account #1006135897</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AccountSettings />
          </div>
          <div className="lg:col-span-2">
            <BotSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
