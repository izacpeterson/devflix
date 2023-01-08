import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../../chunks/index.js";
import { M as MovieCard } from "../../../../chunks/MovieCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><h1 class="${"text-2xl"}">${escape(data.name)}</h1>
  <div>${escape(data.birthday)}</div>
  <img src="${"https://image.tmdb.org/t/p/w500/" + escape(data.profile_path, true)}"${add_attribute("alt", data.name, 0)} class="${"w-1/3"}">
  <p>${escape(data.biography)}</p>
  <h2 class="${"text-2xl"}">Movies</h2>
  <ul class="${"flex flex-wrap flex-col h-96 overflow-y-auto"}">${each(data.credits, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}</ul></div>`;
});
export {
  Page as default
};
