import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { TitleCard } from "./index";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

describe("TitleCard", () => {
  const defaultProps = {
    id: 1,
    title: "Test Movie",
    overview: "This is a test movie.",
    voteAverage: 8.5,
    releaseDate: "2023-01-01",
    genres: ["Action", "Adventure"],
    posterPath: "/test.jpg",
  };

  it("renders correctly with all props", () => {
    const { getByText, getByAltText } = renderWithRouter(
      <TitleCard {...defaultProps} />
    );

    expect(getByText("Test Movie")).toBeInTheDocument();
    expect(getByText("2023-01-01")).toBeInTheDocument();
    expect(getByText("Action - Adventure")).toBeInTheDocument();
    expect(getByAltText("")).toBeInTheDocument();
  });

  it("renders correctly without genres", () => {
    const props = { ...defaultProps, genres: [] };
    const { queryByText } = renderWithRouter(<TitleCard {...props} />);

    expect(queryByText("Action - Adventure")).not.toBeInTheDocument();
  });

  it("renders correctly without release date", () => {
    const props = { ...defaultProps, releaseDate: "" };
    const { queryByText } = renderWithRouter(<TitleCard {...props} />);

    expect(queryByText("2023-01-01")).not.toBeInTheDocument();
  });

  it("renders correctly with a link prefix", () => {
    const props = { ...defaultProps, linkPrefix: "/movies/" };
    const { getByRole } = renderWithRouter(<TitleCard {...props} />);

    expect(getByRole("link")).toHaveAttribute("href", "/movies/1");
  });
});
