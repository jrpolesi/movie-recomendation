import { useState } from "react";
import { useTheMovieDBContext } from "../contexts";

const REDIRECT_URL =
  import.meta.env.VITE_REDIRECT_URL ??
  "https://jrpolesi.github.io/movie-recomendation/";

export function useRedirectToTheMovieDBLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = useTheMovieDBContext();

  async function redirect() {
    setIsLoading(true);

    try {
      const { body } = await api.session.getTempRequestToken();

      const requestToken = body?.request_token;

      if (requestToken) {
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${REDIRECT_URL}`;
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { redirect, isLoading, error };
}
