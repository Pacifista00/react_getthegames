import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-slate-300 w-full mt-auto">
      <div className="container px-4 md:px-20 mx-auto py-14 text-center">
        <div className="logo mb-7">
          <img
            className="w-60 md:w-80 mx-auto"
            src="../../public/images/logo/gtglogo.png"
            alt=""
          />
        </div>
        <div className="text-xs lg:text-base">
          <p className="mb-5 md:mb-0">
            Copyright ©GetTheGames. All rights reserved. GetTheGames, a proud
            registered trademark, stands apart as a symbol of innovation and
            excellence in gaming. All other trademarks, logos, and copyrights
            showcased here belong to their respective visionary owners.
          </p>

          <div className="mt-5">
            <ul className="flex justify-center gap-5 text-2xl">
              <li className="whitespace-nowrap cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li className="whitespace-nowrap cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} />
              </li>
              <li className="whitespace-nowrap cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="whitespace-nowrap cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
