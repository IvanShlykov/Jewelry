import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { IDJewelry, IDUser, State } from './type';

const initialState: State = { 
  collections: [],
  colPhotos: [],
  metalls: [],
  jewelrys: [],
  types: [],
  sizes: [],
  hashtags: [],
  favorites: [],
  error: undefined };

export const initJewelrys = createAsyncThunk(
  'jewelrysAdmin/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initJewelryFetch(),
);

export const initCollectionsHome = createAsyncThunk('collectionsHome/init', () =>
  api.initCollectionHomeFetch(),
);

export const initFavorites = createAsyncThunk(
  'favorites/init',
  () => api.initFavoritesFetch(),
);

export const addFavorite = createAsyncThunk(
  'favorite/add',
  (obj: { userID: IDUser, jewelryID: IDJewelry | undefined }) => api.addFavoriteFetch(obj),
);

export const removeFavorite = createAsyncThunk(
  'favorite/remove',
  async (obj: { userID: IDUser; jewelryID: IDJewelry | undefined }) => 
     api.removeFavoriteFetch(obj),
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
      .addCase(initFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.error = undefined;
      })
      .addCase(initFavorites.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        if (action.payload) {
          state.favorites.push(action.payload);
        }
        state.error = undefined;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(el => !(el.userID === action.payload?.userID && el.jewelryID === action.payload?.jewelryID));
        state.error = undefined;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default jewelrysSlice.reducer;
