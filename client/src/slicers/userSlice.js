import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        discordId: "",
        phoneNumber: "",
        userList: []
    },
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.discordId = action.payload.discordId;
            state.phoneNumber = action.payload.phoneNumber;
        },
        setUserList: (state, action) => {
            state.userList = action.payload;
        }
    }
});

export const selectUser = (state) => state.user;
export const selectUserList = (state) => state.user.userList;

// Action creators are generated for each case reducer function
export const {
    setUser,
    setUserList
} = userSlice.actions;

export default userSlice.reducer;
