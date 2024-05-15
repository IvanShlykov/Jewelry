import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { State } from "./type/type";
import * as api from './api';

const initialState: State = { 
  location:[],
  error:undefined
 };
 export const initLocation= createAsyncThunk('locations/init', () => api.initLocationFetch());

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initLocation.fulfilled, (state, action) => {
        state.location = action.payload;
        state.error = undefined;
      })
      .addCase(initLocation.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default locationSlice.reducer;