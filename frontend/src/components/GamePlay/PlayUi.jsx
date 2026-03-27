import { useEffect, useRef, useState } from "react";

// Images
import backgroundImg from "../../assets/bg-ludo.png";
import board from "../../assets/bgboardnew.jpg";

import dice1 from "../../assets/dice/1.svg";
import dice2 from "../../assets/dice/2.svg";
import dice3 from "../../assets/dice/3.svg";
import dice4 from "../../assets/dice/4.svg";
import dice5 from "../../assets/dice/5.svg";
import dice6 from "../../assets/dice/6.svg";

const diceImages = { 1: dice1, 2: dice2, 3: dice3, 4: dice4, 5: dice5, 6: dice6 };

// BOARD PATH (52-ish points)
const PATH = [
  { top: "86%", left: "50%" }, { top: "80%", left: "50%" }, { top: "74%", left: "50%" },
  { top: "68%", left: "50%" }, { top: "62%", left: "50%" }, { top: "56%", left: "50%" },
  { top: "56%", left: "44%" }, { top: "56%", left: "38%" }, { top: "56%", left: "32%" },
  { top: "56%", left: "26%" }, { top: "56%", left: "20%" }, { top: "50%", left: "20%" },
  { top: "44%", left: "20%" }, { top: "38%", left: "20%" }, { top: "32%", left: "20%" },
  { top: "26%", left: "20%" }, { top: "20%", left: "20%" }, { top: "20%", left: "26%" },
  { top: "20%", left: "32%" }, { top: "20%", left: "38%" }, { top: "20%", left: "44%" },
  { top: "20%", left: "50%" }, { top: "20%", left: "56%" }, { top: "20%", left: "62%" },
  { top: "20%", left: "68%" }, { top: "20%", left: "74%" }, { top: "20%", left: "80%" },
  { top: "26%", left: "80%" }, { top: "32%", left: "80%" }, { top: "38%", left: "80%" },
  { top: "44%", left: "80%" }, { top: "50%", left: "80%" }, { top: "56%", left: "80%" },
  { top: "56%", left: "74%" }, { top: "56%", left: "68%" }, { top: "56%", left: "62%" },
  { top: "62%", left: "62%" }, { top: "68%", left: "62%" }, { top: "74%", left: "62%" },
  { top: "80%", left: "62%" }, { top: "86%", left: "62%" }, { top: "86%", left: "68%" },
  { top: "86%", left: "74%" }, { top: "86%", left: "80%" }, { top: "80%", left: "80%" },
  { top: "74%", left: "80%" }, { top: "68%", left: "80%" }, { top: "62%", left: "80%" },
  { top: "62%", left: "74%" }, { top: "62%", left: "68%" }
];

const PATH_LENGTH = PATH.length;
const WIN_STEPS = PATH_LENGTH; 
const START = [-1, -1, -1, -1]; // -1 = home
const SAFE_INDICES = new Set([0, 13, 26, 39, 8, 21, 34, 47]);

const HOME_POS = [
  { top: "92%", left: "20%" },
  { top: "50%", left: "6%" },
  { top: "6%", left: "50%" },
  { top: "50%", left: "94%" }
];

const START_INDICES = [0, 13, 26, 39];

