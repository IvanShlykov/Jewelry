import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { State } from './type';
import type { IDCollection } from '../JewelrysPage/type';

const initialState: State = {
  collections: [],
  colPhotos: [],
  metalls: [],
  jewelrysSpecificCollection: [],
  types: [],
  sizes: [],
  hashtags: [],
  error: undefined,
};

export const initCollectionsHome = createAsyncThunk('collectionsHome/init', () =>
  api.initCollectionHomeFetch(),
);

export const initSpecificCollection = createAsyncThunk('specificCollections/init', (collectionID: IDCollection) =>
  api.initSpecificCollectionFetch(collectionID),
);

const specificCollectionSlice = createSlice({
  name: 'specificCollection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initSpecificCollection.fulfilled, (state, action) => {
        state.jewelrysSpecificCollection = action.payload;
        state.error = undefined;
      })
      .addCase(initSpecificCollection.rejected, (state, action) => {
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

export default specificCollectionSlice.reducer;
