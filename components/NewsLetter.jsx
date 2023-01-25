import React from "react";
//import { useState, useEffect } from "react";

const NewsLetter = () => {
  return (
    <div className=" py-12 bg-gray-100 m-0 px-0">
      <div className="mb-8">
        <h3 className="text-3xl tracking-tight text-center">
          Join Our NewsLetter
        </h3>
      </div>
      <form className=" flex justify-center w-full px-4 md:px-56">
        <div className="w-full ">
          <input
            type="email"
            className="bg-white text-start border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-5"
            placeholder="Submit Your Email Address"
          />
        </div>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-0 text-center -ml-2">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
