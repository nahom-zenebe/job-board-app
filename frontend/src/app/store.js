import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../feature/authSlice'
import  ApplicationReducer from '../feature/applications'
import jobReducer from "../feature/jobSlicer";
import recruiterReducer from '../feature/recruiterSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], 
  };
  const persistedReducer = persistReducer(persistConfig, authReducer)


export const store=configureStore({
    reducer:{
        auth:authReducer,
        job:jobReducer,
        Application:ApplicationReducer,
        recruiter:recruiterReducer,
        auth: persistedReducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['REGISTER'], 
          },
        }),
})
export const persistor = persistStore(store);
export default store;