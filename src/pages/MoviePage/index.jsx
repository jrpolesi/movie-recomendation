import { useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner, TitleDetails } from "../../components/";
import { useTheMovieDBContext } from "../../contexts";
import { useMovieDetails } from "../../hooks";
import { PageTemplate } from "../PageTemplate";
import styles from "./style.module.css";

export function MoviePage() {
  const { id } = useParams();

  const api = useTheMovieDBContext();

  const [watchList, setWatchList] = useState(api.watchList.getMovies());

  const { data, isLoading } = useMovieDetails({ id });

  return (
    <PageTemplate>
      {isLoading ? (
        <div className={styles.loading}>
          <LoadingSpinner size="50px" />
        </div>
      ) : (
        data && (
          <TitleDetails
            {...data}
            isOnWatchList={watchList?.find((movie) => movie.id == id)}
            onAddToWatchList={async () => {
              const updated = await api.watchList.addMovie({ movie: data });
              setWatchList(updated);
            }}
            onRemoveFromWatchList={async () => {
              const updated = await api.watchList.removeMovie({ movie: data });
              setWatchList(updated);
            }}
          />
        )
      )}
    </PageTemplate>
  );
}
