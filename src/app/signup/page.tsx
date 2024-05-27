// pages/signup.tsx

import Image from "next/image";

export default function Signup() {
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
            <a href="#" className="text-gray-700 hover:text-gray-900 underline">
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
        
        <div className="w-1/2 p-16">
          <h2 className="text-3xl font-bold mb-4 text-black">Create an account</h2>
          <p className="mb-8 text-black">Enter your details below</p>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-4 border rounded"/>
            <input type="email" placeholder="Email or Phone Number" className="w-full p-4 border rounded"/>
            <input type="password" placeholder="Password" className="w-full p-4 border rounded"/>
            <button className="w-full py-4 bg-red-600 text-white font-bold rounded">Create Account</button>
            <button className="w-full py-4 border rounded flex items-center justify-center space-x-2">
            <Image src="/images/google.svg" alt="Google Logo" width={25} height={25}/>
              <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
            </button>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account? <a href="#" className="font-medium text-black-600 underline hover:text-black-500">Log in</a>
        </p>
        </div>
        </div>
      </main>
  


      <footer className="bg-black text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">Exclusive</h3>
            <p>Get 10% off your first order</p>
            <input type="email" placeholder="Enter your email" className="p-2 mt-2 border rounded"/>
          </div>
          <div>
            <h3 className="text-lg font-bold">Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Account</h3>
            <ul>
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Login / Register</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Link</h3>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p>&copy; Copyright Rimel 2022. All rights reserved</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
