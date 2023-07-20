import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectLoggedIn, setLoggedin } from "../slicers/authSlice";
import { fetchUserData } from "../server_thunks/userThunks";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function LogoutButton () {
    const dispatch = useDispatch();
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [loggedIn]);

    if (!loggedIn) {
        return (<div/>);
    }

    const handleLogoutClick = () => {
        dispatch(setLoggedin(false));
    };

    return (
        <NavLink className="nav-link hover:bg-red-600 text-white font-semibold py-2 px-2 rounded" onClick={handleLogoutClick}  to="/login">
            <ArrowRightOnRectangleIcon className="h-6 cursor-pointer" />
        </NavLink>
    );
}
