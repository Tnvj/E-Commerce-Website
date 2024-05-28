import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-80 h-3/5 p-6 border-r border-gray-300">
      <ul>
        {["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"].map((item, index) => (
          <li key={index} className="mb-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
