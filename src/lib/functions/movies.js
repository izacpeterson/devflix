const baseURL = "https://api.themoviedb.org/3/";
const key = "?api_key=48a07cab58fee3df08e3f28be6f3bdbb";

export async function getPopular() {
  let url = baseURL + "/movie/popular" + key;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();
  return jsonData;
}

export async function getMovie(fetch, id) {
  let url = baseURL + "/movie/" + id + key;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();
  return jsonData;
}

//movie/{movie_id}/credits

export async function getMovieVideos(fetch, id) {
  let url = `${baseURL}movie/${id}/videos${key}`;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();

  let videoList = jsonData.results.filter((vid) => {
    if (vid.type == "Trailer") {
      return vid;
    }
  });

  return videoList;
}

export async function getMovieCredits(fetch, id) {
  let url = `${baseURL}movie/${id}/credits${key}`;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();

  return jsonData;
}

///person/{person_id}
export async function getActor(fetch, id) {
  let url = `${baseURL}person/${id}${key}`;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();

  return jsonData;
}

///person/{person_id}/movie_credits
export async function getActorMovies(fetch, id) {
  let url = `${baseURL}person/${id}/movie_credits${key}`;
  let rawData = await fetch(url);
  let jsonData = await rawData.json();

  return jsonData;
}
