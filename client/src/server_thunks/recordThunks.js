import Axios from "axios";
import { setRecordToEdit, setRecords } from "../slicers/recordsSlice";

export const getRecords = () => async (dispatch, getState) => {
    const response = await Axios.get("http://localhost:5050/record/", { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setRecords(response.data));
};

export const deleteRecord = (id) => async (dispatch, getState) => {
    await Axios.delete(`http://localhost:5050/record/${id}`, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    const newRecords = getState().records.filter((el) => el._id !== id);

    dispatch(setRecords(newRecords));
};

export const getRecordToEdit = (id) => async (dispatch, getState) => {
    const response = await Axios.get(`http://localhost:5050/record/${id}`, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setRecordToEdit(response.data));
};

export const patchRecord = (id, newRecordData) => async (dispatch, getState) => {
    await Axios.patch(`http://localhost:5050/record/${id}`, newRecordData, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setRecordToEdit(newRecordData));
};

export const createRecord = (newRecordData) => async (dispatch, getState) => {
    await Axios.post("http://localhost:5050/record/", newRecordData, { headers: { Authorization: `Bearer ${getState().auth.token}` } });

    dispatch(setRecordToEdit(newRecordData));
};
