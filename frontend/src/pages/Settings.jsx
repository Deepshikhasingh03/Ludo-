import React from 'react';
import {
  FaVolumeUp,
  FaVolumeMute,
  FaPlay,
  FaPen,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaThumbsUp,
  FaShareAlt,
  FaUserPlus,
  FaPlus,
  FaArrowLeft,
} from 'react-icons/fa';
import { MdPhoneIphone, MdLanguage } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

function Settings() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="w-full min-h-screen bg-[#000b1e] flex justify-center py-6 relative">
        {/* BACK BUTTON - Outside main card, fixed top-left */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-9 mt-4 cursor-pointer flex items-center gap-2 text-yellow-300 font-bold text-lg hover:text-yellow-400"
        aria-label="Go back"
      >
        <FaArrowLeft />
        Back
      </button>
      
      {/* MAIN BOX */}
      <div className="w-[90%] max-w-[420px] bg-gradient-to-b from-[#03336b] to-[#02244d] border-4 border-yellow-400 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(255,192,64,0.12)] p-3 relative">
        

        {/* TITLE */}
        <div className="w-2/3 mx-auto text-center text-yellow-400 text-3xl font-extrabold py-2 rounded-xl bg-[rgba(0,0,60,0.5)] mt-[-25px] mb-4">
          Settings
        </div>

        {/* SCROLL AREA */}
        <div className="max-h-[58vh] overflow-y-auto pr-2 pb-28 ludo-scroll">

          {/* Audio */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Audio</span>
            <div className="flex gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-[#0a3a7a] border-2 border-yellow-400 rounded-full text-yellow-300 shadow-[0_8px_18px_rgba(252,211,77,0.45)]">
                <FaVolumeUp />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-[#0a3a7a] border-2 border-yellow-400 rounded-full text-yellow-300 shadow-[0_8px_18px_rgba(252,211,77,0.45)]">
                <FaVolumeMute />
              </div>
            </div>
          </div>

          {/* Vibration */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Vibration</span>
            <div className="w-10 h-10 flex items-center justify-center bg-[#0a3a7a] border-2 border-yellow-400 rounded-full text-yellow-300 shadow-[0_8px_18px_rgba(252,211,77,0.45)]">
              <MdPhoneIphone className="text-lg" />
            </div>
          </div>

          {/* Tutorial */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Tutorial</span>
            <button className="px-4 py-1 rounded-full bg-[#0f5bd1] text-yellow-300 font-bold border-2 border-yellow-400 shadow-[0_8px_24px_rgba(252,211,77,0.35)] flex items-center gap-2">
              <span className='text-sm'>Play</span>
            </button>
          </div>

          {/* Language */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Language</span>
            <div className="flex items-center gap-1 bg-[#0f5bd1] text-yellow-300 px-3 py-1 rounded-full border-2 border-yellow-400 shadow-[0_8px_24px_rgba(252,211,77,0.35)]">
              <span className="font-bold text-sm text-white">English</span>
              <IoIosArrowDown className="text-white ml-1" />
            </div>
          </div>

          {/* Search Privacy */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Search Privacy</span>

            <button className="flex items-center gap-2 text-sm px-4 py-1 rounded-full bg-[#0f5bd1] text-yellow-300 font-bold border-2 border-yellow-400 shadow-[0_8px_24px_rgba(252,211,77,0.35)]">
              <FaPen className='text-white'/>
              Public
            </button>
          </div>


          {/* Themes */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Themes</span>
            <button className="px-4 py-1 text-sm rounded-full bg-[#0f5bd1] text-yellow-300 font-bold border-2 border-yellow-400 shadow-[0_8px_24px_rgba(252,211,77,0.35)]">
              Select
            </button>
          </div>

          {/* Store */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Store</span>
            <button className="px-4 py-1 text-sm rounded-full bg-[#0f5bd1] text-yellow-300 font-bold border-2 border-yellow-400 shadow-[0_8px_24px_rgba(252,211,77,0.35)]">
              View
            </button>
          </div>

        
{/* Support Email */}
<div className="flex items-center justify-between py-3 px-2 border-b border-white/10">

  {/* Left Label */}
  <div className="text-white text-xl font-semibold">
    Support Email
  </div>

  {/* Right Buttons */}
  <div className="flex gap-1">
    <button className="px-6 py-2 rounded-full
      bg-[#0f5bd1] text-yellow-300 font-bold
      border-2 border-yellow-400
      shadow-[0_5px_18px_rgba(252,211,77,0.35)] ml-1 text-sm">
      FAQ
    </button>

    <button className="px-6 py-2 rounded-full
      bg-[#0f5bd1] text-yellow-300 font-bold text-base
      border-2 border-yellow-400
      shadow-[0_5px_18px_rgba(252,211,77,0.35)] ml-1 text-sm">
      Compose
    </button>
  </div>

</div>



{/* Game */}
<div className="flex items-center justify-between py-3 px-2 border-b border-white/10">

  <div className="text-white text-xl font-semibold">
    Game
  </div>

  <div className="flex gap-3">
    <button className="px-6 py-2 rounded-full
      bg-[#0f5bd1] text-yellow-300 font-bold text-sm
      border-2 border-yellow-400
      shadow-[0_5px_18px_rgba(252,211,77,0.35)]
      flex items-center gap-2">

      Tutorial
      <span className="w-5 h-5 bg-red-600 rounded-md flex items-center justify-center">
        <span className="text-white text-[12px] font-bold"><FaYoutube/></span>
      </span>
    </button>

    <button className="px-6 py-2 rounded-full
      bg-[#0f5bd1] text-yellow-300 font-bold text-sm
      border-2 border-yellow-400
      shadow-[0_5px_18px_rgba(252,211,77,0.35)]">
      Rules
    </button>
  </div>

</div>




          {/* Privacy Policy */}
          <div className="flex items-center justify-between text-white text-xl border-b border-white/10 py-3 px-2">
            <span className="font-semibold">Privacy Policy</span>
            <button className="px-4 py-1 text-sm rounded-full bg-[#0f5bd1] text-yellow-300 font-bold border-2 border-yellow-400 shadow-[0_8px_24px_rgba(252,211,77,0.35)]">
              View
            </button>
          </div>
        </div>

        {/* FIXED BOTTOM SECTION */}
        <div className="absolute bottom-3 left-0 w-full px-3">
          
          {/* Find Us On */}
         <div className="pt-3 flex items-center justify-between">

  {/* Left Text */}
  <div className="text-white text-xl font-semibold">
    Find us on
  </div>

  {/* Right Icons Row */}
  <div className="flex items-center gap-3">

    <div className="w-10 h-10 rounded-lg bg-[#0a3a7a] hover:bg-[#1153aa] cursor-pointer border-2 border-yellow-400 
      flex items-center justify-center text-white">
      <FaFacebookF />
    </div>

    <div className="w-10 h-10 rounded-lg bg-[#0a3a7a] hover:bg-[#1153aa] cursor-pointer border-2 border-yellow-400 
      flex items-center justify-center text-white">
      <FaInstagram />
    </div>

    <div className="w-10 h-10 rounded-lg bg-[#0a3a7a] hover:bg-[#1153aa] cursor-pointer border-2 border-yellow-400 
      flex items-center justify-center text-white">
      <FaTwitter />
    </div>

    <div className="w-10 h-10 rounded-lg bg-[#e33a3a] cursor-pointer hover:bg-[#db5555] border-2 border-yellow-400 
      flex items-center justify-center text-white">
      <FaYoutube />
    </div>

  </div>
</div>


          {/* MORE GAMES BUTTON */}
          <div className="flex justify-center py-4 mt-2 cursor-pointer transition-transform hover:scale-105">
            <button className="px-6 py-2 rounded-full cursor-pointer 
              bg-[#0f5bd1] text-yellow-300 font-extrabold border-2 border-yellow-400 
              shadow-[0_10px_30px_rgba(252,211,77,0.45)]
              flex items-center gap-2">

              <FaPlus className="text-lg" />
              More Games
            </button>
          </div>


       {/* FOOTER BUTTONS */}
           <div className="flex items-center justify-center gap-4 mt-6">
        <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-800 text-blue-900 font-extrabold border-4 border-[#f6cc3f] shadow-[0_12px_30px_rgba(246,204,63,0.45)] cursor-pointer transition-transform hover:scale-105">
          <div className="bg-blue-800 text-white p-2 rounded-full"><FaUserPlus /></div>
          <span className='text-yellow-300'>GET 10,000</span>
        </button>

        <div className="w-12 h-12 flex items-center justify-center bg-[#062b54] border-4 border-yellow-400 rounded-xl text-yellow-300 cursor-pointer transition-transform hover:scale-105">
          <FaThumbsUp />
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-[#062b54] border-4 border-yellow-400 rounded-xl text-yellow-300 cursor-pointer transition-transform hover:scale-105">
          <FaShareAlt />
        </div>
      </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;


 