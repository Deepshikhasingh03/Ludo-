import { useEffect, useState } from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaPlay,
  FaCloudUploadAlt,
  FaExchangeAlt,
  FaGem,
  FaCalendarAlt,
  FaUser,
  FaUserCircle,
  FaPen,
  FaStar,
  FaFacebook,
  FaArrowLeft,
} from "react-icons/fa";
// import pic1 from "../assets/pic-1.jpg";
// import pic5 from '../assets/pic-5.jpg'
// import flag from '../assets/flag.avif'
import { FaNoteSticky } from "react-icons/fa6";
import { MdSendToMobile } from "react-icons/md";
import { IoDiamondSharp, IoGameControllerOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { LuNotepadText } from "react-icons/lu";

function Profile() {
     const [profile, setProfile] = useState({
    name: "",
    avatar: "",
    status: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profileData"));
    if (savedData) setProfile(savedData);
  }, []);
    const navigate = useNavigate();
     const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-full min-h-screen bg-black flex flex-col justify-center items-center p-2">

        <button
                            onClick={handleBack}
                            className="absolute top-4 left-9 mt-1 sm:mt-4 cursor-pointer flex items-center gap-2 text-yellow-300 font-bold text-lg hover:text-yellow-400"
                            aria-label="Go back"
                          >
                            <FaArrowLeft />
                            Back
                          </button>


        {/* STATISTICS TITLE */}
<div className="flex justify-center mb-1 -mt-2">
  <div
    className="bg-red-600 px-8 py-2 rounded-full text-yellow-300 font-extrabold text-xl shadow-lg border-2 border-yellow-400"
    style={{ WebkitTextStroke: "1px black" }}
  >
    STATISTICS
  </div>
</div>

        


      {/* MAIN CONTAINER */}
      <div className="w-full h-full max-w-md bg-[#0d46a0] rounded-2xl border-2 border-yellow-400 shadow-2xl pb-4 overflow-hidden flex flex-col justify-between">


        {/* TOP HEADER */}
        <div className="bg-[#1e63cc] rounded-t-2xl p-4 relative">

          {/* COUNTRY + CODE + MENU ICON */}
          <div className="flex justify-between items-center">
            <img
              src={flag}
              className="w-8 shadow border border-black"
            />
            <p className="text-white font-bold text-sm tracking-wide">
              67b9862f3bc97b7d5233e4bf
            </p>
            <div className="bg-[#003b99] p-2 rounded-md">
              <LuNotepadText className="text-white text-lg" />
            </div>
          </div>

          {/* USER BLOCK */}
<div className="bg-[#2a79ff] p-3 rounded-xl shadow-inner flex gap-3 items-center">

  {/* AVATAR */}
  <img
    src={profile.avatar || pic5}
    className="w-16 h-16 rounded-xl border-2 border-yellow-300 object-cover shadow cursor-pointer"
    onClick={() => navigate("/editprofile")}
  />

  {/* DETAILS */}
  <div className="flex flex-col w-full">
    <div className="flex items-center gap-2">
      <span className="text-white text-xl"><FaUserCircle /></span>
      <p className="text-white font-bold text-lg">
        Shizuka
      </p>
    </div>

    {/* COINS + DIAMONDS */}
    <div className="flex gap-4 mt-1">
      <span className="flex items-center gap-1 text-yellow-300 bg-[#4370ba] px-2 py-1 rounded-xl text-xs font-bold shadow-inner">
        🪙 1,900
      </span>
      <span className="flex items-center gap-1 text-blue-200 bg-[#4370ba] px-2 py-1 rounded-xl text-xs font-bold shadow-inner">
        💠 08
      </span>
    </div>

    {/* STATUS */}
    <div className="relative mt-2">
      <input
        value={profile.status || ""}
        readOnly
        placeholder="Add your status..."
        className="w-full bg-white text-gray-700 text-xs rounded-md px-3 py-2 border-2 border-dashed border-blue-300 outline-none"
      />
      <span className="absolute right-2 top-2 text-blue-900 p-1 rounded-sm bg-yellow-400 text-sm cursor-pointer">
        <FaPen />
      </span>
    </div>
  </div>
</div>

        </div>

        {/* XP BAR */}
  <div className="px-4 mt-1">
  {/* Level text above the bar */}
  <div className="flex justify-end mb-1">
    <span className="text-white text-xs font-bold">Level 1</span>
  </div>

  {/* Star + Progress Bar */}
  <div className="flex items-center ">
    {/* ⭐ Star on the left of the bar */}
    <FaStar className="text-yellow-400 text-lg" />

    {/* Progress Bar */}
    <div className="relative flex-1 h-4 bg-[#082a73] rounded-full border border-[#0b3aa4] shadow-inner overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold">
        0/180
      </div>
    </div>
  </div>
</div>





        {/* STATS LIST */}
        <div className="mt-3 bg-[#06409b] rounded-2xl p-2 border border-[#00245c] shadow-inner mx-3">

          {[
            ["👍", "GAMES WON", 2],
            ["👎", "GAMES LOST", 4],
            ["🏆", "WIN STREAK", 0],
            ["🎯", "TOKENS CAPTURED", 11],
            ["🗡️", "TOKENS KILLED", 14],
            ["🏅", "PERFORMANCE RATING", 3],
            ["👑", "TOURNAMENTS WON", 0],
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center cursor-pointer transition-transform hover:scale-105 bg-[#0a4ebd] text-white px-3 py-2 rounded-xl mb-2 text-xs font-bold shadow"
            >
              <span className="flex items-center gap-2">
                <span>{item[0]}</span> {item[1]}
              </span>
              <span>{item[2]}</span>
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-2 mx-3 rounded-xl border border-[#2a5bd4] p-3">

          <div className="grid grid-cols-3 gap-2">
            <button className="flex-1 mx-1 bg-blue-900 border border-blue-600 py-1 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800 text-white">
              <FaCloudUploadAlt className="text-xl text-green-400"/> 
              <span className="text-xs text-white font-semibold">Save</span>
            </button>

            <button className="flex-1 mx-1 bg-blue-900 border border-blue-600 py-1 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800 text-white">
              <MdSendToMobile className="text-xl text-green-400" />
              <span className="text-xs text-white font-semibold">Change</span>
            </button>

           <button className="flex-1 mx-1 bg-blue-900 border border-blue-600 py-1 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800 text-white">
               <IoDiamondSharp className="text-xl text-blue-500" />
                <span className="text-xs text-white font-semibold">+100</span>
            </button>
          </div>

          {/* Facebook */}
          <button
                    className="w-full bg-blue-900 cursor-pointer hover:bg-blue-400 py-2 rounded-lg flex justify-center items-center gap-2 text-white text-sm sm:text-sm font-semibold mt-2">
                    <FaFacebook /> Login With Facebook
            </button>

          {/* Google + Play Games */}
          <div className="flex gap-3 mt-3">
            <button className="flex-1 bg-white py-2  rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow cursor-pointer transition-transform hover:scale-105">
              <FcGoogle className="text-lg"/> <span className="text-sm text-gray-600">Google</span>
            </button>

            <button className="flex-1 bg-white cursor-pointer transition-transform hover:scale-105  py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow">
              <IoGameControllerOutline className="text-xl" /> <span className="text-sm text-gray-600">Play Games</span>
            </button>
          </div>
        </div>

        {/* EDIT PROFILE */}
        <div className="flex justify-center mt-2">
          <button onClick={()=>navigate('/editprofile')} className="bg-blue-600 text-white text-sm font-bold px-5 py-1 cursor-pointer transition-transform hover:scale-105 rounded-full border-2 border-yellow-300 shadow flex items-center gap-2">
            ✏️ Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
