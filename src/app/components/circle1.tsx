// CircleFeature.tsx

import React from 'react';

interface CircleFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const CircleFeature: React.FC<CircleFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-4 border rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out flex flex-col items-center justify-center h-48 text-black relative">
      <div className="absolute w-20 h-20 border-8 border-gray-300 bg-black rounded-full flex items-center justify-center mx-auto mb-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CircleFeature;
