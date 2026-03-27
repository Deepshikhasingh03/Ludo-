import React from "react";
import {useNavigate} from "react-router-dom";

// Import your assets
import bg from "../assets/bg-ludo.png";
import eventTitle from "../assets/tournament.png";
import dailyGoal from "../assets/tournament.png";
import dailyBonus from "../assets/tournament.png";
import {
  FaCalendarAlt,
  FaComments,
  FaDice,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";

const Event = () => {
  const nav = useNavigate();

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
      <div className="w-full max-w-sm mx-auto pb-24">
        {/* Title Banner */}
        <img
          src={eventTitle}
          alt="Event"
          className="w-56 sm:w-64 mx-auto mt-6 drop-shadow-lg"
        />

        {/* MAIN CONTENT */}
        <div className="w-full px-4 mt-4 flex flex-col gap-5">
          {/* DAILY GOALS CARD */}
          <div className="relative w-full bg-[#1C66D7] rounded-xl p-0 overflow-hidden border-[3px] border-blue-700 shadow-lg">
            <img src={dailyGoal} className="w-full" />

            <div className="absolute top-0 right-0 h-full flex items-center pr-4">
              <p className="text-yellow-300 font-extrabold text-xl sm:text-3xl leading-tight text-right">
                COMING
                <br />
                SOON
              </p>
            </div>
          </div>

          {/* DAILY BONUS CARD */}
          <div className="relative w-full rounded-xl overflow-hidden border-[3px] border-blue-400 shadow-lg">
            <img src={dailyBonus} className="w-full" />

            <button
              className="absolute bottom-2 right-3 bg-green-500 text-white font-bold text-sm sm:text-lg px-3 py-1 rounded-xl active:scale-95 transition"
              onClick={() => alert("Open Bonus")}
            >
              OPEN
            </button>

            {/* Notification red dot */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-red-600 rounded-full border-2 border-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV BAR */}
     {/* BOTTOM NAV BAR */}
<div className="fixed bottom-0 left-0 right-0 bg-blue-800 py-1 md:py-0 flex text-white border-t-1 border-yellow-500 shadow-2xl">

  {/* HOME */}
  <div className="flex-1 flex items-center justify-center cursor-pointer">
    <div
      className="flex flex-col items-center justify-center bg-blue-600 rounded-md transition-all md:px-2 md:py-1"
      onClick={() => nav("/home")}
    >
      <FaHome className="text-yellow-300 md:text-2xl" />
      <span className="text-sm font-bold mt-1">HOME</span>
    </div>
  </div>

  <div className="w-[2px] bg-yellow-400 opacity-40"></div>

  {/* EVENT */}
  <div className="flex-1 flex items-center justify-center cursor-pointer">
    <div
      className="flex flex-col items-center justify-center rounded-md transition-all md:px-2 md:py-1 hover:px-2 hover:py-2 hover:bg-blue-700"
      onClick={() => nav("/event")}
    >
      <FaCalendarAlt className="text-yellow-300 md:text-2xl" />
      <span className="text-sm font-bold mt-1">EVENT</span>
    </div>
  </div>

  <div className="w-[2px] bg-yellow-400 opacity-40"></div>

  {/* SOCIAL */}
  <div className="flex-1 flex items-center justify-center cursor-pointer">
    <div
      className="flex flex-col items-center justify-center rounded-md transition-all md:px-2 md:py-1 hover:px-2 hover:py-2 hover:bg-blue-700"
      onClick={() => nav("/social")}
    >
      <FaComments className="text-yellow-300 md:text-2xl" />
      <span className="text-sm font-bold mt-1">SOCIAL</span>
    </div>
  </div>

  <div className="w-[2px] bg-yellow-400 opacity-40"></div>

  {/* INVENTORY */}
  <div className="flex-1 flex items-center justify-center cursor-pointer">
    <div
      className="flex flex-col items-center justify-center rounded-md transition-all md:px-2 md:py-1 hover:px-2 hover:py-2 hover:bg-blue-700"
      onClick={() => nav("/inventory")}
    >
      <FaDice className="text-yellow-300 md:text-2xl" />
      <span className="text-sm font-bold mt-1">INVENTORY</span>
    </div>
  </div>

  <div className="w-[2px] bg-yellow-400 opacity-40"></div>

  {/* STORE */}
  <div className="flex-1 flex items-center justify-center cursor-pointer relative">
    <div
      className="flex flex-col items-center justify-center rounded-md transition-all relative md:px-2 md:py-1 hover:px-4 hover:py-2 hover:bg-blue-700"
      onClick={() => nav("/store")}
    >
      <FaShoppingCart className="text-yellow-300 md:text-2xl" />
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs px-1 rounded">SALE</span>
      <span className="text-sm font-bold mt-1">STORE</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default Event;
