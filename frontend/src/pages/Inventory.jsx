import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg-ludo.png";
import dice1 from "../assets/dice/1.svg";
import dice2 from "../assets/dice/2.svg";
import dice3 from "../assets/dice/3.svg";
import dice4 from "../assets/dice/4.svg";
import dice5 from "../assets/dice/5.svg";
import dice6 from "../assets/dice/6.svg";

import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaDice,
  FaShoppingCart,
} from "react-icons/fa";

const Inventory = () => {
  const nav = useNavigate();

  const diceList = [
    { id: 1, img: dice1, title: "Dice 1" },
    { id: 2, img: dice2, title: "Dice 2" },
    { id: 3, img: dice3, title: "Dice 3" },
    { id: 4, img: dice4, title: "Dice 4" },
    { id: 5, img: dice5, title: "Dice 5" },
    { id: 6, img: dice6, title: "Dice 6" },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-sm mx-auto pb-24 mt-6">
        <h1 className="text-center text-yellow-300 text-3xl font-extrabold drop-shadow">
          INVENTORY
        </h1>

        {/* DICE GRID */}
        <div className="mt-6 grid grid-cols-3 gap-4 px-4">
          {diceList.map((d) => (
            <div
              key={d.id}
              className="bg-blue-700/70 border-2 border-yellow-400 shadow-lg p-3 rounded-xl flex flex-col items-center hover:scale-105 transition"
            >
              <img src={d.img} className="w-16 h-16" alt="" />
              <p className="text-yellow-300 text-sm font-bold mt-2">{d.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM NAV BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 py-1 flex text-white shadow-2xl">
        <div className="flex-1 flex items-center justify-center">
          <div onClick={() => nav("/home")} className="flex flex-col items-center cursor-pointer">
            <FaHome className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">HOME</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div onClick={() => nav("/event")} className="flex flex-col items-center cursor-pointer">
            <FaCalendarAlt className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">EVENT</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div onClick={() => nav("/social")} className="flex flex-col items-center cursor-pointer">
            <FaComments className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">SOCIAL</span>
          </div>
        </div>

        {/* ACTIVE INVENTORY */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center bg-blue-600 rounded-md px-2 py-1">
            <FaDice className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">INVENTORY</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div onClick={() => nav("/store")} className="flex flex-col items-center cursor-pointer relative">
            <FaShoppingCart className="text-yellow-300 text-xl" />
            <span className="absolute -top-1 -right-2 bg-yellow-400 text-blue-900 text-xs px-1 rounded">
              SALE
            </span>
            <span className="text-xs font-bold">STORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
