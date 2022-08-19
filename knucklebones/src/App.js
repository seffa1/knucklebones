import "./App.css";
import Player from "./components/Player";
import Arena from "./components/Arena";
import React from "react";

// bottom board
function App() {
  // State
  const [playerOneData, setPlayerOneData] = React.useState({
    id: 1,
    currentDice: rollDice(),
    board: {
      L1: 4,
      L2: 4,
      L3: 4,
      M1: 4,
      M2: 4,
      M3: 4,
      R1: null,
      R2: null,
      R3: null,
    },
  });

  // top board
  const [playerTwoData, setPlayerTwoData] = React.useState({
    id: 2,
    currentDice: null,
    board: {
      L1: 5,
      L2: 5,
      L3: 5,
      M1: 5,
      M2: 5,
      M3: 5,
      R1: null,
      R2: null,
      R3: null,
    },
  });

  const [currentTurn, setCurrentTurn] = React.useState(1);

  const [gameState, setGameState] = React.useState("playing");

  const [scorePlayerOne, setScorePlayerOne] = React.useState(0);
  const [scorePlayerTwo, setScorePlayerTwo] = React.useState(0);

  // Effects
  // Check if the game is over
  React.useEffect(() => {
    setScorePlayerOne(calcPlayerOneScores());
    checkGameOver();
  }, [playerOneData]);

  React.useEffect(() => {
    setScorePlayerTwo(calcPlayerTwoScores());
    checkGameOver();
  }, [playerTwoData]);

  // Helpers
  function calcPlayerOneScores() {
    let score = 0;
    for (let tile in playerOneData.board) {
      score += playerOneData.board[tile];
    }
    return score;
  }
  function calcPlayerTwoScores() {
    let score = 0;
    for (let tile in playerTwoData.board) {
      score += playerTwoData.board[tile];
    }
    return score;
  }

  function checkGameOver() {
    console.log("Checking game over...");
    if (gameState === "end") return;

    // assume both boards are full
    let playerOneFull = true;
    let playerTwoFull = true;

    // check if thats not the case for either player
    // console.log(playerOneData.board);
    for (let tile in playerOneData.board) {
      // console.log(tile, playerOneData.board[tile]);
      if (!playerOneData.board[tile]) playerOneFull = false;
    }

    // loop through player twos' board values
    for (let tile in playerTwoData.board) {
      if (!playerTwoData.board[tile]) playerTwoFull = false;
    }

    console.log("game over? " + (playerOneFull || playerTwoFull));

    if (playerOneFull || playerTwoFull) setGameState("end");
  }

  function setDice(board, location, dice) {
    if (board === "top") {
      setPlayerTwoData((prev) => {
        let newData = {
          ...prev,
        };
        newData.board[location] = dice;
        return newData;
      });
    } else {
      setPlayerOneData((prev) => {
        let newData = {
          ...prev,
        };
        newData.board[location] = dice;
        return newData;
      });
    }
  }

  // Core Game Logic
  function placeDice(board, column) {
    if (gameState === "end") return;

    // Get the current dice number
    let dice =
      currentTurn === 1 ? playerOneData.currentDice : playerTwoData.currentDice;

    // Check if the column is for the current player's board
    if (board === "top" && currentTurn === 1) return;
    if (board === "bot" && currentTurn === 2) return;

    // Try to place the dice in an empty spot
    if (board === "top") {
      if (column === "L") {
        if (!playerTwoData.board.L1) {
          setDice("top", "L1", dice);
        } else if (!playerTwoData.board.L2) {
          setDice("top", "L2", dice);
        } else if (!playerTwoData.board.L3) {
          setDice("top", "L3", dice);
        } else return;
      } else if (column === "M") {
        if (!playerTwoData.board.M1) {
          setDice("top", "M1", dice);
        } else if (!playerTwoData.board.M2) {
          setDice("top", "M2", dice);
        } else if (!playerTwoData.board.M3) {
          setDice("top", "M3", dice);
        } else return;
      } else {
        if (!playerTwoData.board.R1) {
          setDice("top", "R1", dice);
        } else if (!playerTwoData.board.R2) {
          setDice("top", "R2", dice);
        } else if (!playerTwoData.board.R3) {
          setDice("top", "R3", dice);
        } else return;
      }
    }
    // bottom board update
    else {
      if (column === "L") {
        if (!playerOneData.board.L1) {
          setDice("bot", "L1", dice);
        } else if (!playerOneData.board.L2) {
          setDice("bot", "L2", dice);
        } else if (!playerOneData.board.L3) {
          setDice("bot", "L3", dice);
        } else return;
      } else if (column === "M") {
        if (!playerOneData.board.M1) {
          setDice("bot", "M1", dice);
        } else if (!playerOneData.board.M2) {
          setDice("bot", "M2", dice);
        } else if (!playerOneData.board.M3) {
          setDice("bot", "M3", dice);
        } else return;
      } else {
        if (!playerOneData.board.R1) {
          setDice("bot", "R1", dice);
        } else if (!playerOneData.board.R2) {
          setDice("bot", "R2", dice);
        } else if (!playerOneData.board.R3) {
          setDice("bot", "R3", dice);
        } else return;
      }
    }

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
        score={scorePlayerOne}
        currentDice={playerOneData.currentDice}
        currentTurn={currentTurn}
        playerId={playerOneData.id}
      />
      <Arena
        placeDice={placeDice}
        currentTurn={currentTurn}
        boardTop={playerTwoData.board}
        boardBot={playerOneData.board}
      />
      <Player
        playerNumber="two"
        score={scorePlayerTwo}
        currentDice={playerTwoData.currentDice}
        currentTurn={currentTurn}
        playerId={playerTwoData.id}
      />
    </div>
  );
}

export default App;
