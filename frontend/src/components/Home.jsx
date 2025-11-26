import React from "react";
import { useUser } from "../context/UserContext";
import { FaUserCircle, FaCoins, FaCog, FaSearch, FaPlus, FaHome, FaCalendarAlt, FaComments, FaShoppingCart } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import ludo from '../assets/ludo.png'
import { ImMobile } from "react-icons/im";
import { LuSword } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import { BsPersonHearts } from "react-icons/bs";
import { IoReturnDownForwardOutline } from "react-icons/io5";
import tournament from '../assets/tournament.png'
import claim from '../assets/claim.png'
import snake from '../assets/snake.png'
import dice from '../assets/7-dice.jpeg'
import leftIcon1 from '../assets/25.jpeg'
import leftIcon2 from '../assets/k+.jpeg'
import leftIcon3 from '../assets/free.jpeg'
import rightIcon1 from '../assets/no-ads.jpeg'
import rightIcon2 from '../assets/target.jpeg'
import rightIcon3 from '../assets/dab.jpeg'
import { FaCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaDice } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import backgroundImg from '../assets/bg-ludo.png'


function Home() {
  const { user } = useUser();
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center mx-1 " style={{ backgroundImage: `url(${backgroundImg})` }}>

      {/* ---- TOP NAVBAR ---- */}
      <div className="w-full ">
        <div className="relative flex items-center 
  bg-blue-900 bg-opacity-80
  border-1 border-yellow-500 rounded-md overflow-visible">



          {/* LEFT SIDE = PROFILE + LEVEL */}
          <div className="flex flex-col items-center relative z-10">

            {/* PROFILE IMAGE WRAPPER (for positioning the green dot) */}
            <div className="relative">

              {/* PROFILE IMAGE */}
              {user?.profilePic ? (
                <img
                  src={user.profilePic}
                  className="w-12 h-12 rounded-md border-2 border-yellow-400 object-cover"
                />
              ) : (
                <FaUserCircle className="text-white text-3xl mt-1" />
              )}

              {/* GREEN DOT (ONLINE) */}
              <span
                className="absolute -top-0 -right-1 w-3 h-3 
                 bg-green-400 border-2 border-blue-900 
                 rounded-full"
              ></span>
            </div>

            {/* ⭐ STAR + XP BAR UNDER PROFILE */}
            <div className="flex items-center gap-1 ">

              {/* ⭐ BIGGER STAR WITH "1" */}
              <div className="relative w-5 h-5 left-2.5 mb-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="#FFD646"
                  stroke="#C99900"
                  strokeWidth="1"
                  className="w-full h-full drop-shadow-sm"
                >
                  <path d="M12 2 L15 9 H22 L16.5 13 L18.5 20 L12 16 L5.5 20 L7.5 13 L2 9 H9z" />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center 
                        text-blue-900 font-bold text-[10px]">
                  1
                </span>
              </div>

              {/* XP BAR */}
              <div className="w-8 h-2 bg-[#123C7A] border border-blue-800 
                    rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-yellow-400 w-[30%]"></div>
              </div>

            </div>
          </div>


          {/* SETTINGS */}
          <FaCog className="text-white text-2xl ml-3 cursor-pointer" />

          {/* MAIL */}
          <div className="relative ml-3 cursor-pointer">
            <IoMail className="text-yellow-400 text-3xl" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded-full">
              1
            </span>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3 ml-auto z-10">

            {/* DIAMONDS */}
            <div className="flex items-center bg-[#072A6A] px-3 py-1 rounded-lg border border-blue-400">
              <IoDiamondSharp className="text-cyan-300 text-lg" />
              <span className="text-white font-bold text-sm ml-1">08</span>
              <FaPlus className="text-green-500 bg-white rounded ml-1 text-xs p-[2px]" />
            </div>

            {/* COINS */}
            <div className="flex items-center bg-[#072A6A] px-3 py-1 rounded-lg border border-blue-400">
              <FaCoins className="text-yellow-300 text-lg" />
              <span className="text-white font-bold text-sm ml-1">2,400</span>
              <FaPlus className="text-green-500 bg-white rounded ml-1 text-xs p-[2px]" />
            </div>

            {/* SEARCH */}
            <div className="bg-[#0D4FB8] p-2 rounded-lg border border-blue-300 cursor-pointer">
              <FaSearch className="text-yellow-200 text-xl" />
            </div>
          </div>

        </div>
      </div>



      {/* LUDO IMAGE WITH SIDE ICONS */}
      <div className="relative w-full flex justify-center">

        {/* LEFT SIDE ICONS */}
        <div className="
      absolute 
      left-3 md:left-4 
      top-1/2 -translate-y-1/2
      flex flex-col 
      gap-3 md:gap-5 md:mt-2 -mt-4
  ">
          <img src={leftIcon1} alt="" className="h-8 sm:h-10 md:h-12 rounded-xl border-2 border-yellow-200 cursor-pointer hover:scale-105 transition" />
          <img src={leftIcon2} alt="" className="h-8 sm:h-10 md:h-12 rounded-xl border-2 border-yellow-200 cursor-pointer hover:scale-105 transition" />
          <img src={leftIcon3} alt="" className="h-8 sm:h-10 md:h-12 rounded-xl border-2 border-yellow-200 cursor-pointer hover:scale-105 transition" />
        </div>

        {/* MAIN LUDO LOGO */}
        <img src={ludo} alt="" className="h-32 sm:h-36 md:h-40 sm:mt-10 mt-12" />

        {/* RIGHT SIDE ICONS */}
        <div className="
      absolute 
      right-3 md:right-4 
      top-1/2 -translate-y-1/2
      flex flex-col 
      gap-3 md:gap-5 md:mt-2 -mt-4 
  ">
          <img src={rightIcon1} alt="" className="h-8 sm:h-10 md:h-12 rounded-xl border-2 border-yellow-200 cursor-pointer hover:scale-105 transition" />
          <img src={rightIcon2} alt="" className="h-8 sm:h-10 md:h-12 rounded-xl border-2 border-yellow-200 cursor-pointer hover:scale-105 transition" />
          <img src={rightIcon3} alt="" className="h-8 sm:h-10 md:h-12 rounded-xl border-2 border-yellow-200 cursor-pointer hover:scale-105 transition" />
        </div>

      </div>



      {/* ---------- MAIN BUTTONS ---------- */}
      <div className="mt-5 grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6">

        {/* ONLINE */}
        <div onClick={() => navigate("/game")} 
        className="flex flex-col items-center cursor-pointer">
          <div className="w-28 md:w-40 rounded-2xl overflow-hidden shadow-lg shadow-black border-2 border-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/40 hover:shadow-xl">
            <div className="bg-blue-700 flex justify-center items-center py-3">
              <ImMobile className="text-3xl text-white" />
            </div>
            <div className="bg-yellow-600 text-center py-2 border-t-2 border-yellow-500">
              <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-bold text-lg ">Online</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-xs mt-1">
            <FaCircle className="text-green-500" />
            <p className="text-green-400 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-semibold">Players:74,069</p>
          </div>
        </div>

        {/* TEAM UP */}
        <div onClick={() => navigate("/team")}
        className="flex flex-col items-center cursor-pointer">
          <div className="w-28 md:w-40 rounded-2xl overflow-hidden shadow-lg shadow-black border-2 border-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/40 hover:shadow-xl">
            <div className="bg-blue-700 flex justify-center items-center py-3">
              <LuSword className="text-3xl text-white" />
            </div>
            <div className="bg-yellow-600 text-center py-2 border-t-2 border-yellow-500">
              <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-bold text-lg ">Team Up</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-xs mt-1">
            <FaCircle className="text-green-500" />
            <p className="text-green-400 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-semibold">Players:2,168</p>
          </div>
        </div>

        {/* FRIENDS */}
        <div onClick={() => navigate("/Friends")}
        className="flex flex-col items-center cursor-pointer">
          <div className="w-28 md:w-40 rounded-2xl overflow-hidden shadow-lg shadow-black border-2 border-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/40 hover:shadow-xl">
            <div className="bg-blue-700 flex justify-center items-center py-3">
              <BsPersonHearts className="text-3xl text-white" />
            </div>
            <div className="bg-yellow-600 text-center py-2 border-t-2 border-yellow-500">
              <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-bold text-lg">Friends</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 text-xs mt-1">
            <FaCircle className="text-green-500" />
            <p className="text-green-300 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-semibold">Players:5,567</p>
          </div>
        </div>

        {/* COMPUTER — CENTERED UNDER 1 & 2 */}
        <div onClick={() => navigate("/computer")}
        className="col-span-3  flex justify-center sm:gap-20 gap-8 mt-1 cursor-pointer">

          <div className="flex flex-col items-center">
            <div className="w-28 md:w-40 rounded-2xl overflow-hidden shadow-lg shadow-black border-2 border-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/40 hover:shadow-xl">
              <div className="bg-blue-700 flex justify-center items-center py-3">
                <FaRobot className="text-3xl text-white" />
              </div>
              <div className="bg-yellow-600 text-center py-2 border-t-2 border-yellow-500">
                <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-bold text-lg">Computer</span>
              </div>
            </div>
          </div>

          {/* PASS N PLAY — CENTERED BETWEEN 2 & 3 */}
          <div onClick={() => navigate("/passplay")}
           className="flex flex-col items-center">
            <div className="w-28 md:w-40 rounded-2xl overflow-hidden shadow-lg shadow-black border-2 border-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-yellow-300/40 hover:shadow-xl">
              <div className="bg-blue-700 flex justify-center items-center py-3">
                <IoReturnDownForwardOutline className="text-3xl text-white" />
              </div>
              <div className="bg-yellow-600 text-center py-2 border-t-2 border-yellow-500">
                <span className="text-white [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] font-bold text-lg ">Pass N Play</span>
              </div>
            </div>
          </div>

        </div>

      </div>



      <div className="flex flex-col justify-center items-center w-full mt-2">

        {/* Top Row: Tournament + Button */}
        <div className="flex items-center justify-center gap-6 sm:gap-10">

          <div className="border-4 border-yellow-300 rounded-xl p-1 sm:p-1 cursor-pointer hover:scale-105 transition">
            <img
              src={dice}
              alt="Dice"
              className="h-8 sm:h-10"
            />
          </div>

          {/* Tournament Image */}
          <img
            src={tournament}
            alt="Tournament"
            className="h-32 sm:h-40 -mt-8"
          />

          {/* Snake Button */}
          <div className="border-4 border-yellow-300 rounded-xl p-1 sm:p-1 cursor-pointer hover:scale-105 transition">
            <img
              src={snake}
              alt="Snake"
              className="h-8 sm:h-10"
            />
          </div>

        </div>

        {/* Claim Image */}
        <img
          src={claim}
          alt="Claim"
          className="-mt-4 sm:-mt-7 h-20 sm:h-auto"
        />
      </div>






      {/* ---------- BOTTOM NAVIGATION ---------- */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-800 py-1 md:py-0 flex text-white border-t-1 border-yellow-500 shadow-2xl">

        {/* HOME (Active Example) */}
        <div className="flex-1 flex items-center justify-center cursor-pointer">
          <div
            className="flex flex-col items-center justify-center 
                 bg-blue-600 rounded-md 
                 transition-all 
                 md:px-2 md:py-1"  // ACTIVE — NORMAL PADDING
            onClick={() => navigate("/home")}
          >
            <FaHome className="text-yellow-300 md:text-2xl" />
            <span className="text-sm font-bold mt-1">HOME</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* Event */}
        <div className="flex-1 flex items-center justify-center cursor-pointer">
          <div
            className="flex flex-col items-center justify-center 
                 rounded-md transition-all 
                 md:px-2 md:py-1 hover:px-2 hover:py-2 
                 hover:bg-blue-700"
            onClick={() => navigate("/event")}
          >
            <FaCalendarAlt className="text-yellow-300 md:text-2xl" />
            <span className="text-sm font-bold mt-1">EVENT</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* Social */}
        <div className="flex-1 flex items-center justify-center cursor-pointer">
          <div
            className="flex flex-col items-center justify-center 
                 rounded-md transition-all
                md:px-2 md:py-1 hover:px-2 hover:py-2 
                 hover:bg-blue-700"
            onClick={() => navigate("/social")}
          >
            <FaComments className="text-yellow-300 md:text-2xl" />
            <span className="text-sm font-bold mt-1">SOCIAL</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* Inventory */}
        <div className="flex-1 flex items-center justify-center cursor-pointer">
          <div
            className="flex flex-col items-center justify-center 
                 rounded-md transition-all
                 md:px-2 md:py-1 hover:px-2 hover:py-2 
                 hover:bg-blue-700"
            onClick={() => navigate("/inventory")}
          >
            <FaDice className="text-yellow-300 md:text-2xl" />
            <span className="text-sm font-bold mt-1">INVENTORY</span>
          </div>
        </div>

        <div className="w-[2px] bg-yellow-400 opacity-40"></div>

        {/* Store */}
        <div className="flex-1 flex items-center justify-center cursor-pointer relative">
          <div
            className="flex flex-col items-center justify-center 
                 rounded-md transition-all relative
                 md:px-2 md:py-1 hover:px-4 hover:py-2 
                 hover:bg-blue-700"
            onClick={() => navigate("/store")}
          >
            <FaShoppingCart className="text-yellow-300 md:text-2xl" />

            <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs px-1 rounded">
              SALE
            </span>

            <span className="text-sm font-bold mt-1">STORE</span>
          </div>
        </div>

      </div>






    </div>
  );
}

export default Home;


