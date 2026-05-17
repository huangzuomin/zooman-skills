const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.add("js");
document.documentElement.classList.toggle("is-reduced-motion", reduceMotion);

const revealItems = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const navTargets = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );
  navTargets.forEach((target) => navObserver.observe(target));
}

const steps = document.querySelectorAll("[data-step]");
const visualTargets = document.querySelectorAll("[data-visual-target]");

function setActiveStep(id) {
  steps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === id));
  visualTargets.forEach((target) => target.classList.toggle("is-active", target.dataset.visualTarget === id));
}

if (steps.length > 0) {
  setActiveStep(steps[0].dataset.step);
}

if (!reduceMotion && "IntersectionObserver" in window) {
  const stepObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveStep(entry.target.dataset.step);
      });
    },
    { rootMargin: "-40% 0px -40% 0px", threshold: 0.01 }
  );
  steps.forEach((step) => stepObserver.observe(step));
}
