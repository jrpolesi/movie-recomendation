import { MovieBotHeader } from "./MovieBotHeader";
import { MovieBotMessageForm } from "./MovieBotMessageForm";
import { MovieBotMessages } from "./MovieBotMessages";
import { MovieBotResponseOptions } from "./MovieBotResponseOptions";
import styles from "./style.module.css";

export function MovieBot() {
  return (
    <section className={styles.movieBot}>
      <MovieBotHeader />

      <MovieBotMessages />

      <MovieBotResponseOptions />

      <MovieBotMessageForm />
    </section>
  );
}
