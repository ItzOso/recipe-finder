import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
function RedirectIfAuthenticated({ children }) {
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();

  const from = location.state?.from || "/";
  if (currentUser) {
    return <Navigate to={from} />;
  }

  return children;
}

export default RedirectIfAuthenticated;
