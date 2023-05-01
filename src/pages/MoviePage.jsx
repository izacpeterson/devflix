import { useParams } from "react-router-dom";
import { getMovieDetails } from "../functions/movies";
import { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard";
export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function getMovie() {
      const movieData = await getMovieDetails(id);
      console.log(movieData);
      setMovie(movieData);
    }
    getMovie();
  }, [id]);
  return (
    <div className="p-2">
      {movie ? (
        <div className="flex flex-col items-center justify-center  rounded-lg ">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg shadow-md w-2/3 mb-2" />
          <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-200 text-center mb-4">{movie.overview}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-200 font-bold">Release date:</p>
              <p className="text-gray-200">{movie.release_date}</p>
            </div>
            <div>
              <p className="text-gray-200 font-bold">Runtime:</p>
              <p className="text-gray-200">{movie.runtime} mins</p>
            </div>
          </div>
          <p>Credits</p>
          <div className="flex overflow-x-auto w-full">
            <ul className="flex">
              {movie.credits.cast.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
    </div>
  );
}
