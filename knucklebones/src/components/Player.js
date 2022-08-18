import React from "react";

function Player(props) {
  return (
    <div className={`Player player--${props.playerNumber}`}>
      {props.playerNumber === "two" && props.currentDice && (
        <h3>Current Dice: {props.currentDice}</h3>
      )}
      <h1
        className={props.currentTurn === props.playerId ? "currentPlayer" : ""}
      >
        Player {props.playerNumber}
      </h1>
      <h2>{props.score}</h2>
      {props.playerNumber === "one" && props.currentDice && (
        <h3>Current Dice: {props.currentDice}</h3>
      )}
    </div>
  );
}

export default Player;
