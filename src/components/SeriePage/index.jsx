import { useParams } from "react-router-dom";
import { useSerieDetails } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { PageTemplate } from "../PageTemplate";
import { TitleDetails } from "../TitleDetails";

export function SeriePage() {
  const { id } = useParams();

  const { data, isLoading } = useSerieDetails({ id });

  return (
    <PageTemplate>
      {isLoading ? (
        <LoadingSpinner size="50px" />
      ) : (
        data && <TitleDetails {...data} />
      )}
    </PageTemplate>
  );
}
