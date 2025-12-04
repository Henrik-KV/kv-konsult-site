"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

/* Fokusområden för kommuner */
const focusAreas = [
  {
    id: "digitalt-utanforskap",
    titleWhite: "Digitalt",
    titleAccent: "utanförskap",
    summary: "Minska klyftan bland invånare och medarbetare genom utbildning och förståelse.",
    fullContent: {
      description: "Många invånare och medarbetare känner osäkerhet inför digital teknik och AI. Vi hjälper er att skapa trygghet och kompetens genom anpassade utbildningar.",
      points: [
        "Kartläggning av digitala hinder i organisationen",
        "Anpassade utbildningar för olika målgrupper",
        "Stöd till medarbetare som känner oro inför AI",
        "Folkbildande insatser för invånare och föreningsliv",
      ],
      link: "/tjanster#workshops",
      linkText: "Se AI-utbildningar",
    },
  },
  {
    id: "effektivare-handlaggning",
    titleWhite: "Effektivare",
    titleAccent: "handläggning",
    summary: "AI kan automatisera rutinuppgifter och frigöra tid för det som kräver mänsklig bedömning.",
    fullContent: {
      description: "Handläggare lägger ofta mycket tid på repetitiva uppgifter. Med AI kan ni effektivisera processer och frigöra tid för kvalitativt arbete med invånarna.",
      points: [
        "Automatiserad sammanfattning av ärenden",
        "AI-stöd vid informationssökning",
        "Snabbare svar på vanliga frågor",
        "Kvalitetssäkring av texter och beslut",
      ],
      link: "/tjanster#microsoft365",
      linkText: "Se Microsoft 365-paket",
    },
  },
  {
    id: "battre-beslutsunderlag",
    titleWhite: "Bättre",
    titleAccent: "beslutsunderlag",
    summary: "AI-verktyg kan sammanfatta, analysera och presentera data snabbare än någonsin.",
    fullContent: {
      description: "Politiker och tjänstepersoner behöver snabbt kunna ta till sig stora mängder information. AI hjälper er att analysera och sammanfatta underlag effektivt.",
      points: [
        "Sammanfattning av utredningar och rapporter",
        "Analys av remissvar och enkätsvar",
        "Omvärldsbevakning och trendanalys",
        "Stöd vid budget- och verksamhetsplanering",
      ],
      link: "/tjanster#nulagesanalys",
      linkText: "Se nulägesanalys",
    },
  },
  {
    id: "stod-till-namnder",
    titleWhite: "Stöd till",
    titleAccent: "nämnder & politiker",
    summary: "AI-introduktion för förtroendevalda – vad innebär det för kommunen?",
    fullContent: {
      description: "Förtroendevalda behöver förstå AI:s möjligheter och risker för att kunna fatta kloka beslut. Vi erbjuder koncentrerade genomgångar anpassade för nämnder.",
      points: [
        "Vad är AI och hur påverkar det kommunen?",
        "Möjligheter och risker med AI i offentlig sektor",
        "Hur fattar vi kloka beslut om AI?",
        "Exempel från andra kommuner och regioner",
      ],
      link: "/kontakt",
      linkText: "Boka presentation för nämnd",
    },
  },
];

