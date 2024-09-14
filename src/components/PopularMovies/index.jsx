import "./style.css";

import { useDiscoverMoviesInfinity } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { TitlesList } from "../TitlesList";
import { SystemButton } from "../SystemButton";

export function PopularMovies() {
  const {
    data,
    isLoading,
    pagination: { fetchNextPage },
  } = useDiscoverMoviesInfinity();

  return (
    <section className="popular-movies">
      <h2 className="popular-movies--title">Popular Movies</h2>

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
