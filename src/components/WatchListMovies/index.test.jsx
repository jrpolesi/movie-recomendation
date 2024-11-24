import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { useTheMovieDBContext } from "../../contexts";
import { WatchListMovies } from "./index";

vi.mock("../../contexts", () => ({
  useTheMovieDBContext: vi.fn(),
}));

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("WatchListMovies", () => {
  it("renders empty watch list message when there are no movies", () => {
    useTheMovieDBContext.mockReturnValue({
      watchList: {
        getMovies: () => [],
      },
    });

    renderWithRouter(<WatchListMovies />);

    expect(
      screen.getByText("Sua lista de filmes para assistir está vazia.")
    ).toBeInTheDocument();
  });

  it("renders movie titles when there are movies in the watch list", () => {
    const movies = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];

    useTheMovieDBContext.mockReturnValue({
      watchList: {
        getMovies: () => movies,
      },
    });

    renderWithRouter(<WatchListMovies />);

    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });
});
