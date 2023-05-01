import { getPopularMovies } from "../functions/movies";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const movies = await getPopularMovies();
      setPopularMovies(movies.results);
    }
    getMovies();
  }, []);

  return (
    <div className="p-2">
      <h2 className="text-xl">Popular Movies</h2>
      <div className="flex overflow-x-auto">
        <ul className="flex">
          {popularMovies.map((movie) => (
            //   <li key={movie.id}>{movie.title}</li>
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
