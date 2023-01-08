<script>
  import MovieCard from "../lib/components/MovieCard.svelte";
  import * as movies from "../lib/functions/movies.js";

  let popularMovies = [];
  let searchQuery = "";
  let searchView = false;
  let searchResults = [];

  async function getPopular() {
    popularMovies = await movies.getPopular();
    popularMovies = popularMovies.results;
    console.log(popularMovies[0]);
  }
  getPopular();

  async function search() {
    // alert(searchQuery);
    searchResults = await movies.search(searchQuery);
    popularMovies = searchResults;
  }
  function checkSearch() {
    // if (searchQuery == "") {
    //   searchView = false;
    // } else {
    //   searchView = true;
    // }
  }
</script>

<form on:submit={search} class="w-full p-4 flex justify-center ">
  <label><input bind:value={searchQuery} on:change={checkSearch} type="text" class="p-2 bg-zinc-800" placeholder="Query" /></label>
  <button class="bg-red-600 p-2">Search</button>
</form>

<ul class="flex flex-wrap items-start justify-center">
  {#if !searchView}
    {#each popularMovies as movies}
      <MovieCard movie={movies} />
    {/each}
  {/if}
</ul>
