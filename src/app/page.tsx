import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-black text-white flex justify-between items-center py-2 px-4">
        <div className="text-center flex-grow ">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a href="#" className="text-whi-400 ml-2">
            Shop Now
          </a>
        </div>
        <div className="relative pr-16" >
          <select className="bg-black text-white border-none focus:ring-2 focus:ring-blue-600 rounded">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl text-black font-bold">Exclusive</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/signup" className="text-gray-700 hover:text-gray-900">
              Sign Up
            </a>
          </nav>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 bg-gray-50 rounded-md py-2 pl-2 pr-12 focus:outline-none focus:ring focus:border-blue-300 text-xs text-black"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute right-2 text-gray-500 pointer-events-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
              }}
            >
              <path
                fillRule="evenodd"
                d="M8.42 0a8.001 8.001 0 017.159 11.788l4.675 4.674-1.415 1.414-4.674-4.675A8.001 8.001 0 118.42 0zm0 2a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>
      <hr></hr>


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
            <h2 className="text-lg mb-8 text-black">
              Enter your details below
            </h2>
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <button className="bg-red-600 text-white py-4 px-12 rounded-lg hover:bg-red-700">
                  Log In
                </button>
                <a href="#" className="text-red-600 hover:text-red-700">
                  Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-8">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

    <div>
      <h3 className="text-xl font-bold mb-4">Exclusive</h3>
     
      <p className="mt-4 mb-2 font-semibold">Subscribe</p>
      <p className="mb-4">Get 10% off your first order</p>
      <div className="relative">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 border border-white rounded-sm focus:outline-none bg-transparent text-white pr-10"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 rotate-45 text-white pointer-events-none"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
</div>

    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Support</h3>
      <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Account</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-gray-400">
            My Account
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Login / Register
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Cart
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Quick Link</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Terms Of Use
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold mb-4">Download App</h3>
      <div className="flex justify-center space-x-4">
        <a href="#">
          <img
            src="/google-play-badge.png"
            alt="Google Play"
            className="h-12"
          />
        </a>
        <a href="#">
          <img
            src="/app-store-badge.png"
            alt="App Store"
            className="h-12"
          />
        </a>
      </div>
    </div>
  </div>
  <div className="text-center mt-8">
  <div className="mt-4">
    <a href="#" className="hover:text-gray-400">
      <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6" />
    </a>
    <a href="#" className="ml-4 hover:text-gray-400">
      <img src="/images/twitter.png" alt="Twitter" className="h-6 w-6" />
    </a>
    <a href="#" className="ml-4 hover:text-gray-400">
      <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6" />
    </a>
    <a href="#" className="ml-4 hover:text-gray-400">
      <img src="/images/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
    </a>
  </div>
</div>

  <hr className="opacity-10"></hr>
  <div className="text-center mt-4 opacity-30">
    &copy; Copyright Rimel 2022. All rights reserved
  </div>
</footer>

    </div>
  );
};

export default LoginPage;
