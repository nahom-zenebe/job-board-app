import React from 'react';
import person1 from '../public/images/image4.webp';
import person2 from '../public/images/image2.webp';
import person3 from '../public/images/image3.webp';
import { Link } from 'react-router-dom';
import background from '../public/images/background.avif';

function StartedPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-50">
      {/* Background Section */}
      <div 
        className="absolute inset-0 bg-cover bg-right opacity-40"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>

      {/* Content Section */}
      <div className="relative container mx-auto px-6 py-12 h-full flex flex-col justify-between">
        

        {/* Title Section */}
        <div className="text-center mt-12">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Your Next Job Awaits
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Find the perfect job or hire <span className="text-blue-700">top talent</span> with ease.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center w-full max-w-xl bg-white rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for jobs or talent..."
              className="flex-grow p-4 text-gray-700 focus:outline-none"
            />
            <Link 
              to="/signup"
              className="px-6 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Search
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
            <h2 className="text-3xl font-bold text-blue-600">100k+</h2>
            <p className="text-gray-600 mt-2">Job Postings</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
            <h2 className="text-3xl font-bold text-blue-600">10k+</h2>
            <p className="text-gray-600 mt-2">Recruiters</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
            <h2 className="text-3xl font-bold text-blue-600">25k+</h2>
            <p className="text-gray-600 mt-2">Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartedPage;
