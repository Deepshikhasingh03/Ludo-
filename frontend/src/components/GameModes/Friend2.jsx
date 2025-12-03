import React, { useState } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tokens = [
  { icon: "📍", locked: false },
  { icon: "⭐", locked: true },
  { icon: "⚡", locked: true },
  { icon: "🌪️", locked: true },
];

const colors = ["#3E95FF", "#FF3131", "#12D46D", "#F8D823"]; // BLUE RED GREEN YELLOW

export default function CreateRoom() {
  const navigate = useNavigate();
  const [selectedToken, setSelectedToken] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedGame, setSelectedGame] = useState("quick");

  return (
    <div className="min-h-screen w-full bg-[#001835] flex flex-col items-center justify-start p-4 relative">
      {/* Top header with Back Button */}
      <div className="w-full max-w-md mb-2 flex justify-start">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <ArrowLeft size={24} />
          <span className="font-bold text-lg">Back</span>
        </button>
      </div>

      {/* SELECT TOKEN / COLOR */}
      <div className="w-[90%] max-w-md bg-gradient-to-b from-[#034B92] to-[#013C74] border-4 border-yellow-400 rounded-2xl p-5 shadow-[0_0_15px_#FFD700] mt-2">
        <h2 className="text-center text-yellow-300 font-bold text-2xl">
          SELECT TOKEN / COLOR
        </h2>

        {/* TOKENS */}
        <div className="flex justify-between items-center mt-4">
          {tokens.map((item, index) => (
            <button
              key={index}
              disabled={item.locked}
              onClick={() => setSelectedToken(index)}
              className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-[#012C5E] transition-all ${selectedToken === index
                  ? "scale-125 border-4 border-yellow-300"
                  : "border-2 border-blue-300"
                }`}
            >
              <span className="text-4xl">{item.icon}</span>

              {item.locked && (
                <span className="absolute -top-2 -right-2 text-lg text-yellow-300">
                  🔒
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="h-[2px] bg-dashed border-b-2 border-blue-300 my-4"></div>

        {/* COLORS */}
        <div className="flex justify-between mt-2">
          {colors.map((color, i) => (
            <button
              onClick={() => setSelectedColor(i)}
              key={i}
              style={{ backgroundColor: color }}
              className={`w-12 h-12 rounded-full border-4 transition-all ${selectedColor === i
                  ? "border-yellow-300 scale-125"
                  : "border-gray-200 opacity-80"
                }`}
            />
          ))}
        </div>
      </div>

      {/* SELECT GAME */}
      <div className="w-[90%] max-w-md bg-gradient-to-b from-[#034B92] to-[#013C74] border-4 border-yellow-400 rounded-2xl p-5 mt-3 shadow-[0_0_15px_#FFD700]">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-yellow-300 font-bold text-2xl text-center">
            SELECT GAME
          </h2>
          <HelpCircle color="yellow" size={25} />
        </div>

        <div className="flex flex-col items-center gap-3 mt-3">
          <button
            onClick={() => setSelectedGame("classic")}
            className={`w-48 text-lg font-bold px-4 py-2 rounded-full border-4 border-yellow-400 transition-all bg-blue-700 text-white ${selectedGame === "classic"
                ? "shadow-[0_0_10px_#FFD700] scale-110"
                : ""
              }`}
          >
            CLASSIC
          </button>

          <button
            onClick={() => setSelectedGame("quick")}
            className={`w-48 text-lg font-bold px-4 py-2 rounded-full border-4 border-yellow-400 transition-all bg-blue-700 text-white ${selectedGame === "quick"
                ? "shadow-[0_0_10px_#FFD700] scale-110"
                : ""
              }`}
          >
            QUICK
          </button>
        </div>
      </div>

      {/* CREATE ROOM */}
      <button className="mt-6 text-white font-bold text-xl bg-blue-700 px-10 py-3 rounded-full border-[5px] border-yellow-400 shadow-[0_0_15px_#FFD700] hover:scale-105 transition-transform">
        Create Room
      </button>

      <p className="text-sm text-white font-semibold mt-2">Daily Free: 0/3</p>
    </div>
  );
}
