import "./style.css";

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
    <section className="popular-movies">
      <h2 className="popular-movies--title">Séries populares</h2>

      <div className="popular-movies--list-container">
        {data?.length && <TitlesList titles={data} />}
        {isLoading && <LoadingSpinner size="50px" />}
      </div>

      <SystemButton
        disabled={isLoading}
        className="popular-movies--show-more-btn"
        onClick={fetchNextPage}
      >
        Exibir mais
      </SystemButton>
    </section>
  );
}
