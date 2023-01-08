import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [posValue, setPosValue] = useState({});
  const [player, setPlayer] = useState(1);
  const handleSelect = (posVal) => {
    const tempObj = { ...posValue };
    if (player === 1) {
      tempObj[posVal] = "O";
      setPosValue(tempObj);
      setPlayer(2);
    } else if (player === 2) {
      tempObj[posVal] = "X";
      setPosValue(tempObj);
      setPlayer(1);
    }
  };
  useEffect(() => {
    let winnerVal = "";
    if (
      (posValue.hasOwnProperty(0) &&
        posValue.hasOwnProperty(1) &&
        posValue.hasOwnProperty(2) &&
        posValue[0] === posValue[1] &&
        posValue[1] === posValue[2]) ||
      (posValue.hasOwnProperty(0) &&
        posValue.hasOwnProperty(3) &&
        posValue.hasOwnProperty(6) &&
        posValue[0] === posValue[3] &&
        posValue[3] === posValue[6]) ||
      (posValue.hasOwnProperty(0) &&
        posValue.hasOwnProperty(4) &&
        posValue.hasOwnProperty(8) &&
        posValue[0] === posValue[4] &&
        posValue[4] === posValue[8])
    ) {
      winnerVal = posValue[0];
    }

    if (
      (posValue.hasOwnProperty(6) &&
        posValue.hasOwnProperty(7) &&
        posValue.hasOwnProperty(8) &&
        posValue[6] === posValue[7] &&
        posValue[7] === posValue[8]) ||
      (posValue.hasOwnProperty(2) &&
        posValue.hasOwnProperty(5) &&
        posValue.hasOwnProperty(8) &&
        posValue[2] === posValue[5] &&
        posValue[5] === posValue[8])
    ) {
      winnerVal = posValue[8];
    }
    if (
      (posValue.hasOwnProperty(1) &&
        posValue.hasOwnProperty(4) &&
        posValue.hasOwnProperty(7) &&
        posValue[1] === posValue[4] &&
        posValue[4] === posValue[7]) ||
      (posValue.hasOwnProperty(3) &&
        posValue.hasOwnProperty(4) &&
        posValue.hasOwnProperty(5) &&
        posValue[3] === posValue[4] &&
        posValue[4] === posValue[5]) ||
      (posValue.hasOwnProperty(2) &&
        posValue.hasOwnProperty(4) &&
        posValue.hasOwnProperty(6) &&
        posValue[2] === posValue[4] &&
        posValue[4] === posValue[6])
    ) {
      winnerVal = posValue[4];
    }
    if (winnerVal) {
      let wonPlayer = winnerVal === "X" ? 2 : 1;
      setTimeout(() => {
        alert(`Player ${wonPlayer} won!`);
        setPosValue({});
        setPlayer(1);
      }, 100);
    }
  }, [posValue]);
  return (
    <div className="App">
      <div className="outerDiv">
        {[...new Array(9)].map((val, elemIndex) => {
          return (
            <div
              className="col"
              key={crypto.randomUUID()}
              onClick={() => handleSelect(elemIndex)}
              style={posValue[elemIndex] ? { pointerEvents: "none" } : {}}
            >
              {posValue[elemIndex] ? posValue[elemIndex] : ""}
            </div>
          );
        })}
      </div>
      <div>Turn : Player {player}</div>
    </div>
  );
}
