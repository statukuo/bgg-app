import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/navbar";
import GameList from "./components/gameList";
import Edit from "./components/edit";
import Create from "./components/create";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login";
import UserEdit from "./components/userEdit";
import { selectLoggedIn, setToken } from "./slicers/authSlice";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => {
    const params = new URLSearchParams(window.location.search);

    const dispatch = useDispatch();

    if (params.get("token")) {
        window.localStorage.setItem("jwt", params.get("token"));
        dispatch(setToken(params.get("token")));
    }

    const loggedIn = useSelector(selectLoggedIn);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={
                    <PrivateRoute redirectPath="/login" isAllowed={loggedIn}>
                        <GameList />
                    </PrivateRoute>}
                />
                <Route path="/create" element={
                    <PrivateRoute redirectPath="/login" isAllowed={loggedIn}>
                        <Create />
                    </PrivateRoute>}
                />
                <Route path="/edit/:id" element={
                    <PrivateRoute redirectPath="/login" isAllowed={loggedIn}>
                        <Edit />
                    </PrivateRoute>}
                />
                <Route path="/editUser" element={
                    <PrivateRoute redirectPath="/login" isAllowed={loggedIn}>
                        <UserEdit />
                    </PrivateRoute>}
                />
            </Routes>
        </div>
    );
};

export default App;
