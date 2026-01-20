import type { RootState } from '@reduxjs/toolkit/query';
import { store } from '../store';

export type TRootState = ReturnType<typeof store.getState>;

export const MealSelector = (state: TRootState) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
