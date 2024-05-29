// // app/product/[id]/page.tsx



// 'use client'; // Mark this component as a client component

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
// import Header from '../../components/Header'; // Adjust import paths as necessary
// import Footer from '../../components/Footer';
// import ProductCard from '../../components/ProductCard';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = (router.query as { id?:number }) || {};

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (id) {
//       fetch(`https://fakestoreapi.com/products/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setProduct(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching product data:", error);
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="bg-white">
//       <Header />
//       <main className="p-8">
//         <div className="container mx-auto">
//           <div className="flex justify-between items-center mb-4">
//             <nav className="text-gray-500">
//               <a href="#" className="hover:text-black">Account</a> / 
//               <a href="#" className="hover:text-black"> Gaming</a> / 
//               <span>{product.title}</span>
//             </nav>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
//             <div className="flex flex-col items-center">
//               <img src={product.image} alt={product.title} className="w-full mb-4" />
//               {/* Add additional image thumbnails or other product details here */}
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//               <div className="flex items-center mb-2">
//                 <span className="text-yellow-400 mr-2">★ ★ ★ ★ ★</span>
//                 <span className="text-gray-500">(150 Reviews)</span>
//               </div>
//               <div className="text-green-500 mb-4">In Stock</div>
//               <div className="text-2xl mb-4">${product.price}</div>
//               <p className="mb-4">{product.description}</p>
//               {/* Add more product details here as necessary */}
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default ProductDetails;
