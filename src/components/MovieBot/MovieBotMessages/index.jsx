import styles from "./style.module.css";

export const YOU_OWNER = "Você";

export function MovieBotMessages({ messages }) {
  return (
    <ul className={styles.movie_bot__messages}>
      {messages.map((msg, index) => (
        <Message key={index} {...msg} />
      ))}
    </ul>
  );
}

/**
 * @param {object} props
 * @param {string} props.owner
 * @param {string} props.text
 * @param {Date} props.datetime
 * @returns {JSX.Element}
 */
function Message({ owner, text, movie, datetime }) {
  const className = [styles.movie_bot__message];

  if (owner === YOU_OWNER) {
    className.push(styles.movie_bot__message__sent);
  } else {
    className.push(styles.movie_bot__message__received);
  }

  return (
    <li className={className.join(" ")}>
      <h3>{owner}</h3>
      <p>{text}</p>
      {movie && <div className={styles.movie}>{movie}</div>}
      <span>{datetime.toLocaleString()}</span>
    </li>
  );
}
