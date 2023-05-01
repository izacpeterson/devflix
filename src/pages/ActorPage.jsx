import { useParams } from "react-router-dom";
import { getActorDetails } from "../functions/movies";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function ActorPage() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  useEffect(() => {
    async function getActor() {
      const actorData = await getActorDetails(id);
      console.log(actorData);
      setActor(actorData);
    }
    getActor();
  }, [id]);
  return (
    <div className="p-2">
      {actor ? (
        <div className="flex flex-col items-center justify-center  rounded-lg ">
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className="rounded-lg shadow-md w-2/3 mb-2" />
          <h2 className="text-xl font-bold mb-2">{actor.name}</h2>
          <p className="text-gray-200 text-center mb-4">{actor.biography}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-200 font-bold">Birthday:</p>
              <p className="text-gray-200">{actor.birthday}</p>
            </div>
            <div>
              <p className="text-gray-200 font-bold">Place of Birth:</p>
              <p className="text-gray-200">{actor.place_of_birth}</p>
            </div>
          </div>
          <p>Known For</p>
          <div className="flex overflow-x-auto w-full">
            <ul className="flex">
              {actor.credits.cast.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {/* <pre>{JSON.stringify(actor, null, 2)}</pre> */}
    </div>
  );
}
