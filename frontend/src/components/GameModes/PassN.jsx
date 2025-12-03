import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PassN() {
  const navigate = useNavigate();
  const tokens = [
    { id: 1, icon: "📍", locked: false },
    { id: 2, icon: "⭐", locked: false },
    { id: 3, icon: "⚡", locked: true },
    { id: 4, icon: "🌪️", locked: true },
    // { id: 5, icon: "🥷", locked: true },
  ];

  const games = [
    { id: "classic", name: "Classic", icon: "👤⚡👤" },
    { id: "team", name: "Classic Team Up", icon: "👥⚡👥" },
    { id: "quick", name: "QUICK", icon: "👤🔁👤" },
  ];

  const [selectedToken, setSelectedToken] = useState(1);
  const [selectedGame, setSelectedGame] = useState("classic");
  const [tokenPage, setTokenPage] = useState(0);

  const tokensPerPage = 5;
  const visibleTokens = tokens.slice(
    tokenPage * tokensPerPage,
    (tokenPage + 1) * tokensPerPage
  );

  return (
    <div className="h-screen w-full flex flex-col bg-[#00245c] p-4 overflow-hidden">
      {/* Top header */}
      <div className="w-full max-w-xl mx-auto mb-2 shrink-0">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
            <ArrowLeft size={24} />
            <span className="font-bold text-lg">Back</span>
          </button>
        </div>
      </div>

      <div className="w-full max-w-xl mx-auto flex-1 flex flex-col min-h-0">

        {/* === SELECT TOKEN === */}
        <div className="shrink-0 mb-2">
          <h2 className="text-center text-yellow-400 text-2xl font-black tracking-wider mb-2">
            SELECT TOKEN
          </h2>

          <div className="bg-blue-900 border-4 border-yellow-400 rounded-xl p-3">
            <div className="flex items-center justify-between">
              {/* LEFT ARROW */}
              <button
                onClick={() => setTokenPage(Math.max(0, tokenPage - 1))}
                disabled={tokenPage === 0}
                className="text-yellow-400 disabled:opacity-30 hover:scale-110 transition-transform"
              >
                <ChevronLeft size={28} />
              </button>

              {/* TOKENS */}
              <div className="flex gap-3 justify-center">
                {visibleTokens.map((t) => (
                  <button
                    key={t.id}
                    disabled={t.locked}
                    onClick={() => !t.locked && setSelectedToken(t.id)}
                    className="relative group"
                  >
                    <div
                      className={`text-xl p-3 rounded-full transition-all duration-200
                        ${selectedToken === t.id
                          ? "bg-yellow-400 scale-110 shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                          : "bg-blue-800 group-hover:bg-blue-700"
                        }`}
                    >
                      {t.icon}
                    </div>

                    {/* SELECT MARK */}
                    {selectedToken === t.id && (
                      <div className="absolute -top-1 -right-1 bg-green-500 p-0.5 rounded-full border-2 border-white">
                        <Check className="text-white" size={12} />
                      </div>
                    )}

                    {/* LOCK ICON */}
                    {t.locked && (
                      <div className="absolute bottom-0 right-0 text-yellow-300 text-sm drop-shadow-md">
                        🔒
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={() =>
                  setTokenPage(
                    Math.min(Math.ceil(tokens.length / tokensPerPage) - 1, tokenPage + 1)
                  )
                }
                disabled={tokenPage >= Math.ceil(tokens.length / tokensPerPage) - 1}
                className="text-yellow-400 disabled:opacity-30 hover:scale-110 transition-transform"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* === SELECT GAME === */}
        <div className="shrink-0 mb-4">
          <h2 className="text-center text-yellow-400 text-2xl font-black tracking-wider mb-2">
            SELECT GAME
          </h2>

          <div className="bg-blue-900 border-4 border-yellow-400 rounded-xl p-3 flex flex-col gap-2">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                className="w-full shrink-0"
              >
                <div
                  className={`flex items-center gap-3 bg-blue-800 rounded-lg p-2 transition-all duration-200
                  ${selectedGame === game.id
                      ? "border-2 border-yellow-400 bg-blue-700 shadow-lg"
                      : "border-2 border-transparent hover:bg-blue-700"
                    }`}
                >
                  <span className="text-2xl">{game.icon}</span>
                  <span
                    className={`flex-1 text-lg font-bold text-center rounded-lg py-1.5 transition-colors
                    ${selectedGame === game.id
                        ? "bg-yellow-400 text-black shadow-sm"
                        : "bg-blue-900/50 text-white"
                      }`}
                  >
                    {game.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* NEXT BUTTON */}
        <div className="flex justify-center shrink-0 pb-25 mt-auto">
          <button
            onClick={() => {
              if (selectedGame === "team") {
                navigate("/pteamup");
              } else {
                navigate("/pclassic");
              }
            }}
            className="w-full max-w-xs py-3 bg-gradient-to-b from-yellow-300 to-yellow-500 text-black font-black text-xl rounded-full 
            hover:scale-105 active:scale-95 transition-all shadow-[0_4px_0_rgb(161,98,7)] hover:shadow-[0_6px_0_rgb(161,98,7)] active:shadow-none translate-y-0 active:translate-y-1">
            START GAME
          </button>
        </div>
      </div>
    </div>
  );
}
