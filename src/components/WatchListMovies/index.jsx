import styles from "./style.module.css";

import { useTheMovieDBContext } from "../../contexts";
import { TitlesList } from "../TitlesList";

export function WatchListMovies() {
  const api = useTheMovieDBContext();

  const movies = api.watchList.getMovies();

  return (
    <section>
      <div className={styles.moviesListContainer}>
        {movies?.length ? (
          <TitlesList titles={movies} linkPrefix="/movies/" />
        ) : (
          <div className={styles.emptyWatchList}>
            <p>Sua lista de filmes para assistir está vazia.</p>
          </div>
        )}
      </div>
    </section>
  );
}
