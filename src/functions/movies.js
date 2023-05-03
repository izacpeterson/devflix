import { getFavorites } from "./firebase";
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "26e99d56c670a23e5b53252a41402ce1";

export async function getPopularMovies() {
  const url = `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getMovieDetails(movieID) {
  const url = `${baseUrl}/movie/${movieID}?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  //get movie credits
  const credits = await getMovieCredits(movieID);
  data.credits = credits;

  //get movie watch providers
  const watchProviders = await getWatchProviders(movieID);
  data.watchProviders = watchProviders.results.US;

  return data;
}

export async function getMovieCredits(movieID) {
  const url = `${baseUrl}/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getActorDetails(actorID) {
  const url = `${baseUrl}/person/${actorID}?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  //get actor credits
  const credits = await getActorCredits(actorID);
  data.credits = credits;

  return data;
}

export async function getActorCredits(actorID) {
  const url = `${baseUrl}/person/${actorID}/movie_credits?api_key=${apiKey}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getTopMovies() {
  const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getWatchProviders(movieID) {
  const url = `${baseUrl}/movie/${movieID}/watch/providers?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function favoriteGenres() {
  //get favorites
  const favorites = await getFavorites();
  //get movie details for each favorite
  const movies = await Promise.all(
    favorites.map(async (movie) => {
      let movieDetails = await getMovieDetails(movie.id);
      return movieDetails;
    })
  );

  //create an array of generes from all movies, add a counter for each time a genre appears
  let genres = [];
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      let genreIndex = genres.findIndex((g) => g.id === genre.id);
      if (genreIndex === -1) {
        genres.push({ ...genre, count: 1 });
      } else {
        genres[genreIndex].count++;
      }
    });
  });

  genres;

  //combine genres into a comma seperated string
  let genreString = "";
  genres.forEach((genre) => {
    genreString += `${genre.id}|`;
  });
  genreString;

  //sort genres by count
  genres.sort((a, b) => b.count - a.count);

  return genres;
}

export async function discoverMovie(certification, genre) {
  const url = `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&certification_country=US&certification=${certification}`;
  url;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getCertifications() {
  const url = `${baseUrl}/certification/movie/list?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  "CERT: ", data.certifications.US;
  return data;
}

export async function getUpcommingMovies() {
  const url = `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function nowPlayingMovies() {
  const url = `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
