import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-600 rounded-3xl flex-col space-y-10 p-10 ">
        <h1 className="text-3xl text-white font-semibold"> Get in Touch </h1>
        <p className="text-white">
          {" "}
          DAGENCY is digital marketing agency, we provide marketing and
          development services
        </p>
        <div className="text-white flex space-x-5 items-center">
          <div className="h-12 w-12 bg-gray-500 p-2 rounded">
            <i class="ri-map-pin-line text-3xl text-orange-400"></i>
          </div>
          <div>
            <p> 2-3-647/a/186/5</p>
            <p> Hyderabd, Amberpet</p>
            <p> India</p>
          </div>
        </div>
        <div className="text-white flex space-x-5 items-center">
          <div className="h-12 w-12 bg-gray-500 p-2 rounded">
            <i class="ri-mail-line text-3xl text-orange-400"></i>
          </div>
          <div>
            <p className=""> Mail Us </p>
            <p> random@gmail.com </p>
          </div>
        </div>
        <div className="text-white flex space-x-5 items-center">
          <div className="h-12 w-12 bg-gray-500 p-2 rounded">
            <i class="ri-customer-service-line text-3xl text-orange-400"></i>
          </div>
          <div>
            <p> Phone Us </p>
            <p> 0001 4958 596 138</p>
            <p> India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;
