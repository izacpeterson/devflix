import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component } from "../../chunks/index.js";
import { M as MovieCard } from "../../chunks/MovieCard.js";
import { g as getPopular } from "../../chunks/movies.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let popularMovies = [];
  let searchQuery = "";
  async function getPopular$1() {
    popularMovies = await getPopular();
    popularMovies = popularMovies.results;
    console.log(popularMovies[0]);
  }
  getPopular$1();
  return `<form class="${"w-full p-4 flex justify-center "}"><label><input type="${"text"}" class="${"p-2 bg-zinc-800"}" placeholder="${"Query"}"${add_attribute("value", searchQuery, 0)}></label>
  <button class="${"bg-red-600 p-2"}">Search</button></form>

<ul class="${"flex flex-wrap items-start justify-center"}">${`${each(popularMovies, (movies) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie: movies }, {}, {})}`;
  })}`}</ul>`;
});
export {
  Page as default
};
