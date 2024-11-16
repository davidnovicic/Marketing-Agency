import React from "react";

function Intro() {
  return (
    <div className=" min-h-screen bg-primary grid grid-cols-2 items-center sm:grid-cols-1 p-10 ">
      <div className="h-[500px]">
        <dotlottie-player
          src="https://lottie.host/dcb90bf1-f91c-4dd3-a794-b1bbe056c3bb/MpAkDbf0jx.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>

      <div className="font-semibold text-6xl sm:text-5xl p-20">
        <h1 className="">
          We <b className="text-myOrange"> work </b> together with our
          <b className="text-green-700"> clients </b>
        </h1>
      </div>
    </div>
  );
}

export default Intro;
