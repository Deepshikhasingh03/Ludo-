import React from 'react'
import ludo from '../assets/ludo.png'
import { FaCloudUploadAlt, FaFacebook } from "react-icons/fa";
import { MdSendToMobile } from "react-icons/md";
import { IoDiamondSharp, IoGameControllerOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function LoginPage() {
  const { setUser } = useUser()
  const navigate = useNavigate();

  const handleSavebtn = () => alert("Save Data Clicked")
  const handleChangeDevice = () => alert("Change Device Clicked")
  const handle100btn = () => alert("You received +100 diamonds!")

  const handlefacebookbtn = () => {
    setUser({ name: "Facebook User", profilePic: 'https://i.pravatar.cc/150' });
    navigate('/home')
  }

  const handlegooglebtn = () => {
    setUser({ name: "Google User", profilePic: 'https://i.pravatar.cc/150' });
    navigate('/home')
  }

  const handleplaygamesbtn = () => alert("Play Games Clicked!")

  const handleGuestbtn = () => {
    setUser({ name: "Guest", profilePic: null });
    navigate('/home')
  }

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-3">

      {/* HEADER */}
      <div className="flex flex-col items-center mb-4">
        <img src={ludo} alt="ludo" className="h-16 sm:h-20 md:h-24" />
        <h3 className="mt-2 text-white font-semibold text-lg sm:text-xl md:text-2xl">
          LOGIN TO CONTINUE
        </h3>
      </div>

      {/* LOGIN BOX */}
      <div className="bg-teal-950 rounded-xl md:w-[30%] p-2 border-2 border-yellow-500 space-y-2">

        {/* TOP OPTIONS */}
        <div className="flex justify-between">

          {/* SAVE */}
          <div onClick={handleSavebtn} className="flex-1 mx-1 bg-blue-900 border border-blue-600 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800">
            <FaCloudUploadAlt className="text-xl text-green-400" />
            <span className="text-xs text-white font-semibold">Save</span>
          </div>

          {/* CHANGE */}
          <div onClick={handleChangeDevice} className="flex-1 mx-1 bg-blue-900 border border-blue-600 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800">
            <MdSendToMobile className="text-xl text-green-400" />
            <span className="text-xs text-white font-semibold">Change</span>
          </div>

          {/* DIAMOND */}
          <div onClick={handle100btn} className="flex-1 mx-1 bg-blue-900 border border-blue-600 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer hover:bg-blue-800">
            <IoDiamondSharp className="text-xl text-blue-500" />
            <span className="text-xs text-white font-semibold">+100</span>
          </div>
        </div>

        {/* FACEBOOK */}
        <button onClick={handlefacebookbtn}
          className="w-full bg-blue-700 hover:bg-blue-400 py-2 rounded-lg flex justify-center items-center gap-2 text-white text-sm sm:text-lg font-semibold">
          <FaFacebook /> Login With Facebook
        </button>

        <p className="text-white text-xs text-center -mt-1">
          This doesn't let the app post to Facebook
        </p>

        {/* GOOGLE */}
        <button onClick={handlegooglebtn}
          className="w-full bg-white py-2 rounded-lg flex justify-center items-center gap-3 text-sm sm:text-lg font-semibold">
          <FcGoogle className="text-xl" /> Sign in with Google
        </button>

        {/* PLAY */}
        <button onClick={handleplaygamesbtn}
          className="w-full bg-white py-2 rounded-lg flex justify-center items-center gap-3 text-sm sm:text-lg font-semibold">
          <IoGameControllerOutline className="text-xl" /> Play Games
        </button>
      </div>

      {/* OR */}
      <p className="text-yellow-300 text-2xl font-bold mt-2">OR</p>

      {/* GUEST */}
      <button onClick={handleGuestbtn}
        className="bg-blue-900 border-2 border-yellow-400 px-6 py-3 rounded-lg font-semibold text-white text-lg mt-1
        [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]
        hover:bg-blue-800">
        Play as Guest
      </button>

      {/* PRIVACY */}
      <p className="text-gray-500 text-xs sm:text-sm text-center mt-3">
        By continuing I agree that Gametion Technologies Pvt. Ltd. may store and
        <br /> process my data in accordance with the
      </p>

      <span className="text-gray-500 text-xs sm:text-sm mt-1">Privacy Policy</span>
      <span className="text-gray-500">__________</span>

    </div>
  )
}

export default LoginPage
