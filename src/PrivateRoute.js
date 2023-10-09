import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem("accessToken");
    const isAuthenticated = !!token; // If there's a token, then the user is authenticated

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
