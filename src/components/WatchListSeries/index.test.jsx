import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { useTheMovieDBContext } from "../../contexts";
import { WatchListSeries } from "./index";

vi.mock("../../contexts", () => ({
  useTheMovieDBContext: vi.fn(),
}));

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("WatchListSeries", () => {
  it("should render the empty watch list message when there are no series", () => {
    useTheMovieDBContext.mockReturnValue({
      watchList: {
        getSeries: () => [],
      },
    });

    renderWithRouter(<WatchListSeries />);

    expect(
      screen.getByText("Sua lista de séries para assistir está vazia.")
    ).toBeInTheDocument();
  });

  it("should render the series list when there are series", () => {
    const series = [
      { id: 1, title: "Series 1" },
      { id: 2, title: "Series 2" },
    ];
    useTheMovieDBContext.mockReturnValue({
      watchList: {
        getSeries: () => series,
      },
    });

    renderWithRouter(<WatchListSeries />);

    expect(screen.getByText("Series 1")).toBeInTheDocument();
    expect(screen.getByText("Series 2")).toBeInTheDocument();
  });
});
