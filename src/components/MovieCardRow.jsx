import MovieCard from "./MovieCard";

export default function MovieCardRow({ movies, title }) {
  return (
    <div className="p-2">
      <h2 className="text-xl capitalize">{title} Movies</h2>
      <div className="flex overflow-x-auto">
        <ul className="flex lg:flex-wrap justify-center">
          {movies.map((movie) => (
            //   <li key={movie.id}>{movie.title}</li>
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}
