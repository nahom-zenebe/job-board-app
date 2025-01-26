import React,{useState,useEffect} from 'react';
import avatar from '../images/avatar.png';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../feature/authSlice';
import { useNavigate } from 'react-router-dom';
import {getApplicationById} from '../feature/applications'


function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const {  authUser } = useSelector((state) => state.auth);
  
  const { ApplicationById } = useSelector((state) => state.Application);




  

  if (!authUser || !authUser.user) {
    return <div>No user data available</div>;
  }

  const handleLogout=()=>{
    dispatch (logout())
    .then(()=>{
    
      navigate('/');
    }

   
   

  )
  .catch((error) => {
    console.error(error || 'Signup failed');
  });
  }


  return (
    <div className="w-64 h-auto p-6 bg-white shadow-2xl rounded-2xl ml-10">
    
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 rounded-full border-4 border-blue-500"
          src={authUser?.user?.ProfilePic||authUser.user?.updatedUser?.ProfilePic|| avatar}
          alt="User Avatar"
        />
        <h1 className="mt-4 text-lg font-semibold text-gray-800">
        {authUser.user?.name ||authUser.user?.updatedUser?.name|| "Guest"}
          
        </h1>
        <p className="text-sm text-gray-500">{authUser?.user?.role==="seeker"? (<h1 className='text-lg'>seeker</h1>):(<h1 className='text-lg'>Recruiter</h1>)}</p>
      </div>
      <hr className='mt-4'></hr>

     
      <div className="mt-8   ">
        <ul className="space-y-4  pb-6">
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
           
         {authUser?.user?.role==="seeker"?<Link to='/MainDashboard/UpdateProfile'>Edit Profile</Link> :<Link to='/RecruiterDashboard/UpdateRecruiterProfile'>Edit Profile</Link> } 
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
          {authUser?.user?.role==="seeker"?<Link to='/MainDashboard/Searchjobs'>Search Jobs</Link> :<Link to='/RecruiterDashboard/Postingjob'>Postingjob</Link> } 
   
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
  {authUser?.user?.role === "seeker" ? (
    <Link to={`/MainDashboard/MyApplication/applications/seeker/${authUser.user.id}`}> My Applications</Link>
  ) : (
    <Link to="/RecruiterDashboard/Applications">Applications</Link>
  )}
</li>

          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
    
          {authUser?.user?.role==="seeker"?<Link to='/MainDashboard/SavedJob'>SavedJob</Link>  :<Link to='/RecruiterDashboard/Applications'>Applications</Link> }  
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out">
          {authUser?.user?.role==="seeker"?<Link to='/MainDashboard/AccountSetting'>Account Settings</Link> :<Link to='/RecruiterDashboard/RecruiterAccountSetting'>AccountSetting</Link> } 
          
            
          </li>
          <li className="flex items-center text-gray-600 hover:bg-gray-200 hover:text-blue-600 cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out" onClick={handleLogout}>
    
          Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
