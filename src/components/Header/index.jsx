import { DarkModeBtn } from "../DarkModeBtn";
import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>MyMovies</h1>

        <DarkModeBtn />
      </div>
    </header>
  );
}
