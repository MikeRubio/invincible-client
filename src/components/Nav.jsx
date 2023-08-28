import React from "react";
import { omni_logo } from "../assets";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between h-20 mb-5 pt-5 pr-10 pl-10">
      <div>
        <img
          className="h-28 m-2 grayscale hover:grayscale-0"
          src={omni_logo}
          alt="omni man logo"
        />
      </div>
      <div className="flex">
        <ul className="text-5xl tracking-wide m-2 font-title text-yellow-400 hover:font-outline-1">
          Docs
        </ul>
        <ul className="text-5xl tracking-wide m-2 font-title text-yellow-400 hover:font-outline-1">
          About
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
