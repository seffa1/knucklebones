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
      L1: 1,
      L2: 2,
      L3: null,
      M1: 3,
      M2: 4,
      M3: null,
      R1: 5,
      R2: 6,
      R3: null,
    },
  });

  // top board
  const [playerTwoData, setPlayerTwoData] = React.useState({
    id: 2,
    currentDice: null,
    board: {
      L1: 5,
      L2: 4,
      L3: null,
      M1: 3,
      M2: 3,
      M3: null,
      R1: null,
      R2: null,
      R3: null,
    },
  });

  const [currentTurn, setCurrentTurn] = React.useState(1);
  const [gameState, setGameState] = React.useState("playing");
  const [scorePlayerOne, setScorePlayerOne] = React.useState([0, 0, 0]);
  const [scorePlayerTwo, setScorePlayerTwo] = React.useState([0, 0, 0]);

  // Effects
  React.useEffect(() => {
    setScorePlayerOne(calcPlayerOneScores());
    checkGameOver();
  }, [playerOneData]);

  React.useEffect(() => {
    setScorePlayerTwo(calcPlayerTwoScores());
    checkGameOver();
  }, [playerTwoData]);

  // Helpers
  function slideTiles(board) {
    if (board === "top") {
      // slide playerOneBoards
      return;
    }

    if (board === "bot") {
      // slide playerTwoBoards
      return;
    }
  }

  function clearMatches(board, location, dice) {
    // console.log("board", board);
    // console.log("location", location);
    // console.log("dice", dice);

    if (board === "top") {
      let boardToCheck = { ...playerOneData.board };
      if (location[0] === "L") {
        // for each tile in those, if its equal to dice, make it null
        if (boardToCheck["L1"] === dice) boardToCheck["L1"] = null;
        if (boardToCheck["L2"] === dice) boardToCheck["L2"] = null;
        if (boardToCheck["L3"] === dice) boardToCheck["L3"] = null;
      } else if (location[0] === "M") {
        if (boardToCheck["M1"] === dice) boardToCheck["M1"] = null;
        if (boardToCheck["M2"] === dice) boardToCheck["M2"] = null;
        if (boardToCheck["M3"] === dice) boardToCheck["M3"] = null;

        // for each tile in those, if its equal to dice, make it null
      } else if (location[0] === "R") {
        if (boardToCheck["R1"] === dice) boardToCheck["R1"] = null;
        if (boardToCheck["R2"] === dice) boardToCheck["R2"] = null;
        if (boardToCheck["R3"] === dice) boardToCheck["R3"] = null;
      }
      // update player one data
      setPlayerOneData((prev) => {
        return { ...prev, board: boardToCheck };
      });
    } else if (board === "bot") {
      let boardToCheck = { ...playerTwoData.board };
      if (location[0] === "L") {
        // for each tile in those, if its equal to dice, make it null
        if (boardToCheck["L1"] === dice) boardToCheck["L1"] = null;
        if (boardToCheck["L2"] === dice) boardToCheck["L2"] = null;
        if (boardToCheck["L3"] === dice) boardToCheck["L3"] = null;
      } else if (location[0] === "M") {
        // for each tile in those, if its equal to dice, make it null
        if (boardToCheck["M1"] === dice) boardToCheck["M1"] = null;
        if (boardToCheck["M2"] === dice) boardToCheck["M2"] = null;
        if (boardToCheck["M3"] === dice) boardToCheck["M3"] = null;
      } else if (location[0] === "R") {
        // for each tile in those, if its equal to dice, make it null
        if (boardToCheck["R1"] === dice) boardToCheck["R1"] = null;
        if (boardToCheck["R2"] === dice) boardToCheck["R2"] = null;
        if (boardToCheck["R3"] === dice) boardToCheck["R3"] = null;
      }
      // update player two data
      setPlayerTwoData((prev) => {
        return { ...prev, board: boardToCheck };
      });
    }
  }

  function resetGame() {
    console.log("Resetting game");
    setGameState("playing");
    setPlayerOneData({
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
    setPlayerTwoData({
      id: 2,
      currentDice: null,
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
  }

  function calcPlayerOneScores() {
    let tilesLeft = Object.values(playerOneData.board).splice(0, 3);
    let scoreLeft = calcColumnScore(tilesLeft);

    let tilesMid = Object.values(playerOneData.board).splice(3, 6);
    let scoreMid = calcColumnScore(tilesMid);

    let tilesRight = Object.values(playerOneData.board).splice(6, 9);
    let scoreRight = calcColumnScore(tilesRight);

    return [scoreLeft, scoreMid, scoreRight];
  }

  function calcPlayerTwoScores() {
    let tilesLeft = Object.values(playerTwoData.board).splice(0, 3);
    let scoreLeft = calcColumnScore(tilesLeft);

    let tilesMid = Object.values(playerTwoData.board).splice(3, 6);
    let scoreMid = calcColumnScore(tilesMid);

    let tilesRight = Object.values(playerTwoData.board).splice(6, 9);
    let scoreRight = calcColumnScore(tilesRight);

    return [scoreLeft, scoreMid, scoreRight];
  }

  function checkGameOver() {
    if (gameState === "playerOneWins") return;
    if (gameState === "playerTwoWins") return;

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

    if (playerOneFull) setGameState("playerOneWins");
    if (playerTwoFull) setGameState("playerTwoWins");
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
    clearMatches(board, location, dice);
    slideTiles(board);
  }

  // Core Game Logic
  function placeDice(board, column) {
    if (gameState === "playerOneWins") return;
    if (gameState === "playerTwoWins") return;

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

  function calcColumnScore(tiles) {
    // tiles = [2, 2, 3]
    if (tiles[0] === tiles[1]) {
      if (tiles[0] === tiles[2]) {
        return tiles[0] * 3 * 3;
      } else {
        return tiles[0] * 2 * 2 + tiles[2];
      }
    } else if (tiles[0] === tiles[2]) {
      return tiles[0] * 2 * 2 + tiles[1];
    } else if (tiles[1] === tiles[2]) {
      return tiles[0] + tiles[1] * 2 * 2;
    } else {
      return tiles[0] + tiles[1] + tiles[2];
    }
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
        gameState={gameState}
        resetGame={resetGame}
        scorePlayerOne={scorePlayerOne}
        scorePlayerTwo={scorePlayerTwo}
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
