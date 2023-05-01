import { saveFavorite, isFavorite } from "../functions/firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartSolid, faShareNodes } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
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
    <div className="w-[200px] flex flex-col justify-between text-center items-center rounded overflow-hidden shadow-lg mb-5 mx-2 bg-zinc-800">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <span className=" h-full w-full text-left px-4">{movie.title}</span>
      </Link>
      <div className="flex">
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            setFavorite(!favorite);
            saveFavorite(movie.id);
          }}
        >
          <FontAwesomeIcon icon={favorite ? faHeartSolid : faHeart} />
        </button>
        <button className="btn btn-primary m-2">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="btn btn-primary m-2" onClick={handleShareClick}>
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
      </div>
    </div>
  );
}