export default function PlayUi() {
  const [steps, setSteps] = useState(START.slice());
  const [turn, setTurn] = useState(0);
  const [diceFace, setDiceFace] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [message, setMessage] = useState("Roll a 6 to enter the board.");
  const [winner, setWinner] = useState(null);

  const [diceAnimStyle, setDiceAnimStyle] = useState({});
  const diceRef = useRef(null);

  const absoluteIndex = (playerIndex) => {
    const s = steps[playerIndex];
    if (s < 0) return null;
    return (START_INDICES[playerIndex] + s) % PATH_LENGTH;
  };

  const sendHome = (idx) => {
    setSteps(prev => {
      const copy = [...prev];
      copy[idx] = -1;
      return copy;
    });
  };

  const applyMove = (d) => {
    if (winner) return;

    setDiceFace(d);
    setSteps(prev => {
      const copy = [...prev];
      const cur = copy[turn];

      if (cur < 0) {
        if (d === 6) {
          copy[turn] = 0;
          setMessage(`Player ${turn + 1} entered the board! Roll again because you got 6.`);
        } else {
          setMessage(`Player ${turn + 1} needs 6 to enter.`);
          setTurn((turn + 1) % 4);
        }
        return copy;
      }

      const proposed = cur + d;
      if (proposed > WIN_STEPS) {
        setMessage(`Need exact roll to finish. ${d} is too big.`);
        if (d !== 6) setTurn((turn + 1) % 4);
        return copy;
      }

      copy[turn] = proposed;
      const absAfter = (START_INDICES[turn] + proposed) % PATH_LENGTH;

      if (!SAFE_INDICES.has(absAfter)) {
        for (let i = 0; i < 4; i++) {
          if (i === turn) continue;
          if (copy[i] < 0) continue;
          const theirAbs = (START_INDICES[i] + copy[i]) % PATH_LENGTH;
          if (theirAbs === absAfter) {
            copy[i] = -1;
            setMessage(`Player ${turn + 1} cut Player ${i + 1}!`);
          }
        }
      } else {
        setMessage(`Landed on a safe cell.`);
      }

      if (proposed === WIN_STEPS) {
        setWinner(turn + 1);
        setMessage(`Player ${turn + 1} wins! 🎉`);
        return copy;
      }

      if (d !== 6) setTurn((turn + 1) % 4);
      else setMessage(`Player ${turn + 1} rolled a 6 — roll again!`);

      return copy;
    });
  };

  const rollDice = async () => {
    if (rolling || winner) return;
    setRolling(true);
    setMessage("Rolling...");

    const randRotateX = Math.floor(Math.random() * 2000) + 800;
    const randRotateY = Math.floor(Math.random() * 2000) + 800;
    const randTranslateY = Math.floor(Math.random() * 24) + 6;

    setDiceAnimStyle({
      transform: `translateY(-${randTranslateY}px) rotateX(${randRotateX}deg) rotateY(${randRotateY}deg)`,
      transition: "transform 900ms cubic-bezier(.2,.8,.3,1)",
    });

    const previewInterval = 70;
    const previewCount = 12;
    for (let i = 0; i < previewCount; i++) {
      setDiceFace(Math.floor(Math.random() * 6) + 1);
      await new Promise(r => setTimeout(r, previewInterval));
    }

    const finalFace = Math.floor(Math.random() * 6) + 1;

    setDiceAnimStyle({
      transform: `translateY(0px) rotateX(${randRotateX + 90}deg) rotateY(${randRotateY + 90}deg)`,
      transition: "transform 400ms cubic-bezier(.25,.8,.4,1)",
    });

    await new Promise(r => setTimeout(r, 420));

    setDiceFace(finalFace);
    applyMove(finalFace);

    setTimeout(() => {
      setDiceAnimStyle({});
      setRolling(false);
    }, 180);
  };

  const renderToken = (i) => {
    const s = steps[i];
    const pos = s < 0 ? HOME_POS[i] : PATH[(START_INDICES[i] + s) % PATH_LENGTH];
    const colorClass = ["bg-green-500", "bg-red-500", "bg-blue-500", "bg-yellow-400"][i];
    return (
      <div
        key={i}
        className="absolute flex items-center justify-center"
        style={{
          top: pos.top,
          left: pos.left,
          transform: "translate(-50%, -50%)",
          transition: "top 350ms ease, left 350ms ease",
          zIndex: 30,
        }}
      >
        <div className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs shadow-lg ${colorClass}`}>
          {i + 1}
        </div>
      </div>
    );
  };

  const resetGame = () => {
    setSteps(START.slice());
    setTurn(0);
    setDiceFace(1);
    setWinner(null);
    setMessage("Game reset. Player 1 starts. Roll a 6 to enter.");
  };

  useEffect(() => {
    setMessage("Roll a 6 to enter the board. Safe cells prevent cuts.");
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center py-6"
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <style>{`.dice-3d { transform-style: preserve-3d; perspective: 800px; }`}</style>

      <div className="w-[320px] sm:w-[420px] md:w-[420px] lg:w-[680px] px-4">
        <div className="relative">
          <img src={board} alt="board" className="w-full rounded-lg shadow-2xl" />
          {Array.from({ length: 4 }).map((_, i) => renderToken(i))}
        </div>

        <div className="mt-4 bg-black/50 rounded-lg p-3 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex gap-3 items-center flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/6 px-3 py-1 rounded">
                <div className={`w-3 h-3 rounded-full ${["bg-green-500","bg-red-500","bg-blue-500","bg-yellow-400"][i]}`} />
                <div className="text-sm">
                  <div className="font-bold">P{i + 1}</div>
                  <div className="text-xs">{steps[i] < 0 ? "Home" : (steps[i] === WIN_STEPS ? "Finished" : `Step ${steps[i]} / ${WIN_STEPS}`)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="dice-3d">
                <div
                  ref={diceRef}
                  className="w-16 h-16 bg-white rounded-md flex items-center justify-center shadow-lg"
                  style={diceAnimStyle}
                >
                  <img src={diceImages[diceFace]} alt="dice" className="w-12 h-12" />
                </div>
              </div>
              <div className="text-xs mt-1">Roll: {diceFace}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={rollDice}
                disabled={rolling || !!winner}
                className={`px-4 py-2 font-bold rounded ${winner ? "bg-gray-500 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-500"}`}
              >
                {winner ? `Player ${winner} won` : (rolling ? "Rolling..." : `Roll (P${turn + 1})`)}
              </button>
              <button onClick={resetGame} className="px-3 py-2 rounded bg-white/10 hover:bg-white/20">
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center text-white">
          <div className="inline-block bg-black/40 px-3 py-2 rounded">{message}</div>
          {winner && <div className="mt-2 text-lg font-bold">🎉 Player {winner} wins the game!</div>}
        </div>

        <div className="mt-3 text-xs text-gray-200 text-center">
          Safe cells: start/home and a few marked positions. Kills do not happen on safe cells.
          Dice has short physics-like animation before landing.
        </div>
      </div>
    </div>
  );
}
