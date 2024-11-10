import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { MoviePage, SeriePage } from "../components";
import { PopularMoviesPage, PopularSeriesPage } from "../pages";

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/movies" element={<PopularMoviesPage />} />
        <Route path="/series" element={<PopularSeriesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/series/:id" element={<SeriePage />} />
        <Route path="/watchlist/movies" element={<PopularMoviesPage />} />
        <Route path="/watchlist/series" element={<PopularMoviesPage />} />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
}
