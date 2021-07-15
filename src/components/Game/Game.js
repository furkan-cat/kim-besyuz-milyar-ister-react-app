import { useSelector } from "react-redux";
import "./Game.scss";

function Game() {
  const isLoading = useSelector((state) => state.loading);

  return (
    <div>
      {}
      <div className="game">You're logged in!</div>
    </div>
  );
}

export default Game;
