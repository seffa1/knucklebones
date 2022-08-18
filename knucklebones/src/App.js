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
    if (board === "top") {
      // if column is the left column
      // check if first row is empty, if so place in that row
      // check if the second row is empty, if so place in that row
      // check if the third row is empty, if so place in that row
      // if all full, return
    }

    // Update the board state

    // Check if the game is over

    // Reset dice on prev player and roll dice for next player
    if (currentTurn === 1) {
      setPlayerOneData((prev) => {
        return { ...prev, currentDice: null };
      });
      setPlayerTwoData((prev) => {
        return { ...prev, currentDice: rollDice() };
      });
    } else {
      setPlayerTwoData((prev) => {
        return { ...prev, currentDice: null };
      });
      setPlayerOneData((prev) => {
        return { ...prev, currentDice: rollDice() };
      });
    }

    // Change game state to other players turn
    setCurrentTurn((prev) => {
      return prev === 1 ? 2 : 1;
    });
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
      <Arena placeDice={placeDice} currentTurn={currentTurn} />
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
