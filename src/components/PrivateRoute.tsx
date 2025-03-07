import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = true; // Reemplaza con lógica real

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;