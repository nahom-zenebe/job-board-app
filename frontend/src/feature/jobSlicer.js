import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';





const initialState={
    alljobposting:null,
    isJobcreate:false,
    isallJobget:false,


}

export const createjob = createAsyncThunk(
  'job/postsjob',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('job/postsjob', data, { withCredentials: true });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error during job creation');
    }
  }
);

export const getalljob=createAsyncThunk('job/alljobposting',async(data,{rejectWithValue })=>{
  try{
    const jobposting=await axiosInstance.get('job/alljobposting',data)
    return jobposting.data
  }
  catch(error){
    console.error("Error details:", error); // Log the full error
    
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
        builder.addCase(createjob.pending,(state)=>{
          state.isJobcreate=true
     

        })
        builder.addCase(createjob.fulfilled,(state)=>{
          state.isJobcreate=false
          toast.success('job application created Successfully');

        })
        builder.addCase(createjob.rejected,(state,action)=>{
          state.isJobcreate=false
          toast.error(action.payload || 'Error during job creating');
        })
        builder.addCase(getalljob.pending,(state)=>{
            state.alljobposting=true
        })
        builder.addCase(getalljob.fulfilled,(state,action)=>{
          state.isallJobget=false
          state.alljobposting=action.payload
      })
      builder.addCase(getalljob.rejected,(state)=>{
        state.isallJobget=false
        
    })

    }
    
})

export default  jobSlice.reducer;