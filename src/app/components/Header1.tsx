"use client";

import React, { useState } from 'react';

const Header1: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="bg-black text-white flex justify-center items-center py-2 px-4">
        <div className="text-center flex-grow">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a href="#" className="text-white ml-2">
            Shop Now
          </a>
        </div>
        <div className="relative pr-4">
          <select className="bg-black text-white border-none focus:ring-2 focus:ring-blue-500 rounded">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
          <div className="text-2xl text-black font-bold">Exclusive</div>
          <nav className="hidden md:flex space-x-4">
            <a href="/home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/signup" className="text-gray-700 hover:text-gray-900">
              Sign Up
            </a>
          </nav>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full md:w-64 border border-gray-300 bg-gray-50 rounded-md py-2 pl-2 pr-10 focus:outline-none focus:ring focus:border-blue-300 text-xs text-black"
                style={{ paddingRight: '2.5rem' }}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <img
                  src="/images/search.png"
                  alt="Search"
                  className="h-4 w-4"
                />
              </button>
            </div>
            <a href="/wishlist">
              <img
                src="/images/heart.png"
                alt="Favorites"
                className="h-6 w-6"
              />
            </a>
            <a href="/cart">
              <img
                src="/images/cart1.png"
                alt="Shopping Cart"
                className="h-6 w-6"
              />
            </a>
            <div
              className="relative"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <a href="#" className="hover:text-red-500">
                <img
                  src="/images/user.png"
                  alt="Profile"
                  className="h-6 w-6"
                />
              </a>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Manage My Account
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Cancellations
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Reviews
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header1;
