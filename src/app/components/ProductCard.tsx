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

const ProductCard: React.FC<ProductCardProps> = ({ image, name, discount, originalPrice, discountedPrice, rating, reviews }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow group relative">
      <div className="relative">

        <img src={image} alt={name} className="w-full mb-4 rounded-sm" />

        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs">
          -{discount}%
        </div>

        <div className="absolute top-2 right-2 flex flex-col justify-center">
          <div className="w-8 h-8 bg-white rounded-full mb-2 flex justify-center items-center">
            <div>
              <img src="images/heart.png" alt="Heart" className="w-6 h-6" />
            </div>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <div>
              <img src="images/eye.png" alt="Eye" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className=" text-black text-lg">{name}</h3>
      </div>
      <div className="text-red-500 text-sm">${discountedPrice} <span className="line-through text-gray-500">${originalPrice}</span></div>
      <div className="flex items-center mt-2">
      <span className="text-yellow-400 mr-2 text-sm">({rating})
</span>

        <span className="text-sm text-black">({reviews})</span>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-lg mt-2 absolute bottom-4 left-4 hidden group-hover:block">Add To Cart</button>
    </div>
  );
}

export default ProductCard;
