import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../feature/authSlice'
import jobReducer from "../feature/jobSlicer";



export const store=configureStore({
    reducer:{
        auth:authReducer,
        job:jobReducer
    }
})

export default store;