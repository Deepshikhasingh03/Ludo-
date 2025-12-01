import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OnlinePlay() {
  const navigate = useNavigate();
  const location = useLocation();
  const { players, entry, selectedToken, selectedColor } = location.state || {};

  const [playerName, setPlayerName] = useState("");
  const [searching, setSearching] = useState(false);

  const handleContinue = () => {
    if (searching) {
      alert("Searching for an online player...");
      // TODO: implement matchmaking API
    } else {
      alert(`Playing as ${playerName || "You"} with ${players || 2} players`);
    }
    navigate("/game"); // Redirect to the actual game page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-blue-900 text-yellow-300 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Play Online</h1>

      {/* Play as Me */}
      <div className="bg-blue-800 p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-sm mb-6 flex flex-col items-center">
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center">Play as Me</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="w-full p-2 sm:p-3 rounded-md text-black text-sm sm:text-base"
        />
        <button
          onClick={() => { setSearching(false); handleContinue(); }}
          className="mt-4 w-full bg-yellow-400 text-blue-900 font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base hover:scale-105 transition"
        >
          Play
        </button>
      </div>

      {/* Search Online Player */}
      <div className="bg-blue-800 p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-sm flex flex-col items-center">
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center">Search Online Player</h2>
        <button
          onClick={() => { setSearching(true); handleContinue(); }}
          className="mt-2 w-full bg-green-500 text-white font-bold py-2 sm:py-3 rounded-xl text-sm sm:text-base hover:scale-105 transition"
        >
          Search Player
        </button>
      </div>

      {/* Display selected token/color for reference */}
      {selectedToken && selectedColor && (
        <div className="mt-6 text-center text-sm sm:text-base">
          <p>Selected Token: <span className="font-bold">{selectedToken}</span></p>
          <p>Selected Color: <span className="font-bold" style={{ color: selectedColor }}>{selectedColor}</span></p>
          <p>Players: <span className="font-bold">{players}</span> | Entry: <span className="font-bold">₹{entry}</span></p>
        </div>
      )}
    </div>
  );
}
