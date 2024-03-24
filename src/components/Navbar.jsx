import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-gray-100 font-medium py-3 shadow-lg">
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
        <div className={`md:block ${isOpen ? "" : "hidden"}`}>
          {isLogin ? (
            <div className="flex gap-3">
              <button className="rounded-full border-4 border-green-500 py-2 px-5 text-gray-400 mt-4 md:mt-0 hover:border-green-600 hover:text-gray-500 w-full">
                Account
              </button>
              <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 mt-4 md:mt-0 w-full">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button className="rounded-full bg-green-500 py-2 px-5 text-gray-200 hover:bg-green-600 mt-4 md:mt-0 w-full">
                Login
              </button>
            </div>
          )}
        </div>
        <div
          className="md:hidden absolute right-4 top-0 cursor-pointer"
          onClick={toggleBar}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
