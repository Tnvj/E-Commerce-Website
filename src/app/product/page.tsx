// pages/Product.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
// import ShoppingCart from '../components/ShoppingCart';

interface Product {
  id: number;
  image: string;
  name: string;
  title: string;
  price: number;
  discountedPrice: number;
  rating: {
    count: number;
  }
  reviews: number;
  category: string;
  description: string;
}

interface ShoppingCartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface AllCartItems extends Array<ShoppingCartItem> { }

const relatedProducts = [
  {
    id: 1,
    image: '/images/gamepad-1.png',
    name: 'HAVIT HV-G92 Gamepad',
    discount: 40,
    originalPrice: 160,
    discountedPrice: 120,
    rating: '★ ★ ★ ★ ★',
    reviews: 88,
    description: 'lorem'
  },
  {
    id: 2,
    image: '/images/gamepad-2.png',
    name: 'AK-900 Wired Keyboard',
    discount: 35,
    originalPrice: 1160,
    discountedPrice: 960,
    rating: '★ ★ ★ ★ ★',
    reviews: 75,
    description: 'lorem'
  },
  {
    id: 3,
    image: '/images/gamepad-3.png',
    name: 'IPS LCD Gaming Monitor',
    discount: 30,
    originalPrice: 400,
    discountedPrice: 370,
    rating: '★ ★ ★ ★ ★',
    reviews: 99,
    description: 'lorem'
  },
  {
    id: 4,
    image: '/images/gamepad-4.png',
    name: 'RGB Liquid CPU Cooler',
    discount: 0,
    originalPrice: 170,
    discountedPrice: 160,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
    description: 'lorem'
  },
];

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<AllCartItems>(() => {
    // Load cart items from local storage
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem('cartItems');
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
    return [];
  });
  const router = useRouter();

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const handleBuyNow = () => {
    if (product) {
      const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
      let updatedCartItems: AllCartItems;

      if (existingItemIndex !== -1) {
        updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity = quantity;
      } else {
        const newItem: ShoppingCartItem = {
          id: product.id,
          image: product.image,
          name: product.title,
          price: product.price,
          quantity: quantity
        };
        updatedCartItems = [...cartItems, newItem];
      }

      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      router.push('/cart');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productId = window.location.href.match(/product\?=(\d+)/)?.[1];
        if (productId) {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          const data = await response.json();
          setProduct(data);

          const existingCartItem = cartItems.find(item => item.id === data.id);
          if (existingCartItem) {
            setQuantity(existingCartItem.quantity);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [cartItems]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <Header1 />
      <main className="p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <nav className="text-gray-500">
              <a href="#" className="hover:text-black">Account</a> /
              <a href="#" className="hover:text-black"> {product.category}</a> /
              <span> {product.title}</span>
            </nav>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-black">
            <div className="flex flex-col items-center">
              <div className="grid grid-rows-1 grid-cols-4 gap-2">
                <img src={product.image} alt="Gamepad view 1" className="h-full" />
                <img src={product.image} alt="Gamepad view 2" className="h-full" />
                <img src={product.image} alt="Gamepad view 3" className="h-full" />
                <img src={product.image} alt="Gamepad view 4" className="h-full" />
              </div>
              <img src={product.image} alt={product.title} className="w-full mb-4" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-2">★ ★ ★ ★ ★</span>
                <span className="text-gray-500">({product.rating.count} Reviews)</span>
              </div>
              <div className="text-green-500 mb-4">In Stock</div>
              <div className="text-2xl mb-4">${product.price.toFixed(2)}</div>
              <p className="mb-4">{product.description}</p>
              <hr className='black-hr my-4' />
              <div className="flex items-center mb-4">
                <span className="mr-4">Colours:</span>
                <div className="flex">
                  <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-4">Size:</span>
                <div className="flex">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="border border-gray-500 px-2 py-1 rounded-lg mr-2">{size}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex border border-gray-500 rounded-md overflow-hidden">
                  <button className="px-4 py-2" onClick={handleDecrement}>-</button>
                  <span className="px-4 py-2 border-l border-r border-gray-500">{quantity}</span>
                  <button className="px-4 py-2 bg-red-500 text-white" onClick={handleIncrement}>+</button>
                </div>
              </div>
              <button onClick={handleBuyNow} className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 mr-2">Buy Now</button>
              <button className="border border-gray-500 px-4 py-2 rounded-md">❤</button>
              <div className="flex flex-col mt-4 border border-black">
                <div className="flex items-center mb-2 px-2 py-2">
                  <img src="/images/delivery.png" alt="Delivery" className="w-6 h-6 mr-2" />
                  <span>Free Delivery</span>
                </div>
                <div className="text-gray-500 px-2">Enter your postal code for Delivery Availability</div>
                <div className="flex items-center mt-4 mb-2 px-2 py-2">
                  <img src="/images/return.png" alt="Return" className="w-6 h-6 mr-2" />
                  <span>Return Delivery</span>
                </div>
                <div className="text-gray-500 px-2">Free 30 Days Delivery Returns. <a href="#" className="underline">Details</a></div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-8 mb-4">
            <div className="bg-red-500 w-2 h-8 mr-2 rounded-md"></div>
            <h2 className=" text-red-500 font-bold">Related Items</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
