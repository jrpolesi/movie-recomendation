import { useParams } from "react-router-dom";
import { LoadingSpinner, TitleDetails } from "../../components/";
import { useMovieDetails } from "../../hooks";
import { PageTemplate } from "../PageTemplate";
import styles from "./style.module.css";

export function MoviePage() {
  const { id } = useParams();

  const { data, isLoading } = useMovieDetails({ id });

  return (
    <PageTemplate>
      {isLoading ? (
        <div className={styles.loading}>
          <LoadingSpinner size="50px" />
        </div>
      ) : (
        data && <TitleDetails {...data} />
      )}
    </PageTemplate>
  );
}
