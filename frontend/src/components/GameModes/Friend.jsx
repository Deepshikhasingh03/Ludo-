import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Friend() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("create");
  const [players, setPlayers] = useState(2);
  const [voice, setVoice] = useState(false);
  const [entry, setEntry] = useState(100);
  const [lobbyCode, setLobbyCode] = useState("");
  const [selectedToken, setSelectedToken] = useState(0);

  const tokens = [
    { icon: "📍", unlocked: true },
    { icon: "⚡", unlocked: false },
    { icon: "🌀", unlocked: false },
    { icon: "🥷", unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-[#001a42] flex flex-col items-center p-4 text-white">
      {/* Top header with Back Button */}
      <div className="w-full max-w-md mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold text-lg">Back</span>
        </button>
      </div>

      <div className="bg-blue-900  border-4 border-yellow-400 rounded-2xl p-5 w-[90%] max-w-md shadow-[0_0_10px_1px_#ffdd00]">

        {/* 🔥 TOP SECTION CHANGES BY TAB */}

        {tab === "create" ? (
          <>
            {/* SELECT PLAYERS */}
            <h1 className="text-2xl font-black text-yellow-300 text-center mb-4 drop-shadow-[0_0_5px_#ff0]">
              SELECT PLAYERS
            </h1>

            <div className="flex justify-between mb-6">
              {[2, 3, 4].map((p) => (
                <button
                  key={p}
                  onClick={() => setPlayers(p)}
                  className={`w-24 h-20 rounded-xl font-bold border-2 flex justify-center items-center
                ${players === p
                      ? "bg-yellow-400 text-black border-yellow-300 shadow-[0_0_10px_#ffd900]"
                      : "bg-[#002d70] border-gray-300"
                    }`}
                >
                  {p}P
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* SELECT TOKEN / COLOR */}
            <h1 className="text-xl font-black text-yellow-200 text-center mb-3 ">
              SELECT TOKEN / COLOR
            </h1>

            <div className="flex justify-center items-center gap-3 mb-3">
              <button
                onClick={() =>
                  setSelectedToken((prev) => (prev - 1 + tokens.length) % tokens.length)
                }
                className="text-yellow-300 text-2xl"
              >
                ◀
              </button>

              <div className="flex gap-4">
                {tokens.map((t, index) => (
                  <div
                    key={index}
                    onClick={() => t.unlocked && setSelectedToken(index)}
                    className={`text-4xl cursor-pointer relative ${selectedToken === index ? "opacity-100" : "opacity-50"
                      }`}
                  >
                    {t.icon}
                    {selectedToken === index && (
                      <span className="absolute -top-2 right-0 text-yellow-300 text-xl">✔</span>
                    )}
                    {!t.unlocked && (
                      <span className="absolute bottom-0 right-0 text-yellow-300 text-lg">🔒</span>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedToken((prev) => (prev + 1) % tokens.length)}
                className="text-yellow-300 text-2xl"
              >
                ▶
              </button>
            </div>

            <div className="flex justify-center mb-5">
              <button className="bg-yellow-300 text-black w-14 h-14 rounded-full text-3xl flex justify-center items-center shadow-[0_0_10px_#ffd900]">
                ✔
              </button>
            </div>
          </>
        )}

        {/* 🔥 TAB SWITCH */}
        <div className="flex justify-between mb-5">
          <button
            onClick={() => setTab("create")}
            className={`w-1/2 py-2 text-xl font-bold ${tab === "create" ? "text-yellow-300 border-b-4 border-yellow-300" : "text-white opacity-60"
              }`}
          >
            Create
          </button>
          <button
            onClick={() => setTab("join")}
            className={`w-1/2 py-2 text-xl font-bold ${tab === "join" ? "text-yellow-300 border-b-4 border-yellow-300" : "text-white opacity-60"
              }`}
          >
            Join
          </button>
        </div>

        {/* 🔥 BOTTOM SECTION BASED ON TAB */}

        {tab === "create" ? (
          <>
            {/* Voice Chat */}
            <div className="flex justify-center items-center gap-3 mb-4">
              <button
                onClick={() => setVoice(!voice)}
                className={`w-12 h-12 rounded-full border-4 ${voice ? "border-yellow-300 bg-yellow-300" : "border-yellow-300 bg-transparent"
                  }`}
              ></button>
              <span className="text-lg font-bold">Voice Chat 🎤</span>
            </div>

            {/* Entry */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <button
                onClick={() => setEntry(entry > 100 ? entry - 100 : entry)}
                className="w-10 h-10 bg-[#003b84] text-3xl rounded-lg flex justify-center items-center"
              >
                –
              </button>

              <div className="bg-yellow-300 w-28 h-20 rounded-xl flex flex-col justify-center items-center text-black font-bold text-xl ">
                {entry}
              </div>

              <button
                onClick={() => setEntry(entry + 100)}
                className="w-10 h-10 bg-[#003b84] text-3xl rounded-lg flex justify-center items-center"
              >
                +
              </button>
            </div>

            <button
              onClick={() => navigate("/friend2")}
              className="w-full bg-yellow-300 text-black font-black text-2xl py-3 rounded-xl hover:scale-105 transition">
              Create Room
            </button>
          </>
        ) : (
          <>
            {/* Enter Lobby Code */}
            <h2 className="text-xl text-center font-bold text-yellow-300 mb-3">
              ENTER PRIVATE CODE
            </h2>

            <input
              type="text"
              value={lobbyCode}
              onChange={(e) => setLobbyCode(e.target.value)}
              placeholder="Enter private code here..."
              className="w-full h-14 rounded-lg text-center text-black text-xl font-bold bg-[#e6e6e6] border-2 border-red-400 outline-none mb-4"
            />

            <button
              onClick={() => {
                if (lobbyCode === "") {
                  alert("Please enter a lobby code");

                }
              }}
              className="w-full bg-yellow-300 text-black font-black text-2xl py-3 rounded-xl shadow-[0_0_12px_#ff0] hover:scale-105 transition">
              Join Room
            </button>

            <p className="mt-2 text-center opacity-70 font-bold">Daily Free: 0/3</p>
          </>
        )}
      </div>
    </div>
  );
}
