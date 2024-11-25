import { useMemo } from "react";
import { LoadingSpinner, SystemButton } from "../../components";
import { useCreateSession, useRedirectToTheMovieDBLogin } from "../../hooks";

export function LoginPage() {
  const url = useMemo(() => new URL(location.href), []);

  const requestToken = url.searchParams.get("request_token");

  const { redirect, isLoading: redirectIsLoading } =
    useRedirectToTheMovieDBLogin();

  const { isLoading, error } = useCreateSession(requestToken);

  if (requestToken) {
    return (
      <div>
        {isLoading && (
          <div>
            <p>Aguarde enquanto verificamos seus dados...</p>

            <LoadingSpinner size="50px" />
          </div>
        )}

        {error && (
          <div>
            <p>Houve um erro ao validar seus dados</p>

            <p>{typeof error === "string" ? error : error?.message}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="login-page">
      <h2>Login</h2>
      <SystemButton isLoading={redirectIsLoading} onClick={redirect}>
        Login com the movie DB
      </SystemButton>
    </div>
  );
}
