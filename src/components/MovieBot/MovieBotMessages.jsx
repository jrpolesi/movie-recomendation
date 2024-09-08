const YOU_OWNER = "You";

const examples = [
  {
    owner: "Movie bot",
    text: "Example 1",
    datetime: new Date(),
  },
  {
    owner: "Movie bot",
    text: "Example 2",
    datetime: new Date(),
  },
];

export function MovieBotMessages() {
  return (
    <ul className="movie-bot--messages">
      {examples.map((example, index) => (
        <Message
          key={index}
          owner={example.owner}
          text={example.text}
          datetime={example.datetime}
        />
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
function Message({ owner, text, datetime }) {
  const className = ["movie-bot--message"];

  if (owner === YOU_OWNER) {
    className.push("movie-bot--message__sent");
  } else {
    className.push("movie-bot--message__received");
  }

  return (
    <li className={className}>
      <h3>{owner}</h3>
      <p>{text}</p>
      <span>{datetime.toLocaleString()}</span>
    </li>
  );
}
