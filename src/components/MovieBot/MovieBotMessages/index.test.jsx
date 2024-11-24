import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MovieBotMessages, YOU_OWNER } from "./index";
import styles from "./style.module.css";

describe("MovieBotMessages", () => {
  it("renders messages correctly", () => {
    const messages = [
      { owner: YOU_OWNER, text: "Hello", datetime: new Date() },
      { owner: "Bot", text: "Hi there!", datetime: new Date() },
    ];

    const { getByText } = render(<MovieBotMessages messages={messages} />);

    expect(getByText("Hello")).toBeInTheDocument();
    expect(getByText("Hi there!")).toBeInTheDocument();
  });

  it("applies correct styles for sent and received messages", () => {
    const messages = [
      { owner: YOU_OWNER, text: "Hello", datetime: new Date() },
      { owner: "Bot", text: "Hi there!", datetime: new Date() },
    ];

    const { container } = render(<MovieBotMessages messages={messages} />);
    const messageElements = container.querySelectorAll("li");

    expect(
      messageElements[0].classList.contains(styles.movie_bot__message__sent)
    ).toBe(true);
    expect(
      messageElements[1].classList.contains(styles.movie_bot__message__received)
    ).toBe(true);
  });

  it("renders movie information if provided", () => {
    const messages = [
      {
        owner: "Bot",
        text: "Check this movie",
        movie: "Inception",
        datetime: new Date(),
      },
    ];

    const { getByText } = render(<MovieBotMessages messages={messages} />);

    expect(getByText("Inception")).toBeInTheDocument();
  });

  it("formats datetime correctly", () => {
    const datetime = new Date("2023-10-01T10:00:00Z");
    const messages = [{ owner: "Bot", text: "Hello", datetime }];

    const { getByText } = render(<MovieBotMessages messages={messages} />);
    const formattedDate = datetime.toLocaleString();

    expect(getByText(formattedDate)).toBeInTheDocument();
  });
});
