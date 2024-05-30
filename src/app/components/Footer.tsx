import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
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
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <a href="/account" className="hover:text-gray-400">
                My Account
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-gray-400">
                Login / Register
              </a>
            </li>
            <li>
              <a href="/checkout" className="hover:text-gray-400">
                Cart
              </a>
            </li>
            <li>
              <a href="/wishlist" className="hover:text-gray-400">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/home" className="hover:text-gray-400">
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
          <div className="flex flex-col items-start space-y-4">
            <a href="#">
              <img
                src="/images/googleplay.png"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="/images/appstore.png"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
          <div className="mt-8">
            <div className="flex justify-start space-x-4">
              <a href="#" className="hover:text-gray-400">
                <img src="/images/facebook.png" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src="/images/twitter.png" alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src="/images/instagram.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img src="/images/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-10 mt-12"></hr>
      <div className="text-center mt-4 opacity-30">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
