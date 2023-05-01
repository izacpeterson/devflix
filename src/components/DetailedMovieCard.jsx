import { saveFavorite, isFavorite } from "../functions/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DetailedMovieCard({ movie }) {
  isFavorite(movie.id);
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    async function getFavorite() {
      const favorite = await isFavorite(movie.id);
      setFavorite(favorite);
    }
    getFavorite();
  }, []);

  const handleShareClick = async () => {
    try {
      await navigator.share({
        title: movie.title,
        text: `Check out ${movie.title}!`,
        url: `https://example.com/movie/${movie.id}`,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="m-4 max-w-screen-lg flex flex-col md:flex-row bg-zinc-800 rounded-lg overflow-hidden shadow-lg mb-5">
      <Link to={`/movie/${movie.id}`} className="md:w-2/5">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="object-cover w-full h-full" />
      </Link>
      <div className="md:w-3/5 p-4 flex flex-col justify-between">
        <Link to={`/movie/${movie.id}`}>
          <h2 className="text-3xl font-bold">{movie.title}</h2>
          <p className="text-gray-400">{movie.release_date}</p>
          {/* <p className="text-gray-400">{movie.genres.map((genre) => genre.name).join(", ")}</p> */}
          <p className="mt-4">{movie.overview}</p>
        </Link>
        <div className="flex mt-4">
          <button
            className="btn btn-primary m-2"
            onClick={() => {
              setFavorite(!favorite);
              saveFavorite(movie.id);
            }}
          >
            <FontAwesomeIcon icon={favorite ? faHeartSolid : faHeart} />
            <span className="ml-2">{favorite ? "Remove from Favorites" : "Add to Favorites"}</span>
          </button>
          <button className="btn btn-primary m-2">
            <FontAwesomeIcon icon={faShareNodes} />
            <span className="ml-2">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
