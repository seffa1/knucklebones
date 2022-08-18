import React from "react";

function Arena(props) {
  return (
    <div className="Arena">
      <div className="board board--top">
        <div className="tile L3--top">L3</div>
        <div className="tile M3--top">M3</div>
        <div className="tile R3--top">R3</div>
        <div className="tile L2--top">L2</div>
        <div className="tile M2--top">M2</div>
        <div className="tile R3--top">R3</div>
        <div className="tile L1--top">L1</div>
        <div className="tile M1--top">M1</div>
        <div className="tile R1--top">R1</div>
        <div className="score" onClick={() => props.placeDice("top", "L")}>
          5
        </div>
        <div className="score" onClick={() => props.placeDice("top", "M")}>
          2
        </div>
        <div className="score" onClick={() => props.placeDice("top", "R")}>
          4
        </div>
      </div>
      <div className="board board--bottom">
        <div className="score" onClick={() => props.placeDice("bot", "L")}>
          1
        </div>
        <div className="score" onClick={() => props.placeDice("bot", "M")}>
          25
        </div>
        <div className="score" onClick={() => props.placeDice("bot", "R")}>
          36
        </div>
        <div className="tile L1--bot">L1</div>
        <div className="tile M1--bot">M1</div>
        <div className="tile R1--bot">R1</div>
        <div className="tile L2--bot">L2</div>
        <div className="tile M2--bot">M2</div>
        <div className="tile R2--bot">R2</div>
        <div className="tile L3--bot">L3</div>
        <div className="tile M3--bot">M3</div>
        <div className="tile R3--bot">R3</div>
      </div>
    </div>
  );
}

export default Arena;
