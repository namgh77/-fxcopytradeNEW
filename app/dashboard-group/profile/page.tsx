import React from 'react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">My Profile</h1>
      <p className="text-lg text-gray-400 mb-8">Manage your account settings and security preferences</p>

      {/* Profile Information */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <p className="text-gray-400 mb-4">Update your personal details</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="first-name" className="block text-gray-400 text-sm mb-1">First Name</label>
            <input type="text" id="first-name" defaultValue="GI HO" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-gray-400 text-sm mb-1">Last Name</label>
            <input type="text" id="last-name" defaultValue="NAM" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Save Changes
          </button>
        </form>
      </div>

      {/* Security Settings */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
        <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
        <p className="text-gray-400 mb-4">Protect your account with additional security measures</p>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Two-Factor Authentication</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Enable
            </button>
          </div>
          <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
          <div className="flex justify-between items-center pt-4 border-t border-gray-700">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Change Password
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}