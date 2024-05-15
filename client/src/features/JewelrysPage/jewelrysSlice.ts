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
export const nitMetalls = createAsyncThunk('metall/init', () => api.fetchInitMetalls());

export const initTypes = createAsyncThunk('types/init', () => api.initTypesFetch());

export const initHashtag = createAsyncThunk('hashtag/init', () => api.initHashtagFetch());

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
      })
      .addCase(nitMetalls.fulfilled, (state, action) => {
        state.metalls = action.payload;
        state.error = undefined;
      })
      .addCase(nitMetalls.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(initTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.error = undefined;
      })
      .addCase(initHashtag.fulfilled, (state, action) => {
        state.hashtags = action.payload;
        state.error = undefined;
      })
  },
});

export default jewelrysSlice.reducer;
