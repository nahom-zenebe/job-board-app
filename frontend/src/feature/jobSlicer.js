import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';





const initialState={
    alljobposting:null,
    isJobcreate:false,
    isallJobget:false,
    isPinJob:false,
    getpindata:[],
    isgetpindata:false,
    filterjobs:null


}

export const pinJob=createAsyncThunk(
  `job/pindata/:jobId`,async(jobId,{rejectWithValue})=>{
    try {
      const response = await axiosInstance.put(`job/pindata/${jobId}`, {}, { withCredentials: true });
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error pinning job');
    }
  }
)
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

export const getalljob = createAsyncThunk('job/alljobposting', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('job/alljobposting', { withCredentials: true });
    return response.data; 
  } catch (error) {
    console.error("Error fetching jobs:", error); 
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch jobs'); 
  }
});



export const getpinnedData=createAsyncThunk('job/pinnedData',async(_,{rejectWithValue })=>{
  try {
    const response=await axiosInstance.get('job/pinnedData',{ withCredentials: true })
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error); 
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch jobs'); 
    
  }
})

export const filterjob=createAsyncThunk('/job/filterjob',async({jobtitle, experienceLevel},{rejectWithValue })=>{
  try {
    const response=await axiosInstance.get('/job/filterjob',{ params:{ jobtitle, experienceLevel } })
    return response.data.filterjob
    
  } catch (error) {
    console.error("Error fetching jobs:", error); 
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch jobs'); 
    
  }
})


const jobSlice=createSlice({
    name:'job',
    initialState,
    reducers:{
      
    },
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

        });
        builder.addCase(createjob.pending,(state)=>{
          state.isJobcreate=true
     

        });
        builder.addCase(createjob.fulfilled,(state)=>{
          state.isJobcreate=false
          toast.success('job application created Successfully');

        });
        builder.addCase(createjob.rejected,(state,action)=>{
          state.isJobcreate=false
          toast.error(action.payload || 'Error during job creating');
        });
        builder.addCase(pinJob.pending, (state)=>{
          state.isPinJob=true
        })

        builder.addCase(pinJob.fulfilled, (state,action)=>{
          state.isPinJob=false
          const updatedJob = action.payload.job; 
      state.alljobposting = state.alljobposting.map((job) =>
        job.id === updatedJob.id ? { ...job, pinned: updatedJob.pinned } : job
      );
          toast.success(updatedJob.pinned ? 'Job pinned successfully' : 'Job unpinned successfully');
        })

        builder.addCase(pinJob.rejected, (state,action)=>{
          state.isPinJob = false;
          toast.error(action.payload || 'Error pinning job');
        })
        builder.addCase(getpinnedData.pending, (state) => {
          state.isgetpindata = true; 
        });
    
        builder.addCase(getpinnedData.fulfilled, (state, action) => {
          state.isgetpindata = false; 
          state.getpindata = action.payload; 
        });
    
  
        builder.addCase(getpinnedData.rejected, (state, action) => {
          state.isgetpindata = false; 
          toast.error(action.payload || 'Error during get pinned data'); 
        });

        builder.addCase(filterjob.pending, (state) => {
          state.isJobcreate= true; 
        });
    
        builder.addCase(filterjob.fulfilled, (state, action) => {
          state.isJobcreate = false; 
          state.filterjobs = action.payload; 
        });
    
  
        builder.addCase(filterjob.rejected, (state, action) => {
          state.isJobcreate = false; 
          toast.error(action.payload || 'Error during get pinned data'); 
        });

    }
    
})

export default  jobSlice.reducer;