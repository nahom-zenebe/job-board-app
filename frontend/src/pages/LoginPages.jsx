import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react'; 
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../feature/authSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function LoginPages() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const {   isLogging } = useSelector((state) => state.auth);

const handlelogin=(e)=>{
  e.preventDefault()
  dispatch(login({email,password}))
  .unwrap()
  .then(()=>{
    navigate('/MainDashboard');

  })
  .catch((error) => {
    console.log(error || 'Signup failed');
  });


}

  return (
    <div className="min-h-screen bg-gery-200 text-gray-200 mt-32">
      
    <div className="container mx-auto py-16 px-4">
      <div className=" shadow-2xl rounded-lg p-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Signup</h2>
        <form onSubmit={handlelogin} className="space-y-4">
          <div>
           
            <label className="block text-lg font-medium  text-black">Email:</label>
            <input
            value={email}
            onChange={(e)=>setemail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2  border text-black  border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black">Password:</label>
            <input
             value={password}
             onChange={(e)=>setpassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-2 text-black  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        
          <button
  type="submit"
  className={`w-full h-10 rounded-lg text-white ${isLogging ? 'bg-blue-500 cursor-not-allowed' : 'bg-blue-700'}`}
  disabled={isLogging}
>
  {isLogging ? (
    <>
      <Loader className="text-xl ml-24 mt-2"  />
      Logging up...
    </>
  ) : (
    'Signup'
  )}
</button>
          <p  className=' text-center mt-5 text-gray-700'>New to JobBorad?<Link className='underline text-blue-700 hover:no-underline' to='/signup'>Create an Account</Link></p>
        </form>
      </div>
    </div>
   
  </div>
  )
}

export default LoginPages