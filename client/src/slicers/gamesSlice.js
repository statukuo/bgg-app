import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
    name: "games",
    initialState: {
        allGames: [],
        gameToEdit: null
    },
    reducers: {
        setGames: (state, action) => {
            state.allGames = action.payload;
        },
        setGameToEdit: (state, action) => {
            state.gameToEdit = action.payload;
        }
    }
});

export const selectGames = (state) => state.games.allGames;
export const selectGameToEdit = (state) => state.games.gameToEdit;

export const {
    setGames,
    setGameToEdit
} = gamesSlice.actions;

export default gamesSlice.reducer;
