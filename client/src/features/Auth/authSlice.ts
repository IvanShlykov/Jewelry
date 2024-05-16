import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from './api'

import type { AuthForm, RegaUser, State,  UserUpdate } from "./type";

   const initialState:State = {user:null,error:undefined}

   export const registration = createAsyncThunk(
    'auth/registration',
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (obj:RegaUser) => api.registrationFetch(obj)
   );
   export const checked = createAsyncThunk(
    'auth/checked',
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    () => api.checkedFetch()
   );
   export const authorization = createAsyncThunk(
    'auth/authorization',
    (obj:AuthForm) => api.authorizationFetch(obj)
   );
   export const logout = createAsyncThunk(
   'auth/logout',
   // eslint-disable-next-line @typescript-eslint/no-floating-promises
   () => api.fetchLogOut()
  );
  export const updateUserSlice = createAsyncThunk('users/update',  (updatedUser: UserUpdate) => 
    api.changeUserFetch(updatedUser));

   const authSlice = createSlice({
    name: 'auth',
    initialState,
   reducers:{
    clear:(state)=>{state.error=undefined}
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
        // .addCase(checked.rejected, (state, action) => {
        //   state.error = action.error.message;
        // })
        .addCase(authorization.fulfilled, (state, action) => {
          state.user = action.payload;
          state.error=undefined
        })
        .addCase(authorization.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(logout.fulfilled, (state) => {
          state.user = null ;
          state.error=undefined
        })
        .addCase(logout.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(updateUserSlice.fulfilled, (state, action) => {
          state.user = action.payload;
          state.error=undefined
        })
        .addCase(updateUserSlice.rejected, (state, action) => {
          state.error = action.error.message;
        })
    },
   });
   export const {clear} = authSlice.actions
   export default authSlice.reducer;