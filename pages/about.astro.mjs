import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_3hC_CpjB.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DEu_Ck5y.mjs';
/* empty css                                  */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "About Me", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="about-header" data-astro-cid-kh7btl4r> <div class="header-content" data-astro-cid-kh7btl4r> <h1 class="title" data-astro-cid-kh7btl4r>About Me</h1> <p class="subtitle" data-astro-cid-kh7btl4r>Industrial Engineer & Tech Enthusiast</p> </div> </div> <main class="container" data-astro-cid-kh7btl4r> <section class="about-section" data-astro-cid-kh7btl4r> <div class="about-grid" data-astro-cid-kh7btl4r> <div class="about-content" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>My Journey</h2> <p data-astro-cid-kh7btl4r>
I'm a passionate Full Stack Developer with a keen interest in creating beautiful and functional web applications. 
            My journey in tech has been driven by a constant desire to learn and grow, always staying up-to-date with the latest 
            technologies and best practices.
</p> <h2 data-astro-cid-kh7btl4r>What I Do</h2> <p data-astro-cid-kh7btl4r>
I specialize in building modern web applications using cutting-edge technologies. My expertise includes:
</p> <ul class="skills-list" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>Frontend Development (React, Vue, Astro)</li> <li data-astro-cid-kh7btl4r>Backend Development (Node.js, Python)</li> <li data-astro-cid-kh7btl4r>Database Design & Management</li> <li data-astro-cid-kh7btl4r>UI/UX Design Principles</li> <li data-astro-cid-kh7btl4r>Responsive Web Design</li> </ul> </div> <div class="about-image" data-astro-cid-kh7btl4r> <div class="image-container" data-astro-cid-kh7btl4r> <!-- Replace with your image --> <div class="placeholder-image" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>Your Photo</span> </div> </div> </div> </div> </section> <section class="experience-section" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Professional Experience</h2> <div class="timeline" data-astro-cid-kh7btl4r> <div class="timeline-item" data-astro-cid-kh7btl4r> <div class="timeline-content" data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>Senior Developer</h3> <p class="company" data-astro-cid-kh7btl4r>Tech Company</p> <p class="date" data-astro-cid-kh7btl4r>2022 - Present</p> <p data-astro-cid-kh7btl4r>Leading development of enterprise applications and mentoring junior developers.</p> </div> </div> <div class="timeline-item" data-astro-cid-kh7btl4r> <div class="timeline-content" data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>Full Stack Developer</h3> <p class="company" data-astro-cid-kh7btl4r>Digital Agency</p> <p class="date" data-astro-cid-kh7btl4r>2020 - 2022</p> <p data-astro-cid-kh7btl4r>Developed and maintained multiple client projects using modern web technologies.</p> </div> </div> </div> </section> </main> ` })} `;
}, "C:/Users/MACARENA/flaky-cloud/src/pages/about.astro", void 0);

const $$file = "C:/Users/MACARENA/flaky-cloud/src/pages/about.astro";
const $$url = "/Myblog/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
