'use client';

import React, { useEffect, useState } from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: { rate: number; count: number };
}

const HomePage: React.FC = () => {
  const [productsWishlist, setProductsWishlist] = useState<Product[]>([]);
  const [productsJustForYou, setProductsJustForYou] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resWishlist = await fetch('https://fakestoreapi.com/products?limit=4');
        const wishlistData: Product[] = await resWishlist.json();
        setProductsWishlist(wishlistData);

        const resJustForYou = await fetch('https://fakestoreapi.com/products?limit=4&sort=desc');
        const justForYouData: Product[] = await resJustForYou.json();
        setProductsJustForYou(justForYouData);
      } catch (error) {
        console.error('Failed to fetch products', error);
        //should i be going to the 404 page
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <Header1 />
      <main className="p-8 pr-24 pl-24 mb-24 lg:px-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-black">Wishlist ({productsWishlist.length})</h2>
          <button className="bg-white border border-black text-black px-4 py-2 rounded-sm">
            Move All to Bag
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsWishlist.map((product, index) => (
            <ProductCard
              key={index}
              id = {product.id}
              image={product.image}
              name={product.title}
              discount={20} // Placeholder for discount
              originalPrice={product.price}
              discountedPrice={product.price * 0.8} // Example discounted price
              rating={'★ ★ ★ ★ ★'} // Placeholder rating
              reviews={product.rating.count} // Using the actual number of reviews
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 mb-4">
          <div className="flex">
            <div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
            <h2 className="text-2xl text-black">Just For You</h2>
          </div>
          <button className="bg-white border border-black text-black px-4 py-2 rounded-sm">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsJustForYou.map((product, index) => (
            <ProductCard
              key={index}
              id = {product.id}
              image={product.image}
              name={product.title}
              discount={20} 
              originalPrice={product.price}
              discountedPrice={product.price * 0.8} 
              rating={'★ ★ ★ ★ ★'} 
              reviews={product.rating.count} 
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
