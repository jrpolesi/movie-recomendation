import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import { Header } from "./index";
import styles from "./style.module.css";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("Header", () => {
  beforeEach(() => {
    document.body.removeAttribute("data-theme");
  });

  it("renders correctly with all navigation links", () => {
    renderWithRouter(<Header />);

    expect(screen.getByText("Filmes")).toBeInTheDocument();
    expect(screen.getByText("Séries")).toBeInTheDocument();
    expect(screen.getByText("Minha Lista")).toBeInTheDocument();
  });

  it("toggles the mobile menu when the menu button is clicked", () => {
    renderWithRouter(<Header />);

    const menuButton = screen.getByText("menu");
    fireEvent.click(menuButton);

    const navMobile = document.querySelector(`.${styles.navMobile}`);

    const movieElement = screen.getAllByText("Filmes")[1];
    const seriesElement = screen.getAllByText("Séries")[1];
    const myListElement = screen.getAllByText("Minha Lista")[1];

    expect(navMobile).toBeInTheDocument();

    expect(movieElement).toBeInTheDocument();
    expect(seriesElement).toBeInTheDocument();
    expect(myListElement).toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(navMobile).not.toBeInTheDocument();
    expect(movieElement).not.toBeInTheDocument();
    expect(seriesElement).not.toBeInTheDocument();
    expect(myListElement).not.toBeInTheDocument();
  });

  it("renders the dark mode button", () => {
    renderWithRouter(<Header />);

    expect(screen.getByText("light_mode")).toBeInTheDocument();
  });

  it("initializes with dark mode if data-theme is set to dark", () => {
    document.body.setAttribute("data-theme", "dark");
    renderWithRouter(<Header />);

    expect(screen.getByText("dark_mode")).toBeInTheDocument();
  });
});
