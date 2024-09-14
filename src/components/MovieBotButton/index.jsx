import { useState } from "react";
import "./style.css";
import { MovieBot } from "../MovieBot";

export function MovieBotButton() {
  const [isMovieBotOpen, setIsMovieBotOpen] = useState(false);

  return (
    <>
      {!isMovieBotOpen && (
        <button
          className="movie-bot-btn"
          onClick={() => setIsMovieBotOpen(true)}
        >
          <span className="movie-bot-btn--icon material-symbols-outlined">
            smart_toy
          </span>
          <span>MovieBot</span>
        </button>
      )}

      {isMovieBotOpen && (
        <MovieBot handleClose={() => setIsMovieBotOpen(false)} />
      )}
    </>
  );
}
