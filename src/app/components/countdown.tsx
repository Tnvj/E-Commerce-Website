import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className=" items-center text-black w-1/2">
      <div className="mr-4 flex items-center">
        <div className="bg-red-500 w-4 h-8 mr-2 rounded-md"></div>
        <h4 className="font-medium text-red-500 text-lg">Today's</h4>
      </div>
      <div className="text-3xl font-medium flex items-center justify-between">
        Flash Sales
        <div className="flex ml-8 text-center">
          <div className="flex flex-col items-center mx-1">
            <span className="text-sm">Days</span>
            <div className="flex items-center">
              <span className='text-3xl font-bold'>{timeLeft.days}</span>
              <span className="text-3xl font-bold text-red-500 mx-2">:</span>
            </div>
          </div>
          <div className="flex flex-col items-center mx-1">
            <span className="text-sm">Hours</span>
            <div className="flex items-center">
              <span className='text-3xl font-bold'>{timeLeft.hours}</span>
              <span className="text-3xl font-bold text-red-500 mx-2">:</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Minutes</span>
            <div className="flex justify-between">
              <span className='text-3xl font-bold'>{timeLeft.minutes}</span>
              <span className="text-3xl font-bold text-red-500 mx-2 ">:</span>
            </div>
          </div>
          <div className="flex flex-col items-center mx-1">
            <span className="text-sm">Seconds</span>
            <span className='text-3xl font-bold'>{timeLeft.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
