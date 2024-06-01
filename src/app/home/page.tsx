// pages/page.tsx
"use client";
import React from 'react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/c';
import Header from '../components/Header1';
import Footer from '../components/Footer';
import Carousel from '../components/carousel';
import Sidebar from '../components/sidebar';
import CircleFeature from '../components/circle';
import PromoSection from '../components/promo';
import CountdownTimer from '../components/countdown';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React1, { useEffect, useState } from 'react';


interface Product {
  id : number;
  image: string;
  title: string;
  price: number;
  rating: { rate: number; count: number };
  description: string;
}



const Page: React.FC = () => {

  const targetDate = new Date('2024-07-01T00:00:00');

  const [productsOurProduct, setProductsOurProduct] = useState<Product[]>([]);
  const [productsJustForYou, setProductsJustForYou] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resOurProduct = await fetch('https://fakestoreapi.com/products?limit=8');
        const OurProductData: Product[] = await resOurProduct.json();
        setProductsOurProduct(OurProductData);

        const resJustForYou = await fetch('https://fakestoreapi.com/products?limit=4');
        const justForYouData: Product[] = await resJustForYou.json();
        setProductsJustForYou(justForYouData);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    

    fetchProducts();
  }, []);
  return (
    <div className='bg-white'>
      <Header />
      <main className='mb-24'>
        
      <div className="flex h-screen-1/2 mx-4 mb-4">
      <div className="w-64 h-3/5 p-6 border-r border-gray-300">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="h-full bg-white flex items-center justify-center p-4">
          <div className="h-5/6 w-full max-w-6xl">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
        <section className="mt-8 px-4 lg:px-24">
      <div className="flex justify-between items-center mb-8">
        <CountdownTimer targetDate={targetDate} />
        <div className='text-black flex'>
          <FaChevronLeft className="mx-2 cursor-pointer" />
          <FaChevronRight className="mx-2 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {productsJustForYou.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.image}
              name={product.title}
              discount={20} 
              originalPrice={product.price}
              discountedPrice={product.price * 0.8} 
              rating={'★ ★ ★ ★ ★'} 
              reviews={product.rating.count} 
              description={product.description}
            />
          ))}

        </div>
      <div className="mt-4 text-center">
        <a href='/wishlist'><button className="bg-red-500 text-white px-6 py-2 rounded-md">View All Products</button></a>
      </div>
    </section>


    <section className="my-8 px-4 md:px-8 lg:px-24">
  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
    <div className="mb-4 md:mb-0">
      <div className="flex items-center my-4">
        <div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
        <h4 className="font-medium text-red-500">Categories</h4>
      </div>
      <h2 className="text-2xl font-medium text-black my-4">Browse By Category</h2>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-4">
    <CategoryCard icon="/images/category-CellPhone.png" title="Phones" />
    <CategoryCard icon="/images/Category-Computer.png" title="Computers" />
    <CategoryCard icon="/images/Category-SmartWatch.png" title="SmartWatch" />
    <CategoryCard icon="/images/Category-Camera.png" title="Camera" />
    <CategoryCard icon="/images/Category-Headphone.png" title="HeadPhones" />
    <CategoryCard icon="/images/Category-Gamepad.png" title="Gaming" />
  </div>
</section>


    <section className="my-8 px-8 lg:px-24">
    <div className="flex justify-between items-center mt-8 mb-4">
    <div className="flex justify-between items-center mb-4">
            <div><div className='flex my-4'><div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
            <h4 className=" font-medium text-red-500">This Month</h4>
            </div>
            <h2 className="text-2xl my-4 font-medium text-black">Best Selling Products</h2>
          </div></div>
          <a href='/wishlist'><button className="bg-red-500 text-white px-4 py-2 rounded-sm">
            View All
          </button></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsJustForYou.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.image}
              name={product.title}
              discount={20} 
              originalPrice={product.price}
              discountedPrice={product.price * 0.8} 
              rating={'★ ★ ★ ★ ★'} 
              description={product.description}
              reviews={product.rating.count} 
            />
          ))}
        </div></section>


        <div>
      <PromoSection />
    </div>

    <section className="mt-8 px-8 lg:px-24">
     <div className="flex justify-between items-center mt-8 mb-4">
     <div className="flex justify-between items-center mb-4">
             <div><div className='flex'><div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
             <h4 className=" font-medium text-red-500 ">Our Products</h4>
             </div>
             <h2 className="text-2xl font-medium text-black my-4">Explore our Products</h2>
           </div></div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
           {productsOurProduct.map((product, index) => (
             <ProductCard
               key={index}
               id={product.id}
               image={product.image}
               name={product.title}
               discount={20} 
               originalPrice={product.price}
               discountedPrice={product.price * 0.8} 
               rating={'★ ★ ★ ★ ★'} 
               description={product.description}
               reviews={product.rating.count} 
             />
           ))}
         </div>  <div className="mt-4 text-center">
         <button className="bg-red-500 text-white px-6 py-2 rounded-sm my-4">View All Products</button>
       </div></section>

       <section className="mt-24 px-4 md:px-8 lg:px-24">
  <div className="flex items-center mb-4">
    <div>
      <div className='flex items-center my-4'>
        <div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
        <h4 className="font-medium text-red-500">Featured</h4>
      </div>
      <h2 className="text-2xl font-medium text-black">New Arrival</h2>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="relative bg-black">
      <img src="/images/ps.png" alt="PlayStation 5" className="h-full w-full object-cover rounded-sm" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold">PlayStation 5</h3>
        <p>Black and White version of the PS5 coming out on sale.</p>
        <button className="mt-2 text-white px-4 py-2 rounded-md underline">Shop Now</button>
      </div>
    </div>
    <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
      <div className="relative bg-black">
        <img src="/images/attractive-woman-wearing-hat-posing-black-background.png" alt="Women's Collections" className="h-full w-full object-cover rounded-sm" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">Women's Collections</h3>
          <p>Featured woman collections that give you another vibe.</p>
          <button className="mt-2 text-white px-4 py-2 rounded-md underline">Shop Now</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-black">
          <img src="/images/speaker.png" alt="Speakers" className="w-full h-full object-cover rounded-sm p-4" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold">Speakers</h3>
            <p>Amazon wireless speakers</p>
            <button className="mt-2 text-white px-4 py-2 rounded-md underline">Shop Now</button>
          </div>
        </div>
        <div className="relative bg-black">
          <img src="/images/gucci.png" alt="Perfume" className="w-full h-full object-cover rounded-sm p-4" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold">Perfume</h3>
            <p>GUCCI INTENSE OUD EDP</p>
            <button className="mt-2 text-white px-4 py-2 rounded-md underline">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="my-16 flex justify-around text-center text-black mx-24">
      <CircleFeature
        icon="/images/icon-delivery.png"
        title="Free and Fast Delivery"
        description="Free delivery for all orders over $140"
      />
      <CircleFeature
        icon="/images/Icon-Customer-service.png"
        title="24/7 Customer Service"
        description="Friendly 24/7 customer support"
      />
      <CircleFeature
        icon="/images/Icon-secure.png"
        title="Money Back Guarantee"
        description="We return money within 30 days"
      />
    </section>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
