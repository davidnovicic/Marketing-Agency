import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col space-y-10">
        <h1 className="text-4xl font-semibold mb-5"> Send a message </h1>
        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0 ">
          <input
            type="text"
            placeholder="First name"
            className="border py-3 px-5 bg-blue-100 focus:outline-none rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="py-3 px-5 bg-blue-100 focus:outline-none rounded-lg text-black w-full"
          />
        </div>
        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0 ">
          <input
            type="text"
            placeholder="Email"
            className="border py-3 px-5 bg-blue-100 focus:outline-none rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="py-3 px-5 bg-blue-100 focus:outline-none rounded-lg text-black w-full"
          />
        </div>

        <div className="flex space-x-10">
          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            className="py-3 px-5 bg-blue-100 focus:outline-none rounded-lg text-gray-600 w-full"
          />
        </div>
        <button className="text-white bg-orange-400 px-5 py-3 rounded max-w-max">
          Send a Message{" "}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
