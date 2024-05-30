import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="text-gray-700 mb-8 mt-8 h-full">
          <a href="#" className="text-black">Home</a> / <span className="text-red-500">404 Error</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl sm:text-8xl font-medium text-black mb-4 sm:mb-8 mt-4 sm:mt-8">404 Not Found</h1>
          <p className="text-md sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-12 px-4">
            Your visited page was not found. You may go to the home page.
          </p>
          <a
            href="/"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Back to home page
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
