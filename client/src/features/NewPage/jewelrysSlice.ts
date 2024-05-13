import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { State } from './type';

const initialState: State = { 
  collections: [],
  colPhotos: [],
  metalls: [],
  jewelrys: [],
  types: [],
  sizes: [],
  hashtags: [],
  error: undefined };

export const initJewelrys = createAsyncThunk(
  'jewelrysAdmin/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initJewelryFetch(),
);

export const initCollectionsHome = createAsyncThunk('collectionsHome/init', () =>
  api.initCollectionHomeFetch(),
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
      })
      .addCase(initCollectionsHome.fulfilled, (state, action) => {
        state.collections = action.payload;
        state.error = undefined;
      })
      .addCase(initCollectionsHome.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default jewelrysSlice.reducer;
