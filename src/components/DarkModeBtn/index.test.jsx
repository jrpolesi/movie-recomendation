import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { DarkModeBtn } from "./index";

describe("DarkModeBtn", () => {
  beforeEach(() => {
    document.body.removeAttribute("data-theme");
  });

  it("renders correctly with light mode by default", () => {
    render(<DarkModeBtn />);
    expect(screen.getByText("light_mode")).toBeInTheDocument();
  });

  it("toggles to dark mode when clicked", () => {
    render(<DarkModeBtn />);
    const button = screen.getByText("light_mode");

    fireEvent.click(button);

    expect(document.body.getAttribute("data-theme")).toBe("dark");
    expect(screen.getByText("dark_mode")).toBeInTheDocument();
  });

  it("toggles back to light mode when clicked again", () => {
    render(<DarkModeBtn />);
    const button = screen.getByText("light_mode");

    fireEvent.click(button);
    fireEvent.click(screen.getByText("dark_mode"));

    expect(document.body.getAttribute("data-theme")).toBeNull();
    expect(screen.getByText("light_mode")).toBeInTheDocument();
  });

  it("initializes with dark mode if data-theme is set to dark", () => {
    document.body.setAttribute("data-theme", "dark");
    render(<DarkModeBtn />);

    expect(screen.getByText("dark_mode")).toBeInTheDocument();
  });
});
