import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  LoginPage,
  MoviePage,
  PopularMoviesPage,
  PopularSeriesPage,
  SeriePage,
  WatchListPage,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <PopularMoviesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/series"
          element={
            <ProtectedRoute>
              <PopularSeriesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <ProtectedRoute>
              <MoviePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/series/:id"
          element={
            <ProtectedRoute>
              <SeriePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <WatchListPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </HashRouter>
  );
}
