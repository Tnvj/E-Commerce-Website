import React, { useState, useEffect } from 'react';

const slides = [
  {
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    image: '/images/iphone.png',
    link: '#'
  },
  {
    title: 'Samsung Galaxy S21',
    description: 'Save $200 on Pre-order',
    image: '/images/iphone.png',
    link: '#'
  },
  {
    title: 'Google Pixel 6',
    description: 'Exclusive Offer for Limited Time',
    image: '/images/iphone.png',
    link: '#'
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 bg-black text-white flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="p-8 flex flex-col items-start justify-center sm:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg sm:text-xl mt-2 mb-4">{slide.description}</p>
              <a href={slide.link} className="text-white py-2 px-4 bg-gray-700 rounded-md">
                Shop Now
              </a>
            </div>
            <div className="p-8 sm:w-1/2">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-48 w-48 sm:h-64 sm:w-64 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;