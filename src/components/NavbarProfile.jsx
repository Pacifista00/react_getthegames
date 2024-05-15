import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axiosInstance from "../lib/axios";

const NavbarProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user", {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-7">
      {data ? (
        <div className="container mx-auto">
          <ul className="flex gap-3 justify-center text-gray-80000">
            <li>
              <Link to="/profile">
                <button className="w-28 cursor-pointer bg-slate-200 py-1 rounded-full">
                  Profile
                </button>
              </Link>
            </li>
            <li>
              <Link to="/basket">
                <button className="w-28 cursor-pointer bg-slate-200 py-1 rounded-full">
                  Basket
                </button>
              </Link>
            </li>
            {data.role === "admin" && (
              <li>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="w-28 cursor-pointer bg-slate-200 py-1 rounded-full z-[2] relative"
                  >
                    Manage
                    <FontAwesomeIcon
                      className={`ml-1 transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      icon={faCircleChevronDown}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="absolute bg-slate-100 border w-28 -mt-5 transition duration-300 rounded-b-2xl overflow-hidden text-green-500"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <ul className="py-1 mt-5" role="none">
                        <Link to="/manage/console">
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-slate-200"
                            role="menuitem"
                          >
                            Console
                          </li>
                        </Link>
                        <Link to="/manage/game">
                          <li
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-slate-200"
                            role="menuitem"
                          >
                            Game
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
export default NavbarProfile;
