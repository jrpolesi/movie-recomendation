import { createContext, useContext, useMemo } from "react";
import { TheMovieDB } from "../api";

const TheMovieDBContext = createContext();

export function useTheMovieDBContext() {
  return useContext(TheMovieDBContext);
}

export function TheMovieDBProvider({ children }) {
  const api = useMemo(() => {
    return new TheMovieDB(import.meta.env.VITE_API_KEY);
  }, []);

  return (
    <TheMovieDBContext.Provider value={api}>
      {children}
    </TheMovieDBContext.Provider>
  );
}
