import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type {
  Hashtag,
  IDCollection,
  JewelryAdd,
  JewelryChange,
  Metall,
  MetallAdd,
  Photo,
  State,
  Stock,
  StockAdd,
} from './type';

const initialState: State = {
  collections: [],
  colPhotos: [],
  metalls: [],
  jewelrys: [],
  types: [],
  sizes: [],
  hashtags: [],
  locations: [],
  applications: [],
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

export const initJewelrys = createAsyncThunk('jewelrysAdmin/init', () => api.initJewelrysFetch());

export const initTypes = createAsyncThunk('types/init', () => api.initTypesFetch());

export const delHashTag = createAsyncThunk(
  'hashtag/del',
  (obj: { jewHashtagid: number; jewelryID: IDCollection }) => api.delHashtagFetch(obj),
);

export const addHashtagSlice = createAsyncThunk('hashtag/add', (obj: Hashtag) =>
  api.addHashtagFetch(obj),
);
// Hashtag

export const initHashtag = createAsyncThunk('hashtag/init', () => api.initHashtagFetch());

export const delPhoto = createAsyncThunk('photo/del', (photo: Photo) => api.delPhotoFetch(photo));

export const addPhotoSlice = createAsyncThunk('photo/add', (formData: FormData) =>
  api.addPhotoFetch(formData),
);

export const initSizes = createAsyncThunk('sizes/init', () => api.initSizesFetch());

export const addStock = createAsyncThunk('stock/add', (obj: StockAdd) => api.addSizeFetch(obj));

export const delStock = createAsyncThunk('stock/del', (stock: Stock) => api.delStockFetch(stock));

export const changeJewelry = createAsyncThunk('jewelry/change', (obj: JewelryChange) =>
  api.changeJewelryFetch(obj),
);

export const addJewelry = createAsyncThunk('jewelry/add', (obj: JewelryAdd) =>
  api.addJewelryFetch(obj),
);

export const delJewelry = createAsyncThunk('jewelry/del', (id: IDCollection) =>
  api.delJewelryFetch(id),
);

export const addLocation = createAsyncThunk('location/add', (formData: FormData) =>
  api.addLocationFetch(formData),
);

export const initLocation = createAsyncThunk('location/init', () => api.initlocationFetch());

export const delLocation = createAsyncThunk('location/del', (id: IDCollection) =>
  api.delLocationFetch(id),
);

export const initApplications = createAsyncThunk('applications/init', () =>
  api.initApplicationsFetch(),
);

export const closeOrderSlice = createAsyncThunk('applications/del', (id: IDCollection) =>
  api.delApplicationFetch(id),
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
      })
      .addCase(delHashTag.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          +el.id === action.payload.jewelryID
            ? {
                ...el,
                JewHashtags: el.JewHashtags.filter(
                  (elem) => elem.id !== action.payload.jewHashtagid,
                ),
              }
            : el,
        );
        state.error = undefined;
      })
      .addCase(addHashtagSlice.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                JewHashtags: [...el.JewHashtags, action.payload.jewHashtag],
              }
            : el,
        );
        state.hashtags = [...state.hashtags, action.payload.hashtag];
        state.error = undefined;
      })
      .addCase(initHashtag.fulfilled, (state, action) => {
        state.hashtags = action.payload;
        state.error = undefined;
      })
      .addCase(delPhoto.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          el.id === action.payload.jewelryID
            ? {
                ...el,
                Photos: el.Photos.filter((elem) => elem.id !== action.payload.id),
              }
            : el,
        );
        state.error = undefined;
      })
      .addCase(addPhotoSlice.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          el.id === action.payload.jewelryID
            ? {
                ...el,
                Photos: [...el.Photos, action.payload],
              }
            : el,
        );
        state.error = undefined;
      })
      .addCase(initSizes.fulfilled, (state, action) => {
        state.sizes = action.payload;
        state.error = undefined;
      })
      .addCase(addStock.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                Stocks: action.payload.stocks,
              }
            : el,
        );
        state.error = undefined;
      })
      .addCase(delStock.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          el.id === action.payload.jewelryID
            ? {
                ...el,
                Stocks: el.Stocks.filter((elem) => elem.id !== action.payload.id),
              }
            : el,
        );
        state.error = undefined;
      })
      .addCase(changeJewelry.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.map((el) =>
          el.id === action.payload.id ? action.payload : el,
        );
        state.error = undefined;
      })
      .addCase(addJewelry.fulfilled, (state, action) => {
        state.jewelrys.push(action.payload);
        state.error = undefined;
      })
      .addCase(addJewelry.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delJewelry.fulfilled, (state, action) => {
        state.jewelrys = state.jewelrys.filter((el) => el.id !== action.payload);
        state.error = undefined;
      })
      .addCase(initLocation.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.error = undefined;
      })
      .addCase(addLocation.fulfilled, (state, action) => {
        state.locations.push(action.payload);
        state.error = undefined;
      })
      .addCase(delLocation.fulfilled, (state, action) => {
        state.locations = state.locations.filter((el) => el.id !== action.payload);
        state.error = undefined;
      })
      .addCase(initApplications.fulfilled, (state, action) => {
        state.applications = action.payload;
        state.error = undefined;
      })
      .addCase(closeOrderSlice.fulfilled, (state, action) => {
        state.applications = state.applications.map((el) =>
          el.id === action.payload ? { ...el, status: 'close' } : el,
        );
        state.error = undefined;
      });
  },
});

export default adminSlice.reducer;
