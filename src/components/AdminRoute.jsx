import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../lib/axios";

const AdminRoute = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axiosInstance.get("/user", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setDataUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    checkLogin();
  }, []);

  return dataUser ? (
    dataUser.role === "admin" ? (
      children
    ) : (
      <Navigate to="/notadmin" />
    )
  ) : null;
};

export default AdminRoute;
