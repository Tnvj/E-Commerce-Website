import React from 'react';

interface CircleFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const CircleFeature: React.FC<CircleFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-4 border rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center text-center text-black relative sm:h-56 md:h-64 lg:h-72">
      <div className="absolute w-16 h-16 md:w-20 md:h-20 border-8 border-gray-300 bg-black rounded-full flex items-center justify-center mx-auto mb-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <img src={icon} alt={title} className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default CircleFeature;