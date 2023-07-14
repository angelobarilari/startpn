import React from "react";
import { Navigate } from "react-router-dom";
import Provider from "../../context";

function PrivateRoute({ element: Element }) {
    const token = localStorage.getItem("@STARTPN-TOKEN");

    return token ? <Provider>{Element}</Provider> : <Navigate to="/login" />;
}

export default PrivateRoute;
