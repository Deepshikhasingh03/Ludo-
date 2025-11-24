import React from 'react'
import ludo from '../assets/ludo.png'
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdSendToMobile } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoGameControllerOutline } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { useUser } from '../context/UserContext';


function LoginPage() {
  const {setUser} = useUser()
  const navigate = useNavigate();

  const handleSavebtn=()=>{
    alert("Save Data Clicked")
  }

  const handleChangeDevice=()=>{
    alert("Change Device Clicked")
  }

  const handle100btn=()=>{
     alert("You received +100 diamonds!")
  }

  const handlefacebookbtn=()=>{
     setUser({
      name:"Facebook User",
      profilePic:'https://i.pravatar.cc/150'
     });
     navigate('/home')
  }

  const handlegooglebtn=()=>{
     setUser({
      name:"Google User",
      profilePic:'https://i.pravatar.cc/150'
     });
     navigate('/home')
  }
  const handleplaygamesbtn=()=>{
     alert("Play Games Clicked!")
  }
  const handleGuestbtn=()=>{
     setUser({
      name:"Guest",
      profilePic:null
     });
     navigate('/home')
  }
  
  return (
    <div className='fixed inset-0 z-50 bg-black flex flex-col justify-center items-center'>

      {/* Header */}
      <div className='flex flex-col items-center'>
        <img src={ludo} alt="ludo image" className='h-24' />
        <h3 className='mt-2 text-white font-bold text-2xl'>LOGIN TO CONTINUE</h3>
      </div>

      {/* Blue Box */}
      <div className="bg-blue-900 rounded-xl px-5 py-6 w-80 text-center border-2 border-yellow-400 mt-3 space-y-4">

        {/* 3 Option Buttons */}
        <div className='flex gap-3'>

          {/* Save Data */}
          <div onClick={handleSavebtn} className="bg-blue-900 border border-blue-600 w-24 py-2 rounded-2xl flex items-center gap-2 cursor-pointer whitespace-nowrap text-center hover:bg-blue-800">
            <FaCloudUploadAlt className="text-2xl text-green-400 ml-2 font-bold "/>
            <span className="text-white text-xs font-semibold">Save <br/>Data</span>
          </div>

          {/* Change Device */}
          <div onClick={handleChangeDevice} className="bg-blue-900 border border-blue-600 w-24 py-2 rounded-2xl 
                          flex items-center gap-1 cursor-pointer whitespace-nowrap hover:bg-blue-800">
            <MdSendToMobile className='text-2xl text-green-400' />
            <span className="text-white text-xs font-semibold">Change <br/>Device</span>
          </div>

          {/* +100 */}
          <div onClick={handle100btn} className="bg-blue-900 border border-blue-600 w-24 py-2 rounded-2xl 
                          flex items-center gap-1 cursor-pointer whitespace-nowrap hover:bg-blue-800">
            <IoDiamondSharp className='text-2xl text-blue-500 ml-2 font-bold' />
            <span className="text-white text-xs font-semibold">+100</span>
          </div>
        </div>

        {/* Facebook Login */}
        <div onClick={handlefacebookbtn} className='flex flex-col justify-center items-center'>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold w-full py-3 rounded flex items-center justify-center gap-2 cursor-pointer'>
            <FaFacebook />
            Login With Facebook
          </button>
        </div>

        <p className='text-white text-sm'>This doesn't let the app post to Facebook</p>

        {/* Google + Play Games */}
        <div className='flex flex-col justify-center items-center gap-2'>
          <button onClick={handlegooglebtn} className='bg-white text-gray-600 w-full py-3 rounded font-semibold flex items-center justify-center cursor-pointer gap-6 text-xl text-center hover:text-black'>
            <FcGoogle className='text-3xl'/>
            Sign in with Google
          </button>

          <button onClick={handleplaygamesbtn} className='bg-white text-gray-600 w-full py-3 rounded font-semibold flex items-center justify-center gap-6 text-xl cursor-pointer hover:text-black'>
            <IoGameControllerOutline className='text-3xl'/>
            Play Games
          </button>
        </div>
      </div>

      {/* OR */}
      <p className='text-yellow-300 text-3xl font-bold mt-1'>OR</p>

      {/* Guest Button */}
      <button onClick={handleGuestbtn} className='bg-blue-900 border-yellow-400 border-2 w-36 h-16 text-white rounded-lg font-semibold cursor-pointer mt-1 hover:bg-blue-800'>
        Play as Guest
      </button>

      {/* Privacy Text */}
      <p className='text-gray-600 text-sm font-semibold text-center mt-4'>
        By continuing I agree that Gametion Technologies Pvt.Ltd. may
        <br />
        store and process my data in accordance with the
      </p>

      
        <span className='text-gray-600 text-sm font-semibold text-center mt-4'>Privacy Policy</span>
        <span className='text-gray-600 mb-1'>___________</span>
      

    </div>
  )
}


export default LoginPage
