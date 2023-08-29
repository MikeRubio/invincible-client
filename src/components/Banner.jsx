import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(../invincible_bg.jpg)] dark:bg-gray-900 bg-no-repeat bg-center bg-fixed h-[42rem] w-full flex flex-col">
      <div className="flex justify-end mr-5">
        <div className="flex h-56">
          <ul className="m-2">
            <p className="text-5xl font-title cursor-pointer text-yellow-500 transform hover:scale-105 transition-transform">
              Docs
            </p>
          </ul>
          <ul className="m-2">
            <p className="text-5xl font-title cursor-pointer text-yellow-500 transform hover:scale-105 transition-transform">
              About
            </p>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-9xl cursor-default text-yellow-500 font-title font-outline-4 tracking-tight">
          INVINCIBLE API
        </p>
      </div>
    </div>
  );
};

export default Banner;
