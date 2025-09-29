import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="md:text-5xl text-red-500 font-semibold">Not Found</h1>
      <button
        className="px-5 py-2 bg-black text-white text-lg rounded-md ml-5 hover:bg-gray-800 hover:scale-105 transition-all my-10"
        onClick={() => navigate("/")}
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
