import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectLoggedIn } from "../slicers/authSlice";
import { fetchUserData } from "../server_thunks/userThunks";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function UserIcon () {
    const dispatch = useDispatch();
    const loggedIn = useSelector(selectLoggedIn);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [loggedIn]);

    if (!loggedIn) {
        return (<div/>);
    }

    return (
        <NavLink className="nav-link" to="/editUser">
            <UserCircleIcon className="h-6 cursor-pointer" />
        </NavLink>
    );
}
