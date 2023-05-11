import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
});

export const selectUser = (state) => state.user;

// Action creators are generated for each case reducer function
export const {
    setUser
} = userSlice.actions;

export default userSlice.reducer;
