import { discover } from "./discover";

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
}
