import { a as getActor, b as getActorMovies } from "../../../../chunks/movies.js";
async function load({ fetch, params }) {
  let actor = await getActor(fetch, params.id);
  let credits = await getActorMovies(fetch, params.id);
  actor.credits = credits.cast;
  return actor;
}
export {
  load
};
