import React from 'react';
import Head from 'next/head';
import Header from '../components/Header1';
import Footer from '../components/Footer';
import Cart from '../components/cart';

const CartPage: React.FC = () => {
  const cartItems = [
    { name: 'LCD Monitor', price: 650, quantity: 1, image: '/path/to/lcd-monitor.jpg' },
    { name: 'H1 Gamepad', price: 550, quantity: 2, image: '/path/to/h1-gamepad.jpg' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
          
          <div className="overflow-auto">
            <Cart items={cartItems} />
          </div>
          <div className="mt-6 flex justify-between items-center">
            <a href="/shop" className="text-black border border-black px-4 rounded-sm py-2">Return To Shop</a>
            <button className="border border-black text-black px-4 py-2 rounded-sm">Update Cart</button>
          </div>

          <div className="flex flex-col lg:flex-row mt-12 ">
            <div className="flex-1 bg-white mb-6 lg:mb-0">
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
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
              <a href='/checkout'><button className="mt-6 bg-red-500 text-white w-full py-3 rounded">Proceed to Checkout</button></a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
