import React from 'react'
import ludo from '../assets/bg-ludo.png'
import { FaArrowLeft } from 'react-icons/fa';

function Search() {
     const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full min-h-screen flex flex-col" style={{ backgroundImage: `url(${ludo})` }}>
         <button
                            onClick={handleBack}
                            className="absolute top-4 left-9 mt-1 sm:mt-4 cursor-pointer flex items-center gap-2 text-yellow-300 font-bold text-lg hover:text-yellow-400"
                            aria-label="Go back"
                          >
                            <FaArrowLeft />
                            Back
                          </button>

  {/* ---------- TITLE BAR ---------- */}
  <div className="w-full bg-[#0A2F6B] py-3 sm:py-4 flex justify-center mt-2">
    <h1 className="text-white text-2xl sm:text-3xl font-extrabold drop-shadow-lg tracking-wide">
      SEARCH PLAYERS
    </h1>
  </div>

  {/* ---------- SEARCH BAR ---------- */}
  <div className="mt-5 sm:mt-6 w-full flex justify-center px-4 gap-2">
    <div className="flex items-center bg-white px-3 py-2 rounded-lg w-full max-w-lg shadow-lg">

      {/* Search icon */}
      <span className="text-blue-600 text-xl sm:text-2xl mr-2">🔍</span>

      <input
        type="text"
        placeholder="Search List"
        className="flex-1 bg-transparent outline-none 
                   text-blue-600 font-semibold text-sm sm:text-base 
                   placeholder:text-blue-400"
      />

     
    </div>
     {/* Search Button */}
      <button className="bg-green-500 text-white font-semibold 
                         px-3 sm:px-4 py-1 rounded-xl shadow 
                         hover:scale-105 transition text-sm sm:text-base">
        Search
      </button>
  </div>

  {/* ---------- GENDER FILTERS ---------- */}
  <div className="mt-5 sm:mt-6 w-full flex justify-center 
                  gap-2 sm:gap-11 px-2 sm:px-4 flex-wrap">

    {/* Male */}
    <div className="flex items-center gap-1 bg-white 
                    border-2 border-blue-300 px-3 sm:px-4 py-2 
                    rounded-xl shadow-md w-[31%] sm:w-auto justify-center">
      <input type="radio" name="gender" className="w-4 h-4" />
      <span className="text-blue-700 font-bold flex items-center gap-1 text-xs sm:text-base">
        <span className="text-blue-600">👦</span> <span className='text-black'>Male</span>
      </span>
    </div>

    {/* Female */}
    <div className="flex items-center gap-1 bg-white 
                    border-2 border-pink-300 px-3 sm:px-4 py-2 
                    rounded-xl shadow-md w-[31%] sm:w-auto justify-center">
      <input type="radio" name="gender" className="w-4 h-4" />
      <span className="text-pink-600 font-bold flex items-center gap-1 text-xs sm:text-base">
        <span className="text-pink-500">👧</span> <span className='text-black'>Female</span>
      </span>
    </div>

    {/* Other */}
    <div className="flex items-center gap-1 bg-white  
                    border-2 border-yellow-300 px-3 sm:px-4 py-2 
                    rounded-xl shadow-md w-[31%] sm:w-auto justify-center">
      <input type="radio" name="gender" className="w-4 h-4" />
      <span className="text-yellow-500 font-bold flex items-center gap-1 text-xs sm:text-base">
        <span>🌼</span> <span className='text-black'>Other</span>
      </span>
    </div>

  </div>

  

</div>

  )
}

export default Search
