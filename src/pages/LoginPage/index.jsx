import { useMemo } from "react";
import { LoadingSpinner, SystemButton } from "../../components";
import { useCreateSession, useRedirectToTheMovieDBLogin } from "../../hooks";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  const url = useMemo(() => new URL(location.href), []);

  const requestToken = url.searchParams.get("request_token");

  const { redirect, isLoading: redirectIsLoading } =
    useRedirectToTheMovieDBLogin();

  const { isLoading, error } = useCreateSession(requestToken);

  if (requestToken) {
    return (
      <div className={styles.loadingContainer}>
        {isLoading && (
          <div>
            <p className={styles.text}>
              Aguarde enquanto verificamos seus dados...
            </p>

            <LoadingSpinner size="50px" />
          </div>
        )}

        {error && (
          <div>
            <p className={styles.text}>Houve um erro ao validar seus dados</p>

            <p className={styles.text}>
              {typeof error === "string" ? error : error?.message}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.title}>MyMovies</h1>

      <h2 className={styles.subtitle}>Login</h2>
      <p className={styles.text}>
        Bem-vindo ao MyMovies! Faça login usando sua conta do The Movie Database
        para acessar recomendações personalizadas de filmes e mais.
      </p>
      <SystemButton isLoading={redirectIsLoading} onClick={redirect}>
        Login com The Movie Database
      </SystemButton>
      <p className={styles.text}>
        Se você não tem uma conta, você pode criar uma no <br />
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
        >
          The Movie Database.
        </a>
      </p>
    </div>
  );
}
