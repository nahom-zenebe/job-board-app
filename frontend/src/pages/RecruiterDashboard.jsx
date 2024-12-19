import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
function RecruiterDashboard() {
  return (
    <div className='mt-20 flex mb-20'>   
        <Sidebar/>
     <div className="flex-1 ml-16 mr-10">
        <Outlet/> 
      
      </div>
      </div>
  )
}

export default RecruiterDashboard



