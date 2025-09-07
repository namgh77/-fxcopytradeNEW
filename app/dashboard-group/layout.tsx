import React from 'react';
import Link from 'next/link';

const SidebarNav = () => (
  <div className="w-64 bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="mb-8">
      <p className="text-gray-400 text-sm">GI HO</p>
      <p className="text-white text-xl font-semibold">namgh77@gmail.com</p>
    </div>
    <nav className="space-y-4">
      <Link href="/dashboard-group/dashboard" className="block text-blue-400 hover:text-blue-300 font-medium">Dashboard</Link>
      <Link href="/dashboard-group/upgrade" className="block text-white hover:text-gray-300 font-medium">Upgrade My Bot</Link>
      <Link href="/dashboard-group/connect-account" className="block text-white hover:text-gray-300 font-medium">Connect Account</Link>
      <Link href="/dashboard-group/manage-bot" className="block text-white hover:text-gray-300 font-medium">Manage Bot</Link>
      <Link href="/dashboard-group/subscription" className="block text-white hover:text-gray-300 font-medium">Subscription</Link>
      <Link href="/dashboard-group/affiliate" className="block text-white hover:text-gray-300 font-medium">Affiliate</Link>
      <Link href="/dashboard-group/profile" className="block text-white hover:text-gray-300 font-medium">My Profile</Link>
    </nav>
    <div className="mt-8 pt-8 border-t border-gray-700">
      <Link href="/dashboard-group/signout" className="block text-red-400 hover:text-red-300 font-medium">Sign Out</Link>
    </div>
  </div>
);

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
      {/* Left Sidebar */}
      <SidebarNav />

      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}