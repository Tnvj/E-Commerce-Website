import React from 'react';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const productsWishlist = [
  {
    image: '/images/Frame1.png',
    name: 'Gucci Duffle Bag',
    discount: 35,
    originalPrice: 1160,
    discountedPrice: 960,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
  {
    image: '/images/Frame1.png',
    name: 'RGB Liquid CPU Cooler',
    discount: 0,
    originalPrice: 1960,
    discountedPrice: 1960,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
  {
    image: '/images/Frame1.png',
    name: 'GP11 Shooter USB Gamepad',
    discount: 0,
    originalPrice: 550,
    discountedPrice: 550,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
  {
    image: '/images/Frame1.png',
    name: 'Quilted Satin Jacket',
    discount: 0,
    originalPrice: 750,
    discountedPrice: 750,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
];

const productsJustForYou = [
  {
    image: '/images/Frame1.png',
    name: 'ASUS FHD Gaming Laptop',
    discount: 35,
    originalPrice: 1160,
    discountedPrice: 960,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
  {
    image: '/images/Frame1.png',
    name: 'IPS LCD Gaming Monitor',
    discount: 0,
    originalPrice: 1160,
    discountedPrice: 1160,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
  {
    image: '/images/Frame1.png',
    name: 'HAVIT HV-G92 Gamepad',
    discount: 0,
    originalPrice: 560,
    discountedPrice: 560,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
    isNew: true,
  },
  {
    image: '/images/Frame1.png',
    name: 'AK-900 Wired Keyboard',
    discount: 0,
    originalPrice: 200,
    discountedPrice: 200,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header1 />
      <main className="p-8  pr-24 pl-24 mb-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl  text-black">Wishlist ({productsWishlist.length})</h2>
          <button className="bg-white border border-black text-black px-4 py-2 rounded-sm">Move All to Bag</button>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsWishlist.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 mb-4">
          <div className='flex'><div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
          <h2 className="text-2xl text-black">Just For You</h2></div>
          <button className="bg-white border border-black text-black px-4 py-2 rounded-sm">See All</button></div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsJustForYou.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
