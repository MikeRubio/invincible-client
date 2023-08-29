import React from "react";
import { git_icon, twitter_icon, heart_icon, code_icon } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-100">
            <li className="mr-4 md:mr-6 transform hover:scale-125 transition-transform">
              <a
                href="https://github.com/MikeRubio/Invincible-api"
                target="_blank"
              >
                <img src={git_icon} alt="git icon" className="h-8" />
              </a>
            </li>
            <li className="mr-4 md:mr-6 transform hover:scale-125 transition-transform">
              <a href="#">
                <img src={twitter_icon} alt="git icon" className="h-8" />
              </a>
            </li>
            <li className="mr-4 md:mr-6 transform hover:scale-125 transition-transform">
              <a
                href="https://www.buymeacoffee.com/miguelrubio"
                target="_blank"
              >
                <img
                  src={heart_icon}
                  alt="git icon"
                  className="h-8"
                  title="Support the creator by buying him a coffee!"
                />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="flex justify-center items-center gap-2 text-sm sm:text-center text-md text-gray-100">
          <img src={code_icon} alt="code icon" className="h-4" />
          by
          <a
            href="https://github.com/MikeRubio"
            className="text-xl text-yellow-500 font-title hover:underline"
          >
            Miguel Rubio.
          </a>
          Please contribute.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
