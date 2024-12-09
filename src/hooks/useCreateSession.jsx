import { useEffect, useState } from "react";
import { useSessionContext, useTheMovieDBContext } from "../contexts";

export function useCreateSession(requestToken) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = useTheMovieDBContext();

  const { saveSession } = useSessionContext();

  useEffect(() => {
    async function crateSession() {
      setIsLoading(true);

      try {
        const { body } = await api.session.createSession(requestToken);

        if (body?.session_id) {
          saveSession({ id: body.session_id });
          history.replaceState(
            {},
            document.title,
            location.pathname + "#/movies"
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (!requestToken || isLoading || error) return;

    crateSession();
  }, [api.session, error, isLoading, requestToken, saveSession]);

  return { isLoading, error };
}
