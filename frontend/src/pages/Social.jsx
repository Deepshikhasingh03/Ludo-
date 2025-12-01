import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaComments, FaDice, FaShoppingCart } from "react-icons/fa";

import bg from "../assets/bg-ludo.png";
import friendCard from "../assets/tournament.png"; // Replace with real image

const Social = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* MAIN MOBILE CONTAINER */}
      <div className="w-full max-w-sm mx-auto pb-24 mt-6 px-4">
        {/* PAGE TITLE */}
        <h2 className="text-center text-yellow-300 text-3xl font-extrabold drop-shadow-lg">
          SOCIAL
        </h2>

        {/* FRIEND LIST SECTION */}
        <div className="mt-6 flex flex-col gap-4">

          {/* Example Friend Card */}
          <div className="flex items-center bg-blue-700 rounded-xl p-3 border border-blue-300 shadow-md">
            <img
              src={friendCard}
              className="w-14 h-14 rounded-full border-2 border-yellow-400"
              alt="friend"
            />
            <div className="ml-3 flex-1">
              <p className="text-white font-bold text-lg">Player 1</p>
              <p className="text-yellow-300 text-sm">Online</p>
            </div>
            <button className="bg-green-500 px-3 py-1 rounded-lg text-white font-bold text-sm active:scale-95">
              INVITE
            </button>
          </div>

          {/* Duplicate or map API data */}
          <div className="flex items-center bg-blue-700 rounded-xl p-3 border border-blue-300 shadow-md">
            <img
              src={friendCard}
              className="w-14 h-14 rounded-full border-2 border-yellow-400"
              alt="friend"
            />
            <div className="ml-3 flex-1">
              <p className="text-white font-bold text-lg">Player 2</p>
              <p className="text-yellow-300 text-sm">Offline</p>
            </div>
            <button className="bg-gray-500 px-3 py-1 rounded-lg text-white font-bold text-sm">
              INVITE
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 py-1 flex text-white border-t-1 border-yellow-500 shadow-2xl">
        
        {/* HOME */}
        <div className="flex-1 flex justify-center cursor-pointer">
          <div
            onClick={() => navigate("/home")}
            className="flex flex-col items-center"
          >
            <FaHome className="text-yellow-300 text-xl" />
            <span className="text-sm font-bold">HOME</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* EVENT */}
        <div className="flex-1 flex justify-center cursor-pointer">
          <div
            onClick={() => navigate("/event")}
            className="flex flex-col items-center"
          >
            <FaCalendarAlt className="text-yellow-300 text-xl" />
            <span className="text-sm font-bold">EVENT</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* SOCIAL ACTIVE */}
        <div className="flex-1 flex justify-center cursor-pointer">
          <div
            onClick={() => navigate("/social")}
            className="flex flex-col items-center bg-blue-600 rounded-md px-3 py-1"
          >
            <FaComments className="text-yellow-300 text-xl" />
            <span className="text-sm font-bold">SOCIAL</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* INVENTORY */}
        <div className="flex-1 flex justify-center cursor-pointer">
          <div
            onClick={() => navigate("/inventory")}
            className="flex flex-col items-center"
          >
            <FaDice className="text-yellow-300 text-xl" />
            <span className="text-sm font-bold">INVENTORY</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* STORE */}
        <div className="flex-1 flex justify-center cursor-pointer relative">
          <div
            onClick={() => navigate("/store")}
            className="flex flex-col items-center relative"
          >
            <FaShoppingCart className="text-yellow-300 text-xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs px-1 rounded">
              SALE
            </span>
            <span className="text-sm font-bold mt-1">STORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
