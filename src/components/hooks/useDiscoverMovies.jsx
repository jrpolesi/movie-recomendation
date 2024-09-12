import { useTheMovieDBContext } from "../../contexts/TheMovieDB";
import { usePaginatedQuery } from "./usePaginatedQuery";

/**
 *
 * @param {
 *  with_genres: string,
 *  with_watch_providers: string,
 *  release_date.gte: date,
 *  certification.gte: string,
 *  vote_count.gte: number,
 * } options
 * @returns {{
 *  pagination: {
 *    page: number,
 *    totalPages: number,
 *    hasNextPage: boolean,
 *    hasPreviousPage: boolean,
 *    fetchNextPage: () => void,
 *    fetchPreviousPage: () => void,
 *    fetchPage: (page: number) => void,
 *  },
 *  data: {
 *    id: number,
 *    title: string,
 *    overview: string,
 *    vote_average: number,
 *    poster_path: string,
 *    backdrop_path: string,
 *    release_date: string,
 *    genre_ids: number[],
 *  }[],
 *  error: Error,
 *  isLoading: boolean,
 * }}
 */
export function useDiscoverMovies(options) {
  const api = useTheMovieDBContext();

  return usePaginatedQuery(api.discover.getMovies, options);
}
