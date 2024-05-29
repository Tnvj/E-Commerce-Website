import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PromoSection: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-06-01T00:00:00') - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="text-center mx-2">
        <div className="flex flex-col justify-center items-center bg-white rounded-full text-black p-4 m-2"
             style={{ width: '6vw', height: '6vw', minWidth: '40px', minHeight: '40px' }}>
          <div className="text-lg font-bold">{timeLeft[interval]}</div>
          <div className="text-xs">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-2/3 xl:w-3/4 p-6 lg:p-12 bg-black rounded-sm">
        <div className="flex flex-col justify-center mb-8 lg:mb-0 text-center lg:text-left">
          <div className="text-green-500 mb-2 text-lg lg:text-xl">Categories</div>
          <div className="text-3xl lg:text-5xl font-bold mb-4">Enhance Your Music Experience</div>
          <div className="flex justify-center lg:justify-start mb-4">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-32 lg:w-auto text-sm lg:text-base">Buy Now!</button>
        </div>
        <div className="lg:ml-8 mt-8 lg:mt-0">
          <Image src="/images/jbl1.png" alt="JBL Speaker" width={350} height={250} layout="intrinsic" />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
