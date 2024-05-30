// import React from 'react';
// import CartItem from './CartItem';

// interface CartProps {
//   items: { name: string; price: number; quantity: number; image: string }[];
//   itemIds: number[];
//   onBuyNow: (item: any) => void; // New prop for Buy Now functionality
//   onUpdateQuantity: (itemId: number, newQuantity: number) => void;
// }

// const Cart: React.FC<CartProps> = ({ items, itemIds, onBuyNow, onUpdateQuantity }) => {
//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <div className="hidden md:flex justify-between mb-4">
//         <span className="font-medium text-lg">Product</span>
//         <div className="flex justify-between w-1/2">
//           <span className="font-medium text-lg">Price</span>
//           <span className="font-medium text-lg">Quantity</span>
//           <span className="font-medium text-lg">Subtotal</span>
//         </div>
//       </div>
//       {items.map((item, index) => (
//         <CartItem
//           key={item.name}
//           {...item}
//           itemId={itemIds[index]}
//           onUpdateQuantity={onUpdateQuantity}
//         />
//       ))}
//     </div>
//   );
// };

// export default Cart;
