import React from 'react';
import Header from '../components/Header1';
import Footer from '../components/Footer';

const Checkout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8"> 
        <div className="mb-4 text-gray-500">
          <a href="#" className="text-gray-500 hover:text-black">Account</a> / My Account / Product / View Cart /  CheckOut
        </div>
        <h2 className="text-2xl font-semibold mt-16 mb-12 text-black">Billing Details</h2>
        <div className="flex flex-col md:flex-row">
          <section className="w-full md:w-1/2 space-y-4 text-gray-500">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium ">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
    <label htmlFor="companyName" className="block text-sm font-medium ">
        Company Name
    </label>
    <input
        type="text"
        id="companyName"
        className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
</div>
<div>
    <label htmlFor="streetAddress" className="block text-sm font-medium ">
        Street Address*
    </label>
    <input
        type="text"
        id="streetAddress"
        className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
</div>
<div>
    <label htmlFor="apartment" className="block text-sm font-medium ">
        Apartment, floor, etc. (optional)
    </label>
    <input
        type="text"
        id="apartment"
        className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
</div>
<div>
    <label htmlFor="city" className="block text-sm font-medium ">
        Town/City*
    </label>
    <input
        type="text"
        id="city"
        className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
</div>
<div>
    <label htmlFor="phoneNumber" className="block text-sm font-medium ">
        Phone Number*
    </label>
    <input
        type="text"
        id="phoneNumber"
        className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
</div>
<div>
    <label htmlFor="emailAddress" className="block text-sm font-medium ">
        Email Address*
    </label>
    <input
        type="email"
        id="emailAddress"
        className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
</div>
<div className="flex items-start">
    <input
        type="checkbox"
        id="saveInfo"
        className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
    />
    <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-900">
                Save this information for faster check-out next time
              </label>
              </div>

          </section>
          <section className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-black">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>LCD Monitor</span>
                <span>$650</span>
              </div>
              <div className="flex justify-between items-center">
                <span>HI Gamepad</span>
                <span>$1100</span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <input type="radio" name="paymentMethod" id="bank" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded" />
                <label htmlFor="bank" className="block text-sm text-gray-900">Bank</label>
                <input type="radio" name="paymentMethod" id="cash" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded" />
                <label htmlFor="cash" className="block text-sm text-gray-900">Cash on delivery</label>
              </div>
              <div className="mt-4">
                
                <div className="flex mt-1">
                  <input
                    type="text"
                    id="couponCode"
                    placeholder="Coupon Code"
                    className="flex-1 block w-2/3 px-2 py-2 rounded-sm border border-black focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="ml-3 w-1/3 py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="w-1/3 py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Place Order
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
