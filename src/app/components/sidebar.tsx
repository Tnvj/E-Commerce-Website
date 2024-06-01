import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-3/5 p-6  md:w-48 md:h-auto">
      <ul>
        {["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"].map((item, index) => (
          <li key={index} className="my-3">
            <a href="#" className="text-gray-500 hover:text-gray-900">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;