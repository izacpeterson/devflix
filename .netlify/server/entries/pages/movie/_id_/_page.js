import { c as getMovie, d as getMovieVideos, e as getMovieCredits } from "../../../../chunks/movies.js";
async function load({ fetch, params }) {
  let movie = await getMovie(fetch, params.id);
  let videos = await getMovieVideos(fetch, params.id);
  let credits = await getMovieCredits(fetch, params.id);
  movie.videos = videos;
  movie.credits = credits;
  return movie;
}
export {
  load
};
