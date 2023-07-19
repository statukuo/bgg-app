import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./components/home";
import BottomNav from "./components/bottomNav";
import Header from "./components/header";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login";
import UserEdit from "./components/userEdit";
import { selectLoggedIn, setToken } from "./slicers/authSlice";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/_styles.scss";

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
            <Header />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/list" element={
                    <PrivateRoute redirectPath="/login" isAllowed={loggedIn}>
                        <RecordList />
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
            <BottomNav />
        </div>
    );
};

export default App;
