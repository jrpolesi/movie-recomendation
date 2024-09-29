import styles from "./style.module.css";

import { TitleCard } from "../TitleCard";

/**
 *
 * @param {{
 *  titles: {
 *    id: number;
 *    title: string;
 *    overview: string;
 *    voteAverage: number;
 *    releaseDate: string;
 *    genres: string[];
 *    posterPath: string;
 *  }[]
 * }} props
 * @returns
 */
export function TitlesList({ titles }) {
  return (
    <ul className={styles.titlesList}>
      {titles?.map((title) => (
        <li key={title.id}>
          <TitleCard title={title} />
        </li>
      ))}
    </ul>
  );
}
