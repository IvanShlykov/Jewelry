import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../JewelrysPage/api';
import type { StateBasket } from '../JewelrysPage/type';

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
  (obj: { jewelryID: number | undefined; sizeID: number }) => api.addBasketFetch(obj),
);

export const delOrderItem = createAsyncThunk(
  'orderItem/del',
  ({ orderID, itemID }: { orderID: number; itemID: number }) =>
    api.delOrderItemFetch({ orderID, itemID }),
);

export const delOrder = createAsyncThunk(
  'order/del',
  ({ orderID }: { orderID: number }) =>
    api.delOrderFetch({ orderID }),
);

export const buyBasket
= createAsyncThunk(
  'order/buy',
  ({ orderID }: { orderID: number }) =>
    api.buyOrderFetch({ orderID }),
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
      })
      .addCase(delOrderItem.fulfilled, (state, action) => {
        state.orderItems = state.orderItems.filter((el) => el.id !== action.payload);
        state.error = undefined;
      })
      .addCase(delOrderItem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(delOrder.fulfilled, (state) => {
        state.orderItems = []
        state.error = undefined;
      })
      .addCase(delOrder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(buyBasket.fulfilled, (state) => {
        state.orderItems = []
        state.error = undefined;
      })
      .addCase(buyBasket.rejected, (state, action) => {
        state.error = action.error.message;
      })
  },
});

export default basketSlice.reducer;
