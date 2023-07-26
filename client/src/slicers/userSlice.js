import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        discordId: "",
        phoneNumber: ""
    },
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.discordId = action.payload.discordId;
            state.phoneNumber = action.payload.phoneNumber;
        }
    }
});

export const selectUser = (state) => state.user;

// Action creators are generated for each case reducer function
export const {
    setUser
} = userSlice.actions;

export default userSlice.reducer;
