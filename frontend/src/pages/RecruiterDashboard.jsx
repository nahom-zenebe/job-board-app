import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
function RecruiterDashboard() {
  return (
    <div className='pt-20 flex mb-10'>   
        <Sidebar/>
     <div className="flex-1 pl-16 mr-10">
        <Outlet/> 
      
      </div>
      </div>
  )
}

export default RecruiterDashboard



