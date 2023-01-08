const baseURL = "https://api.themoviedb.org/3/";
const key = "?api_key=48a07cab58fee3df08e3f28be6f3bdbb";
async function getPopular() {
  let url = baseURL + "/movie/popular" + key;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();
  return jsonData;
}
async function getMovie(fetch2, id) {
  let url = baseURL + "/movie/" + id + key;
  let rawData = await fetch2(url);
  let jsonData = await rawData.json();
  return jsonData;
}
async function getMovieVideos(fetch2, id) {
  let url = `${baseURL}movie/${id}/videos${key}`;
  let rawData = await fetch2(url);
  let jsonData = await rawData.json();
  let videoList = jsonData.results.filter((vid) => {
    if (vid.type == "Trailer") {
      return vid;
    }
  });
  return videoList;
}
async function getMovieCredits(fetch2, id) {
  let url = `${baseURL}movie/${id}/credits${key}`;
  let rawData = await fetch2(url);
  let jsonData = await rawData.json();
  return jsonData;
}
async function getActor(fetch2, id) {
  let url = `${baseURL}person/${id}${key}`;
  let rawData = await fetch2(url);
  let jsonData = await rawData.json();
  return jsonData;
}
async function getActorMovies(fetch2, id) {
  let url = `${baseURL}person/${id}/movie_credits${key}`;
  let rawData = await fetch2(url);
  let jsonData = await rawData.json();
  return jsonData;
}
export {
  getActor as a,
  getActorMovies as b,
  getMovie as c,
  getMovieVideos as d,
  getMovieCredits as e,
  getPopular as g
};
