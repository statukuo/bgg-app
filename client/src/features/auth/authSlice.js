import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: ""
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const selectToken = (state) => state.auth.token;

// Action creators are generated for each case reducer function
export const {
    setToken
} = authSlice.actions;

export default authSlice.reducer;
