import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
function MainDashboard() {
  return (
    <div className="flex min-h-screen  bg-gray-100 pt-16 pb-20">
        <Sidebar/>

   
        <div className="flex-1 ml-16 mr-10">
        <Outlet /> 
      </div>
    </div>
  )
}

export default MainDashboard