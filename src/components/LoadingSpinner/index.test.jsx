import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LoadingSpinner } from "./index";

describe("LoadingSpinner", () => {
  it("renders correctly with default props", () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector(".loading-spinner");

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle({ fontSize: "inherit", color: "inherit" });
  });

  it("renders correctly with custom size and color", () => {
    const { container } = render(
      <LoadingSpinner size="24px" color="rgb(255, 0, 0)" />
    );
    const spinner = container.querySelector(".loading-spinner");

    expect(spinner).toBeInTheDocument();
    expect(spinner.parentElement).toHaveStyle({
      fontSize: "24px",
      color: "rgb(255, 0, 0)",
    });
  });
});
