import { _ as _page$1 } from '../chunks/post-1_DNu84bEs.mjs';
import { _ as _page$2 } from '../chunks/post-2_daMEWgDN.mjs';
import { _ as _page$3 } from '../chunks/post-3_CsXrwvAi.mjs';
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_se7OELUy.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D86u8Nqk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://Macarena-g.github.io");
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = Object.values([_page$1,_page$2,_page$3]);
  const pageTitle = "My Astro Learning Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </ul> ` })}`;
}, "C:/Users/MACARENA/flaky-cloud/src/pages/blog.astro", void 0);

const $$file = "C:/Users/MACARENA/flaky-cloud/src/pages/blog.astro";
const $$url = "/Myblog/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
