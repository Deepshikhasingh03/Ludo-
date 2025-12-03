import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const colors = ["#d82424ff", "#6abaefff", "#09541eff", "#e6e02eff"]; // white, red, green, yellow

const tokens = [
  {
    id: "pawn1",
    label: "Red Pawn",
    emoji: <MapPin size={30} color="#d82424ff" strokeWidth={2} />,
  },
  {
    id: "pawn2",
    label: "Green Pawn",
    emoji: <MapPin size={30} color="#6abaefff" strokeWidth={2} />,
  },
  {
    id: "pawn3",
    label: "Blue Pawn",
    emoji: <MapPin size={30} color="#09541eff" strokeWidth={2} />,
  },
  {
    id: "pawn4",
    label: "Yellow Pawn",
    emoji: <MapPin size={30} color="#e6e02eff" strokeWidth={2} />,
  },
];

export default function Teamup2() {
  const navigate = useNavigate();
  const [balance] = useState(0);

  const [selectedToken, setSelectedToken] = useState(tokens[0].id);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [players, setPlayers] = useState(2);
  const [is5or6, setIs5or6] = useState(false);
  const [entry, setEntry] = useState(1000);

  const syncTokenToColor = (tokenId) => {
    const index = tokens.findIndex((t) => t.id === tokenId);
    setSelectedColor(colors[index]);
  };

  const syncColorToToken = (color) => {
    const index = colors.findIndex((c) => c === color);
    setSelectedToken(tokens[index].id);
  };

  
  const changeEntry = (dir) => {
    setEntry((prev) => Math.max(0, prev + (dir === "+" ? 100 : -100)));
  };

  const handlePlay = () => {
    alert(`Playing with ${players} players, entry ₹${entry}`);
  };

  return (
    <div
      className="min-h-screen p-3 flex flex-col items-center bg-blue-950"
      style={{
        backgroundImage: `url('/mnt/data/ada59db2-3ed0-49bd-99f0-40ef1ee1f6e9.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md mt-6">
     
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-yellow-300 font-bold bg-blue- rounded-full p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-yellow-300 text-blue-900 font-bold flex items-center gap-2 shadow-md">
              <span>💰</span>
              <span>{balance.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Token / Color section */}
        <section className="bg-blue-950 rounded-xl p-1 border-4 border-yellow-400/90 mb-4">
          <div className="bg-gradient-to-b from-blue-800 to-blue-950 rounded-md p-5 text-center text-yellow-200">
            <h3 className="text-2xl font-extrabold">SELECT TOKEN / COLOR</h3>

            <div className="mt-4 flex items-center justify-center gap-6">
              <button
                onClick={() => {
                  const next =
                    tokens[
                      (tokens.findIndex((t) => t.id === selectedToken) + 3) %
                        tokens.length
                    ].id;
                  setSelectedToken(next);
                  syncTokenToColor(next);
                }}
                className="text-2xl text-white/80"
              >
                ◀
              </button>

              <div className="flex gap-4">
                {tokens.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      setSelectedToken(t.id);
                      syncTokenToColor(t.id);
                    }}
                    className={`w-16 h-16 rounded-lg flex items-center justify-center cursor-pointer transition-transform 
                    ${selectedToken === t.id ? "scale-110" : ""}`}
                    style={{
                      background:
                        selectedToken === t.id
                          ? "white"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="text-2xl">{t.emoji}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const next =
                    tokens[
                      (tokens.findIndex((t) => t.id === selectedToken) + 1) %
                        tokens.length
                    ].id;
                  setSelectedToken(next);
                  syncTokenToColor(next);
                }}
                className="text-2xl text-white/80"
              >
                ▶
              </button>
            </div>

            {/* Color selection */}
            <div className="mt-6 border-t-2 border-dashed border-white/10 pt-4 flex flex-col items-center gap-3">
              <div className="flex gap-4">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedColor(c);
                      syncColorToToken(c);
                    }}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === c
                        ? "scale-110 border-yellow-300"
                        : "border-white/20"
                    }`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

      
        {/* Select Game */}
        <section className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-xl p-1 border-4 border-yellow-400/90 mb-6">
          <div className="bg-gradient-to-b from-blue-800 to-blue-950 rounded-md p-6 text-center text-yellow-200">
            <h3 className="text-2xl font-extrabold">SELECT GAME</h3>

            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                onClick={() => changeEntry("-")}
                className="w-12 h-12 rounded-md border-2 border-white/20 text-2xl"
              >
                −
              </button>

              <div className="bg-yellow-300 rounded-xl p-2 w-40 text-blue-900 font-bold shadow-inner">
                <div className="text-xs text-left">WIN</div>
                <div className="text-xl">
                  ₹{(entry * 1.9).toLocaleString()}
                </div>
                <div className="text-sm text-left mt-1">
                  Entry: {entry.toLocaleString()}
                </div>
              </div>

              <button
                onClick={() => changeEntry("+")}
                className="w-12 h-12 rounded-md border-2 border-white/20 text-2xl"
              >
                +
              </button>
            </div>

            <button
              onClick={handlePlay}
              className="mt-6 w-1/2 mx-auto bg-gradient-to-r from-yellow-300 to-orange-400 text-blue-900 font-extrabold py-3 rounded-full text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Play
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
