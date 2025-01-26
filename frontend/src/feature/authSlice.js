import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../libs/axios';
import toast from 'react-hot-toast';

const initialState = {
  authUser: JSON.parse(localStorage.getItem('authUser')) || { user: null },
  token: null,
  isSigningup: false,
  isLogging: false,
  loading: false,
  isUpdatingProfile: false,
  error: null,

};

export const signup = createAsyncThunk('auth/signup', async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('auth/signup', data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Error during signup');
  }
});

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('auth/login', data, { withCredentials: true });
    return response.data;
  } catch (error) {
    return rejectWithValue('Error during login');
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('auth/logout',{ withCredentials: true });
    return response.data;
  } catch (error) {
    return rejectWithValue('Error during logout');
  }
});

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (base64Image, { getState, rejectWithValue }) => {
    try {
     
      const storedUser = JSON.parse(localStorage.getItem('authUser'));

      
      const updatedUser = {
        ...storedUser,
        user: {
          ...storedUser.user,
          ProfilePic: base64Image, 
        },
      };

     
      const response = await axiosInstance.put('auth/UpdateProfile', 
        { ProfilePic: base64Image }, 
        { headers: { 'Content-Type': 'application/json' } }
      );

   
      const updatedData = response.data;

      
      localStorage.setItem('authUser', JSON.stringify(updatedData));

      return updatedData; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to update profile'
      );
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.isSigningup = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.authUser = action.payload;
      localStorage.setItem('authUser', JSON.stringify(action.payload));
      state.isSigningup = false;
      toast.success('Account Created Successfully');
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isSigningup = false;
      toast.error(action.payload || 'Error during signup');
    });

    builder.addCase(login.pending, (state) => {
      state.isLogging = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authUser = action.payload;
      localStorage.setItem('authUser', JSON.stringify(action.payload.user));
      state.isLogging = false;
      toast.success('Logged in Successfully');
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLogging = false;
      toast.error(action.payload || 'Error during login');
    });

    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authUser = null;
      state.token = null;
      state.loading = false;
      localStorage.removeItem('authUser');
      toast.success('Logged out Successfully');
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      toast.error(action.payload || 'Error during logout');
    });

    builder.addCase(updateProfile.pending, (state) => {
      state.isUpdatingProfile = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.isUpdatingProfile = false;
      state.authUser = { ...state.authUser, user: action.payload }; // Replace user with updatedUser
      localStorage.setItem("authUser", JSON.stringify(state.authUser)); // Persist to localStorage
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isUpdatingProfile = false;
      toast.error(action.payload || 'Error during profile update');
    });
  },
});

export default authSlice.reducer;
