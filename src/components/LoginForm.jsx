import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../lib/axios";
import { Circles } from "react-loader-spinner";
import { useState } from "react";

const LoginForm = ({ setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginText, setLoginText] = useState("Login");

  const login = async (e) => {
    setLoginText(<Circles color="#FFF" height={15} />);
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", {
        username: username,
        password: password,
      });
      if (response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        setToken(response.data.data.token);
        navigate("/");
      } else {
        setLoginText("Login");
        setPassword("");
        alert("Invalid Account!");
      }
    } catch (error) {
      alert("Complete all available fields!");
      setLoginText("Login");
    }
  };

  return (
    <section className="lg:w-1/3 text-slate-800 flex items-center mx-auto">
      <div className="container px-7 lg:px-12 xl:px-20">
        <div className="mb-10">
          <h1 className="text-2xl lg:text-4xl text-slate-800 font-semibold">
            <Link to="/">
              <FontAwesomeIcon
                className="mr-3 cursor-pointer text-green-500 hover:text-green-600"
                icon={faCircleArrowLeft}
              />
            </Link>
            Login
          </h1>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3 mb-3">
          <form onSubmit={login}>
            <div className="flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="flex justify-center items-center mt-3 rounded-full focus:outline-none bg-green-500 h-10 text-gray-200 hover:bg-green-600 w-full"
              type="submit"
            >
              {loginText}
            </button>
          </form>
        </div>
        <div>
          <h2>New here? Create your account.</h2>
          <Link to="/register">
            <button
              className="my-3 rounded-full bg-blue-700 h-10 text-gray-200 focus:outline-none hover:bg-blue-800 w-full"
              type="submit"
            >
              Register
            </button>
          </Link>
          <p className="text-slate-600">
            By signing up, agree to our terms and conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
