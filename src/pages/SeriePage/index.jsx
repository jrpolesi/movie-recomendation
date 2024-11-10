import { useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner, TitleDetails } from "../../components";
import { useTheMovieDBContext } from "../../contexts";
import { useSerieDetails } from "../../hooks";
import { PageTemplate } from "../PageTemplate";
import styles from "./style.module.css";

export function SeriePage() {
  const { id } = useParams();
  const api = useTheMovieDBContext();

  const [watchList, setWatchList] = useState(api.watchList.getSeries());

  const { data, isLoading } = useSerieDetails({ id });

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
            isOnWatchList={watchList?.find((serie) => serie.id == id)}
            onAddToWatchList={async () => {
              const updated = await api.watchList.addSerie({ serie: data });
              setWatchList(updated);
            }}
            onRemoveFromWatchList={async () => {
              const updated = await api.watchList.removeSerie({ serie: data });
              setWatchList(updated);
            }}
          />
        )
      )}
    </PageTemplate>
  );
}
