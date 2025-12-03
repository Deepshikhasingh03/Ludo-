import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function GameLobby() {
  const navigate = useNavigate();
  const [selectedPlayers, setSelectedPlayers] = useState('four');
  const [selectedGame, setSelectedGame] = useState('classic');

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center p-3">
      {/* Top header with Back Button */}
      <div className="w-full max-w-md mb-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold text-lg">Back</span>
        </button>
      </div>

      <div className="w-full max-w-md">

        {/* Select Players Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 border-4 border-yellow-500 rounded-2xl p-6 mb-5 shadow-xl">
          <h2 className="text-yellow-400 text-xl font-black mb-5 tracking-wider text-center">
            SELECT PLAYERS
          </h2>

          <div className="flex gap-3">
            {/* 4 Players Online */}
            <div
              onClick={() => setSelectedPlayers('four')}
              className={`flex-1 border-4 rounded-xl p-4 text-center cursor-pointer transition-all hover:scale-105 ${selectedPlayers === 'four'
                ? 'bg-gradient-to-br from-blue-800 to-blue-950 border-yellow-500 shadow-lg'
                : 'bg-gradient-to-br from-blue-700 to-blue-900 border-yellow-500'
                }`}
            >
              <div className="text-3xl mb-2">👥 vs 👥</div>
              <div className="text-white font-bold text-xs">
                4 PLAYERS<br />ONLINE
              </div>

              {/* ✓ mark */}
              {selectedPlayers === 'four' && (
                <div className="mt-2 flex justify-center">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-extrabold text-lg">✔</span>
                  </div>
                </div>
              )}
            </div>

            {/* 2 Friends 2 Online */}
            <div
              onClick={() => setSelectedPlayers('friends')}
              className={`flex-1 border-4 rounded-xl p-3 text-center cursor-pointer transition-all hover:scale-105 ${selectedPlayers === 'friends'
                ? 'bg-gradient-to-br from-blue-800 to-blue-950 border-yellow-500 shadow-lg'
                : 'bg-gradient-to-br from-blue-700 to-blue-900 border-yellow-500'
                }`}
            >
              <div className="text-3xl mb-2">👥 ➜ 🌐</div>
              <div className="text-white font-bold text-xs">
                2 FRIENDS<br />2 ONLINE
              </div>

              {/* ✓ mark */}
              {selectedPlayers === 'friends' && (
                <div className="mt-2 flex justify-center">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-extrabold text-lg">✔</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Select Game Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 border-4 border-yellow-500 rounded-2xl p-5 mb-5 shadow-xl">
          <h2 className="text-yellow-400 text-xl font-black mb-5 tracking-wider text-center">
            SELECT GAME
          </h2>

          <div className="space-y-3">
            {/* Quick */}
            <div
              onClick={() => setSelectedGame('quick')}
              className={`border-4 rounded-xl p-3 cursor-pointer transition-all hover:scale-105 ${selectedGame === 'quick'
                ? 'bg-gradient-to-br from-blue-800 to-blue-950 border-yellow-500 shadow-lg'
                : 'bg-gradient-to-br from-blue-700 to-blue-900 border-yellow-500'
                }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-3 flex items-center justify-center ${selectedGame === 'quick'
                    ? 'border-yellow-500 bg-yellow-500'
                    : 'border-yellow-500'
                    }`}
                >
                  {selectedGame === 'quick' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base">QUICK</div>
                  <div className="text-green-400 text-xs">🟢 Players: 0</div>
                </div>
                {selectedGame === 'quick' && (
                  <span className="text-green-400 text-xl font-bold">✓</span>
                )}
              </div>
            </div>

            {/* Classic */}
            <div
              onClick={() => setSelectedGame('classic')}
              className={`border-4 rounded-xl p-3 cursor-pointer transition-all hover:scale-105 ${selectedGame === 'classic'
                ? 'bg-gradient-to-br from-blue-800 to-blue-950 border-yellow-500 shadow-lg'
                : 'bg-gradient-to-br from-blue-700 to-blue-900 border-yellow-500'
                }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-3 flex items-center justify-center ${selectedGame === 'classic'
                    ? 'border-yellow-500 bg-yellow-500'
                    : 'border-yellow-500'
                    }`}
                >
                  {selectedGame === 'classic' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base">CLASSIC</div>
                  <div className="text-green-400 text-xs">🟢 Players: 0</div>
                </div>
                {selectedGame === 'classic' && (
                  <span className="text-green-400 text-xl font-bold">✓</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}

        <button
          onClick={() => navigate("/teamup2")}
          className="w-full bg-gradient-to-br from-blue-800 to-blue-950 border-4 border-yellow-500 text-white font-black text-lg py-3 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all tracking-wider active:scale-95">
          NEXT
        </button>
      </div>
    </div>
  );
}
