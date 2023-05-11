import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slicers/userSlice";
import { NavLink } from "react-router-dom";
import { selectLoggedIn } from "../slicers/authSlice";
import { fetchUserData } from "../server_thunks/userThunks";

export default function UserIcon () {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [loggedIn]);

    if (!loggedIn) {
        return (<div/>);
    }

    return (
        <NavLink className="nav-link" to="/create">
               Welcome: {user.name}
        </NavLink>
    );
}
