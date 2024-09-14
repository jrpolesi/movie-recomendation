import "./style.css";

export function MovieBotHeader({ onClose }) {
  return (
    <div className="movie-bot--header">
      <button
        className="material-symbols-outlined movie-bot--back-btn"
        onClick={onClose}
      >
        chevron_backward
      </button>
      <h2>Movie bot</h2>
    </div>
  );
}
