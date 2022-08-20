import React from "react";

function Arena(props) {
  return (
    <div className="Arena">
      <div className="board board--top">
        <div className="tile L3--top">
          L3 <div className="tile-value">{props.boardTop.L3}</div>
        </div>
        <div className="tile M3--top">
          M3 <div className="tile-value">{props.boardTop.M3}</div>
        </div>
        <div className="tile R3--top">
          R3 <div className="tile-value">{props.boardTop.R3}</div>
        </div>
        <div className="tile L2--top">
          L2 <div className="tile-value">{props.boardTop.L2}</div>
        </div>
        <div className="tile M2--top">
          M2 <div className="tile-value">{props.boardTop.M2}</div>
        </div>
        <div className="tile R2--top">
          R3 <div className="tile-value">{props.boardTop.R2}</div>
        </div>
        <div className="tile L1--top">
          L1 <div className="tile-value">{props.boardTop.L1}</div>
        </div>
        <div className="tile M1--top">
          M1 <div className="tile-value">{props.boardTop.M1}</div>
        </div>
        <div className="tile R1--top">
          R1 <div className="tile-value">{props.boardTop.R1}</div>
        </div>
        <div className="score" onClick={() => props.placeDice("top", "L")}>
          {props.scorePlayerTwo[0]}
        </div>
        <div className="score" onClick={() => props.placeDice("top", "M")}>
          {props.scorePlayerTwo[1]}
        </div>
        <div className="score" onClick={() => props.placeDice("top", "R")}>
          {props.scorePlayerTwo[2]}
        </div>
      </div>
      {props.gameState === "playerOneWins" && <h1>Player One Wins!</h1>}
      {props.gameState === "playerTwoWins" && <h1>Player Two Wins!</h1>}
      {props.gameState === "playerOneWins" && (
        <button className="reset-button" onClick={() => props.resetGame()}>
          Play Again
        </button>
      )}
      {props.gameState === "playerTwoWins" && (
        <button className="reset-button" onClick={() => props.resetGame()}>
          Play Again
        </button>
      )}
      <div className="board board--bottom">
        <div className="score" onClick={() => props.placeDice("bot", "L")}>
          {props.scorePlayerOne[0]}
        </div>
        <div className="score" onClick={() => props.placeDice("bot", "M")}>
          {props.scorePlayerOne[1]}
        </div>
        <div className="score" onClick={() => props.placeDice("bot", "R")}>
          {props.scorePlayerOne[2]}
        </div>
        <div className="tile L1--bot">
          L1 <div className="tile-value">{props.boardBot.L1}</div>
        </div>
        <div className="tile M1--bot">
          M1 <div className="tile-value">{props.boardBot.M1}</div>
        </div>
        <div className="tile R1--bot">
          R1 <div className="tile-value">{props.boardBot.R1}</div>
        </div>
        <div className="tile L2--bot">
          L2 <div className="tile-value">{props.boardBot.L2}</div>
        </div>
        <div className="tile M2--bot">
          M2 <div className="tile-value">{props.boardBot.M2}</div>
        </div>
        <div className="tile R2--bot">
          R2 <div className="tile-value">{props.boardBot.R2}</div>
        </div>
        <div className="tile L3--bot">
          L3 <div className="tile-value">{props.boardBot.L3}</div>
        </div>
        <div className="tile M3--bot">
          M3 <div className="tile-value">{props.boardBot.M3}</div>
        </div>
        <div className="tile R3--bot">
          R3 <div className="tile-value">{props.boardBot.R3}</div>
        </div>
      </div>
    </div>
  );
}

export default Arena;
