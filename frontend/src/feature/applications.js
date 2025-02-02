
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
    appliedjobforuser:null,
    updatedStatus:null

}


export const AppForm=createAsyncThunk('applications/applicationForm',async({ jobId, data },{ rejectWithValue })=>{
    const response=await axiosInstance.post(`applications/applicationForm/${jobId}`,data,{ rejectWithValue })
     return response.data
})


export const getApplicationpostedbyRecruiter = createAsyncThunk(
  'applications/Recruiter/postedjob',
  async ({ recruiterId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`applications/Recruiter/postedjob?recruiterId=${recruiterId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch applications");
    }
  }
);


export const getAllApplicationsForRecruiter=createAsyncThunk('applications/allapplications',async(_,{rejectWithValue })=>{
    const response=await axiosInstance.get('applications/allapplications',{ withCredentials: true },{rejectWithValue })
    return response.data
})

export const Numberofapplicantforjob=createAsyncThunk('applications/numberapplication',async({jobId},{rejectWithValue })=>{
  const reponse=await axiosInstance.get('applications/numberapplication',{jobId},{rejectWithValue })
  return reponse.data
})

export const getjobthatappliedbyuser=createAsyncThunk('applications/appliedJobs',async({userId},{rejectWithValue})=>{
  const response=await axiosInstance.get(`applications/appliedJobs/${userId}`,{ withCredentials: true },{rejectWithValue })
  return response.data.applications
})

export const updateApplicationStatus = createAsyncThunk(
  "applications/applicationsSubmit/status",
  async ({ applicationId, status }, { rejectWithValue }) => {
    try {
      const response=axiosInstance.put("applications/applicationsSubmit/status", { applicationId, status });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const RemoveApplication = createAsyncThunk(
  'applications/Removeapplications',
  async (JobId, { rejectWithValue }) => {
    try {
      console.log("Sending DELETE request for application ID:", JobId); 

      const response = await axiosInstance.delete(`/applications/Removeapplications`, {
        data: { JobId },
        withCredentials: true
      });

      console.log("API Response:", response.data); 
      return response.data; 
    } catch (error) {
      console.error("API Delete Request Failed:", error.response?.data || error.message); 
      return rejectWithValue(error.response?.data?.error || 'Failed to remove application');
    }
  }
);








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

      builder.addCase( Numberofapplicantforjob.pending,(state)=>{
   
    })
    builder.addCase( Numberofapplicantforjob.fulfilled,(state,action)=>{
 
      state.getnumberofapplicantforjob=action.payload
  })
  builder.addCase(Numberofapplicantforjob.rejected,(state,action)=>{
   
    toast.error(action.payload || 'Error during fetch application');
})



builder.addCase(getjobthatappliedbyuser.pending,(state)=>{
  state.isappliedjobforuserdisplay=true
})
builder.addCase(getjobthatappliedbyuser.fulfilled,(state,action)=>{
  state.isappliedjobforuserdisplay=false
  state.appliedjobforuser=action.payload
})
builder.addCase(getjobthatappliedbyuser.rejected,(state,action)=>{
state.isappliedjobforuserdisplay=false
toast.error(action.payload || 'Error during fetch applications');
console.log(action.error)
})



builder.addCase(updateApplicationStatus.pending, (state) => {
 
  state.isappliedjobforuserdisplay = false;
});


builder.addCase(updateApplicationStatus.fulfilled, (state, action) => {
  state.updatedStatus = action.payload;  
  state.isappliedjobforuserdisplay = true; 
});

builder.addCase(updateApplicationStatus.rejected, (state, action) => {
  state.isappliedjobforuserdisplay = false;
  toast.error(action.payload?.error || 'Error during update status');
  console.log(action.error);
});



builder.addCase(RemoveApplication.fulfilled, (state, action) => {
  state.ApplicationByRecruiterId = state.ApplicationByRecruiterId?.filter(
    (application) => application._id !== action.meta.arg 
  );

});









      
}})

export default ApplicationSlice.reducer;
