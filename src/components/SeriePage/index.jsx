import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { PageTemplate } from "../../components/PageTemplate";
import { TitleDetails } from "../../components/TitleDetails";
import { useSerieDetails } from "../../hooks";
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
