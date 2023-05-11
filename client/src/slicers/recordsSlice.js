import { createSlice } from "@reduxjs/toolkit";

export const recordsSlice = createSlice({
    name: "records",
    initialState: {
        allRecords: [],
        recordToEdit: null
    },
    reducers: {
        setRecords: (state, action) => {
            state.allRecords = action.payload;
        },
        setRecordToEdit: (state, action) => {
            state.recordToEdit = action.payload;
        }

    }
});

export const selectRecords = (state) => state.records.allRecords;
export const selectRecordToEdit = (state) => state.records.recordToEdit;

export const {
    setRecords,
    setRecordToEdit
} = recordsSlice.actions;

export default recordsSlice.reducer;
