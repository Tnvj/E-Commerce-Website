import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  icon: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col justify-between items-center text-black h-32 w-40 p-4 border border-gray-300 rounded-sm transition duration-300 hover:bg-red-500 hover:text-white cursor-pointer">
      <div className="w-12 h-12 mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default CategoryCard;
