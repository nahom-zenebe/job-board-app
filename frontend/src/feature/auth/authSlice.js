import { createSlice } from '@reduxjs/toolkit';


const initialState={
    user:null,
    token:null,
    isAuthenticated:false,
    loading:false,
    error:null
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        singup(){
            
        }
    }
})