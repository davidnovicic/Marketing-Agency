import React from "react";

function Numbers() {
  return (
    <div className="px-80 sm:px-5 mt-20">
      <h1 className="text-2xl text-gray-600 my-5">
        {" "}
        Until today we have provided our services to ...
      </h1>
      <div className="bg-primary flex space-x-10 sm:space-x-0 p-5 justify-between rounded sm:flex-col sm:items-center sm:space-y-5">
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="font-semibold text-7xl text-gray-600"> 152 </h1>
          <h1 className="text-gray-600 font-semibold text-2xl"> Clients </h1>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <h1 className="font-semibold text-7xl text-gray-600"> 450 </h1>
          <h1 className="text-gray-600 font-semibold text-2xl "> Project </h1>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <h1 className="font-semibold text-7xl text-gray-600"> 7 </h1>
          <h1 className="text-gray-600 font-semibold text-2xl"> Locations </h1>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
