import styles from "./style.module.css";

import { getImageURL } from "../../api";
import { Link } from "react-router-dom";

/**
 *
 * @param {{
 *    id: number;
 *    title: string;
 *    overview: string;
 *    voteAverage: number;
 *    releaseDate: string;
 *    genres: string[];
 *    posterPath: string;
 * }} props
 * @returns
 */
export function TitleCard({ title, posterPath, releaseDate, genres, id }) {
  return (
    <article className={styles.titleCard}>
      <Link to={`${id}`}>
        <img src={getImageURL(posterPath, 400)} alt="" />
      </Link>

      <div className={styles.titleCardInfo}>
        <p className={styles.titleCardGenres}>{genres.join(" - ")}</p>

        <div className={styles.titleCardDetails}>
          <h3 className={styles.titleCardTitle}>{title}</h3>

          <span className={styles.titleCardReleaseDate}>{releaseDate}</span>
        </div>
      </div>
    </article>
  );
}
