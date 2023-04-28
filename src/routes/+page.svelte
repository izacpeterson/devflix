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
    randomNotification();
  }
  function checkSearch() {
    // if (searchQuery == "") {
    //   searchView = false;
    // } else {
    //   searchView = true;
    // }
  }

  function randomNotification() {
    const randomItem = Math.floor(Math.random());
    const notifTitle = "test";
    const notifBody = `Created by `;
    const notifImg = `https://image.tmdb.org/t/p/w500//r5DbPQNmPJYYJC0nv6di13Y2dB3.jpg`;
    const options = {
      body: notifBody,
      icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
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
