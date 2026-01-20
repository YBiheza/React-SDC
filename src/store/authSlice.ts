import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TInitial } from "./TAuthSlice";

const initialState: TInitial = {
    log: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LogIn(state) {
            state.log = true;
            state.error = null;
        },
        LoginFail(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        LogOut(state) {
            state.log = false;
        },

        
    }
})

export const { LogIn, LogOut, LoginFail } = authSlice.actions
export default authSlice.reducer;
