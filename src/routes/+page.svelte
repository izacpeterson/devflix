<script>
  import MovieCard from "../lib/components/MovieCard.svelte";
  import * as movies from "../lib/functions/movies.js";

  let popularMovies = [];
  async function getPopular() {
    popularMovies = await movies.getPopular();
    popularMovies = popularMovies.results;
    console.log(popularMovies[0]);
  }
  getPopular();
</script>

<ul class="flex flex-wrap items-start justify-center">
  {#each popularMovies as movies}
    <MovieCard movie={movies} />
  {/each}
</ul>
