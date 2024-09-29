import styles from "./style.module.css";

import { getImageURL } from "../../api";

/**
 *
 * @param {{
 *  title: {
 *    id: number;
 *    title: string;
 *    overview: string;
 *    voteAverage: number;
 *    releaseDate: string;
 *    genres: string[];
 *    posterPath: string;
 *  }
 * }} props
 * @returns
 */
export function TitleCard({ title }) {
  return (
    <article className={styles.titleCard}>
      <img src={getImageURL(title.posterPath, 400)} alt="" />

      <div className={styles.titleCardInfo}>
        <p className={styles.titleCardGenres}>{title.genres.join(" - ")}</p>

        <div className={styles.titleCardDetails}>
          <h3 className={styles.titleCardTitle}>{title.title}</h3>

          <span className={styles.titleCardReleaseDate}>
            {title.releaseDate}
          </span>
        </div>
      </div>
    </article>
  );
}
