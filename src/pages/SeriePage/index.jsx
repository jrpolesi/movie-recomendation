import { useParams } from "react-router-dom";
import { LoadingSpinner, TitleDetails } from "../../components";
import { useSerieDetails } from "../../hooks";
import { PageTemplate } from "../PageTemplate";
import styles from "./style.module.css";

export function SeriePage() {
  const { id } = useParams();

  const { data, isLoading } = useSerieDetails({ id });

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
