// CircleFeature.tsx

import React from 'react';

interface CircleFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const CircleFeature: React.FC<CircleFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-4 mt-4">
      <div className="w-20 h-20 border-8 border-gray-300 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
        <img src={icon} alt={title} className="w-12 h-12"/>
      </div>
      <div className="w-full">
        <p className="text-2xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CircleFeature;
