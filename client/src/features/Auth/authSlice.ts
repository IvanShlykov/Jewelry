import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from './api'
import type { State, User } from "./type";

   const initialState:State = {user:null,error:undefined}

   export const registration = createAsyncThunk(
    'auth/registration',
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (obj:User) => api.registrationFetch(obj)
   );
   export const checked = createAsyncThunk(
    'auth/checked',
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    () => api.checkedFetch()
   );
   

   const authSlice = createSlice({
    name: 'auth',
    initialState,
   reducers:{
    clear:(state)=>state.error=undefined
   },
    extraReducers: (builder) => {
      builder
        .addCase(registration.fulfilled, (state, action) => {
          state.user = action.payload;
          state.error=undefined
        })
        .addCase(registration.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(checked.fulfilled, (state, action) => {
          state.user = action.payload;
          state.error=undefined
        })
        .addCase(checked.rejected, (state, action) => {
          state.error = action.error.message;
        });
    },
   });
   export const {clear} = authSlice.actions
   export default authSlice.reducer;