import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";
import React, { useState, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.token ? navigate("/") : "";
  }, []);

  const [token, setToken] = useState(null);
  return (
    <div className="flex min-h-screen w-screen">
      <LoginForm setToken={setToken} />
      <LoginImage />
    </div>
  );
};

export default Login;
