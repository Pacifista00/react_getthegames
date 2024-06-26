import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../lib/axios";
import { Circles } from "react-loader-spinner";
import { useState } from "react";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registerText, setRegisterText] = useState("Register");

  const register = async (e) => {
    setRegisterText(<Circles color="#FFF" height={15} />);
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/register", {
        name: name,
        username: username,
        email: email,
        password: password,
        password_confirm: passwordConfirm,
      });
      navigate("/login");
    } catch (error) {
      alert("Complete all available fields!");
      setRegisterText("Register");
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
            Register
          </h1>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3 mb-3">
          <form onSubmit={register}>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
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
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
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
            <div className="flex flex-col">
              <label htmlFor="passwordconfirm">Confirm Password</label>
              <input
                id="passwordconfirm"
                className="border-b-2 pt-1 px-2 focus:outline-none focus:border-black"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <button
              className="flex justify-center items-center mt-3 rounded-full focus:outline-none bg-green-500 h-10 text-gray-200 hover:bg-green-600 w-full"
              type="submit"
            >
              {registerText}
            </button>
          </form>
        </div>
        <div>
          <h2>Have account? Login here.</h2>
          <Link to="/login">
            <button
              className="mt-3 rounded-full bg-blue-700 h-10 text-gray-200 focus:outline-none hover:bg-blue-800 w-full"
              type="submit"
            >
              Login
            </button>
          </Link>
          <p className="mt-2 text-slate-600">
            By signing up, agree to our terms and conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
