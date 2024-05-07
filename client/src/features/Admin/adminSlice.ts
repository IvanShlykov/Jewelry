import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { Collection, CollectionAdd, IDCollection, Metall, MetallAdd, State } from './type';

const initialState: State = {
  collections: [],
  colPhotos: [],
  metalls: [],
  jewelrys: [],
  types: [],

  error: undefined,
};

export const initCollections = createAsyncThunk('collections/init', () =>
  api.initCollectionFetch(),
);

export const addCollection = createAsyncThunk('collection/add', (formData: FormData) =>
  api.addCollectionFetch(formData),
);

export const delCollection = createAsyncThunk('collection/del', (id: IDCollection) =>
  api.delCollectionFetch(id),
);

export const changeCollection = createAsyncThunk(
  'collection/change',
  ({ formData, id }: { formData: FormData; id: IDCollection }) =>
    api.changeCollectionFetch(formData, id),
);

export const initColPhotos = createAsyncThunk('colPhotos/init', () => api.initColPhotosFetch());

export const addColPhoto = createAsyncThunk('colPhoto/add', (formData: FormData) =>
  api.addColPhotoFetch(formData),
);

export const delColPhoto = createAsyncThunk('colPhoto/del', (id: IDCollection) =>
  api.delColPhotoFetch(id),
);

export const initMetalls = createAsyncThunk('metall/init', () => api.initMetallsFetch());

export const addMetall = createAsyncThunk('metall/add', (obj: MetallAdd) =>
  api.addMetallFetch(obj),
);

export const delMetall = createAsyncThunk('metall/del', (id: IDCollection) =>
  api.delMetallFetch(id),
);

export const changeMetall = createAsyncThunk('metall/change', (obj: Metall) =>
  api.changeMetallFetch(obj),
);

export const initJewelrys = createAsyncThunk('jewelrys/init', () => api.initJewelrysFetch());

export const initTypes = createAsyncThunk('types/init', () => api.initTypesFetch());

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
        state.collections = state.collections.filter((el) => el.id !== action.payload);
        state.colPhotos = state.colPhotos.filter((el) => el.collectionID !== action.payload);
        state.error = undefined;
      })
      .addCase(delCollection.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(changeCollection.fulfilled, (state, action) => {
        state.collections = state.collections.map((el) =>
          el.id === action.payload.id ? action.payload : el,
        );
        state.colPhotos = state.colPhotos.map((el) =>
          el.collectionID === action.payload.id ? { ...el, Collection: action.payload } : el,
        );
        state.error = undefined;
      })
      .addCase(changeCollection.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(initColPhotos.fulfilled, (state, action) => {
        state.colPhotos = action.payload;
        state.error = undefined;
      })
      .addCase(initColPhotos.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addColPhoto.fulfilled, (state, action) => {
        state.colPhotos.push(action.payload);
        state.colPhotos.sort((a, b) => (a.Collection.id < b.Collection.id ? -1 : 1));
        state.error = undefined;
      })
      .addCase(addColPhoto.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delColPhoto.fulfilled, (state, action) => {
        state.colPhotos = state.colPhotos.filter((el) => el.id !== action.payload);
        state.error = undefined;
      })
      .addCase(delColPhoto.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(initMetalls.fulfilled, (state, action) => {
        state.metalls = action.payload;
        state.error = undefined;
      })
      .addCase(initMetalls.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addMetall.fulfilled, (state, action) => {
        state.metalls.push(action.payload);
        state.error = undefined;
      })
      .addCase(addMetall.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delMetall.fulfilled, (state, action) => {
        state.metalls = state.metalls.filter((el) => el.id !== action.payload);
        state.error = undefined;
      })
      .addCase(changeMetall.fulfilled, (state, action) => {
        state.metalls = state.metalls.map((el) =>
          el.id === action.payload.id ? action.payload : el,
        );
        state.error = undefined;
      })
      .addCase(initJewelrys.fulfilled, (state, action) => {
        state.jewelrys = action.payload;
        state.error = undefined;
      })
      .addCase(initTypes.fulfilled, (state, action) => {
        state.types = action.payload;
        state.error = undefined;
      });
  },
});

export default adminSlice.reducer;
