import { createSlice } from '@reduxjs/toolkit'
import type { TCartItem, TInitialCart } from './TCartSlice';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: TInitialCart = {
    cartItems: [],
    count: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<TCartItem>) {
            const { id, name, price, image, quantity } = action.payload;

            const existingItem = state.cartItems.find(item => item.name === name);

            state.count += quantity;

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cartItems.push({
                    id,
                    name,
                    price,
                    image,
                    quantity
                });
            }
        },
        updateQuantity(state, action) {
            const {id, quantity} = action.payload;

            const updItem = state.cartItems.find(item => item.id === id)

            if (updItem) {
                updItem.quantity = quantity
            }
        },
        deleteItem (state, action) {
            const { id } = action.payload;

            state.cartItems = state.cartItems.filter(item => item.id !== id)
        }        
    }
})




export const { addToCart, updateQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;