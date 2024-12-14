import React from 'react';
import avatar from '../images/avatar.png';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 h-auto p-6 bg-white shadow-2xl rounded-2xl ml-10">
    
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full border-4 border-blue-500"
          src={avatar}
          alt="User Avatar"
        />
        <h1 className="mt-4 text-lg font-semibold text-gray-800">
          Abebe Besoble
        </h1>
        <p className="text-sm text-gray-500">Software Engineer</p>
      </div>
      <hr className='mt-4'></hr>

     
      <div className="mt-8   ">
        <ul className="space-y-4  pb-6">
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
           
          <Link to='/UpdateProfile'>Edit Profile</Link> 
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
          
            <Link to='/Searchjobs'>Search Jobs</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
            
          <Link to='/MyApplication'> My Applications</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
    
          <Link to='/NewJob'>NewJobs</Link> 
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
            
            <Link to='AccountSetting'>Account Settings</Link>
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
    
          Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
