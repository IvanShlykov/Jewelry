import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type { StateBasket } from './type';

const initialState: StateBasket = {
  orderItems: [],
  error: undefined,
};

export const initBasket = createAsyncThunk(
  'basket/init',
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  () => api.initBasketFetch(),
);

export const addBasket = createAsyncThunk(
  'basket/add',
  (obj: { jewelryID: number|undefined; sizeID: number }) => api.addBasketFetch(obj),
);

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initBasket.fulfilled, (state, action) => {
        state.orderItems = action.payload;
        state.error = undefined;
      })
      .addCase(initBasket.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addBasket.fulfilled, (state, action) => {
        state.orderItems = action.payload;
        state.error = undefined;
      })
      .addCase(addBasket.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default basketSlice.reducer;
