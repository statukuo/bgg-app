import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login";

const App = () => {
    const params = new URLSearchParams(window.location.search);

    // eslint-disable-next-line no-console
    console.log(params);

    if (params.get("token")) {
        // eslint-disable-next-line no-console
        console.log(params.get("token"));
        window.localStorage.setItem("jwt", params.get("token"));
    }

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={
                    <PrivateRoute redirectPath="/login" isAllowed={window.localStorage.getItem("jwt")}>
                        <RecordList />
                    </PrivateRoute>}
                />
                <Route path="/create" element={
                    <PrivateRoute redirectPath="/login" isAllowed={window.localStorage.getItem("jwt")}>
                        <Create />
                    </PrivateRoute>}
                />
                <Route path="/edit" element={
                    <PrivateRoute redirectPath="/login" isAllowed={window.localStorage.getItem("jwt")}>
                        <Edit />
                    </PrivateRoute>}
                />
            </Routes>
        </div>
    );
};

export default App;
