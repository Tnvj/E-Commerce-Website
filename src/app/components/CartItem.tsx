import React from 'react';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, image }) => {
  const subtotal = price * quantity;
  
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-16 h-16 mr-4" />
        <span className="font-medium text-lg">{name}</span>
      </div>
      <span className="text-gray-700 text-lg">{`$${price}`}</span>
      <div className="flex items-center">
        <button className="px-2 py-1 border rounded border-gray-300 mr-2">-</button>
        <input type="number" defaultValue={quantity} min={1} className="w-16 p-2 border rounded text-center" />
        <button className="px-2 py-1 border rounded border-gray-300 ml-2">+</button>
      </div>
      <span className="text-gray-700 text-lg">{`$${subtotal}`}</span>
    </div>
  );
};

export default CartItem;
