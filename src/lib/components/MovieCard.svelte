<script>
  export let movie;
</script>

<a href="/movie/{movie.id}" class="w-40 m-2 bg-zinc-800">
  <img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt={movie.title} />
  <div class="p-2">
    <h1>{movie.title}</h1>
    <span class="text-sm">{movie.release_date}</span>
  </div>
</a>
