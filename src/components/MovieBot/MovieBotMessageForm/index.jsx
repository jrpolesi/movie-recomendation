import { useState } from "react";
import styles from "./style.module.css";

export function MovieBotMessageForm({ onSendMessage }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSendMessage(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        type="submit"
        className="material-symbols-outlined"
        disabled={!inputValue.length}
      >
        send
      </button>
    </form>
  );
}
