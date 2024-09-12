export function getImageURL(path, width = 500) {
  return `https://image.tmdb.org/t/p/w${width}/${path}`;
}
