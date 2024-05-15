import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from './api';
import type  { State } from "./type/type";



const initialState: State = { 
    name:'',
    email:'',
    phone: '',
    orderItems: [],
  error:undefined
 };
 
 export const initBasket = createAsyncThunk(
  'baskets/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initBasketFetchUser(),
);

const personalAreaSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(initBasket.fulfilled, (state, action) => {
        state.orderItems = action.payload;
        state.error = undefined;
      })
      .addCase(initBasket.rejected, (state, action) => {
        state.error = action.error.message;
      })

  }
});

export default personalAreaSlice.reducer;