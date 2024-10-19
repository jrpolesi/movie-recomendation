import { useState } from 'react';
import styles from './style.module.css';

export function MovieBotMessageForm() {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

      <button type='submit' className="material-symbols-outlined">send</button>
    </form>
  );
}
