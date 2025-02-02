
import React, { useState } from 'react'
import avatar from '../images/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile} from '../feature/authSlice'
import {Camera } from 'lucide-react'
import toast from 'react-hot-toast';

function UpdateRecruiterProfile() {

  const { isUpdatingProfile,recruiterProfile } = useSelector((state) => state.auth);
  const[selectedImage,setselectedImage]=useState(null)
  const {  authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  const handleImageUpload=async(e)=>{
    e.preventDefault()
    const file=e.target.files[0]
    if(!file)return

    const reader=new FileReader()
    reader.readAsDataURL(file)

    reader.onload=async()=>{
      const base64Image=reader.result

      setselectedImage(base64Image)
      try {
        await dispatch(updateProfile(base64Image));
    } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
    }
    

    }
    
  }

  return (
    <div className="h-screen bg-white w-full  rounded-2xl shadow-2xl ">
    <div className="max-w-2xl mx-auto p-4 py-8">
      <div className="bg-base-300 rounded-xl p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-6xl text-blue-500 mb-5 font-semibold ">Profile</h1>
          <p className="mt-2 text-xl">Your profile information</p>
        </div>

    

        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
          src={authUser?.user?.ProfilePic || selectedImage || avatar}
              alt="Profile"
              className="size-32 rounded-full object-cover border-4 "
            />
            <label
              htmlFor="avatar-upload"
              className={`
                absolute bottom-0 right-0 
                bg-base-content hover:scale-105
                p-2 rounded-full cursor-pointer 
                transition-all duration-200
                ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
              `}
            >
              <Camera className="w-5 h-5 text-base-200" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-zinc-400">
            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
          </p>
        </div>
        </div>
        <div className="mt-5">

        <h1 className="text-xl ml-16 mt-4 pl-4 bg-gray-400 text-gray-100 rounded-lg h-10 flex items-center">
  Name: {authUser?.user?.name || authUser.user?.updatedUser?.name||"guest"}
</h1>

  <h1
    className="text-xl ml-16 mt-4 pl-4 bg-gray-400 text-gray-100 rounded-lg h-10 flex items-center"
  >
    Email: {authUser?.user?.email|| authUser.user?.updatedUser?.email||"guest@gmail.com"}
  </h1>
  <h1
    className="text-xl ml-16 mt-4 pl-4 bg-gray-400 text-gray-100 rounded-lg h-10 flex items-center"
  >
    Role: {authUser?.user?.role|| authUser.user?.updatedUser?.role||"role"}
  </h1>
</div>
        </div>
        </div>

       
  )
}

export default UpdateRecruiterProfile