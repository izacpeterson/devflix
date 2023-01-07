<script>
  export let actor;
</script>

<a href="/actor/{actor.id}" class="w-1/3 m-2">
  <img src="https://image.tmdb.org/t/p/w500/{actor.profile_path}" alt={actor.name} />
  <h2>{actor.name}</h2>
  <h3 class="text-xs">{actor.character}</h3>
</a>
