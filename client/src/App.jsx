import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { useDispatch } from "react-redux";

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login";
import { setToken } from "./features/auth/authSlice";

const App = () => {
    const params = new URLSearchParams(window.location.search);

    const dispatch = useDispatch();

    if (params.get("token")) {
        window.localStorage.setItem("jwt", params.get("token"));
        dispatch(setToken(params.get("token")));
    }

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={
                    <PrivateRoute redirectPath="/login" isAllowed={true}>
                        <RecordList />
                    </PrivateRoute>}
                />
                <Route path="/create" element={
                    <PrivateRoute redirectPath="/login" isAllowed={true}>
                        <Create />
                    </PrivateRoute>}
                />
                <Route path="/edit" element={
                    <PrivateRoute redirectPath="/login" isAllowed={true}>
                        <Edit />
                    </PrivateRoute>}
                />
            </Routes>
        </div>
    );
};

export default App;
