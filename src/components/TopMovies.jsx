import { getTopMovies, discoverMovie } from "../functions/movies";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function TopMovies() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      //   const movies = await getTopMovies();
      const movies = await discoverMovie();
      setTopMovies(movies.results);
    }
    getMovies();
  }, []);

  return (
    <div className="p-2">
      <h2 className="text-xl">Top Movies</h2>
      <div className="flex overflow-x-auto">
        <ul className="flex">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
