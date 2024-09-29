import styles from "./style.module.css";

import { useDiscoverMoviesInfinity } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { TitlesList } from "../TitlesList";
import { SystemButton } from "../SystemButton";

export function PopularMovies() {
  const {
    data,
    isLoading,
    pagination: { fetchNextPage },
  } = useDiscoverMoviesInfinity({
    sort_by: "popularity.desc",
  });

  return (
    <section>
      <h2 className={styles.popularMoviesTitle}>Filmes populares</h2>

      <div className={styles.popularMoviesListContainer}>
        {data?.length && <TitlesList titles={data} />}
        {isLoading && <LoadingSpinner size="50px" />}
      </div>

      <SystemButton
        disabled={isLoading}
        className={styles.popularMoviesShowMoreBtn}
        onClick={fetchNextPage}
      >
        Exibir mais
      </SystemButton>
    </section>
  );
}
