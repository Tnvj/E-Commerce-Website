import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex flex-1 py-12 justify-center items-center bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">

          <div className="md:w-1/2">
            <Image
              src="/images/login.png"
              alt="Shopping"
              width={500}
              height={500}
            />
          </div>
        
          <div className="w-1/2 p-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Create an account</h2>
            <p className="mb-8 text-black">Enter your details below</p>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-4 border rounded"/>
              <input type="email" placeholder="Email or Phone Number" className="w-full p-4 border rounded"/>
              <input type="password" placeholder="Password" className="w-full p-4 border rounded"/>
              <button className="w-full py-4 bg-red-500 text-white font-bold rounded">Create Account</button>
              <button className="w-full py-4 border rounded flex items-center justify-center space-x-2">
                <Image src="/images/google.svg" alt="Google Logo" width={25} height={25}/>
                <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
              </button>
            </form>
            <p className="mt-2 text-center text-sm text-gray-500">
              Already have an account? <a href="#" className="font-medium text-black-500 underline hover:text-black-500">Log in</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
