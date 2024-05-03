import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';
import jewelrySlice from '../features/JewelrysPage/jewelrySlice';
import adminSlice from '../features/Admin/adminSlice';

const store = configureStore({
  reducer: {
    authState: authSlice,
    jewelryState: jewelrySlice,
    adminState: adminSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

// ksdjgvisdbck//
