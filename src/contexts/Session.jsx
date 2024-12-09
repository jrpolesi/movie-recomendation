import { createContext, useContext, useState } from "react";

const SESSION_KEY = "@movie.session";

const sessionContext = createContext();

export function useSessionContext() {
  return useContext(sessionContext);
}

export function SessionProvider({ children }) {
  const [session, setSession] = useState(() => {
    const sessionString = localStorage.getItem(SESSION_KEY) ?? "null";

    return JSON.parse(sessionString) ?? undefined;
  });

  function saveSession(session) {
    setSession(session);
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function clearSession() {
    setSession(null);
    localStorage.removeItem(SESSION_KEY);
  }

  return (
    <sessionContext.Provider
      value={{
        session,
        saveSession,
        clearSession,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
