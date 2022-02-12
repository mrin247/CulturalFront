import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
