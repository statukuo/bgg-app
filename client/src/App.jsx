import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/layout/layout";
import GameList from "./components/games/gameList";
import Edit from "./components/games/editGame";
import Create from "./components/games/createGame";

import PrivateRoute from "./components/privateRoute";
import Login from "./components/user/login";
import UserEdit from "./components/user/userEdit";
import { selectLoggedIn, setToken } from "./slicers/authSlice";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/_styles.scss";
import { getUsers } from "./server_thunks/userThunks";

const App = () => {
    const params = new URLSearchParams(window.location.search);

    const dispatch = useDispatch();

    if (params.get("token")) {
        window.localStorage.setItem("jwt", params.get("token"));
        dispatch(setToken(params.get("token")));
    }

    const loggedIn = useSelector(selectLoggedIn);

    if (loggedIn) {
        dispatch(getUsers());
    }

    return (
        <div>
            <Layout>
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
            </Layout>
        </div>
    );
};

export default App;
