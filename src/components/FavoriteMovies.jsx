import { useState, useEffect } from "react";
import { getFavorites } from "../functions/firebase";
import MovieCard from "./MovieCard";

export default function FavoriteMovies() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const favoritesData = await getFavorites();
      setFavorites(favoritesData);
    }
    fetchFavorites();
  }, []);

  return (
    <div className="p-2 flex flex-col items-center">
      <h2 className="text-xl">Favorite Movies</h2>
      <ul className="flex flex-wrap justify-evenly">
        {favorites.map((movie) => (
          //   <li key={movie.id}>{movie.title}</li>
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
