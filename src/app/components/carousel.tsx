"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  text: string;
  subtext: string;
  imgSrc: string; 
}

const slides: Slide[] = [
  {
    text: "Up to 10% off Voucher",
    subtext: "iPhone 14 Series",
    imgSrc: "/images/login.png", 
  },
  {
    text: "Exclusive Deals on Electronics",
    subtext: "Save big on top brands",
    imgSrc: "/images/slide2.png", 
  },

];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-3/5 overflow-hidden flex items-center justify-center bg-black p-4">
      <div className="flex transition-transform ease-in-out duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex items-center justify-center bg-black">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
              <div className="p-6 md:w-1/2 text-left text-white flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{slide.text}</h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtext}</p>
                <button className="px-4 py-2 text-white">Shop Now</button>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <Image src={slide.imgSrc} alt="Banner Image" width={500} height={500} className="object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
