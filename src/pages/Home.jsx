import { getPopularMovies, getUpcommingMovies, getTopMovies } from "../functions/movies";
import { useState, useEffect } from "react";

import MovieCardRow from "../components/MovieCardRow";

export default function Home() {
  const options = ["popular", "upcomming", "top rated", "now_playing"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [movies, setMovies] = useState([]);

  async function handleSelect() {
    console.log(selectedOption);
    switch (selectedOption) {
      case "popular":
        const popularMoviesData = await getPopularMovies();
        setMovies(popularMoviesData.results);
        break;
      case "upcomming":
        const upcommingMoviesData = await getUpcommingMovies();
        setMovies(upcommingMoviesData.results);
        break;
      case "top rated":
        const topMoviesData = await getTopMovies();
        setMovies(topMoviesData.results);
      default:
        break;
    }
  }

  useEffect(() => {
    handleSelect();
  }, [selectedOption]);

  return (
    <main>
      <select
        onChange={(e) => {
          setSelectedOption(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <MovieCardRow movies={movies} title={selectedOption} />
    </main>
  );
}
