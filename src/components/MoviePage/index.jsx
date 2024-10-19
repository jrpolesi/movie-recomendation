import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { PageTemplate } from "../PageTemplate";
import { TitleDetails } from "../TitleDetails";

export function MoviePage() {
  const { id } = useParams();

  const { data, isLoading } = useMovieDetails({ id });

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
