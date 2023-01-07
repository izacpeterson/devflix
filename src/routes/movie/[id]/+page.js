import * as movies from "../../../lib/functions/movies.js";

export async function load({ fetch, params }) {
  let movie = await movies.getMovie(fetch, params.id);
  let videos = await movies.getMovieVideos(fetch, params.id);
  let credits = await movies.getMovieCredits(fetch, params.id);

  movie.videos = videos;
  movie.credits = credits;

  return movie;
}
