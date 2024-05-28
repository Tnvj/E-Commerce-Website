// src/pages/LoginPage.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 py-12 justify-center items-center bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="/images/login.png"
              alt="Shopping"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 bg-white p-24 rounded-lg">
            <h2 className="text-4xl font-medium mb-3 text-black">
              Log in to Exclusive
            </h2>
            <h2 className="text-lg mb-8 text-black">Enter your details below</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <button className="bg-red-500 text-white py-4 px-12 rounded-lg hover:bg-red-700">
                  Log In
                </button>
                <a href="#" className="text-red-500 hover:text-red-700">
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
