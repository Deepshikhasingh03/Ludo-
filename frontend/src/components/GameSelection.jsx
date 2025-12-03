import React, { useState } from "react";
import { Settings, ArrowRight, Users, Crown, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GameSelection = () => {
  const navigate = useNavigate();
  const [balance] = useState("0");
  const [selected, setSelected] = useState("CLASSIC");

  const games = [
    { id: "QUICK", players: 44194, icon: "⚡" },
    { id: "CLASSIC", players: 18465, icon: "👑" },
    { id: "POPULAR", players: 12925, icon: "👥" },
    { id: "MASK MODE", players: 229, icon: "😷" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-blue-950"
      style={{
        backgroundImage: `url('/mnt/data/10b3b694-8d41-4d4d-9477-be000f5eb3c4.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md mt-6">
        {/* header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-yellow-300 font-bold bg-blue-900/20 rounded-full p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1 rounded-full bg-yellow-300 text-blue-900 font-bold flex items-center gap-2 shadow-md">
              <span>💰</span>
              <span>{balance}</span>
            </div>
            <Settings className="w-6 h-6 text-white/90" />
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-800 to-blue-900 rounded-xl p-1 shadow-2xl border-4 border-yellow-400/90">
          <div className="bg-gradient-to-b from-blue-700 to-blue-800 rounded-lg p-6 text-center text-yellow-200">
            <h2 className="text-2xl font-extrabold tracking-wider drop-shadow">SELECT GAME</h2>

            <div className="mt-4 space-y-3">
              {games.map((g) => {
                const active = selected === g.id;
                return (
                  <div
                    key={g.id}
                    onClick={() => setSelected(g.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-transform transform ${active ? "scale-105" : ""
                      }`}
                    style={{
                      background: active ? "linear-gradient(90deg,#0b66a6, #083b8a)" : "linear-gradient(90deg,#0b4f7a,#08324f)",
                      boxShadow: active ? "0 8px 20px rgba(255,200,0,0.12), inset 0 0 10px rgba(255,215,0,0.06)" : "0 6px 12px rgba(0,0,0,0.4)",
                      border: "3px solid rgba(255,200,10,0.18)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl bg-white/10`} >
                        {g.icon}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-300">{g.id}</div>
                        <div className="flex items-center text-sm text-white/90 gap-2 mt-1">
                          <Users className="w-4 h-4" />
                          <span>Players: {g.players.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active ? "bg-yellow-300 text-blue-900" : "bg-transparent border-2 border-yellow-300/60 text-yellow-300"}`}>
                        {active ? "✔" : ""}
                      </div>
                      <div className="bg-white/10 p-2 rounded-full">
                        <ArrowRight className="w-4 h-4 text-white/90" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => navigate("/computer2")}
              className="mt-6 w-1/2 mx-auto bg-gradient-to-r from-yellow-300 to-orange-400 text-blue-900 font-extrabold py-3 rounded-full text-lg shadow-xl hover:scale-105 transition-transform"
            >
              Next
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default GameSelection;
