import React from "react";
import Dice from "./Dice";

function Player(props) {
  return (
    <div className={`Player player--${props.playerNumber}`}>
      {props.playerNumber === "two" && props.currentDice && (
        <Dice number={props.currentDice} />
      )}
      <h1
        className={props.currentTurn === props.playerId ? "currentPlayer" : ""}
      >
        Player {props.playerNumber}
      </h1>
      <h2>Score: {props.score[0] + props.score[1] + props.score[2]}</h2>
      {props.playerNumber === "one" && props.currentDice && (
        <Dice number={props.currentDice} />
      )}
    </div>
  );
}

export default Player;
