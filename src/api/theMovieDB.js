import { discover } from "./discover";
import { genres } from "./genres";
import { movies } from "./movies";
import { series } from "./series";

export class TheMovieDB {
  baseURL = "https://api.themoviedb.org/3";

  constructor(apiKey, defaultLanguage = "pt-BR") {
    this.apiKey = apiKey;
    this.defaultLanguage = defaultLanguage;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  discover = {
    getMovies: (...args) => discover.getMovies.call(this, ...args),
    getSeries: (...args) => discover.getSeries.call(this, ...args),
  };

  genres = {
    getMovieGenres: (...args) => genres.getMovieGenres.call(this, ...args),
    getSerieGenres: (...args) => genres.getSerieGenres.call(this, ...args),
  };

  movies = {
    getMovieDetails: (...args) => movies.getMovieDetails.call(this, ...args),
  };

  series = {
    getSerieDetails: (...args) => series.getSerieDetails.call(this, ...args),
  };
}
