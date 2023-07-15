import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../pages/PrivateRoute";

function AppStack() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />

                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard/*"
                    element={<PrivateRoute element={<Dashboard />} />}
                />
            </Routes>
        </Router>
    );
}

export default AppStack;
