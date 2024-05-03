import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { State } from './type';

const initialState: State = { jewelry: [], error: undefined };

export const initJewelry = createAsyncThunk(
  'jewelry/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initJewelryFetch(),
);

const jewelrySlice = createSlice({
  name: 'jewelry',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initJewelry.fulfilled, (state, action) => {
        state.jewelry = action.payload;
        state.error = undefined;
      })
      .addCase(initJewelry.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default jewelrySlice.reducer;
