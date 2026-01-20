import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import mealsReducer from './mealsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    meals: mealsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
