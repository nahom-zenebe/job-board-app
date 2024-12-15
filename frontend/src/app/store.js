import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../feature/authSlice'
import jobReducer from "../feature/jobSlicer";
import recruiterReducer from '../feature/recruiterSlice'


export const store=configureStore({
    reducer:{
        auth:authReducer,
        job:jobReducer,
        recruiter:recruiterReducer
    }
})

export default store;