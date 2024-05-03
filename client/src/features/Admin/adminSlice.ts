import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { Collection, CollectionAdd, IDCollection, State } from './type';

const initialState: State = { collections: [], error: undefined };

export const initCollections = createAsyncThunk('collections/init', () =>
  api.initCollectionFetch(),
);

export const addCollection = createAsyncThunk('collection/add', (collection: CollectionAdd) =>
  api.addCollectionFetch(collection),
);

export const delCollection = createAsyncThunk('collection/del', (id: IDCollection) =>
  api.delCollectionFetch(id),
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initCollections.fulfilled, (state, action) => {
        state.collections = action.payload;
        state.error = undefined;
      })
      .addCase(initCollections.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addCollection.fulfilled, (state, action) => {
        state.collections.push(action.payload);
        state.error = undefined;
      })
      .addCase(addCollection.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delCollection.fulfilled, (state, action) => {
        state.collections = state.collections.filter((el) => el.id !== action.payload)
        state.error = undefined;
      })
      .addCase(delCollection.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
