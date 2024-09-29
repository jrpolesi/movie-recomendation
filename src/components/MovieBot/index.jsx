import styles from "./style.module.css";
import { MovieBotHeader } from "./MovieBotHeader";

export function MovieBot({ handleClose }) {
  return (
    <div className={styles.movieBot}>
      <MovieBotHeader onClose={handleClose} />
      <p style={{ textAlign: "center", margin: "30px 0" }}>
        Em breve novidades
      </p>
    </div>
  );
}
