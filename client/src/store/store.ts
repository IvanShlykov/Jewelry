import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';
import jewelrysSlice from '../features/JewelrysPage/jewelrysSlice';

const store = configureStore({
  reducer: {
    authState: authSlice,
    jewelrysState: jewelrysSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

//ksdjgvisdbck//
