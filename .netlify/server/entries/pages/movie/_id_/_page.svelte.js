import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../../chunks/index.js";
const ActorCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { actor } = $$props;
  if ($$props.actor === void 0 && $$bindings.actor && actor !== void 0)
    $$bindings.actor(actor);
  return `<a href="${"/actor/" + escape(actor.id, true)}" class="${"w-1/3 m-2"}"><img src="${"https://image.tmdb.org/t/p/w500/" + escape(actor.profile_path, true)}"${add_attribute("alt", actor.name, 0)}>
  <h2>${escape(actor.name)}</h2>
  <h3 class="${"text-xs"}">${escape(actor.character)}</h3></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"p-4"}"><h1 class="${"text-2xl"}">${escape(data.title)}</h1>
  <div class="${"flex flex-col items-start"}"><div class="${"flex py-4"}"><img src="${"https://image.tmdb.org/t/p/w500/" + escape(data.poster_path, true)}"${add_attribute("alt", data.title, 0)} class="${"w-1/3"}">
      <div class="${"px-4 flex flex-col"}"><span>Release Date: ${escape(data.release_date)}</span>
        <span>Runtime: ${escape(data.runtime)} min.</span>
        <span>Revenue: $${escape(new Intl.NumberFormat().format(data.revenue))}</span>
        <ul class="${"flex flex-col"}">Genres:
          ${each(data.genres, (genre) => {
    return `<li class="${"px-4"}">${escape(genre.name)}</li>`;
  })}</ul></div></div>
    <div class="${"flex flex-col"}"><p>${escape(data.overview)}</p></div>
    <div class="${"mt-4"}"><h2 class="${"text-2xl"}">Cast</h2>
      <ul class="${"flex flex-wrap flex-col h-72 overflow-y-auto"}">${each(data.credits.cast, (actor) => {
    return `${validate_component(ActorCard, "ActorCard").$$render($$result, { actor }, {}, {})}`;
  })}</ul></div></div></div>`;
});
export {
  Page as default
};
