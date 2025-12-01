import React from "react";
import { useNavigate } from "react-router-dom";

import bg from "../assets/bg-ludo.png";
import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaDice,
  FaShoppingCart,
} from "react-icons/fa";

const Store = () => {
  const nav = useNavigate();

  const shopItems = [
    {
      id: 1,
      name: "Gold Pack",
      price: "₹49",
      color: "bg-yellow-400",
    },
    {
      id: 2,
      name: "Mega Gold",
      price: "₹99",
      color: "bg-orange-400",
    },
    {
      id: 3,
      name: "Dice Skin Blue",
      price: "₹59",
      color: "bg-blue-400",
    },
    {
      id: 4,
      name: "Dice Skin Red",
      price: "₹59",
      color: "bg-red-400",
    },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* PAGE TITLE */}
      <h1 className="text-yellow-300 text-3xl font-extrabold drop-shadow mt-6">
        STORE
      </h1>

      {/* SHOP ITEMS */}
      <div className="w-full max-w-sm mt-6 px-4 pb-24 flex flex-col gap-4">
        {shopItems.map((item) => (
          <div
            key={item.id}
            className="bg-blue-700/70 border-2 border-yellow-400 p-4 rounded-xl shadow-lg flex justify-between items-center"
          >
            <div>
              <p className="text-yellow-300 text-lg font-extrabold">
                {item.name}
              </p>
              <p className="text-white text-sm opacity-70">{item.price}</p>
            </div>

            <button
              className={`${item.color} text-blue-900 px-4 py-2 font-bold rounded-xl active:scale-95`}
            >
              BUY
            </button>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 py-1 flex text-white shadow-2xl">
        
        {/* HOME */}
        <div className="flex-1 flex justify-center">
          <div onClick={() => nav("/home")} className="flex flex-col items-center cursor-pointer">
            <FaHome className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">HOME</span>
          </div>
        </div>

        {/* EVENT */}
        <div className="flex-1 flex justify-center">
          <div onClick={() => nav("/event")} className="flex flex-col items-center cursor-pointer">
            <FaCalendarAlt className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">EVENT</span>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex-1 flex justify-center">
          <div onClick={() => nav("/social")} className="flex flex-col items-center cursor-pointer">
            <FaComments className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">SOCIAL</span>
          </div>
        </div>

        {/* INVENTORY */}
        <div className="flex-1 flex justify-center">
          <div onClick={() => nav("/inventory")} className="flex flex-col items-center cursor-pointer">
            <FaDice className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">INVENTORY</span>
          </div>
        </div>

        {/* ACTIVE STORE */}
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-center bg-blue-600 rounded-md px-2 py-1">
            <FaShoppingCart className="text-yellow-300 text-xl" />
            <span className="text-xs font-bold">STORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
