import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../slice/authUsers.js";

const AuthRoute = ({ path, element }) => {
    const userIsAuthenticated = useSelector(isAuthenticated);
  
    return userIsAuthenticated ? (
     <h1>Welcome to members club</h1>
    ) : (
      <Navigate to="/login" />
    );
  };
  
  export default AuthRoute;
