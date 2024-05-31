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
    }, 5000); // 10 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 bg-black text-white p-8 flex items-center justify-between"
            style={{ padding: '40px' }} // Add padding around the text and image
          >
            <div>
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-xl mt-2 mb-4">{slide.description}</p>
              <a href={slide.link} className="text-white py-2 px-4">Shop Now</a>
            </div>
            <div>
              <img src={slide.image} alt={slide.title} className="h-48 w-48 object-cover rounded-lg" style={{ padding: '10px' }} />
            </div>
          </div>
        ))}
      </div>
      {/* Pagination dots */}
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
