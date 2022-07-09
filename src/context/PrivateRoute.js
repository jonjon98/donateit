import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (user ? <Component /> : <Navigate replace to="login"/>
  );
};

export default PrivateRoute;