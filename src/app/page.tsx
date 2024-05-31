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
          <div className="md:w-1/2 bg-white p-8 mx-4 md:mx-8 rounded-lg flex justify-center items-center">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-medium mb-4 text-black">
                Log in to Exclusive
              </h2>
              <h2 className="text-lg mb-8 text-black">Enter your details below</h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    id="email"
                    placeholder='Email or Phone Number'
                    className="w-full p-4 border-b border-gray-300 text-black"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    id="password"
                    placeholder='Password'
                    className="w-full p-4 border-b border-gray-300 text-black"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button className="bg-red-500 text-white py-4 px-8 rounded-md hover:bg-red-700">
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
