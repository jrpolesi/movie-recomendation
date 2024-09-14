import "./style.css";

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
    <article className="title-card">
      <img src={getImageURL(title.posterPath, 400)} alt="" />

      <div className="title-card--info">
        <p className="title-card--genres" >{title.genres.join(" - ")}</p>

        <div className="title-card--details">
          <h3 className="title-card--title">{title.title}</h3>

          <span className="title-card--release-date">{title.releaseDate}</span>
        </div>
      </div>
    </article>
  );
}
