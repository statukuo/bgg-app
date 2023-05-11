import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slicers/authSlice";
import userSlice from "./slicers/userSlice";
import recordsSlice from "./slicers/recordsSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        records: recordsSlice,
        user: userSlice
    }
});
