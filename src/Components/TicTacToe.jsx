import { useEffect, useState } from "react";
import Confetti from 'react-confetti';

function TicTacToe() {
  const [BoxValues, setBoxValues] = useState(Array(9).fill(""));
  const [XTurn, setXTurn] = useState(true);
  const [XScore, setXScore] = useState(0);
  const [YScore, setYScore] = useState(0);
  const [status, setStatus] = useState("X will start first.");
  const [isGameOn, setIsGameOn] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleOnBoxClick = (index) => {
    if (isGameOn && BoxValues[index] === "") {
      let values = [...BoxValues];
      values[index] = XTurn ? "X" : "Y";
      setXTurn(!XTurn);
      setBoxValues(values);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [BoxValues]);

  const checkWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      if (
        BoxValues[pattern[0]] !== "" &&
        BoxValues[pattern[0]] === BoxValues[pattern[1]] &&
        BoxValues[pattern[0]] === BoxValues[pattern[2]]
      ) {
        if (BoxValues[pattern[0]] === "X") {
          setXScore(XScore + 1);
        } else {
          setYScore(YScore + 1);
        }
        setStatus(`${BoxValues[pattern[0]]} is the Winner`);
        setWinner(BoxValues[pattern[0]]);
        setIsGameOn(false);
        return;
      }
    }

    if (BoxValues.every((e) => e !== "")) {
      setStatus("Game Drawn");
      setIsGameOn(false);
    }
  };

  const startPlay = () => {
    clear();
    setIsGameOn(true);
    setWinner(null); 
  };

  const clear = () => {
    setBoxValues(Array(9).fill(""));
    setStatus(`${XTurn ? "X" : "Y"} will start first.`);
  };

  return (
    <div className={`bg-gray-200 h-screen flex justify-center items-center ${winner ? "color-shower" : ""}`}>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        recycle={false}
        gravity={0.2}
        colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']}
        run={!!winner} 
      />
      <div className={`bg-white p-12 rounded-lg shadow-md max-w-lg w-full ${winner ? "shake" : ""}`}>
        <span className="text-black">
          {XScore === 0 && YScore === 0
            ? "No one Leads"
            : XScore === YScore
            ? "Tie"
            : XScore > YScore
            ? "X Leads"
            : "Y Leads"}
        </span>
        <h1 className="text-3xl font-bold mb-3 text-center text-black">
          Tic Tac Toe
        </h1>
        <div className="flex justify-between">
          <p className="text-lg font-bold text-black">X Score: {XScore}</p>
          <p className="text-lg font-bold text-black">Y Score: {YScore}</p>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center text-black">
          {status}
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          {BoxValues.map((e, i) => (
            <button
              key={i}
              onClick={() => handleOnBoxClick(i)}
              className={`w-20 h-20 text-center m-auto ${
                e === "X" ? "bg-blue-500" : e === "Y" ? "bg-red-500" : "bg-gray-300"
              } text-white text-5xl font-bold`}
            >
              {e}
            </button>
          ))}
        </div>
        <div id="status" className="mt-6 text-black text-center"></div>
        <div className="flex justify-center mt-4">
          <button
            onClick={startPlay}
            className="bg-gray-500 text-white rounded-lg px-6 py-3"
          >
            {isGameOn ? "Restart" : "Start Play"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
