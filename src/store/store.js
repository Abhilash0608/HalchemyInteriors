import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from '../store/slices/services/servicesSlice'
export const store = configureStore({
    reducer: {
     services:servicesReducer
    },
  })