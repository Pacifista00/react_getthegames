import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [isLink, setIsLink] = useState(false);
  const [isGenre, setIsGenre] = useState(false);
  const [isConsole, setIsConsole] = useState(false);

  const linkDropdown = () => {
    setIsLink(!isLink);
  };
  const genreDropdown = () => {
    setIsGenre(!isGenre);
  };
  const consoleDropdown = () => {
    setIsConsole(!isConsole);
  };

  return (
    <footer className="bg-slate-800 text-slate-200 w-full mt-auto">
      <div className="container px-4 md:px-20 mx-auto py-14">
        <div className="logo mb-7">
          <img
            className="w-60 md:w-80"
            src="../../public/images/logo/gtglogo.png"
            alt=""
          />
        </div>
        <div className="md:flex md:justify-between gap-8 text-xs lg:text-base">
          <p className="mb-5 md:mb-0">
            Copyright ©GetTheGames. All rights reserved. GetTheGames is a
            registered trademark and all other trademarks, logos and copyrights
            are the property of their respective owners.
          </p>
          <div className="footer-link mb-3 md:mb-0">
            <h6 className="text-lg bg-slate-800 md:font-semibold">
              Link
              <FontAwesomeIcon
                className={`ml-2 cursor-pointer md:hidden transition duration-500 ${
                  isLink ? "rotate-180" : ""
                }`}
                icon={faCircleChevronDown}
                onClick={linkDropdown}
              />
            </h6>
            <div className="overflow-hidden">
              <ul
                className={`transition-transform md:mt-0 duration-300 ease-in-out ${
                  isLink ? "mt-0" : "mt-[-100%]"
                }`}
              >
                <li className="whitespace-nowrap">Home</li>
                <li className="whitespace-nowrap">Console</li>
                <li className="whitespace-nowrap">Game</li>
                <li className="whitespace-nowrap">About</li>
              </ul>
            </div>
          </div>
          <div className="footer-link mb-3 md:mb-0">
            <h6 className="text-lg bg-slate-800 md:font-semibold">
              Genre
              <FontAwesomeIcon
                className={`ml-2 cursor-pointer md:hidden transition duration-500 ${
                  isGenre ? "rotate-180" : ""
                }`}
                icon={faCircleChevronDown}
                onClick={genreDropdown}
              />
            </h6>
            <div className="overflow-hidden">
              <ul
                className={`transition-transform md:mt-0 duration-300 ease-in-out ${
                  isGenre ? "mt-0" : "mt-[-100%]"
                }`}
              >
                <li className="whitespace-nowrap">Action</li>
                <li className="whitespace-nowrap">Adventure</li>
                <li className="whitespace-nowrap">Racing</li>
                <li className="whitespace-nowrap">Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
