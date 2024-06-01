"use client";
import Header from '../components/Header1';
import Footer from '../components/Footer';
import React from 'react';
import CircleFeature from '../components/circle';
import CircleFeature1 from '../components/circle1';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-grow px-4 md:px-8">
        <section className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/women.png" alt="Shopping" className="w-full h-auto object-cover" />
          </div>
        </section>
        <section className="my-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <CircleFeature1
            icon="/path/to/image1.jpg"
            title="10.5k"
            description="Sellers active on our site"
          />
          <CircleFeature1
            icon="/path/to/image2.jpg"
            title="33k"
            description="Monthly Product Sale"
          />
          <CircleFeature1
            icon="/path/to/image3.jpg"
            title="45.5k"
            description="Customers active on our site"
          />
          <CircleFeature1
            icon="/path/to/image4.jpg"
            title="25k"
            description="Annual gross sale on our site"
          />
        </section>
        <section className="my-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-full max-w-xs mx-auto">
                <img src="/images/tom.png" alt="Tom Cruise" className="w-full h-full object-cover mb-4" />
                <h3 className="text-xl font-bold">Tom Cruise</h3>
                <p>Founder & Chairman</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-full max-w-xs mx-auto">
                <img src="/images/tom.png" alt="Emma Watson" className="w-full h-full object-cover mb-4" />
                <h3 className="text-xl font-bold">Emma Watson</h3>
                <p>Managing Director</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-full max-w-xs mx-auto">
                <img src="/images/tom.png" alt="Will Smith" className="w-full h-full object-cover mb-4" />
                <h3 className="text-xl font-bold">Will Smith</h3>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-8 flex flex-col md:flex-row justify-around text-center">
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
};

export default About;