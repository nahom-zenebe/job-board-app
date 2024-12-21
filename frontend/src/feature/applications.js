
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';




const initialState={
    isApplicationCreated:false,
    Application:null
}


export const AppForm=createAsyncThunk('/applications/applicationForm',async(data,{ rejectWithValue })=>{
    const reponse=await axiosInstance.post('/applications/applicationForm',data,{ rejectWithValue })
     return reponse.data
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
            toast.error(action.payload || 'Error during signup');
          });
}})

export default ApplicationSlice.reducer;
