import { Header } from "../Header";
import { MovieBotButton } from "../MovieBotButton";
import styles from "./style.module.css";

export function PageTemplate({ children }) {
  return (
    <>
      <Header />

      <main className={styles.mainContainer}>{children}</main>

      <MovieBotButton />
    </>
  );
}
