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
  newJewelrys: [],
  error: undefined };

export const initNewJewelrys = createAsyncThunk(
  'newJewelrys/init',
  () => api.initNewJewelrysFetch(),
);

export const initCollectionsHome = createAsyncThunk('collectionsHome/init', () =>
  api.initCollectionHomeFetch(),
);

const newJewelrysSlice = createSlice({
  name: 'newJewelrys',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initNewJewelrys.fulfilled, (state, action) => {
        state.newJewelrys = action.payload;
        state.error = undefined;
      })
      .addCase(initNewJewelrys.rejected, (state, action) => {
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

export default newJewelrysSlice.reducer;
