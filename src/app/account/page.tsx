// pages/account.tsx

import React from 'react';
import Header from '../components/Header1';
import Footer from '../components/Footer';

const Account: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-16 mt-16">
          <nav className="text-gray-500">
            <a href="/home" className="hover:text-black">Home</a> / 
            <span className='text-black'> My Account</span>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row">
          <aside className="w-full md:w-1/4 mb-8 md:mb-0">
            <nav className="space-y-4">
              <a href="#" className="block py-2 px-4 rounded text-red-500 font-medium hover:text-red-500">
                My Profile
              </a>
              <a href="#" className="block py-2 px-4 rounded text-black hover:text-red-500">
                Address Book
              </a>
              <a href="#" className="block py-2 px-4 rounded text-black hover:text-red-500">
                My Payment Options
              </a>
              <a href="#" className="block py-2 px-4 rounded text-black hover:text-red-500">
                My Orders
              </a>
              <a href="#" className="block py-2 px-4 rounded text-black hover:text-red-500">
                My Returns
              </a>
              <a href="#" className="block py-2 px-4 rounded text-black hover:text-red-500">
                My Cancellations
              </a>
              <a href="#" className="block py-2 px-4 rounded text-black hover:text-red-500">
                My Wishlist
              </a>
            </nav>
          </aside>
          <section className="w-full md:w-3/4">
            <h2 className="text-2xl font-semibold mb-4 text-black">Edit Your Profile</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue="Md"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue="Rimel"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="rimel111@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="Kingston, 5236, United State"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-black">Password Changes</h3>
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
