import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';





const initialState={
    recruiterProfile: null,  
    isrecruiterProfile: false,          
    error: null, 
}


export const createRecruiterProfile=createAsyncThunk('/recruiter/create',async(data,{rejectWithValue })=>{

    try {
        const reponse=await axiosInstance.post('/recruiter/create',data,{ withCredentials: true,})
    return reponse.data
        
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Error fetching profile');
   
    }
    
})


export const getRecruiterProfile=createAsyncThunk('/recruiter/:id',async(userId,{rejectWithValue })=>{

    try {
        const reponse=await axiosInstance.post(`/recruiter/${userId}`,{ withCredentials: true,})
    return reponse.data
        
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Error fetching profile');
   
    }
    
})

export const deleteRecruiterProfile = createAsyncThunk('/recruiter/:id',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.delete(`/recruiter/${userId}`, {
          withCredentials: true,
        });
    
        return response.data;
      } catch (error) {
      
        return rejectWithValue(error.response?.data?.message || 'Error deleting profile');
      }
    }
  );







const recruiterSlice=createSlice({
    name:'recruiter',
    initialState,
    reducers:{},
     extraReducers:(builder)=>{
        builder.addCase(createRecruiterProfile.pending,(state)=>{
            state.isrecruiterProfile = true;
        })
        builder.addCase(createRecruiterProfile.fulfilled,(state,action)=>{
            state.isrecruiterProfile = false;
            state.recruiterProfile = action.payload.savedProfile;
            toast.success('Account Created Successfully');
        })
        builder.addCase(createRecruiterProfile.rejected,(state,action)=>{
            state.isrecruiterProfile = false;
            toast.error(action.payload || 'Error during creating Account');

        })
     }



})

export default  recruiterSlice.reducer;