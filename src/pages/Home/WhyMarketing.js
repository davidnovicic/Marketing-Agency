import React from "react";

function WhyMarketing() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-7xl font-semibold ">
        {" "}
        Why <b className="text-red-400"> Marketing ? </b>{" "}
      </h1>
      <div className="h-[500px]">
        <dotlottie-player
          src="https://lottie.host/08da36f0-91fd-4790-b360-59ed5fbbccde/doMdSu2IlP.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <p className="text-gray-600 text-lg mb-10">
        {" "}
        Do you know what your customer want? Do you think your customer trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>
      <h1 className="text-secondary text-4xl font-semibold mb-10">
        {" "}
        The answers to all these questions lie in marketing.{" "}
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        {" "}
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.{" "}
      </p>
    </div>
  );
}

export default WhyMarketing;
