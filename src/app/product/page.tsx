import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const relatedProducts = [
  {
    image: '/images/havit-hv-g92-gamepad.png',
    name: 'HAVIT HV-G92 Gamepad',
    discount: 40,
    originalPrice: 160,
    discountedPrice: 120,
    rating: '★ ★ ★ ★ ★',
    reviews: 88,
  },
  {
    image: '/images/ak-900-wired-keyboard.png',
    name: 'AK-900 Wired Keyboard',
    discount: 35,
    originalPrice: 1160,
    discountedPrice: 960,
    rating: '★ ★ ★ ★ ★',
    reviews: 75,
  },
  {
    image: '/images/ips-lcd-gaming-monitor.png',
    name: 'IPS LCD Gaming Monitor',
    discount: 30,
    originalPrice: 400,
    discountedPrice: 370,
    rating: '★ ★ ★ ★ ★',
    reviews: 99,
  },
  {
    image: '/images/rgb-liquid-cpu-cooler.png',
    name: 'RGB Liquid CPU Cooler',
    discount: 0,
    originalPrice: 170,
    discountedPrice: 160,
    rating: '★ ★ ★ ★ ★',
    reviews: 65,
  },
];

const ProductDetails: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <nav className="text-gray-500">
              <a href="#" className="hover:text-black">Account</a> / 
              <a href="#" className="hover:text-black"> Gaming</a> / 
              <span> Havic HV G-92 Gamepad</span>
            </nav>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
            <div className="flex flex-col items-center">
              <img src="/images/main-gamepad.png" alt="Havic HV G-92 Gamepad" className="w-full mb-4" />
              <div className="grid grid-cols-4 gap-2">
                <img src="/images/gamepad-1.png" alt="Gamepad view 1" className="w-full" />
                <img src="/images/gamepad-2.png" alt="Gamepad view 2" className="w-full" />
                <img src="/images/gamepad-3.png" alt="Gamepad view 3" className="w-full" />
                <img src="/images/gamepad-4.png" alt="Gamepad view 4" className="w-full" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Havic HV G-92 Gamepad</h1>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-2">★ ★ ★ ★ ★</span>
                <span className="text-gray-500">(150 Reviews)</span>
              </div>
              <div className="text-green-500 mb-4">In Stock</div>
              <div className="text-2xl mb-4">$192.00</div>
              <p className="mb-4">Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
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
                  <button className="px-4 py-2">-</button>
                  <span className="px-4 py-2 border-l border-r border-gray-500">2</span>
                  <button className="px-4 py-2 bg-red-500 text-white">+</button>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 mr-2">Buy Now</button>
                <button className="border border-gray-500 px-4 py-2 rounded-md">❤</button>
              </div>
              <div className="flex flex-col mt-4 border border-black">
                <div className="flex items-center mb-2">
                  <img src="/images/delivery.png" alt="Delivery" className="w-6 h-6 mr-2" />
                  <span>Free Delivery</span>
                </div>
                <div className="text-gray-500">Enter your postal code for Delivery Availability</div>
                <div className="flex items-center mt-4 mb-2">
                  <img src="/images/return.png" alt="Return" className="w-6 h-6 mr-2" />
                  <span>Return Delivery</span>
                </div>
                <div className="text-gray-500">Free 30 Days Delivery Returns. <a href="#" className="underline">Details</a></div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-8 mb-4">
            <div className="bg-red-500 w-2 h-8 mr-2"></div>
            <h2 className="text-2xl font-bold">Related Items</h2>
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
}

export default ProductDetails;
