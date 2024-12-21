// JobSkeletion.js

import React from 'react';

function JobSkeletion() {
  return (
    <div className="grid grid-cols-1 bg-white w-full h-screen rounded-2xl mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gray-200 rounded-lg p-4 space-y-4 animate-pulse">
          {/* Title */}
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>

          {/* Company */}
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>

          {/* Description */}
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>

          {/* Location and Experience */}
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

export default JobSkeletion;
