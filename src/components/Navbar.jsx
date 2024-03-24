import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
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
  return (
    <header
      className={`fixed w-full z-10 top-0 text-sm font-medium py-2 shadow-lg bg-gray-50 ${
        scrollPosition > 0 ? "" : "bg-opacity-10"
      }`}
    >
      <nav className="md:flex relative container justify-between mx-auto px-4 items-center">
        <div className="logo text-green-500">
          <h5>Logo</h5>
        </div>
        <div
          className={`nav-links mt-5 md:mt-0 md:block transition duration-150 ease-out ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className="md:flex gap-7 text-gray-400">
            <li className="hover:text-gray-600 cursor-pointer mb-2 md:mb-0">
              Home
            </li>
            <li className="hover:text-gray-600 cursor-pointer mb-2 md:mb-0">
              Console
            </li>
            <li className="hover:text-gray-600 cursor-pointer mb-2 md:mb-0">
              Game
            </li>
            <li className="hover:text-gray-600 cursor-pointer mb-2 md:mb-0">
              Basket
            </li>
          </ul>
        </div>
        <div className={`md:block mt-3 md:mt-0 ${isOpen ? "" : "hidden"}`}>
          {isLogin ? (
            <div className="flex gap-3">
              <button className="rounded-full border-4 border-green-500 py-2 px-5 text-gray-400 hover:border-green-600 hover:text-gray-500 w-full">
                Account
              </button>
              <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 w-full">
                Login
              </button>
            </div>
          )}
        </div>
        <div
          className="md:hidden absolute right-4 top-0 cursor-pointer"
          onClick={toggleBar}
        >
          <FontAwesomeIcon className="text-slate-200 text-xl" icon={faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
