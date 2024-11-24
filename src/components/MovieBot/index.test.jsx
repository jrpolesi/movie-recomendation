import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { useFindMovie } from "../../hooks/useFindMovie";
import { MovieBot } from "./index";

vi.mock("../../hooks/useFindMovie", () => ({
  useFindMovie: vi.fn().mockReturnValue({
    fn: vi.fn(),
    isLoading: false,
    error: null,
  }),
}));

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("MovieBot", () => {
  it("renders the MovieBot component when opened", () => {
    renderWithRouter(
      <MovieBot handleClose={() => {}} data-testid="movie-bot" />
    );

    const movieBot = screen.getByTestId("movie-bot");

    expect(movieBot).toBeInTheDocument();
  });

  it("calls handleClose when the close button is clicked", () => {
    const handleClose = vi.fn();

    renderWithRouter(<MovieBot handleClose={handleClose} />);

    const closeButton = screen.getByRole("button", {
      name: /chevron_backward/i,
    });

    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("displays welcome message", () => {
    renderWithRouter(<MovieBot handleClose={() => {}} />);

    expect(screen.getByText("Busque um filme pelo nome")).toBeInTheDocument();
  });

  it("displays searched movie", async () => {
    vi.useFakeTimers();
    const findMovie = vi.fn();

    findMovie.mockResolvedValue({
      id: 12,
      title: "Procurando Nemo",
      posterPath: "/nemo.jpg",
    });

    useFindMovie.mockReturnValue({
      fn: findMovie,
      isLoading: false,
      error: null,
    });

    renderWithRouter(<MovieBot handleClose={() => {}} />);

    expect(screen.getByText("Busque um filme pelo nome")).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /send/i });

    act(() => {
      fireEvent.change(input, { target: { value: "Procurando nemo" } });

      fireEvent.click(button);
    });

    expect(screen.getByText("Procurando nemo")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(800);
    });

    expect(screen.getByText("Buscando filmes..."));

    await act(async () => {
      vi.advanceTimersByTime(1600);
    });

    expect(screen.getByText("Encontrei o filme Procurando Nemo"));

    expect(findMovie).toHaveBeenCalledWith("Procurando nemo");
    expect(findMovie).toHaveBeenCalledTimes(1);
  });

  it("displays a message when no movies are found", async () => {
    vi.useFakeTimers();
    const findMovie = vi.fn();

    findMovie.mockResolvedValue(null);

    useFindMovie.mockReturnValue({
      fn: findMovie,
      isLoading: false,
      error: null,
    });

    renderWithRouter(<MovieBot handleClose={() => {}} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /send/i });

    await act(async () => {
      fireEvent.change(input, { target: { value: "Vida de inseto 2" } });

      fireEvent.click(button);

      vi.advanceTimersByTime(1600);
    });

    expect(screen.getByText("Não encontrei nenhum filme"));

    expect(findMovie).toHaveBeenCalledWith("Vida de inseto 2");
    expect(findMovie).toHaveBeenCalledTimes(1);
  });

  it("renders a loading state when fetching movies", () => {
    useFindMovie.mockReturnValue({ movies: [], isLoading: true });

    renderWithRouter(<MovieBot handleClose={() => {}} />);

    expect(screen.getByText("progress_activity")).toBeInTheDocument();
  });
});
