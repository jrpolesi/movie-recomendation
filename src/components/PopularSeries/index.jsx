import styles from "./style.module.css";

import { useDiscoverSeriesInfinity } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { TitlesList } from "../TitlesList";
import { SystemButton } from "../SystemButton";

export function PopularSeries() {
  const {
    data,
    isLoading,
    pagination: { fetchNextPage },
  } = useDiscoverSeriesInfinity({
    sort_by: "popularity.desc",
  });

  return (
    <section>
      <h2 className={styles.popularSeriesTitle}>Séries populares</h2>

      <div className={styles.popularSeriesListContainer}>
        {data?.length && <TitlesList titles={data} />}
        {isLoading && <LoadingSpinner size="50px" />}
      </div>

      <SystemButton
        disabled={isLoading}
        className={styles.popularSeriesShowMoreBtn}
        onClick={fetchNextPage}
      >
        Exibir mais
      </SystemButton>
    </section>
  );
}
