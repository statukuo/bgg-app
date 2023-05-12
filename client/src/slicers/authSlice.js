import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        loggedIn: false
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;

            state.loggedIn =  action.payload && action.payload !== "";
        },
        setLoggedin: (state, action) => {
            state.loggedIn = action.payload;
        }
    }
});

export const selectToken = (state) => state.auth.token;
export const selectLoggedIn = (state) => state.auth.loggedIn;

// Action creators are generated for each case reducer function
export const {
    setToken,
    setLoggedin
} = authSlice.actions;

export default authSlice.reducer;
