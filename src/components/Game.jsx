import { useState } from "react";

export const Game = () => {
  const [lives, setLives] = useState(5);
  const [showStatus, setShowStatus] = useState(false);

  const decrementLive = () => {
    if (lives > 0) {
      setLives((lives) => lives - 1);
    } else {
      setShowStatus(true);
    }
  };
  return (
    <div>
      <h1>current lives: {lives} </h1>
      {showStatus && <h3>Game Over</h3>}
      <button onClick={decrementLive}>Lose a Life</button>
    </div>
  );
};
