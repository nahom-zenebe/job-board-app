import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';





const initialState={
    alljobposting:null,
    isJobcreate:false,
    isallJobget:false,


}

export const createjob=createAsyncThunk('/job/posts-job',async(data,{rejectWithValue})=>{
  try {
    const createdJob=await axiosInstance.post('/job/posts-job',data)
    return createdJob.data
    
  } catch (error) {
    return rejectWithValue('Error during create job');
  }
})

export const getalljob=createAsyncThunk('/job/alljobposting',async(data,{rejectWithValue })=>{
  try{
    const jobposting=await axiosInstance.get('/job/alljobposting',data)
    return jobposting.data
  }
  catch(error){
    return rejectWithValue('Error during logout');
  }



})



const jobSlice=createSlice({
    name:'job',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getalljob.pending,(state)=>{
            state.isallJobget=true
        })
        builder.addCase(getalljob.fulfilled,(state,action)=>{
            state.isallJobget=false
            state.alljobposting=action.payload
        })
        builder.addCase(getalljob.rejected,(state,action)=>{
            state.isallJobget= false;
           toast.error(action.payload || 'Error during signup');

        })
        builder.addCase(createjob.pending,(state,action)=>{
          state.isJobcreate=true
          toast.success('Account Created Successfully');

        })
        builder.addCase(createjob.fulfilled,(state,action)=>{
          state.isJobcreate=false
          toast.success('job application created Successfully');

        })
        builder.addCase(createjob.rejected,(state,action)=>{
          state.isJobcreate=false
          toast.error(action.payload || 'Error during signup');
        })

    }
    
})

export default  jobSlice.reducer;