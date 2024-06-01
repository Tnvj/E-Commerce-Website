'use client'
import React, { useEffect, useState } from 'react';
import Header from '../components/Header1';
import Footer from '../components/Footer';

interface CheckoutCartItem {
  id: number;
  name: string;
  finalPrice: number;
  image: string;
}

const Checkout: React.FC = () => {
  const [checkoutCartItems, setCheckoutCartItems] = useState<CheckoutCartItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  console.log(checkoutCartItems);

  useEffect(() => {
    const storedCheckoutCartItems = localStorage.getItem('checkoutCartItems');
    if (storedCheckoutCartItems) {
      setCheckoutCartItems(JSON.parse(storedCheckoutCartItems));
    }

    const storedSubtotal = localStorage.getItem('subtotal');
    if (storedSubtotal) {
      setSubtotal(parseFloat(storedSubtotal));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4 text-gray-500">
          <a href="#" className="text-gray-500 hover:text-black">Account</a> / My Account / Product / View Cart / CheckOut
        </div>
        <h2 className="text-2xl font-semibold mt-8 sm:mt-16 mb-8 sm:mb-12 text-black">Billing Details</h2>
        <div className="flex flex-col lg:flex-row">
          <section className="w-full lg:w-1/2 space-y-4 text-gray-500">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="streetAddress" className="block text-sm font-medium">
                Street Address*
              </label>
              <input
                type="text"
                id="streetAddress"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="apartment" className="block text-sm font-medium">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                Town/City*
              </label>
              <input
                type="text"
                id="city"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium">
                Phone Number*
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="mt-1 block w-full rounded-sm px-2 py-2 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block text-sm font-medium">
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
          <section className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 text-black">
            <div className="space-y-4">
              {checkoutCartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src={item.image} className="h-16 w-16 object-cover mr-4" alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <span>${item.finalPrice.toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <span>Total:</span>
                  <span>${subtotal}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                <div className="flex items-center">
                  <input type="radio" name="paymentMethod" id="bank" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded" />
                  <label htmlFor="bank" className="ml-2 block text-sm text-gray-900">Bank</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="paymentMethod" id="cash" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded" />
                  <label htmlFor="cash" className="ml-2 block text-sm text-gray-900">Cash on delivery</label>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row mt-1">
                  <input
                    type="text"
                    id="couponCode"
                    placeholder="Coupon Code"
                    className="flex-1 block w-full sm:w-2/3 px-2 py-2 rounded-sm border border-black focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    className="mt-2 sm:mt-0 sm:ml-3 w-full sm:w-1/3 py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full sm:w-auto py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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