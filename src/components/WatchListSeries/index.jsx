import styles from "./style.module.css";

import { useTheMovieDBContext } from "../../contexts";
import { TitlesList } from "../TitlesList";

export function WatchListSeries() {
  const api = useTheMovieDBContext();

  const series = api.watchList.getSeries();

  return (
    <section>
      <div className={styles.seriesListContainer}>
        {series?.length ? (
          <TitlesList titles={series} linkPrefix="/series/" />
        ) : (
          <div className={styles.emptyWatchList}>
            <p>Sua lista de séries para assistir está vazia.</p>
          </div>
        )}
      </div>
    </section>
  );
}
