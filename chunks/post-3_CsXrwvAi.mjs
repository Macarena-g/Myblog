import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_se7OELUy.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>";

				const frontmatter = {"title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"The Astro logo on a dark background with rainbow rays."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "C:/Users/MACARENA/flaky-cloud/src/pages/posts/post-3.md";
				const url = "/Myblog/posts/post-3";
				function rawContent() {
					return "   \r\n                         \r\n                     \r\n                                                                                \r\n      \r\n                                                    \r\n                                                                 \r\n                   \r\n                                                              \r\n   \r\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
