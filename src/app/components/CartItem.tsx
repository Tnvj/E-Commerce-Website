// 'use client';
// import React, { useState } from 'react';

// interface CartItemProps {
//   items: {
//     id: number;
//     image: string;
//     name: string;
//     price: number;
//     quantity: number;
//     // onUpdateQuantity: (itemId: number, newQuantity: number) => void;
//   }[];
// }

// const CartItem: React.FC<CartItemProps> = ({ items }) => {
//   const [currentQuantity, setCurrentQuantity] = useState(items.quantity);

//   const handleDecrement = () => {
//     const newQuantity = Math.max(currentQuantity - 1, 0);
//     setCurrentQuantity(newQuantity);
//     // onUpdateQuantity(itemId, newQuantity);
//   };

//   const handleIncrement = () => {
//     const newQuantity = currentQuantity + 1;
//     setCurrentQuantity(newQuantity);
//     // onUpdateQuantity(itemId, newQuantity);
//   };

//   const subtotal = items.price * currentQuantity;

//   return (
// <div className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-4">
//   <div className="flex items-center">
//     <img src={items.image} alt={items.name} className="w-16 h-16 mr-4" />
//     <span className="font-medium text-lg">{items.name}</span>
//   </div>
//   <span className="text-gray-700 text-lg">{`$${items.price}`}</span>
//   <div className="flex items-center">
//     <button className="px-2 py-1 border rounded border-gray-300 mr-2" onClick={handleDecrement}>-</button>
//     <input type="number" value={currentQuantity} min={0} className="w-16 p-2 border rounded text-center" readOnly />
//     <button className="px-2 py-1 border rounded border-gray-300 ml-2" onClick={handleIncrement}>+</button>
//   </div>
//   <span className="text-gray-700 text-lg">{`$${subtotal}`}</span>
// </div>
//   );
// };

// export default CartItem;

// // components/CartItem.tsx
import React, { useState, useEffect } from 'react';

interface CartItemProps {
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  onUpdateCart: (updatedItems: CartItemProps['items']) => void;
}

const CartItem: React.FC<CartItemProps> = ({ items, onUpdateCart }) => {
  const [cartItems, setCartItems] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const handleIncrement = (id: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  const handleDecrement = (id: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    const item = updatedItems.find(item => item.id === id);
    if (item && item.quantity === 0) {
      setItemToDelete(id);
      setShowModal(true);
    } else {
      setCartItems(updatedItems);
      onUpdateCart(updatedItems);
    }
  };

  const handleDelete = () => {
    if (itemToDelete !== null) {
      const updatedItems = cartItems.filter(item => item.id !== itemToDelete);
      setCartItems(updatedItems);
      onUpdateCart(updatedItems);
      setShowModal(false);
      setItemToDelete(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setItemToDelete(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="hidden md:flex justify-between mb-4">
        <span className="font-medium text-lg">Product</span>
        <div className="flex justify-between w-1/2">
          <span className="font-medium text-lg">Price</span>
          <span className="font-medium text-lg">Quantity</span>
          <span className="font-medium text-lg">Subtotal</span>
        </div>
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-4">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
            <span className="font-medium text-lg">{item.name}</span>
          </div>
          <span className="text-gray-700 text-lg">{`$${item.price}`}</span>
          <div className="flex items-center">
            <button className="px-2 py-1 border rounded border-gray-300 mr-2" onClick={() => handleDecrement(item.id)}>-</button>
            <input type="number" value={item.quantity} min={0} className="w-16 p-2 border rounded text-center" readOnly />
            <button className="px-2 py-1 border rounded border-gray-300 ml-2" onClick={() => handleIncrement(item.id)}>+</button>
          </div>
          <span className="text-gray-700 text-lg">{`$${(item.price * item.quantity).toFixed(2)}`}</span>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl mb-4">Are you sure you want to delete this item?</h2>
            <div className="flex justify-end">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleDelete}>Yes</button>
              <button className="border border-gray-300 px-4 py-2 rounded" onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
