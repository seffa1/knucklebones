import "./App.css";
import Player from "./components/Player";
import Arena from "./components/Arena";
import React from "react";

function App() {
  // State
  const [playerOneData, setPlayerOneData] = React.useState({
    score: 0,
    currentDice: null,
  });

  const [playerTwoData, setPlayerTwoData] = React.useState({
    score: 0,
    currentDice: null,
  });

  // player scores
  // player current dice
  // all 18 of the tile's state
  // score of each column
  // whose turn is it
  // game state (playing, ended)

  return (
    <div className="App">
      <Player playerNumber="one" />
      <Arena />
      <Player playerNumber="two" />
    </div>
  );
}

export default App;
