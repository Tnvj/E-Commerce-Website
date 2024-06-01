"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Header from '../components/Header1';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

interface ShoppingCartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutCartItem {
  id: number;
  name: string;
  finalPrice: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<ShoppingCartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleUpdateCart = (updatedItems: ShoppingCartItem[]) => {
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleProceedToCheckout = () => {
    const checkoutItems: CheckoutCartItem[] = cartItems.map(item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      finalPrice: item.price * item.quantity
    }));
    localStorage.setItem('checkoutCartItems', JSON.stringify(checkoutItems));
    localStorage.setItem('subtotal', subtotal);
    router.push('/checkout');
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Exclusive - Cart</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-black">
          <nav className="text-sm mb-5">
            <a href="/" className="text-gray-600 hover:text-gray-800">Home</a> / <span className="text-gray-800">Cart</span>
          </nav>
          <div className="overflow-auto">
            <CartItem items={cartItems} onUpdateCart={handleUpdateCart} />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
            <a href="/home" className="text-black border border-black px-4 rounded-sm py-2 mb-4 sm:mb-0">Return To Shop</a>
            <button className="border border-black text-black px-4 py-2 rounded-sm">Update Cart</button>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white mb-6 lg:mb-0">
              <div className="flex flex-col sm:flex-row items-center">
                <input type="text" placeholder="Coupon Code" className="w-full sm:w-3/4 p-2 border border-black rounded mb-2 sm:mb-0 sm:mr-2" />
                <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
              </div>
            </div>
            <div className="lg:col-span-4 bg-white p-6 rounded shadow-md">
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
              <button className="mt-6 bg-red-500 text-white w-full py-3 rounded" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;