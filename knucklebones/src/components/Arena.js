import React from "react";
import Dice from "./Dice";

function Arena(props) {
  return (
    <div className="Arena">
      <div className="board board--top">
        <div className="tile L3--top">
          {props.boardTop.L3 && <Dice number={props.boardTop.L3} />}
        </div>
        <div className="tile M3--top">
          {props.boardTop.M3 && <Dice number={props.boardTop.M3} />}
        </div>
        <div className="tile R3--top">
          {props.boardTop.R3 && <Dice number={props.boardTop.R3} />}
        </div>
        <div className="tile L2--top">
          {props.boardTop.L2 && <Dice number={props.boardTop.L2} />}
        </div>
        <div className="tile M2--top">
          {props.boardTop.M2 && <Dice number={props.boardTop.M2} />}
        </div>
        <div className="tile R2--top">
          {props.boardTop.R2 && <Dice number={props.boardTop.R2} />}
        </div>
        <div className="tile L1--top">
          {props.boardTop.L1 && <Dice number={props.boardTop.L1} />}
        </div>
        <div className="tile M1--top">
          {props.boardTop.M1 && <Dice number={props.boardTop.M1} />}
        </div>
        <div className="tile R1--top">
          {props.boardTop.R1 && <Dice number={props.boardTop.R1} />}
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
          {props.boardBot.L1 && <Dice number={props.boardBot.L1} />}
        </div>
        <div className="tile M1--bot">
          {props.boardBot.M1 && <Dice number={props.boardBot.M1} />}
        </div>
        <div className="tile R1--bot">
          {props.boardBot.R1 && <Dice number={props.boardBot.R1} />}
        </div>
        <div className="tile L2--bot">
          {props.boardBot.L2 && <Dice number={props.boardBot.L2} />}
        </div>
        <div className="tile M2--bot">
          {props.boardBot.M2 && <Dice number={props.boardBot.M2} />}
        </div>
        <div className="tile R2--bot">
          {props.boardBot.R2 && <Dice number={props.boardBot.R2} />}
        </div>
        <div className="tile L3--bot">
          {props.boardBot.L3 && <Dice number={props.boardBot.L3} />}
        </div>
        <div className="tile M3--bot">
          {props.boardBot.M3 && <Dice number={props.boardBot.M3} />}
        </div>
        <div className="tile R3--bot">
          {props.boardBot.R3 && <Dice number={props.boardBot.R3} />}
        </div>
      </div>
    </div>
  );
}

export default Arena;
