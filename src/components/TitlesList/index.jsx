import "./style.css";

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
    <ul className="titles-list">
      {titles?.map((title) => (
        <li key={title.id}>
          <TitleCard title={title} />
        </li>
      ))}
    </ul>
  );
}
