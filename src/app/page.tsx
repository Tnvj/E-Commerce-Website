"use client";
import React, { useState } from 'react';
import { login } from './services/api'; 
import Header from './components/Header';
import Footer from './components/Footer';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      setError('');

      const result = await login({ username, password });
      window.location.href = '/home';
    } catch (error: any) {
      setError(error.message);
      console.error('Sign in error:', error);
    }
  };

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
          <div className="md:w-1/2 bg-white p-8 mx-4 md:mx-8 rounded-lg flex justify-center items-center">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-medium mb-4 text-black">
                Log in to Exclusive
              </h2>
              <h2 className="text-lg mb-8 text-black">Enter your details below</h2>
              <form onSubmit={handleSubmit}> 
                <div className="mb-4">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="w-full p-4 border-b border-gray-300 text-black"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-4 border-b border-gray-300 text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex justify-between items-center">
                  <button type="submit" className="bg-red-500 text-white py-4 px-8 rounded-md hover:bg-red-700">
                    Log In
                  </button>
                  <a href="#" className="text-red-500 hover:text-red-700">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
