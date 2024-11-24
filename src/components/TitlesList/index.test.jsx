import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { TitlesList } from "./index";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("TitlesList", () => {
  const defaultProps = {
    titles: [
      {
        id: 1,
        title: "Test Movie 1",
        overview: "This is a test movie 1.",
        voteAverage: 8.5,
        releaseDate: "2023-01-01",
        genres: ["Action", "Adventure"],
        posterPath: "/test1.jpg",
      },
      {
        id: 2,
        title: "Test Movie 2",
        overview: "This is a test movie 2.",
        voteAverage: 7.5,
        releaseDate: "2023-02-01",
        genres: ["Drama"],
        posterPath: "/test2.jpg",
      },
    ],
    linkPrefix: "/movies/",
  };

  it("renders correctly with titles", () => {
    renderWithRouter(<TitlesList {...defaultProps} />);

    const titleCards = screen.getAllByRole("listitem");

    expect(titleCards).toHaveLength(2);

    expect(screen.getByText("Test Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Test Movie 2")).toBeInTheDocument();
  });

  it("renders correctly without titles", () => {
    renderWithRouter(<TitlesList titles={[]} linkPrefix="/movies/" />);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("renders correctly with null titles", () => {
    renderWithRouter(<TitlesList titles={null} linkPrefix="/movies/" />);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("applies the correct link prefix to TitleCard components", () => {
    renderWithRouter(<TitlesList {...defaultProps} />);

    const titleCards = screen.getAllByRole("listitem");

    titleCards.forEach((titleCard, index) => {
      const link = titleCard.querySelector("a");
      expect(link).toHaveAttribute(
        "href",
        `/movies/${defaultProps.titles[index].id}`
      );
    });
  });

  it("renders correctly with a different link prefix", () => {
    const props = { ...defaultProps, linkPrefix: "/shows/" };
    renderWithRouter(<TitlesList {...props} />);

    const titleCards = screen.getAllByRole("listitem");

    titleCards.forEach((titleCard, index) => {
      const link = titleCard.querySelector("a");
      expect(link).toHaveAttribute("href", `/shows/${props.titles[index].id}`);
    });
  });
});
