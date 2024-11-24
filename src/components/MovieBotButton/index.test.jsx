import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { MovieBotButton } from "./index";

vi.mock("../../hooks/useFindMovie", () => ({
  useFindMovie: () => ({
    findMovie: vi.fn(),
  }),
}));

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("MovieBotButton", () => {
  it("renders the button initially", () => {
    renderWithRouter(<MovieBotButton />);

    const button = screen.getByRole("button", { name: /MovieBot/i });

    expect(button).toBeInTheDocument();
  });

  it("opens MovieBot when button is clicked", () => {
    renderWithRouter(<MovieBotButton />);

    const button = screen.getByRole("button", { name: /MovieBot/i });

    fireEvent.click(button);

    const movieBot = screen.getByTestId("movie-bot");

    expect(movieBot).toBeInTheDocument();
  });

  it("closes MovieBot when handleClose is called", () => {
    renderWithRouter(<MovieBotButton />);

    const button = screen.getByRole("button", { name: /MovieBot/i });

    fireEvent.click(button);

    const closeButton = screen.getByRole("button", {
      name: /chevron_backward/i,
    });

    fireEvent.click(closeButton);

    expect(screen.queryByTestId("movie-bot")).not.toBeInTheDocument();
  });
});
