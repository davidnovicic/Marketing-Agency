import React from "react";

function Intro() {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="flex flex-col items-end space-y-7 ">
        <h1 className="text-7xl font-semibold text-gray-600">
          The Best
          <b1 className="text-black"> Marketing </b1>
        </h1>
        <h1 className="text-4xl font-semibold text-gray-600">
          Doesn't feel like Marketing
        </h1>
        <button className="px-8 py-2 bg-red-500 text-white hover:bg-red-400">
          Let's talk
        </button>
      </div>
      <div className="p-10">
        <dotlottie-player
          src="https://lottie.host/205d7f11-0ca2-4991-9ee3-591e319e0f72/EvOkToQ6jh.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Intro;
