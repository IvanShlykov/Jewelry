import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { State } from './type';

const initialState: State = { jewelrys: [], error: undefined };

export const initJewelrys = createAsyncThunk(
  'jewelrys/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initJewelryFetch(),
);

const jewelrysSlice = createSlice({
  name: 'jewelrys',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initJewelrys.fulfilled, (state, action) => {
        state.jewelrys = action.payload;
        state.error = undefined;
      })
      .addCase(initJewelrys.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default jewelrysSlice.reducer;
