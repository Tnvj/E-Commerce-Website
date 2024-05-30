import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center py-2 px-4">
        <div className="text-center md:text-left flex-grow mb-2 md:mb-0">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <a href="#" className="text-white ml-2">
            Shop Now
          </a>
        </div>
        <div className="relative pr-0 md:pr-16">
          <select className="bg-black text-white border-none focus:ring-2 focus:ring-blue-600 rounded">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <header className="bg-white shadow">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
          <div className="text-2xl text-black font-bold mb-2 md:mb-0">Exclusive</div>
          <nav className="space-x-4 mb-2 md:mb-0">
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
          <div className="relative flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full md:w-64 border border-gray-300 bg-gray-50 rounded-md py-2 pl-2 pr-10 focus:outline-none focus:ring focus:border-blue-300 text-xs text-black"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute right-2 text-gray-500 pointer-events-none"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
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
      <hr />
    </>
  );
};

export default Header;
