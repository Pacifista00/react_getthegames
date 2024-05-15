import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";
import React from "react";

const Login = ({ setToken }) => {
  return (
    <div className="flex min-h-screen w-screen">
      <LoginForm setToken={setToken} />
      <LoginImage />
    </div>
  );
};

export default Login;
