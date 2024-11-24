import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { useDiscoverSeriesInfinity } from "../../hooks";
import { PopularSeries } from "./index";

vi.mock("../../hooks");

const mockData = [
  { id: 1, title: "Serie 1" },
  { id: 2, title: "Serie 2" },
];

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: MemoryRouter });
};

describe("PopularSeries", () => {
  it("renders loading spinner when loading", () => {
    useDiscoverSeriesInfinity.mockReturnValue({
      data: [],
      isLoading: true,
      pagination: { fetchNextPage: vi.fn() },
    });

    renderWithRouter(<PopularSeries />);

    expect(screen.getByText("Séries populares")).toBeInTheDocument();
    expect(screen.getByText("progress_activity")).toBeInTheDocument();
  });

  it("renders serie titles when data is available", () => {
    useDiscoverSeriesInfinity.mockReturnValue({
      data: mockData,
      isLoading: false,
      pagination: { fetchNextPage: vi.fn() },
    });

    renderWithRouter(<PopularSeries />);

    expect(screen.getByText("Séries populares")).toBeInTheDocument();
    expect(screen.getByText("Serie 1")).toBeInTheDocument();
    expect(screen.getByText("Serie 2")).toBeInTheDocument();
  });

  it('calls fetchNextPage when "Exibir mais" button is clicked', () => {
    const fetchNextPage = vi.fn();

    useDiscoverSeriesInfinity.mockReturnValue({
      data: mockData,
      isLoading: false,
      pagination: { fetchNextPage },
    });

    renderWithRouter(<PopularSeries />);

    const button = screen.getByText("Exibir mais");
    fireEvent.click(button);

    expect(fetchNextPage).toHaveBeenCalled();
  });

  it('disables "Exibir mais" button when loading', () => {
    useDiscoverSeriesInfinity.mockReturnValue({
      data: mockData,
      isLoading: true,
      pagination: { fetchNextPage: vi.fn() },
    });

    renderWithRouter(<PopularSeries />);

    const button = screen.getByText("Exibir mais");
    expect(button).toBeDisabled();
  });
});
