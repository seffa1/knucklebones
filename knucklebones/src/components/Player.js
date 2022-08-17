import React from "react";

function Player(props) {
  return (
    <div className={`Player player--${props.playerNumber}`}>
      {props.playerNumber === "two" && <h3>Current Dice</h3>}
      <h1>Player {props.playerNumber}</h1>
      <h2>15</h2>
      {props.playerNumber === "one" && <h3>Current Dice</h3>}
    </div>
  );
}

export default Player;
