import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SystemButton } from "./index";

describe("SystemButton", () => {
  it("renders children when not loading", () => {
    render(<SystemButton isLoading={false}>Click Me</SystemButton>);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders LoadingSpinner when loading", () => {
    render(<SystemButton isLoading={true}>Click Me</SystemButton>);

    expect(screen.queryByText("Click Me")).not.toBeInTheDocument();
    expect(screen.getByText("progress_activity")).toBeInTheDocument();
  });

  it("applies additional props to the button", () => {
    render(
      <SystemButton isLoading={false} data-testid="system-button">
        Click Me
      </SystemButton>
    );

    expect(screen.getByTestId("system-button")).toBeInTheDocument();
  });

  it("applies className from props and styles.systemButton", () => {
    render(
      <SystemButton isLoading={false} className="custom-class">
        Click Me
      </SystemButton>
    );

    const button = screen.getByText("Click Me");
    expect(button.classList).toHaveLength(2);
    expect(button).toHaveClass("custom-class");
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(
      <SystemButton isLoading={false} onClick={handleClick}>
        Click Me
      </SystemButton>
    );

    const button = screen.getByText("Click Me");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
