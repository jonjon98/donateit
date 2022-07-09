import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (user ? <Component /> : <Navigate replace to="login"/>
  );
};

export default PrivateRoute;