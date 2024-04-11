import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/addproject" replace />
  );
};

export default ProtectedRoute;
