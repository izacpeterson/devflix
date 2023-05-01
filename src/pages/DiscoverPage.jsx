import { useState, useEffect } from "react";
import { discoverMovie } from "../functions/movies";
import MovieCard from "../components/MovieCard";
import DetailedMovieCard from "../components/DetailedMovieCard";

const genreList = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export default function DiscoverPage() {
  const [certification, setCertification] = useState(localStorage.getItem("certification") || "G");
  const [genre, setGenre] = useState(localStorage.getItem("genre") || "");
  const [movies, setMovies] = useState([]);

  async function handleChange() {
    const movies = await discoverMovie(certification, genre);
    console.log(movies);
    setMovies(movies.results);
  }

  useEffect(() => {
    localStorage.setItem("certification", certification);
    localStorage.setItem("genre", genre);
    handleChange();
  }, [certification, genre]); // include dependencies

  return (
    <div>
      <h1>DiscoverPage</h1>
      <select
        value={certification}
        onChange={(e) => {
          setCertification(e.target.value);
        }}
        className="bg-zinc-900 outline-none"
      >
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        {/* <option value="NC-17">NC-17</option> */}
      </select>
      <select
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
        }}
        className="bg-zinc-900 outline-none"
      >
        <option value="">Select a genre</option>
        {genreList.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <ul className="flex flex-col items-center">
        {movies.map((movie) => (
          //   <MovieCard key={movie.id} movie={movie} />
          <DetailedMovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
