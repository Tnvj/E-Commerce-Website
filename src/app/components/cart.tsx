import React from 'react';
import CartItem from './CartItem';

interface CartProps {
  items: { name: string; price: number; quantity: number; image: string }[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-4 gap-4 border-b pb-4 mb-4">
        <span className="font-medium text-lg">Product</span>
        <span className="font-medium text-lg">Price</span>
        <span className="font-medium text-lg">Quantity</span>
        <span className="font-medium text-lg">Subtotal</span>
      </div>
      {items.map((item) => (
        <CartItem key={item.name} {...item} />
      ))}
    </div>
  );
};

export default Cart;
