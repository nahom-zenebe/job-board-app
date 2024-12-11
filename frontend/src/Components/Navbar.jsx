import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-300">
      <div className="flex justify-between items-center px-10 py-5 bg-gray-800 h-24">
    
        <h1 className="text-blue-700 text-4xl font-semibold">JobBoard</h1>

  
        <nav>
          <ul className="flex space-x-10 text-white">
            <li className="text-xl font-sans hover:text-blue-700 transition-colors duration-300 cursor-pointer">
              About Us
            </li>
            <li className="text-xl font-sans hover:text-blue-700 transition-colors duration-300 cursor-pointer">
              Services
            </li>
            <li className="text-xl font-sans hover:text-blue-700 transition-colors duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>

        <button className="bg-blue-700 text-white w-32 h-10 rounded-lg hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Navbar;
