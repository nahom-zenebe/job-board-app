import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
function MainDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 pt-16 pb-20">
        <Sidebar/>
        <div className="flex-1 p-6">
        <Outlet /> 
      </div>
    </div>
  )
}

export default MainDashboard