"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-intro-grid",
  ".delivery-list > li",
  ".audience-grid > article",
  ".work-grid",
  ".team-list > li",
  ".answer-grid > article",
  ".process-list > li",
  ".service-system > li",
  ".choose-list > li",
  ".training-overview > div",
  ".training-details > details",
  ".implementation-list > li",
  ".decision-list > li",
  ".principle-grid > li",
  ".case-grid",
  ".about-proof-grid",
  ".contact-grid",
].join(",");

export default function ScrollDirector() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    elements.forEach((element, index) => {
      element.classList.add("scroll-directed");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
