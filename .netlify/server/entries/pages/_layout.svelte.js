import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"bg-zinc-800 p-4"}"><a href="${"/"}"><h1 class="${"text-4xl text-red-600"}">DevFlix</h1></a></header>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
