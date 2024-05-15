import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from './api';
import type  { State } from "./type/type";



const initialState: State = { 
    orderItems: [],
  error:undefined
 };
 
 export const initOrder = createAsyncThunk(
  'orders/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initOrderFetchUser(),
);

const personalAreaSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(initOrder.fulfilled, (state, action) => {
        state.orderItems = action.payload;
        
        state.error = undefined;
      })
      .addCase(initOrder.rejected, (state, action) => {
        state.error = action.error.message;
      })

  }
});

export default personalAreaSlice.reducer;