import { getImageURL } from "../../api";
import { SystemButton } from "../SystemButton";
import styles from "./style.module.css";

export function TitleDetails({
  id,
  title,
  posterPath,
  voteAverage,
  genres,
  overview,
  releaseDate,
  originalTitle,
  originalLanguage,
  onAddToWatchList,
  onRemoveFromWatchList,
  isOnWatchList,
}) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.upperTitle}>{title}</h2>

      <img
        className={styles.poster}
        src={getImageURL(posterPath, 400)}
        alt={title}
      />

      <div className={styles.info}>
        <div className={styles.titleHeader}>
          <h2>{title}</h2>

          <p className={styles.originalInfo}>
            <span>{originalTitle}</span> -{" "}
            <span>{originalLanguage?.toUpperCase()}</span>
          </p>
        </div>

        <p className={styles.genres}>{genres?.join(" - ")}</p>

        <p className={styles.description}>{overview}</p>

        <div className={styles.moreDetails}>
          <span className={styles.vote}>{voteAverage?.toFixed(1)}</span>
          <p className={styles.releaseDate}>
            <span>Lançamento</span>
            <span>{releaseDate}</span>
          </p>
        </div>

        {isOnWatchList ? (
          <SystemButton onClick={() => onRemoveFromWatchList?.(id)}>
            Remover da lista
          </SystemButton>
        ) : (
          <SystemButton onClick={() => onAddToWatchList?.(id)}>
            Ver mais tarde
          </SystemButton>
        )}
      </div>
    </div>
  );
}
