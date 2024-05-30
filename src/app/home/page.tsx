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

  const targetDate = new Date('2024-06-01T00:00:00');

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
        //should i be going to the 404 page
      }
    };

    

    fetchProducts();
  }, []);
  return (
    <div className='bg-white'>
      <Header />
      <main className='mb-24'>
        
        <div className="flex h-screen pr-24 pl-24">
          <Sidebar />
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-full bg-white flex items-center justify-center">
              <div className="h-4/5 bg-white p-4">
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 px-4 lg:px-24">
      <div className="flex justify-between items-center mb-4">
        <CountdownTimer targetDate={targetDate} />
        <div className='text-black flex'>
          <FaChevronLeft className="mx-2 cursor-pointer" />
          <FaChevronRight className="mx-2 cursor-pointer" />
        </div>
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
              reviews={product.rating.count} 
              description={product.description}
            />
          ))}

        </div>
      <div className="mt-4 text-center">
        <a href='/wishlist'><button className="bg-red-500 text-white px-6 py-2 rounded-md">View All Products</button></a>
      </div>
    </section>
        <section className="mt-8 px-8 lg:px-24">
        <div className="flex justify-between items-center mb-4">
            <div><div className='flex'><div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
            <h4 className=" font-medium text-red-500 mb-8">Categories</h4>
            </div>
            <h2 className="text-2xl font-medium text-black">Browse By Category</h2>
          </div></div>
      <div className="gap-6 flex justify-center flex-wrap">
        <CategoryCard icon="/images/category-CellPhone.png" title="Phones" />
        <CategoryCard icon="/images/Category-Computer.png" title="Computers" />
        <CategoryCard icon="/images/Category-SmartWatch.png" title="SmartWatch" />
        <CategoryCard icon="/images/Category-Camera.png" title="Camera" />
        <CategoryCard icon="/images/Category-Headphone.png" title="HeadPhones" />
        <CategoryCard icon="/images/Category-Gaming.png" title="Gaming" />
      </div>
    </section>
    <section className="mt-8 px-8 lg:px-24">
    <div className="flex justify-between items-center mt-8 mb-4">
    <div className="flex justify-between items-center mb-4">
            <div><div className='flex'><div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
            <h4 className=" font-medium text-red-500 mb-8">This Month</h4>
            </div>
            <h2 className="text-2xl font-medium text-black">Best Selling Products</h2>
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
             <h4 className=" font-medium text-red-500 mb-8">Our Products</h4>
             </div>
             <h2 className="text-2xl font-medium text-black">Explore our Products</h2>
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
         <button className="bg-red-500 text-white px-6 py-2 rounded-sm">View All Products</button>
       </div></section>

    <section className="mt-24 px-4 max-w-screen-xl mx-auto">
    <div className="flex items-center mb-4">
        <div>
            <div className='flex items-center mb-2'>
                <div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
                <h4 className="font-medium text-red-500">Featured</h4>
            </div>
            <h2 className="text-2xl font-medium text-black">New Arrival</h2>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div className="relative">
            <img src="/images/ps.png" alt="PlayStation 5" className="w-full h-full object-cover rounded-sm" />
            <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">PlayStation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <button className="mt-2 text-white px-4 py-2 rounded-md bg-black">Shop Now</button>
            </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
            <div className="relative">
                <img src="/images/ps.png" alt="Women's Collections" className="w-full h-full object-cover rounded-sm" />
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Women's Collections</h3>
                    <p>Featured woman collections that give you another vibe.</p>
                    <button className="mt-2 text-white px-4 py-2 rounded-md bg-black">Shop Now</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                    <img src="/images/ps.png" alt="Speakers" className="w-full h-full object-cover rounded-sm" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Speakers</h3>
                        <p>Amazon wireless speakers</p>
                        <button className="mt-2 text-white px-4 py-2 rounded-md bg-black">Shop Now</button>
                    </div>
                </div>
                <div className="relative">
                    <img src="/images/ps.png" alt="Perfume" className="w-full h-full object-cover rounded-sm" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Perfume</h3>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <button className="mt-2 text-white px-4 py-2 rounded-md bg-black">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



        <section className="my-8 flex justify-around text-center text-black mx-24">
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
