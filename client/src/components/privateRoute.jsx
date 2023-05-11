import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute  ({ isAllowed, redirectPath = "/", children }) {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};
