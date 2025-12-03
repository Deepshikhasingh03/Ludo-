import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tokens = [
  { id: "blue", label: "Blue", color: "#3b8fff", icon: "🔵" },
  { id: "green", label: "Green", color: "#13c04b", icon: "🟢" },
  { id: "red", label: "Red", color: "#ff2e2e", icon: "🔴" },
  { id: "yellow", label: "Yellow", color: "#f0d22c", icon: "🟡" },
];

export default function ClassicSetup() {
  const navigate = useNavigate();
  const [playersCount, setPlayersCount] = useState(2);

  const [names, setNames] = useState(() =>
    Array.from({ length: 4 }, (_, i) => `Player ${i + 1}`)
  );

  const handleNameChange = (index, value) => {
    setNames((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const Dice = () => <span className="ml-3 text-2xl">🎲</span>;

  return (
    <div className="min-h-screen bg-[#00245c] text-white p-4 flex flex-col items-center">
      {/* Top header */}
      <div className="w-full max-w-xl mb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-yellow-400">
            <ArrowLeft size={20} />
            <span className="font-semibold">Back</span>
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="w-full max-w-xl">
        <div className="bg-[#07306b] border-4 border-yellow-400 rounded-xl py-3 px-4 mb-4">
          <h1 className="text-center text-yellow-300 text-xl font-extrabold tracking-wide">
            CHOOSE COLOR AND NAME
          </h1>
        </div>

        {/* Player inputs */}
        <div className="bg-[#083268] rounded-xl border-2 border-yellow-400 p-4 space-y-4">
          {Array.from({ length: playersCount }, (_, i) => {
            const token = tokens[i];
            return (
              <div key={token.id} className="flex items-center gap-4">
                {/* Color circle */}
                <div className="w-12 flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-4"
                    style={{
                      background: token.color,
                      borderColor: "#00ff75",
                      boxShadow: "0 0 0 4px rgba(0,255,117,0.06)",
                    }}
                  >
                    <span className="text-2xl">{token.icon}</span>
                  </div>
                </div>

                {/* Player input */}
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={names[i]}
                    onChange={(e) => handleNameChange(i, e.target.value)}
                    className="w-full px-3 py-2 rounded-md border-2 border-dashed border-white bg-white/5 text-white placeholder:text-white/60"
                  />
                  <Dice />
                </div>
              </div>
            );
          })}
        </div>

        {/* Player count selector */}
        <div className="mt-5 flex items-center justify-center gap-4">
          {[2, 3, 4].map((n) => (
            <button
              key={n}
              onClick={() => setPlayersCount(n)}
              className={`px-4 py-2 rounded-full font-bold text-lg border-4 ${playersCount === n
                  ? "bg-blue-700 border-yellow-400 text-white"
                  : "bg-blue-800 border-yellow-400/50 text-white/70"
                }`}
            >
              {n}P
            </button>
          ))}
        </div>

        {/* Play button */}
        <div className="mt-6 flex flex-col items-center">
          <button className="w-48 py-3 rounded-full bg-gradient-to-b from-[#1d7fff] to-[#0059c8] text-white font-black border-4 border-yellow-400">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}