import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        log: false,
        error: null,
    },
    reducers: {
        LogIn(state) {
            state.log = true;
            state.error = null;
        },
        LoginFail(state, action) {
            state.error = action.payload;
        },
        LogOut(state) {
            state.log = false;
        },

        
    }
})

export const { LogIn, LogOut, LoginFail } = authSlice.actions
export default authSlice.reducer;
