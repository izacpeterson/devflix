<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  export let data;
  console.log(data);
</script>

<div>
  <h1 class="text-2xl">{data.name}</h1>
  <div>{data.birthday}</div>
  <img src="https://image.tmdb.org/t/p/w500/{data.profile_path}" alt={data.name} class="w-1/3" />
  <p>{data.biography}</p>
  <h2 class="text-2xl">Movies</h2>
  <ul class="flex flex-wrap flex-col h-96 overflow-y-auto">
    {#each data.credits as movie}
      <MovieCard {movie} />
    {/each}
  </ul>
</div>
