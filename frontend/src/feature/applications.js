
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';




const initialState={
    isApplicationCreated:false,
    Application:null,
    isApplicationgetByRecruiterId:false,
    ApplicationByRecruiterId:null,
    AllApplicationsForRecruiter:null,
    isgetAllApplicationsForRecruiter:false,
    getnumberofapplicantforjob:null,
    isappliedjobforuserdisplay:false,
    appliedjobforuser:null

}


export const AppForm=createAsyncThunk('applications/applicationForm',async({ jobId, data },{ rejectWithValue })=>{
    const response=await axiosInstance.post(`applications/applicationForm/${jobId}`,data,{ rejectWithValue })
     return response.data
})
export const getApplicationpostedbyRecruiter = createAsyncThunk(
  'applications/Recruiter/postedjob',
  async ({recruiterId }, { rejectWithValue }) => {
    try {

      const response = await axiosInstance.post('applications/Recruiter/postedjob', { recruiterId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllApplicationsForRecruiter=createAsyncThunk('applications/allapplications',async(_,{rejectWithValue })=>{
    const response=await axiosInstance.get('applications/allapplications',{ withCredentials: true },{rejectWithValue })
    return response.data
})

export const getNumberofapplicantforjob=createAsyncThunk('applications/numberapplication',async({jobId},{rejectWithValue })=>{
  const reponse=await axiosInstance.get('applications/numberapplication',{rejectWithValue })
  return reponse.data
})

export const getjobthatappliedbyuser=createAsyncThunk('applications/getappliedjobs',async({userId},{rejectWithValue})=>{
  const response=await axiosInstance.get('applications/getappliedjobs',{rejectWithValue })
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
          builder.addCase(getApplicationpostedbyRecruiter.pending,(state)=>{
            state.isApplicationgetByRecruiterId=true

          }
          )
          builder.addCase(getApplicationpostedbyRecruiter.fulfilled,(state,action)=>{
            state.isApplicationgetByRecruiterId=false
            state.ApplicationByRecruiterId=action.payload

          }
          )
          builder.addCase(getApplicationpostedbyRecruiter.rejected,(state,action)=>{
            state.isApplicationgetByRecruiterId=false
           

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

      builder.addCase(getNumberofapplicantforjob.pending,(state)=>{
   
    })
    builder.addCase(getNumberofapplicantforjob.fulfilled,(state,action)=>{
 
      state.getnumberofapplicantforjob=action.payload
  })
  builder.addCase(getNumberofapplicantforjob.rejected,(state,action)=>{
   
    toast.error(action.payload || 'Error during fetch application');
})



      
}})

export default ApplicationSlice.reducer;
