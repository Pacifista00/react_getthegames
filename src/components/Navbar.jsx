import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../lib/axios";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    localStorage.token ? setIsLogin(true) : setIsLogin(false);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      localStorage.clear();
      setToken(null);
      navigate("/login");
    } catch (error) {
      navigate("/login");
    }
  };
  return (
    <header
      className={`fixed w-full z-10 top-0 text-sm font-medium shadow-lg bg-gray-50 transition duration-300 ${
        scrollPosition > 0 ? "" : "bg-opacity-10"
      }
      ${isOpen ? "bg-opacity-100" : ""} `}
    >
      <nav className="md:flex relative container py-2 mx-auto px-4 items-center">
        <img
          src="../../public/images/logo/gtglogo.png"
          className="h-7 flex-none mr-7"
          alt=""
        />
        <div
          className={`flex-1 nav-links mt-3 md:mt-0 md:block transition duration-150 ease-out ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className="md:flex gap-7 text-slate-500 md:text-slate-300">
            <li className="hover:text-slate-600 md:hover:text-slate-500 cursor-pointer mb-2 md:mb-0">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-slate-600 md:hover:text-slate-500 cursor-pointer mb-2 md:mb-0">
              <Link to="/consoles">Consoles</Link>
            </li>
            <li className="hover:text-slate-600 md:hover:text-slate-500 cursor-pointer mb-2 md:mb-0">
              <Link to="/games">Games</Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex-shrink-0 md:block my-3 md:my-0 ${
            isOpen ? "" : "hidden"
          }`}
        >
          {isLogin ? (
            <div className="flex gap-3">
              <Link to="/profile" className="w-full">
                <button className="rounded-full bg-slate-200 py-2 px-5 text-gray-400 hover:text-green-600 w-full">
                  Account
                </button>
              </Link>
              <button
                onClick={logout}
                className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button>
                <Link
                  className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full"
                  to="/login"
                >
                  Login
                </Link>
              </button>
            </div>
          )}
        </div>
        <div
          className="md:hidden absolute right-4 top-3 cursor-pointer"
          onClick={toggleBar}
        >
          <FontAwesomeIcon
            className="text-slate-200 text-xl my-auto"
            icon={faBars}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