/* Expanderbart fokusområde-kort */
function FocusAreaCard({ area }: { area: typeof focusAreas[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
        expanded
          ? "border-sky-500/40 bg-slate-800/70 shadow-xl shadow-sky-500/20"
          : "border-white/10 bg-slate-800/40 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/15"
      }`}
    >
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold leading-tight text-white lg:whitespace-nowrap">
          {area.titleWhite} <span className="text-sky-400">{area.titleAccent}</span>
        </h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{area.summary}</p>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-sky-400 transition-all duration-300 hover:text-sky-300 hover:gap-3"
        >
          {expanded ? "Visa mindre" : "Läs mer"}
          <span className={`text-lg transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Expanderat innehåll */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4 border-t border-white/10 pt-4">
            <p className="text-slate-400">{area.fullContent.description}</p>
            <ul className="space-y-2">
              {area.fullContent.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-xs">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={area.fullContent.link}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-500 hover:scale-105"
            >
              {area.fullContent.linkText}
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KommunerPage() {
  return (
    <main>
      {/* Hero med bild */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video: kommuner-bg.mp4 (byt ut när du har en egen) */}
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" />
        <ScrollIndicator className="bottom-20 sm:bottom-24" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)', textShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}>
                För kommuner & regioner
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                AI som stärker{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  den kommunala verksamheten
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Vi hjälper politiker, nämnder och tjänstepersoner att förstå, testa och tillämpa AI på ett sätt som passar offentlig sektor. Fokus ligger på nytta, trygghet och att minska digitalt utanförskap.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt?type=avstamning"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Boka ett samtal
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/tjanster"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
                >
                  Se alla tjänster
                </Link>
              </div>
            </div>

            {/* Hero-bild istället för ikoner */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-sky-500/30 shadow-2xl" style={{ boxShadow: '0 0 40px rgba(56, 189, 248, 0.3), 0 0 80px rgba(56, 189, 248, 0.15)' }}>
                <Image
                  src="/images/hero-kommun-meeting.jpg"
                  alt="Kommunal ledning i möte"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-sky-500/30 bg-slate-900/80 p-4 backdrop-blur-md shadow-lg shadow-sky-500/10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}>
                        <svg className="h-6 w-6 text-sky-400" style={{ filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-white" style={{ textShadow: '0 0 15px rgba(56, 189, 248, 0.5)' }}>Offentlig sektor</p>
                        <p className="text-sm text-slate-400">Anpassat för kommuner & regioner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-sky-600/20 to-cyan-600/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Fokusområden - klickbara kort */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)', textShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}>
              Fokusområden
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Så skapar AI <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">värde</span> i kommunen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Klicka på ett område för att läsa mer och se relevanta tjänster.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <FocusAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Våra upplägg */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" brightness={1.0} />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span 
              className="inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-cyan-400"
              style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)', textShadow: '0 0 10px rgba(34, 211, 238, 0.5)' }}
            >
              Våra upplägg
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Så kan vi <span className="text-cyan-400">hjälpa</span> er
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Alla upplägg anpassas efter er verksamhet och era behov.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                image: "/images/kommun-service-namnd.jpg",
                title: "AI-introduktion för nämnder och ledning",
                description: "En koncentrerad genomgång för politiker och ledningsgrupper. Vad är AI? Vad innebär det för kommunen? Hur kan vi ta kloka beslut?",
                duration: "2–3 timmar",
              },
              {
                image: "/images/kommun-service-workshop.jpg",
                title: "Workshops för tjänstepersoner",
                description: "Hands-on-utbildning där medarbetare får testa AI-verktyg i praktiken. Vi fokuserar på konkreta arbetsuppgifter och processer.",
                duration: "Halvdag eller heldag",
              },
              {
                image: "/images/min-hero-ai-bild.jpg",
                title: "Nulägesanalys inför AI-satsning",
                description: "Vi kartlägger era processer, identifierar potential och levererar en handlingsplan som ni kan ta vidare till beslut.",
                duration: "2–4 veckor",
              },
              {
                image: "/images/kommun-service-partner.jpg",
                title: "Löpande AI-stöd",
                description: "Blir er långsiktiga partner i AI-resan. Månadsvis rådgivning, kompetenshöjning och bollplank för att säkerställa resultat.",
                duration: "Löpande avtal",
              },
            ].map((offering, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-800/40 transition-all duration-500 hover:border-cyan-500/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{offering.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {offering.description}
                  </p>
                  <span className="mt-4 inline-block rounded-full bg-slate-700/50 px-3 py-1 text-xs text-slate-300">
                    {offering.duration}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-16 md:py-24">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" brightness={1.0} />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Redo att utforska AI för er kommun?
          </h2>
          <p className="mt-4 text-slate-400">
            Vi börjar gärna med ett kostnadsfritt samtal för att förstå era behov och ge konkreta tips.
          </p>
          <Link
            href="/kontakt?type=avstamning"
            className="group mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Kontakta oss
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
