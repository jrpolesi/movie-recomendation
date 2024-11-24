import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ToastError } from "./index";

describe("ToastError", () => {
  it("renders correctly with an error message", () => {
    const error = { message: "Test error message" };
    const resetError = vi.fn();

    render(<ToastError error={error} resetError={resetError} />);

    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("renders correctly with a default error message", () => {
    const error = "Test error message";
    const resetError = vi.fn();

    render(<ToastError error={error} resetError={resetError} />);

    expect(screen.getByText("Erro desconhecido")).toBeInTheDocument();
  });

  it("does not render when there is no error", () => {
    const error = null;
    const resetError = vi.fn();

    const { container } = render(<ToastError error={error} resetError={resetError} />);

    expect(container.firstChild).toBeNull();
  });

  it("calls resetError after 3 seconds", () => {
    vi.useFakeTimers();
    const error = { message: "Test error message" };
    const resetError = vi.fn();

    render(<ToastError error={error} resetError={resetError} />);

    vi.advanceTimersByTime(3000);

    expect(resetError).toHaveBeenCalled();
  });

  it("cleans up the timeout on unmount", () => {
    vi.useFakeTimers();
    const error = { message: "Test error message" };
    const resetError = vi.fn();

    const { unmount } = render(<ToastError error={error} resetError={resetError} />);
    unmount();

    vi.advanceTimersByTime(3000);

    expect(resetError).not.toHaveBeenCalled();
  });
});