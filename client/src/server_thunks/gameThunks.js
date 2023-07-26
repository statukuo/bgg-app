import Axios from "axios";
import { setGameToEdit, setGames } from "../slicers/gamesSlice";

export const getGames = () => async (dispatch, getState) => {
    const response = await Axios.get("http://localhost:5050/game/", { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setGames(response.data));
};

export const deleteGame = (id) => async (dispatch, getState) => {
    await Axios.delete(`http://localhost:5050/game/${id}`, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    const newGames = getState().games.allGames.filter((el) => el._id !== id) || [];

    dispatch(setGames(newGames));
};

export const getGameToEdit = (id) => async (dispatch, getState) => {
    const response = await Axios.get(`http://localhost:5050/game/${id}`, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setGameToEdit(response.data));
};

export const patchGame = (id, newGameData) => async (dispatch, getState) => {
    await Axios.patch(`http://localhost:5050/game/${id}`, newGameData, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setGameToEdit(newGameData));
};

export const createGame = (newGameData) => async (dispatch, getState) => {
    await Axios.post("http://localhost:5050/game/", newGameData, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setGameToEdit(newGameData));
};

export const joinGame = (gameId, userId) => async (dispatch, getState) => {
    const response = await Axios.post("http://localhost:5050/game/join", { gameId, userId }, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setGameToEdit(response.data));
    dispatch(getGames());
};

export const leaveGame = (gameId, userId) => async (dispatch, getState) => {
    const response = await Axios.post("http://localhost:5050/game/leave", { gameId, userId }, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setGameToEdit(response.data));
    dispatch(getGames());
};
