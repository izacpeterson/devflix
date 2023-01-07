import * as movies from "../../../lib/functions/movies.js";

export async function load({ fetch, params }) {
  let actor = await movies.getActor(fetch, params.id);
  let credits = await movies.getActorMovies(fetch, params.id);
  actor.credits = credits.cast;
  return actor;
}
