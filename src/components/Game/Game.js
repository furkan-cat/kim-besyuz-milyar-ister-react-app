import React from "react";
import Questions from "../Questions/Questions";
import Prize from "../Prize/Prize";
import "./Game.scss";

function Game() {
  return (
    <div className="game-wrapper">
      <Questions />
      <Prize />
    </div>
  );
}

export default Game;
