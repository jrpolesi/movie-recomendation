import { useState } from "react";
import { MovieBot } from "../MovieBot";
import styles from "./style.module.css";

export function MovieBotButton() {
  const [isMovieBotOpen, setIsMovieBotOpen] = useState(false);

  return (
    <>
      {!isMovieBotOpen && (
        <button
          className={styles.movieBotBtn}
          onClick={() => setIsMovieBotOpen(true)}
        >
          <span
            className={`${styles.movieBotBtnIcon} material-symbols-outlined`}
          >
            smart_toy
          </span>
          <span>MovieBot</span>
        </button>
      )}

      {isMovieBotOpen && (
        <MovieBot
          handleClose={() => setIsMovieBotOpen(false)}
          data-testid="movie-bot"
        />
      )}
    </>
  );
}
