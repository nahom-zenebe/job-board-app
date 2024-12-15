import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isallJobget} from '../feature/jobSlicer';


function NewJob() {
  const { alljobposting} = useSelector((state) => state.job);
  const[selectedImage,setselectedImage]=useState(null)
  const dispatch = useDispatch();


  console.log(alljobposting)
  return (
    <div className="h-screen bg-white w-full  rounded-2xl shadow-2xl ">
    MyApplication
    
    
    </div>
  )
}

export default NewJob