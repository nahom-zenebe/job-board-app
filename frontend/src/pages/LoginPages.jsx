import React from 'react'
import { Link } from 'react-router-dom';
function LoginPages() {
  return (
    <div className="min-h-screen bg-gery-200 text-gray-200 mt-32">
      
    <div className="container mx-auto py-16 px-4">
      <div className=" shadow-2xl rounded-lg p-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Signup</h2>
        <form className="space-y-4">
          <div>
           
            <label className="block text-lg font-medium  text-black">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        
          <button type='submit' className=' w-full bg-blue-700  h-10 rounded-lg'>Signup</button>
          <p  className=' text-center mt-5 text-gray-700'>New to JobBorad?<Link className='underline text-blue-700 hover:no-underline' to='/signup'>Create an Account</Link></p>
        </form>
      </div>
    </div>
   
  </div>
  )
}

export default LoginPages