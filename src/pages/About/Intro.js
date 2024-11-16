import React from "react";
import AboutIntro from "./about-intro.svg";

function Intro() {
  return (
    <>
      <div className="h-screen about-intro sm:rotate-0"></div>

      <div className="grid grid-cols-2 sm:grid-cols-1 items-center min-h-screen">
        <div className="z-20 justify-center flex">
          <img src={AboutIntro} alt="" className="h-[500px] w-[500px]" />
        </div>
        <div className="z-10 max-w-max flex flex-col space-y-5 sm:-mt-20">
          <h1 className="text-8xl font-semibold text-white sm:text-black sm:text-8xl">
            {" "}
            DAGENCY{" "}
          </h1>
          <hr />
          <h1 className="text-2xl text-black"> OLDER | STRONGER | WISER </h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
