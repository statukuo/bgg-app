import Axios from "axios";
import { setUser } from "../slicers/userSlice";

export const fetchUserData = () => async (dispatch, getState) => {
    const response = await Axios.get("http://localhost:5050/user/current", { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setUser(response.data));
};

export const patchCurrentUser = (id, newUserData) => async (dispatch, getState) => {
    const response = await Axios.patch("http://localhost:5050/user/current", newUserData, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setUser(response.data));
};
