import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { MoviePage, PopularMoviesPage, PopularSeriesPage, SeriePage } from "../components";

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/movies" element={<PopularMoviesPage />} />
        <Route path="/series" element={<PopularSeriesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/series/:id" element={<SeriePage />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
}
