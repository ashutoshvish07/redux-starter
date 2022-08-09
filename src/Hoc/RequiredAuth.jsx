import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  //const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  const from = {
    path: location.path,
  };
  if (isAuth) return children;

  return <Navigate to={"/login"} state={from} replace />;
};

export default RequiredAuth;
