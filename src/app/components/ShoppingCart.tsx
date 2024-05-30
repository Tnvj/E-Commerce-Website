import React, { useState, useEffect } from 'react';

interface ShoppingCartProps {
  item: ShoppingCartItem;
  onQuantityChange: (quantity: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  // Update quantity state when item prop changes
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <div className="flex border border-gray-500 rounded-md overflow-hidden">
        <button className="px-4 py-2" onClick={handleDecrement}>-</button>
        <span className="px-4 py-2 border-l border-r border-gray-500">{quantity}</span>
        <button className="px-4 py-2 bg-red-500 text-white" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
