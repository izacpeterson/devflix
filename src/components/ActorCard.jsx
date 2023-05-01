import { Link } from "react-router-dom";

export default function ActorCard(actor) {
  return (
    <Link to={`/actor/${actor.actor.id}`} className="w-[200px] flex flex-col items-center">
      <img src={`https://image.tmdb.org/t/p/w500${actor.actor.profile_path}`} alt={actor.actor.name} className="rounded-lg shadow-md w-2/3 mb-2" />
      <h2 className="text-xl font-bold mb-2">{actor.actor.name}</h2>
      <p className="text-gray-200 text-center mb-4">{actor.actor.character}</p>
    </Link>
  );
}
