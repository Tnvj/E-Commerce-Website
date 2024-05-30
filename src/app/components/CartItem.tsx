import React, { useState } from 'react';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
  itemId: number;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, image, itemId, onUpdateQuantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleDecrement = () => {
    const newQuantity = Math.max(currentQuantity - 1, 0);
    setCurrentQuantity(newQuantity);
    onUpdateQuantity(itemId, newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
    onUpdateQuantity(itemId, newQuantity);
  };

  const subtotal = price * currentQuantity;

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-16 h-16 mr-4" />
        <span className="font-medium text-lg">{name}</span>
      </div>
      <span className="text-gray-700 text-lg">{`$${price}`}</span>
      <div className="flex items-center">
        <button className="px-2 py-1 border rounded border-gray-300 mr-2" onClick={handleDecrement}>-</button>
        <input type="number" value={currentQuantity} min={0} className="w-16 p-2 border rounded text-center" readOnly />
        <button className="px-2 py-1 border rounded border-gray-300 ml-2" onClick={handleIncrement}>+</button>
      </div>
      <span className="text-gray-700 text-lg">{`$${subtotal}`}</span>
    </div>
  );
};

export default CartItem;
