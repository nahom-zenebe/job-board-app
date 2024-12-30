import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFrown } from 'react-icons/fa'; // Fun icon for the error page

function PagenotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-center">
        <FaRegFrown className="text-6xl mb-4 animate-bounce" />
        <h1 className="text-5xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-xl mb-6">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PagenotFound;
