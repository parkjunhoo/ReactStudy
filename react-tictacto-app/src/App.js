import Board from "./components/Board";
import "./App.css"

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>

      <div className="game-info">
        gameinfo
      </div>
    </div>
  );
}

export default App;
