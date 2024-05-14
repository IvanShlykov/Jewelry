import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';

import jewelrysSlice from '../features/JewelrysPage/jewelrysSlice';
import adminSlice from '../features/Admin/adminSlice';
import  addCustomJewelerySlice  from '../features/AddCustomJewelery/jewelrysSlice';
import searchReducer from '../features/Search/searchSlice';
import newJewelrysSlice from '../features/NewPage/newJewelrysSlice';
import collectionsSlice from '../features/CollectionsPage/specificCollectionSlice';
import specificCollectionSlice from '../features/CollectionsPage/specificCollectionSlice';
import LocationSlice from '../features/location/LocationSlice';







const store = configureStore({
  reducer: {
    authState: authSlice,
    jewelrysState: jewelrysSlice,
    adminState: adminSlice,
    customJewelerysState: addCustomJewelerySlice,
    search: searchReducer,
    newJewelrysState: newJewelrysSlice,
    collectionsState: collectionsSlice,
    specificCollectionState: specificCollectionSlice,
    locationState:LocationSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// ksdjgvisdbck//
