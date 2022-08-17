import "./App.css";
import Player from "./components/Player";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <Player />
      <Board />
      <Player />
    </div>
  );
}

export default App;
