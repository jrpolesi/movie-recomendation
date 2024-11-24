import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { getImageURL } from "../../api";
import { TitleDetails } from "./index";

describe("TitleDetails", () => {
  const defaultProps = {
    id: 1,
    title: "Test Movie",
    posterPath: "/test.jpg",
    voteAverage: 8.5,
    genres: ["Action", "Adventure"],
    overview: "This is a test movie.",
    releaseDate: "2023-01-01",
    originalTitle: "Test Movie Original",
    originalLanguage: "en",
    onAddToWatchList: vi.fn(),
    onRemoveFromWatchList: vi.fn(),
    isOnWatchList: false,
  };

  it("renders correctly with all props", () => {
    render(<TitleDetails {...defaultProps} />);

    expect(screen.getAllByText("Test Movie")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Test Movie")[1]).toBeInTheDocument();
    expect(screen.getByText("Test Movie Original")).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("Action - Adventure")).toBeInTheDocument();
    expect(screen.getByText("This is a test movie.")).toBeInTheDocument();
    expect(screen.getByText("8.5")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      getImageURL("/test.jpg", 400)
    );
  });

  it("calls onAddToWatchList when 'Ver mais tarde' button is clicked", () => {
    render(<TitleDetails {...defaultProps} />);

    const button = screen.getByText("Ver mais tarde");
    fireEvent.click(button);

    expect(defaultProps.onAddToWatchList).toHaveBeenCalledWith(1);
  });

  it("calls onRemoveFromWatchList when 'Remover da lista' button is clicked", () => {
    const props = { ...defaultProps, isOnWatchList: true };
    render(<TitleDetails {...props} />);

    const button = screen.getByText("Remover da lista");
    fireEvent.click(button);

    expect(props.onRemoveFromWatchList).toHaveBeenCalledWith(1);
  });

  it("renders correctly without genres", () => {
    const props = { ...defaultProps, genres: [] };
    render(<TitleDetails {...props} />);

    expect(screen.queryByText("Action - Adventure")).not.toBeInTheDocument();
  });

  it("renders correctly without release date", () => {
    const props = { ...defaultProps, releaseDate: "" };
    render(<TitleDetails {...props} />);

    expect(screen.queryByText("2023-01-01")).not.toBeInTheDocument();
  });

  it("renders correctly without original title and language", () => {
    const props = { ...defaultProps, originalTitle: "", originalLanguage: "" };
    render(<TitleDetails {...props} />);

    expect(screen.queryByText("Test Movie Original")).not.toBeInTheDocument();
    expect(screen.queryByText("EN")).not.toBeInTheDocument();
  });
});
