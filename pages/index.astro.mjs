import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderTemplate, d as addAttribute, f as renderScript, r as renderComponent } from '../chunks/astro/server_3hC_CpjB.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DEu_Ck5y.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Astro = createAstro();
const $$InteractiveCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InteractiveCard;
  const { title, description, icon, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="interactive-card" data-astro-cid-r2kuheb2> ${icon && renderTemplate`<div class="icon" data-astro-cid-r2kuheb2>${icon}</div>`} <h3 data-astro-cid-r2kuheb2>${title}</h3> <p data-astro-cid-r2kuheb2>${description}</p> ${link && renderTemplate`<a${addAttribute(link, "href")} class="card-link" data-astro-cid-r2kuheb2>
Learn More
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r2kuheb2> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-r2kuheb2></line> <polyline points="12 5 19 12 12 19" data-astro-cid-r2kuheb2></polyline> </svg> </a>`} </div> `;
}, "C:/Users/MACARENA/flaky-cloud/src/components/InteractiveCard.astro", void 0);

const $$SkillsSection = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    { name: "Python", level: 70, color: "#E34F26" },
    { name: "SQL", level: 85, color: "#1572B6" },
    { name: "PostgreSQL", level: 80, color: "#F7DF1E" },
    { name: "Numpy", level: 75, color: "#61DAFB" },
    { name: "Pandas", level: 70, color: "#FF5D01" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="skills-section" data-astro-cid-ywmogu3j> <h2 data-astro-cid-ywmogu3j>My Skills</h2> <div class="skills-grid" data-astro-cid-ywmogu3j> ${skills.map((skill) => renderTemplate`<div class="skill-card" data-astro-cid-ywmogu3j> <div class="skill-header" data-astro-cid-ywmogu3j> <span class="skill-name" data-astro-cid-ywmogu3j>${skill.name}</span> <span class="skill-level" data-astro-cid-ywmogu3j>${skill.level}%</span> </div> <div class="progress-bar" data-astro-cid-ywmogu3j> <div class="progress-fill"${addAttribute(`width: ${skill.level}%; background-color: ${skill.color || "var(--primary-color)"}`, "style")} data-astro-cid-ywmogu3j></div> </div> </div>`)} </div> </section>  ${renderScript($$result, "C:/Users/MACARENA/flaky-cloud/src/components/SkillsSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/MACARENA/flaky-cloud/src/components/SkillsSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Macarena Guzman";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> <h1 class="title" data-astro-cid-j7pv25f6>${pageTitle}</h1> <p class="subtitle" data-astro-cid-j7pv25f6>Welcome to my portfolio</p> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hi", "Hola", "Oi"], "client:component-hydration": "load", "client:component-path": "C:/Users/MACARENA/flaky-cloud/src/components/Greeting", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </section> <div class="cards-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "InteractiveCard", $$InteractiveCard, { "title": "About Me", "description": "Learn more about my journey, experience, and what drives me as a Data Analyst.", "icon": "\u{1F44B}", "link": "/about", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "InteractiveCard", $$InteractiveCard, { "title": "My Blog", "description": "Read about my experiences, notes, and projects on Data Science.", "icon": "\u{1F4DD}", "link": "/blog", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "InteractiveCard", $$InteractiveCard, { "title": "Projects", "description": "Explore the projects I've worked on and my contributions to the tech community.", "icon": "\u{1F680}", "link": "/projects", "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "SkillsSection", $$SkillsSection, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/MACARENA/flaky-cloud/src/pages/index.astro", void 0);

const $$file = "C:/Users/MACARENA/flaky-cloud/src/pages/index.astro";
const $$url = "/Myblog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
