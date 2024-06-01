import React from 'react';

interface CircleFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const CircleFeature: React.FC<CircleFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-4 mt-4 md:p-6">
      <div className="w-16 h-16 md:w-20 md:h-20 border-8 border-gray-300 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
        <img src={icon} alt={title} className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="w-full">
        <p className="text-xl md:text-2xl font-bold">{title}</p>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default CircleFeature;