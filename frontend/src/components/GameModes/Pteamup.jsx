import React, { useState } from 'react';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function LudoGameSetup() {
  const navigate = useNavigate();
  const [playerNames, setPlayerNames] = useState({
    player1: 'Player 1',
    player2: 'Player 2',
    player3: 'Player 3',
    player4: 'Player 4'
  });
  const [friendlyKill, setFriendlyKill] = useState(false);

  const handleNameChange = (player, value) => {
    setPlayerNames(prev => ({ ...prev, [player]: value }));
  };

  return (
    <div className="h-screen bg-[#00245c] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent"></div>
      
      {/* Back Button - Top */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6  p-3  "
      >
        <ArrowLeft className="w-8 h-8 text-yellow-400" />
        
      </button>

      {/* Title Section */}
      <div className="flex items-center justify-center gap-3 mb-4 relative z-10">
        <h2 className="text-3xl font-black text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wide">
          CHOOSE COLOR AND NAME
        </h2>
       
      </div>

      {/* Teams Container */}
      <div className="w-full max-w-2xl space-y-6 relative z-10">
        {/* TEAM A */}
        <div className="relative">
          {/* Team Label */}
          <div className="absolute -left-14 top-1/2 -translate-y-1/2 select-none">
            <div className="w-16 h-20 bg-gradient-to-b from-blue-500 to-blue-700 rounded-t-full border-4 border-white flex items-center justify-center">
              <span className="text-white font-black text-lg">TEAM</span>
            </div>
            <div className="w-16 h-5 bg-gradient-to-b from-blue-500 to-blue-700 border-4 border-t-0 border-white flex items-center justify-center">
              <span className="text-white font-black text-xl">A</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* Player 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full border-3 border-white shadow"></div>
              <input
                type="text"
                value={playerNames.player1}
                onChange={(e) => handleNameChange('player1', e.target.value)}
                className="flex-1 bg-white border-4 border-blue-800 rounded-lg px-4 py-2 text-center font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="w-10 h-10 bg-gray-200 rounded-lg border-2 border-gray-400 flex items-center justify-center text-xl">
                🎲
              </div>
            </div>

            {/* Player 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full border-3 border-white shadow"></div>
              <input
                type="text"
                value={playerNames.player3}
                onChange={(e) => handleNameChange('player3', e.target.value)}
                className="flex-1 bg-white border-4 border-blue-800 rounded-lg px-4 py-2 text-center font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="w-10 h-10 bg-gray-200 rounded-lg border-2 border-gray-400 flex items-center justify-center text-xl">
                🎲
              </div>
            </div>
          </div>
        </div>

        {/* VS Divider */}
        <div className="flex items-center justify-center">
          <div className="flex-1 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          <div className="mx-4 w-16 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
            <span className="text-white font-black text-2xl drop-shadow-lg">VS</span>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-l from-yellow-400 to-yellow-600"></div>
        </div>

        {/* TEAM B */}
        <div className="relative">
          {/* Team Label */}
          <div className="absolute -left-14 top-1/2 -translate-y-1/2 select-none">
            <div className="w-16 h-20 bg-gradient-to-b from-red-500 to-red-700 rounded-t-full border-4 border-white flex items-center justify-center">
              <span className="text-white font-black text-lg">TEAM</span>
            </div>
            <div className="w-16 h-5 bg-gradient-to-b from-red-500 to-red-700 border-4 border-t-0 border-white flex items-center justify-center">
              <span className="text-white font-black text-xl">B</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* Player 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-full border-3 border-white shadow"></div>
              <input
                type="text"
                value={playerNames.player2}
                onChange={(e) => handleNameChange('player2', e.target.value)}
                className="flex-1 bg-white border-4 border-blue-800 rounded-lg px-4 py-2 text-center font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="w-10 h-10 bg-gray-200 rounded-lg border-2 border-gray-400 flex items-center justify-center text-xl">
                🎲
              </div>
            </div>

            {/* Player 4 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full border-3 border-white shadow"></div>
              <input
                type="text"
                value={playerNames.player4}
                onChange={(e) => handleNameChange('player4', e.target.value)}
                className="flex-1 bg-white border-4 border-blue-800 rounded-lg px-4 py-2 text-center font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                style={{ borderStyle: 'dashed' }}
              />
              <div className="w-10 h-10 bg-gray-200 rounded-lg border-2 border-gray-400 flex items-center justify-center text-xl">
                🎲
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Friendly Kill */}
      <div className="flex items-center gap-3 my-6 relative z-10">
        <button
          onClick={() => setFriendlyKill(!friendlyKill)}
          className={`w-10 h-10 rounded-lg border-[4px] ${
            friendlyKill ? 'bg-yellow-400 border-yellow-500' : 'bg-gray-800 border-gray-600'
          } flex items-center justify-center transition-all`}
        >
          {friendlyKill && (
            <div className="w-5 h-5 bg-blue-600 rounded"></div>
          )}
        </button>
        <span className="text-white font-black text-xl drop-shadow-lg">
          Friendly Kill
        </span>
      </div>

      {/* Play Buttons */}
      <div className="space-y-3 mb-4 relative z-10">
        <button className="bg-gradient-to-b from-blue-400 to-blue-600 text-white font-black text-3xl px-20 py-3 rounded-full border-4 border-yellow-400 shadow-2xl hover:scale-105 transition-transform">
          Play
        </button>
        
      </div>
    </div>
  );
}