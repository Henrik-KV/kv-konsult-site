"use client";

import { useEffect, useRef, useState } from "react";

const storySteps = [
  {
    label: "En vanlig arbetsdag",
    title: "Allt finns. Inget hänger ihop.",
    text: "Ett mejl innehåller frågan, mötesanteckningarna innehåller beslutet och rapporten innehåller underlaget. Ingen vet säkert vem som tar nästa steg.",
  },
  {
    label: "Avgränsa",
    title: "Börja med ett arbete, inte med ett verktyg.",
    text: "Vi väljer en återkommande situation, beskriver vad som faktiskt tar tid och sätter tydliga gränser för data, ansvar och kvalitet.",
  },
  {
    label: "Gör användbart",
    title: "Kunskap och lösning utvecklas tillsammans.",
    text: "Teamet tränar på sina egna uppgifter. Vid behov bygger vi flödet, integrationen eller gränssnittet som saknas runt standardverktygen.",
  },
  {
    label: "Följ upp",
    title: "Ett arbetssätt som går att använda på måndag.",
    text: "Ni får ett dokumenterat flöde, tydliga roller och ett nästa test. Det kan vara en tränad grupp, ett beslutat arbetssätt eller ett fungerande digitalt verktyg.",
  },
] as const;

export default function ClarityStory() {
  const [active, setActive] = useState(0);
  const layoutRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    layoutRef.current?.classList.add("is-enhanced");
    const observers = refs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(index); },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 },
      );
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div ref={layoutRef} className="story-layout">
      <div className="story-stage" data-active={active} aria-hidden="true">
        <div className="story-stage-header"><span>ARBETSDAG / 08:12</span><span>KV / FLÖDE 01</span></div>
        <div className="story-canvas">
          <div className="story-chip chip-mail">Mejl<br/><strong>Ny fråga</strong></div>
          <div className="story-chip chip-note">Möte<br/><strong>Tre beslut</strong></div>
          <div className="story-chip chip-report">Rapport<br/><strong>24 sidor</strong></div>
          <svg viewBox="0 0 600 360" preserveAspectRatio="none">
            <path className="story-path path-one" d="M120 70 C240 70 240 180 330 180" />
            <path className="story-path path-two" d="M120 176 C240 176 240 180 330 180" />
            <path className="story-path path-three" d="M120 286 C240 286 240 180 330 180" />
            <path className="story-path path-output" d="M330 180 H480" />
          </svg>
          <div className="story-node"><span>01</span><strong>Avgränsa</strong><small>Mål · data · ansvar</small></div>
          <div className="story-output"><span>REDO</span><strong>Tydligt arbetssätt</strong><small>Ägare · underlag · nästa test</small></div>
        </div>
        <div className="story-progress"><span style={{ width: `${(active + 1) * 25}%` }} /></div>
      </div>

      <ol className="story-steps">
        {storySteps.map((step, index) => (
          <li key={step.label} ref={(node) => { refs.current[index] = node; }} className={active === index ? "is-active" : undefined}>
            <p className="eyebrow">0{index + 1} · {step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
