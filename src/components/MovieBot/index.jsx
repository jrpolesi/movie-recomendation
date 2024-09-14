import "./style.css";
import { MovieBotHeader } from "./MovieBotHeader";

export function MovieBot({ handleClose }) {
  return (
    <div className="movie-bot">
      <MovieBotHeader onClose={handleClose} />
      <p style={{textAlign: "center", margin:"30px 0"}}>Em breve novidades</p>
    </div>
  );
}
