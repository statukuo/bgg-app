import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slicers/authSlice";
import userSlice from "./slicers/userSlice";
import gamesSlice from "./slicers/gamesSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        games: gamesSlice,
        user: userSlice
    }
});
