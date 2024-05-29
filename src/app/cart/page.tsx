import React from 'react';
import Head from 'next/head';
import Header from '../components/Header1';
import Footer from '../components/Footer';

const CartPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Exclusive - Cart</title>
      </Head>
      <Header />
      <main className='px-24'>
      <div className="container mx-auto py-10 text-black">
        <nav className="text-sm mb-5">
          <a href="/" className="text-gray-600 hover:text-gray-800">Home</a> / <span className="text-gray-800">Cart</span>
        </nav>
        
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-6">Cart</h2>
          <div className="overflow-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 text-left">Product</th>
                  <th className="py-2 text-left">Price</th>
                  <th className="py-2 text-left">Quantity</th>
                  <th className="py-2 text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-white shadow-sm mb-2">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img src="/path/to/lcd-monitor.jpg" alt="LCD Monitor" className="w-16 h-16 mr-4" />
                      <span>LCD Monitor</span>
                    </div>
                  </td>
                  <td className="py-4">$650</td>
                  <td className="py-4">
                    <input type="number" defaultValue={1} min={1} className="w-16 p-2 border rounded" />
                  </td>
                  <td className="py-4">$650</td>
                </tr>
                <tr className="border-t bg-white shadow-sm mb-2">
                  <td className="py-4">
                    <div className="flex items-center">
                      <img src="/path/to/h1-gamepad.jpg" alt="H1 Gamepad" className="w-16 h-16 mr-4" />
                      <span>H1 Gamepad</span>
                    </div>
                  </td>
                  <td className="py-4">$550</td>
                  <td className="py-4">
                    <input type="number" defaultValue={2} min={1} className="w-16 p-2 border rounded" />
                  </td>
                  <td className="py-4">$1100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <a href="/shop" className="text-black border border-black px-4 rounded-sm py-2">Return To Shop</a>
            <button className="border border-black text-black px-4 py-2 rounded-sm">Update Cart</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 ">
          <div className="flex-1 bg-white  mb-6 lg:mb-0">
            <div className="flex items-center">
              <input type="text" placeholder="Coupon Code" className="w-3/10 p-2 border border-black rounded" />
              <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">Apply Coupon</button>
            </div>
          </div>

          <div className="flex-none bg-white p-6 rounded shadow-md w-full lg:w-1/3 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Cart Total</h2>
            <div className="border-b pb-4 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>$1750</span>
            </div>
            <a href='/checkout'><button className="mt-6 bg-red-500 text-white w-full py-3 rounded">Proceed to Checkout</button></a>
          </div>
        </div>
      </div></main>
      <Footer />
    </div>
  );
};

export default CartPage;
