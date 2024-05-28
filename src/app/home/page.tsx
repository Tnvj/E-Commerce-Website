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

const Page: React.FC = () => {
  return (
    <div>
      <main className='bg-white'>
        <Header />
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

        <section className="mt-8 px-4 pr-24 pl-24">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Flash Sales</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">View All</button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <ProductCard
              image="/images/login.png"
              name="HAVIT HV-G92 Gamepad"
              discount={40}
              originalPrice={160}
              discountedPrice={120}
              rating="★★★★★"
              reviews={88}
            />
            <ProductCard
              image="/images/login.png"
              name="AK-900 Wired Keyboard"
              discount={35}
              originalPrice={1160}
              discountedPrice={960}
              rating="★★★★★"
              reviews={75}
            />
            <ProductCard
              image="/images/login.png"
              name="IPS LCD Gaming Monitor"
              discount={30}
              originalPrice={400}
              discountedPrice={370}
              rating="★★★★★"
              reviews={99}
            />
            <ProductCard
              image="/images/login.png"
              name="S-Series Comfort Chair"
              discount={25}
              originalPrice={400}
              discountedPrice={375}
              rating="★★★★★"
              reviews={99}
            />
            <ProductCard
              image="/images/login.png"
              name="S-Series Comfort Chair"
              discount={25}
              originalPrice={400}
              discountedPrice={375}
              rating="★★★★★"
              reviews={99}
            />
          </div>
          <div className="mt-4 text-center">
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">View All Products</button>
          </div>
        </section>


        <section className="mt-8 px-8">
      <div className="text-left mb-4">
        <h2 className="text-red-500 text-sm font-bold">Categories</h2>
        <h2 className="text-2xl text-black font-bold">Browse By Category</h2>
      </div>
      <div className="gap-6 flex justify-center flex-wrap">
        <CategoryCard icon="/images/category-CellPhone.png" title="Phones" />
        <CategoryCard icon="/images/Category-Computer.png" title="Computers" />
        <CategoryCard icon="/images/Category-SmartWatch.png" title="SmartWatch" />
        <CategoryCard icon="/images/Category-Camera.png" title="Camera" />
        <CategoryCard icon="/images/Category-Headphone.png" title="HeadPhones" />
        <CategoryCard icon="/images/Category-Gaming.png" title="Gaming" />
      </div>
    </section>



export default BrowseByCategory;

        <div>
      <PromoSection />
    </div>
        <section className="mt-24 px-4 pr-24 pl-24">
          <div className="flex justify-between items-center mb-4">
            <div><div className='flex'><div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
            <h4 className=" font-medium text-red-500 mb-8">Featured</h4>
            </div>
            <h2 className="text-2xl font-medium text-black">New Arrivals</h2>
          </div></div>
            <div className="grid grid-cols-2 gap-4">
  <div className="relative row-span-2">
    <img src="/images/ps.png" alt="PlayStation 5" className="w-full h-full object-cover rounded-sm" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-bold">PlayStation 5</h3>
      <p>Black and White version of the PS5 coming out on sale.</p>
      <button className="mt-2 text-white  px-4 py-2 rounded-md">Shop Now</button>
    </div>
  </div>
  <div className="grid grid-cols-1 gap-4">
    <div className="relative">
      <img src="/images/ps.png" alt="Women's Collections" className="w-full h-full object-cover rounded-sm" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold">Women's Collections</h3>
        <p>Featured woman collections that give you another vibe.</p>
        <button className="mt-2 text-white  px-4 py-2 rounded-md">Shop Now</button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="relative">
        <img src="/images/ps.png" alt="Speakers" className="w-full h-full object-cover rounded-sm" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">Speakers</h3>
          <p>Amazon wireless speakers</p>
          <button className="mt-2 text-white  px-4 py-2 rounded-md">Shop Now</button>
        </div>
      </div>
      <div className="relative">
        <img src="/images/ps.png" alt="Perfume" className="w-full h-full object-cover rounded-sm" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">Perfume</h3>
          <p>GUCCI INTENSE OUD EDP</p>
          <button className="mt-2 text-white px-4 py-2 rounded-md">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </section>

        <section className="my-8 flex justify-around text-center text-black mt-24 mb-24 bg-white">
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
