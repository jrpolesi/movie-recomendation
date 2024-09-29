import styles from "./style.module.css";

export function MovieBotHeader({ onClose }) {
  return (
    <div className={styles.movieBotHeader}>
      <button
        className={`${styles.movieBotBackBtn} material-symbols-outlined`}
        onClick={onClose}
      >
        chevron_backward
      </button>
      <h2>Movie bot</h2>
    </div>
  );
}
