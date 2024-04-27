import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="my-10">
      <div className="container mx-auto">
        <ul className="flex gap-7 justify-center text-gray-80000">
          <li>
            <button className="w-32 cursor-pointer bg-slate-200 py-1 rounded-full">
              Account
            </button>
          </li>
          <li>
            <Link to="/basket">
              <button className="w-32 cursor-pointer bg-slate-200 py-1 rounded-full">
                Basket
              </button>
            </Link>
          </li>
          <li>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-32 cursor-pointer bg-slate-200 py-1 rounded-full"
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
                  className="border -mt-5 transition duration-300 rounded-b-2xl overflow-hidden text-green-500"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1 mt-5" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-slate-200 "
                      role="menuitem"
                    >
                      Consoles
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-slate-200 "
                      role="menuitem"
                    >
                      Games
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-slate-200 "
                      role="menuitem"
                    >
                      Genre
                    </a>
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarProfile;
