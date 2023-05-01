import { getFavorites } from "./firebase";

export async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getMovieDetails(movieID) {
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US`;
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
  const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getActorDetails(actorID) {
  const url = `https://api.themoviedb.org/3/person/${actorID}?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  //get actor credits
  const credits = await getActorCredits(actorID);
  data.credits = credits;

  return data;
}

export async function getActorCredits(actorID) {
  const url = `https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getTopMovies() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US&page=1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function getWatchProviders(movieID) {
  const url = `https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=26e99d56c670a23e5b53252a41402ce1`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function generateRecommendations() {
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

  console.log(genres);

  //combine genres into a comma seperated string
  let genreString = "";
  genres.forEach((genre) => {
    genreString += `${genre.id}|`;
  });
  console.log(genreString);

  return genres;
}

export async function discoverMovie(certification, genre) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=26e99d56c670a23e5b53252a41402ce1&language=en-US&include_adult=true&include_video=false&page=1&with_genres=${genre}&certification_country=US&certification=${certification}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();

  //remove movies that are already in favorites
  const favorites = await getFavorites();
  const filteredMovies = data.results.filter((movie) => {
    return !favorites.find((favorite) => favorite.id === movie.id);
  });

  return data;
}

export async function getCertifications() {
  const url = `https://api.themoviedb.org/3/certification/movie/list?api_key=26e99d56c670a23e5b53252a41402ce1`;
  const response = await fetch(url);
  const data = await response.json();

  console.log("CERT: ", data.certifications.US);
  return data;
}

discoverMovie();
getCertifications();

// generateRecommendations();
