import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from './api';
import type  { State } from "./type/type";


const initialState: State = { 
    name:'',
    email:'',
    phone: '',
    password:'',
  error:undefined
 };
 export const initUser= createAsyncThunk('users/init', () => api.initUserFetch());

const personalAreaSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email
        state.password = action.payload.password
        state.phone = action.payload.phone
        state.error = undefined;
        
        
      })
      .addCase(initUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default personalAreaSlice.reducer;