import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children, data }) => {
  return data && data.role === "admin" ? children : <Navigate to="/notadmin" />;
};

export default AdminRoute;
