import { useState, useEffect } from "react";

import {
  FaChevronDown,
  FaPlus,
  FaFacebookF,
  FaGoogle,
  FaGamepad,
  FaCloudUploadAlt,
  FaUserCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoDiamondSharp, IoGameControllerOutline } from "react-icons/io5";
import { MdSendToMobile } from "react-icons/md";
import flag from '../assets/flag.avif'
import pic1 from '../assets/pic-1.jpg'
import pic2 from '../assets/pic-2.jpg'
import pic3 from '../assets/pic-3.jpg'
import pic4 from '../assets/pic-4.jpg'
import pic5 from '../assets/pic-5.jpg'
import pic6 from '../assets/pic-6.jpg'
import pic7 from '../assets/pic-7.jpg'
import pic8 from '../assets/pic-8.jpg'

function EditProfile() {
  const [selectedImg, setSelectedImg] = useState(pic3);
  const [gender, setGender] = useState("male");  // default value


  const images = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic1,
  pic3,
  pic4
];
useEffect(() => {
  const savedImg = localStorage.getItem("profilePic");
  const savedGender = localStorage.getItem("gender");

  if (savedImg) setSelectedImg(savedImg);
  if (savedGender) setGender(savedGender);
}, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50 p-4">
      <button
                    onClick={handleBack}
                    className="absolute top-4 left-9 mt-1 sm:mt-4 cursor-pointer flex items-center gap-2 text-yellow-300 font-bold text-lg hover:text-yellow-400"
                    aria-label="Go back"
                  >
                    <FaArrowLeft />
                    Back
                  </button>
  <div
    className="
      w-[360px]
      max-h-[90vh]
      overflow-hidden
      bg-[#001437]
      rounded-2xl
      border-2
      border-yellow-400
      shadow-[0_0_10px_rgba(255,255,0,0.4)]
      p-4
      flex flex-col 
      justify-between
      gap-3
    "
  >

    {/* TOP CONTENT WRAPS IN A SCROLL-FREE AREA */}
    <div className="flex flex-col gap-3 overflow-hidden">

      {/* TOP TEXT */}
      <p className="text-white text-center text-xs font-semibold">
        *Your country name & Flag will be shown to other players when you play online multiplayer
      </p>

      {/* COUNTRY SELECT */}
      <div className="w-full flex justify-center">
        <div className="flex items-center bg-[#322c22] border border-white/20 min-h-[60px] w-full">
          
          <div className="bg-[#322c22] p-2 flex items-center">
            <img 
              className="w-10 h-6 object-cover" 
              src={flag}
              alt="India Flag" 
            />
          </div>

          <div className="flex-1 px-3 py-2 flex items-center">
            <p className="text-white text-xl font-bold">India</p>
          </div>

          <FaChevronDown className="text-white text-3xl pr-3" />

        </div>
      </div>

      {/* AVATAR + NAME BOX */}
      <div className="flex items-start gap-3 mt-1">
        
        <img
          src={selectedImg}
          alt="Avatar"
          className="w-20 h-20 rounded-xl border-[4px] border-yellow-400"
        />

        <div className="flex flex-col gap-2">

          {/* NAME BOX */}
          <div className="bg-white border-[4px] border-dashed border-red-900 text-center rounded-lg px-9 py-1 text-lg font-bold">
            Shizuka
          </div>

          {/* GENDER BUTTONS */}
          <div className="mt-1 flex gap-2">

            <label className="flex items-center gap-2 bg-blue-300 px-3 py-2 rounded-xl shadow-md cursor-pointer">
  <FaUserCircle className="text-blue-600 text-2xl" />
  <input
    type="radio"
    name="gender"
    value="male"
    checked={gender === "male"}
    onChange={() => setGender("male")}
    className="w-4 h-4"
  />
</label>

<label className="flex items-center gap-2 bg-pink-300 px-3 py-2 rounded-xl shadow-md cursor-pointer">
  <FaUserCircle className="text-pink-500 text-2xl" />
  <input
    type="radio"
    name="gender"
    value="female"
    checked={gender === "female"}
    onChange={() => setGender("female")}
    className="w-4 h-4"
  />
</label>

<label className="flex items-center gap-2 bg-yellow-300 px-3 py-2 rounded-xl shadow-md cursor-pointer">
  <FaUserCircle className="text-yellow-600 text-2xl" />
  <input
    type="radio"
    name="gender"
    value="other"
    checked={gender === "other"}
    onChange={() => setGender("other")}
    className="w-4 h-4"
  />
</label>


          </div>
        </div>
      </div>

      {/* SELECT PROFILE PICTURE */}
     <div className="bg-[#0b3c66] border-2 border-yellow-400 rounded-xl p-3  overflow-hidden">


        <p className="text-center text-yellow-300 font-extrabold text-lg mb-2">
          SELECT PROFILE PICTURE
        </p>

        <div className="h-[150px] overflow-y-auto overflow-x-auto ludo-scroll scrollbar-thumb-yellow-400 scrollbar-track-transparent px-2">

          <div className="grid grid-cols-3 gap-2">

            <div className="bg-[#c70000] border-[3px] border-yellow-300 rounded-lg flex items-center justify-center h-[60px]">
              <FaPlus className="text-4xl text-green-300 drop-shadow-[0_0_5px_#00ff00]" />
            </div>

            {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImg(img)}
                  className={`h-[60px] w-full rounded-lg border-2 object-cover cursor-pointer transition
                    ${selectedImg === img ? "border-[4px] border-green-400 scale-105" : "border-yellow-300"}
                  `}
                />
              ))}

          </div>
        </div>

      </div>

    </div>

    {/* BOTTOM AREA - FIXED, ALWAYS VISIBLE */}
    <div className="flex flex-col gap-3">

      {/* LOGIN BOX */}
      <div className="bg-[#06273f] border-2 border-yellow-400 rounded-xl p-4 text-center text-white">

        <div className="flex justify-between">

          <div className="flex-1 mx-1 mb-1 bg-blue-900 border border-blue-600 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800">
            <FaCloudUploadAlt className="text-xl text-green-400" />
            <span className="text-xs font-semibold">Save</span>
          </div>

          <div className="flex-1 mx-1 mb-1 bg-blue-900 border border-blue-600 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800">
            <MdSendToMobile className="text-xl text-green-400" />
            <span className="text-xs font-semibold">Change</span>
          </div>

          <div className="flex-1 mx-1 mb-1 bg-blue-900 border border-blue-600 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800">
            <IoDiamondSharp className="text-xl text-blue-500" />
            <span className="text-xs font-semibold">+100</span>
          </div>

        </div>

        <button className="w-full bg-blue-700 text-white mt-3 py-1 rounded-sm font-bold flex items-center justify-center gap-3 text-lg transition-transform hover:scale-105 cursor-pointer">
          <FaFacebookF /> Login with Facebook
        </button>

        <p className="text-white/80 font-semibold text-sm mt-3 mb-1">Sign In with</p>

        <div className="flex justify-center gap-3">
          <button className="bg-white px-2 py-2 rounded-sm text-sm flex items-center gap-2 font-bold text-gray-600 transition-transform hover:scale-105 cursor-pointer">
            <FcGoogle className="text-xl" /> Google
          </button>

          <button className="bg-white px-2 py-2 rounded-sm text-sm flex items-center gap-2 font-bold text-gray-600 transition-transform hover:scale-105 cursor-pointer">
            <IoGameControllerOutline className="text-xl" /> Play Games
          </button>
        </div>

      </div>

      {/* CONTINUE BUTTON */}
      <button
        className="
          py-2 mx-auto w-[150px]
          bg-blue-800 text-white text-xl font-extrabold
          rounded-full border-[5px] border-yellow-400
          shadow-[0_2px_2px_rgba(0,80,255,0.5)]
          cursor-pointer transition-transform hover:scale-105
        "
        onClick={() => {
    localStorage.setItem("profilePic", selectedImg);
localStorage.setItem("gender", gender);
window.dispatchEvent(new Event("profilePicUpdated"));
window.location.href = "/home";

  }}
      >
        Continue
      </button>

    </div>

  </div>
</div>

  );
}

export default EditProfile;
