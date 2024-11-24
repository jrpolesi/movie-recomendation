import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { useDiscoverMoviesInfinity } from "../../hooks";
import { PopularMovies } from "./index";

vi.mock("../../hooks");

const mockData = [
  { id: 1, title: "Movie 1" },
  { id: 2, title: "Movie 2" },
];

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: MemoryRouter });
};

describe("PopularMovies", () => {
  it("renders loading spinner when loading", () => {
    useDiscoverMoviesInfinity.mockReturnValue({
      data: [],
      isLoading: true,
      pagination: { fetchNextPage: vi.fn() },
    });

    renderWithRouter(<PopularMovies />);

    expect(screen.getByText("Filmes populares")).toBeInTheDocument();
    expect(screen.getByText("progress_activity")).toBeInTheDocument();
  });

  it("renders movie titles when data is available", () => {
    useDiscoverMoviesInfinity.mockReturnValue({
      data: mockData,
      isLoading: false,
      pagination: { fetchNextPage: vi.fn() },
    });

    renderWithRouter(<PopularMovies />);

    expect(screen.getByText("Filmes populares")).toBeInTheDocument();
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });

  it('calls fetchNextPage when "Exibir mais" button is clicked', () => {
    const fetchNextPage = vi.fn();
    useDiscoverMoviesInfinity.mockReturnValue({
      data: mockData,
      isLoading: false,
      pagination: { fetchNextPage },
    });

    renderWithRouter(<PopularMovies />);

    const button = screen.getByText("Exibir mais");
    fireEvent.click(button);

    expect(fetchNextPage).toHaveBeenCalled();
  });

  it('disables "Exibir mais" button when loading', () => {
    useDiscoverMoviesInfinity.mockReturnValue({
      data: mockData,
      isLoading: true,
      pagination: { fetchNextPage: vi.fn() },
    });

    renderWithRouter(<PopularMovies />);

    const button = screen.getByText("Exibir mais");
    expect(button).toBeDisabled();
  });
});
