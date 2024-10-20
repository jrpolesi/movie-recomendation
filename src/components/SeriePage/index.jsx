import { useParams } from "react-router-dom";
import { useSerieDetails } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { PageTemplate } from "../PageTemplate";
import { TitleDetails } from "../TitleDetails";
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
