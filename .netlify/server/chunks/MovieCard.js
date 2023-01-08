import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  return `<a href="${"/movie/" + escape(movie.id, true)}" class="${"w-40 m-2 bg-zinc-800"}"><img src="${"https://image.tmdb.org/t/p/w500/" + escape(movie.poster_path, true)}"${add_attribute("alt", movie.title, 0)}>
  <div class="${"p-2"}"><h1>${escape(movie.title)}</h1>
    <span class="${"text-sm"}">${escape(movie.release_date)}</span></div></a>`;
});
export {
  MovieCard as M
};
