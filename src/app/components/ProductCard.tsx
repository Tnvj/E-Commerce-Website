import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  discount: number;
  originalPrice: number;
  discountedPrice: number;
  rating: string;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  discount,
  originalPrice,
  discountedPrice,
  rating,
  reviews,
}) => {
  return (
    <div className="bg-white p-4 rounded-md  group relative">
      <div className="relative h-64 flex items-center justify-center overflow-hidden shadow">
        <img src={image} alt={name} className="w-full h-full object-contain" />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs">
            -{discount}%
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col justify-center">
          <div className="w-8 h-8 bg-white rounded-full mb-2 flex justify-center items-center">
            <img src="images/heart.png" alt="Heart" className="w-6 h-6" />
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <img src="images/eye.png" alt="Eye" className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100">
          <button className="bg-black text-white px-4 py-2  w-full">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-2 h-32">
        <h3 className="text-black text-lg font-medium">{name}</h3>
        <div className="text-red-500 text-sm">
          ${discountedPrice.toFixed(2)}{' '}
          <span className="line-through text-gray-500">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1 text-sm">{rating}</span>
          <span className="text-sm text-black">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
