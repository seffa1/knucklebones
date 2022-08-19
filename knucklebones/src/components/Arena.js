import React from "react";

function Arena(props) {
  return (
    <div className="Arena">
      <div className="board board--top">
        <div className="tile L3--top">L3 {props.boardTop.L3}</div>
        <div className="tile M3--top">M3 {props.boardTop.M3}</div>
        <div className="tile R3--top">R3 {props.boardTop.R3}</div>
        <div className="tile L2--top">L2 {props.boardTop.L2}</div>
        <div className="tile M2--top">M2 {props.boardTop.M2}</div>
        <div className="tile R2--top">R3 {props.boardTop.R2}</div>
        <div className="tile L1--top">L1 {props.boardTop.L1}</div>
        <div className="tile M1--top">M1 {props.boardTop.M1}</div>
        <div className="tile R1--top">R1 {props.boardTop.R1}</div>
        <div className="score" onClick={() => props.placeDice("top", "L")}>
          {props.boardTop.L1 + props.boardTop.L2 + props.boardTop.L3}
        </div>
        <div className="score" onClick={() => props.placeDice("top", "M")}>
          {props.boardTop.M1 + props.boardTop.M2 + props.boardTop.M3}
        </div>
        <div className="score" onClick={() => props.placeDice("top", "R")}>
          {props.boardTop.R1 + props.boardTop.R2 + props.boardTop.R3}
        </div>
      </div>
      <div className="board board--bottom">
        <div className="score" onClick={() => props.placeDice("bot", "L")}>
          {props.boardBot.L1 + props.boardBot.L2 + props.boardBot.L3}
        </div>
        <div className="score" onClick={() => props.placeDice("bot", "M")}>
          {props.boardBot.M1 + props.boardBot.M2 + props.boardBot.M3}
        </div>
        <div className="score" onClick={() => props.placeDice("bot", "R")}>
          {props.boardBot.R1 + props.boardBot.R2 + props.boardBot.R3}
        </div>
        <div className="tile L1--bot">L1 {props.boardBot.L1}</div>
        <div className="tile M1--bot">M1 {props.boardBot.M1}</div>
        <div className="tile R1--bot">R1 {props.boardBot.R1}</div>
        <div className="tile L2--bot">L2 {props.boardBot.L2}</div>
        <div className="tile M2--bot">M2 {props.boardBot.M2}</div>
        <div className="tile R2--bot">R2 {props.boardBot.R2}</div>
        <div className="tile L3--bot">L3 {props.boardBot.L3}</div>
        <div className="tile M3--bot">M3 {props.boardBot.M3}</div>
        <div className="tile R3--bot">R3 {props.boardBot.R3}</div>
      </div>
    </div>
  );
}

export default Arena;
