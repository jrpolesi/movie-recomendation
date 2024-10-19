import { getImageURL } from "../../api";
import styles from "./style.module.css";

export function TitleDetails({
  title,
  posterPath,
  voteAverage,
  genres,
  overview,
  releaseDate,
  originalTitle,
  originalLanguage,
}) {
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>

      <img src={getImageURL(posterPath, 400)} alt="" />

      <div>
        <div>
          <h2>{title}</h2>

          <p>
            <span>{originalTitle}</span> -{" "}
            <span>{originalLanguage?.toUpperCase()}</span>
          </p>
        </div>

        <p>{genres?.join(" - ")}</p>

        <p>{overview}</p>

        <div>
          <span>{voteAverage}</span>
          <p>
            <span>Data de lançamento</span>
            <span>{releaseDate}</span>
          </p>
        </div>

        <button>Ver mais tarde</button>
      </div>
    </div>
  );
}
