import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';

import jewelrysSlice from '../features/JewelrysPage/jewelrysSlice';
import adminSlice from '../features/Admin/adminSlice';
import  addCustomJewelerySlice  from '../features/AddCustomJewelery/jewelrysSlice';



const store = configureStore({
  reducer: {
    authState: authSlice,
    jewelrysState: jewelrysSlice,
    adminState: adminSlice,
    CustomJewelerysState: addCustomJewelerySlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// ksdjgvisdbck//
