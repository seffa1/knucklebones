import "./App.css";
import Player from "./components/Player";
import Arena from "./components/Arena";
import React from "react";

function App() {
  // State
  const [playerOneData, setPlayerOneData] = React.useState({
    id: 1,
    scoreTotal: 0,
    currentDice: rollDice(),
    scoreLeft: 0,
    scoreMiddle: 0,
    scoreRight: 0,
    board: {
      L1: null,
      L2: null,
      L3: null,
      M1: null,
      M2: null,
      M3: null,
      R1: null,
      R2: null,
      R3: null,
    },
  });

  const [playerTwoData, setPlayerTwoData] = React.useState({
    id: 2,
    scoreTotal: 0,
    currentDice: null,
    scoreLeft: 0,
    scoreMiddle: 0,
    scoreRight: 0,
    board: {
      L1: null,
      L2: null,
      L3: null,
      M1: null,
      M2: null,
      M3: null,
      R1: null,
      R2: null,
      R3: null,
    },
  });

  const [currentTurn, setCurrentTurn] = React.useState(1);

  const [gameState, setGameState] = React.useState("playing");

  // Handlers
  function placeDice(board, column) {
    // Get the current dice number
    let dice =
      currentTurn === 1 ? playerOneData.currentDice : playerTwoData.currentDice;

    // Check if the column is for the current player's board
    if (board === "top" && currentTurn === 1) return;
    if (board === "bot" && currentTurn === 2) return;

    console.log(dice, board, column);

    // Check is the column is already full, if so, return

    // Else, place dice number in the correct spot

    // Update the board state

    // Change game state to other players turn

    // Reset dice on prev player

    // Roll dice for next player
  }

  // Utility
  function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  // Rendering
  return (
    <div className="App">
      <Player
        playerNumber="one"
        score={playerOneData.scoreTotal}
        currentDice={playerOneData.currentDice}
        currentTurn={currentTurn}
        playerId={playerOneData.id}
      />
      <Arena placeDice={placeDice} />
      <Player
        playerNumber="two"
        score={playerTwoData.scoreTotal}
        currentDice={playerTwoData.currentDice}
        currentTurn={currentTurn}
        playerId={playerTwoData.id}
      />
    </div>
  );
}

export default App;
