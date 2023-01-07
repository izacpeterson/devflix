<script>
  import ActorCard from "$lib/components/ActorCard.svelte";
  export let data;
</script>

<div class="p-4">
  <h1 class="text-2xl">{data.title}</h1>
  <div class="flex flex-col items-start">
    <div class="flex py-4">
      <img src="https://image.tmdb.org/t/p/w500/{data.poster_path}" alt={data.title} class="w-1/3" />
      <div class="px-4 flex flex-col">
        <span>Release Date: {data.release_date}</span>
        <span>Runtime: {data.runtime} min.</span>
        <span>Revenue: ${new Intl.NumberFormat().format(data.revenue)}</span>
        <ul class="flex flex-col">
          Genres:
          {#each data.genres as genre}
            <li class="px-4">{genre.name}</li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="flex flex-col">
      <p>{data.overview}</p>
    </div>
    <div class="mt-4">
      <h2 class="text-2xl">Cast</h2>
      <ul class="flex flex-wrap flex-col h-72 overflow-y-auto">
        {#each data.credits.cast as actor}
          <ActorCard {actor} />
        {/each}
      </ul>
    </div>
  </div>
</div>
