
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';




const initialState={
    isApplicationCreated:false,
    Application:null,
    isApplicationgetById:false,
    ApplicationById:null,
    AllApplicationsForRecruiter:null,
    isgetAllApplicationsForRecruiter:false
}


export const AppForm=createAsyncThunk('applications/applicationForm',async({ jobId, data },{ rejectWithValue })=>{
    const response=await axiosInstance.post(`applications/applicationForm/${jobId}`,data,{ rejectWithValue })
     return response.data
})
export const getApplicationById=createAsyncThunk('applications/seeker',async({seekerId},{rejectWithValue })=>{
   const response=await axiosInstance.get(`applications/seeker/${seekerId}`,{rejectWithValue})
   return response.data
})
export const getAllApplicationsForRecruiter=createAsyncThunk('applications/allapplications',async(_,{rejectWithValue })=>{
    const response=await axiosInstance.get('applications/allapplications',{ withCredentials: true },{rejectWithValue })
    return response.data
})


const ApplicationSlice=createSlice({
    name:'Application',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(AppForm.pending, (state) => {
          state.isApplicationCreated = true;
        });
        builder.addCase(AppForm.fulfilled, (state,action) => {
            state.isApplicationCreated = false;
            state.Application=action.payload
            toast.success('Application Created Successfully');
          });
        builder.addCase(AppForm.rejected, (state,action) => {
            state.isApplicationCreated = false;
            toast.error(action.payload || 'Error during application');
          
          });
          builder.addCase(getApplicationById.pending,(state)=>{
            state.isApplicationgetById=true

          }
          )
          builder.addCase(getApplicationById.fulfilled,(state,action)=>{
            state.isApplicationgetById=false
            state.ApplicationById=action.payload

          }
          )
          builder.addCase(getApplicationById.rejected,(state,action)=>{
            state.isApplicationgetById=false
           

          })
          builder.addCase(getAllApplicationsForRecruiter.pending,(state)=>{
              state.isgetAllApplicationsForRecruiter=true
          })
          builder.addCase(getAllApplicationsForRecruiter.fulfilled,(state,action)=>{
            state.isgetAllApplicationsForRecruiter=false
            state.AllApplicationsForRecruiter=action.payload
        })
        builder.addCase(getAllApplicationsForRecruiter.rejected,(state,action)=>{
          state.isgetAllApplicationsForRecruiter=false
          toast.error(action.payload || 'Error during fetch application');
      })
}})

export default ApplicationSlice.reducer;
