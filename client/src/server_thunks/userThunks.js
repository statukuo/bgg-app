import Axios from "axios";
import { setUser, setUserList } from "../slicers/userSlice";
import { setLoggedin } from "../slicers/authSlice";

export const getUsers = () => async (dispatch, getState) => {
    const response = await Axios.get("http://localhost:5050/user/", { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setUserList(response.data));
};

export const fetchUserData = () => async (dispatch, getState) => {
    let response = {};
    try {
        response = await Axios.get("http://localhost:5050/user/current", { headers: { Authorization: `Bearer ${getState().auth.token}` } });
    } catch (error) {
        dispatch(setLoggedin(false));
        return;
    }

    dispatch(setUser(response.data));
};

export const patchCurrentUser = (id, newUserData) => async (dispatch, getState) => {
    const response = await Axios.patch("http://localhost:5050/user/current", newUserData, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setUser(response.data));
};
