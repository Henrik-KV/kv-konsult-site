"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactSection from "./components/ContactSection";

/* ═══════════════════════════════════════════════════════════════════════════
   LAVALAMPA BAKGRUND KOMPONENT - Ljusblå toner mot svart
═══════════════════════════════════════════════════════════════════════════ */
function LavaLampBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blob 1 - Sky blue, stor och framträdande */}
      <div className="absolute -top-20 left-1/4 h-[700px] w-[700px] rounded-full bg-sky-500/25 blur-[120px] animate-blob-1" />
      
      {/* Blob 2 - Cyan */}
      <div className="absolute top-1/3 -right-10 h-[600px] w-[600px] rounded-full bg-cyan-400/20 blur-[100px] animate-blob-2" />
      
      {/* Blob 3 - Teal/mörkare blå */}
      <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[100px] animate-blob-3" />
      
      {/* Blob 4 - Light blue accent */}
      <div className="absolute top-1/2 left-10 h-[400px] w-[400px] rounded-full bg-blue-400/15 blur-[90px] animate-blob-4" />
      
      {/* Blob 5 - Extra ambient */}
      <div className="absolute top-20 right-1/4 h-[350px] w-[350px] rounded-full bg-sky-300/10 blur-[80px] animate-blob-5" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to /kontakt page
    window.location.href = "/kontakt";
  };

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <LavaLampBackground />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-24 lg:py-32 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Vänster kolumn - Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
              AI och Microsoft 365 som faktiskt gör{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                skillnad i vardagen
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg md:text-xl animate-fade-in-up animation-delay-100">
              Vi hjälper företag och kommuner att ta nästa steg med AI, Microsoft 365 Copilot, utbildning och nulägesanalys – på ett sätt som alla i organisationen kan använda.
            </p>

            {/* Knappar */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:justify-start animate-fade-in-up animation-delay-200">
              <Link
                href="/kontakt?type=avstämning"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-105 sm:px-8 sm:py-4 sm:text-base sm:w-auto"
              >
                <span className="relative z-10">Boka avstämningsmöte</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/tjanster"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-105 sm:px-8 sm:py-4 sm:text-base sm:w-auto"
              >
                Se tjänster & paket
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Höger kolumn - Visuellt element (visas även på mobil) */}
          <div className="relative animate-fade-in-right animation-delay-300 mt-8 lg:mt-0">
            <div className="relative">
              {/* Huvudvideo - loopar automatiskt */}
              <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl lg:rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-2xl backdrop-blur-sm">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                >
                  <source src="/images/hero-ai.mp4" type="video/mp4" />
                </video>
                {/* Subtil gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                
                {/* Citatkort - kursiv text, responsiv */}
                <div className="absolute bottom-3 left-3 right-3 lg:bottom-6 lg:left-6 lg:right-6">
                  <div className="rounded-xl lg:rounded-2xl border border-cyan-500/20 bg-slate-900/90 px-4 py-3 lg:px-8 lg:py-6 backdrop-blur-md shadow-xl">
                    <p className="text-center text-sm lg:text-xl italic leading-relaxed text-slate-100">
                      "Vi gör <span className="text-cyan-400">AI begripligt</span> och användbart i vardagen."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mjuk övergång till nästa sektion */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   STATISTIK-SEKTION - Dynamisk och integrerad
═══════════════════════════════════════════════════════════════════════════ */
function StatsSection() {
  const stats = [
    { 
      title: "Nöjda deltagare", 
      subtitle: "i våra workshops", 
      color: "sky",
      icon: (
        <svg className="h-7 w-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    { 
      title: "Levererade uppdrag", 
      subtitle: "för företag & kommuner", 
      color: "cyan",
      icon: (
        <svg className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      )
    },
    { 
      title: "Återkommande", 
      subtitle: "kunder", 
      color: "teal",
      icon: (
        <svg className="h-7 w-7 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative -mt-8 sm:-mt-16 z-10 pb-8 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-8 backdrop-blur-xl shadow-2xl shadow-sky-500/5">
          <p className="mb-4 sm:mb-8 text-center text-xs sm:text-sm font-medium uppercase tracking-widest">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Vi har hjälpt organisationer i hela Sverige</span>
          </p>
          <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/5 bg-slate-800/50 p-3 sm:p-5`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-${stat.color}-500/20 shrink-0`}>
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-base sm:text-xl font-bold text-white truncate">{stat.title}</p>
                  <p className="text-xs sm:text-sm text-slate-400">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TJÄNSTER / VAD VI GÖR
═══════════════════════════════════════════════════════════════════════════ */
const services = [
  {
    image: "/images/service-microsoft365.jpg",
    imageAlt: "Person använder Microsoft 365 Copilot på laptop",
    title: "AI i Microsoft 365",
    text: "Få ut mesta möjliga av Copilot i Word, Excel, Teams och Outlook. Vi visar hur ni sparar tid – varje dag.",
    href: "/tjanster#microsoft365",
    color: "sky",
  },
  {
    image: "/images/service-ai-general.jpg",
    imageAlt: "Workshop om AI med deltagare runt whiteboard",
    title: "Generell AI i vardagen",
    text: "ChatGPT, Copilot och andra AI-verktyg – vi lär ut hur hela organisationen kan använda AI på ett smart och säkert sätt.",
    href: "/tjanster#workshops",
    color: "cyan",
  },
  {
    image: "/images/service-analysis.jpg",
    imageAlt: "Konsult presenterar analys på storbildsskärm",
    title: "AI Nulägesanalys",
    text: "Vi kartlägger era behov, processer och potential – och tar fram en konkret handlingsplan för AI.",
    href: "/tjanster#nulagesanalys",
    color: "teal",
  },
  {
    image: "/images/service-partnership.jpg",
    imageAlt: "Handskakning mellan konsult och kund",
    title: "Löpande AI-partner",
    text: "Vi följer med er över tid som rådgivare, coach och bollplank – så att AI blir en naturlig del av vardagen.",
    href: "/tjanster#ai-partner",
    color: "emerald",
  },
];

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 md:py-32">
      <LavaLampBackground />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-sky-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-400">
            Våra tjänster
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Vad vi <span className="text-cyan-400">gör</span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-slate-400 px-2">
            Våra tjänster är designade för att skapa verklig effekt – oavsett var ni befinner er i er AI-resa.
          </p>
        </div>

        {/* Extra padding för att ge plats för hover-lyft */}
        <div className="mt-8 sm:mt-16 grid gap-6 sm:gap-10 md:grid-cols-2 py-4 sm:py-8 px-0 sm:px-2">
          {services.map((s, index) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-800/60 transition-all duration-500 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Bild - med overflow-hidden och rundade hörn upptill */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay som smälter in med kortet */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-transparent" />
                
                {/* Fallback gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${s.color}-600/20 to-transparent opacity-60`} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-8 bg-slate-800/60">
                  <h3 className="text-lg sm:text-xl font-bold text-white md:text-2xl">
                    {s.title === "AI i Microsoft 365" ? (
                      <><span className="text-sky-400">AI</span> i Microsoft 365</>
                    ) : s.title === "Generell AI i vardagen" ? (
                      <>Generell <span className="text-cyan-400">AI</span> i vardagen</>
                    ) : s.title === "AI Nulägesanalys" ? (
                      <><span className="text-teal-400">AI</span> Nulägesanalys</>
                    ) : s.title === "Löpande AI-partner" ? (
                      <>Löpande <span className="text-emerald-400">AI-partner</span></>
                    ) : s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-slate-400 leading-relaxed">
                    {s.text}
                  </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-all duration-300 group-hover:text-sky-300">
                  Läs mer
                  <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FÖR VEM – MÅLGRUPPER (Side-by-side layout)
═══════════════════════════════════════════════════════════════════════════ */
function TargetAudienceSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 md:py-32">
      <LavaLampBackground />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Våra målgrupper
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            För vem vi <span className="text-cyan-400">jobbar</span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-slate-400 px-2">
            Vi samarbetar med både offentlig sektor och näringsliv – anpassat efter era förutsättningar.
          </p>
        </div>

        {/* Kommuner - Text vänster, bild höger */}
        <div className="mt-12 sm:mt-20 grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-sky-400">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500/20">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Offentlig sektor
            </div>
            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-white md:text-3xl">
              För <span className="text-sky-400">kommuner</span> & regioner
            </h3>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
              Vi hjälper politiker och tjänstepersoner att förstå och tillämpa AI i den kommunala vardagen. Det handlar om digitalisering, effektivare handläggning och att minska digitalt utanförskap bland invånare och medarbetare.
            </p>
            <ul className="mt-6 space-y-3">
              {["AI-introduktion för nämnder", "Workshops för förvaltningar", "Nulägesanalys & handlingsplan", "Minska digitalt utanförskap"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/kommuner"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-600/20 to-sky-600/10 px-6 py-3 text-sm font-semibold text-sky-300 transition-all duration-300 hover:from-sky-600/30 hover:to-sky-600/20"
            >
              Läs mer för kommuner
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/target-kommun.jpg"
                alt="Kommunhus och tjänstepersoner i möte"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-sky-600/20 to-cyan-600/20 blur-xl" />
          </div>
        </div>

        {/* Företag - Bild vänster, text höger */}
        <div className="mt-32 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1 animate-fade-in-left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/target-foretag.jpg"
                alt="Företagsledning i modern kontorsmiljö"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-cyan-600/20 to-teal-600/20 blur-xl" />
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/20">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Näringsliv
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white md:text-3xl">
              För <span className="text-cyan-400">företag</span>
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Ledning, sälj, HR, ekonomi och kundservice – vi möter era team där de är och visar hur AI kan frigöra tid, höja kvaliteten och skapa konkurrensfördelar i ert dagliga arbete.
            </p>
            <ul className="mt-6 space-y-3">
              {["AI-strategi för ledning", "Effektivare säljprocesser", "Automatiserad rapportering", "AI-driven kundservice"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/foretag"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-cyan-600/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:from-cyan-600/30 hover:to-cyan-600/20"
            >
              Läs mer för företag
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROCESS – SÅ SKAPAR VI EFFEKT
═══════════════════════════════════════════════════════════════════════════ */
const steps = [
  {
    number: "01",
    title: "Utforska & förstå",
    text: "Vi börjar med att lyssna – på era mål, era utmaningar och era arbetsflöden. Tillsammans identifierar vi var AI kan göra mest nytta.",
    image: "/images/process-1-meeting.jpg",
    imageAlt: "Konsult lyssnar på kund i möte",
  },
  {
    number: "02",
    title: "Träna & testa",
    text: "Genom workshops, utbildningar och hands-on-labbar ser vi till att kunskapen landar – och att ni vågar prova direkt.",
    image: "/images/process-2-workshop.jpg",
    imageAlt: "Workshop med deltagare vid datorer",
  },
  {
    number: "03",
    title: "Förankra & följa upp",
    text: "Vi följer upp, mäter resultat och justerar så att förändringen sitter. AI ska bli en naturlig del av vardagen – inte ett engångsprojekt.",
    image: "/images/process-3-celebration.jpg",
    imageAlt: "Team firar framgång tillsammans",
  },
];

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 md:py-32">
      <LavaLampBackground />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Vår process
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Så skapar vi <span className="text-cyan-400">effekt</span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-slate-400 px-2">
            Vår process är enkel men beprövad – och alltid anpassad efter er verksamhet.
          </p>
        </div>

        {/* Processkort - varje kort har sin egen grafik, ingen sammanhängande linje */}
        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/60 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/15"
            >
              {/* Inre wrapper som säkerställer sömlös bakgrund */}
              <div className="relative h-full rounded-3xl bg-slate-800/60">
                {/* Bild - stor och tydlig */}
                <div className="relative h-40 sm:h-52 overflow-hidden rounded-t-3xl">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient som smälter ihop med kortets bakgrund */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/70 to-transparent" />
                </div>

                {/* Nummer-sektion med egen grafik i övergångszonen */}
                <div className="relative -mt-8 flex justify-center">
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Vertikal linje uppåt (kort, stannar inom kortet) */}
                    <div className="h-4 w-0.5 bg-gradient-to-t from-cyan-500 to-transparent" />
                    {/* Nummerbadge */}
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 text-xl font-bold text-white shadow-xl shadow-cyan-500/40 ring-4 ring-slate-800">
                      {step.number}
                    </span>
                    {/* Horisontell linje under numret */}
                    <div className="mt-2 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  </div>
                </div>

                {/* Content - med matchande bakgrund */}
                <div className="px-6 pb-8 pt-4 md:px-8 text-center">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TESTIMONIALS CAROUSEL
═══════════════════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    quote: "Konkreta exempel som vi kunde använda direkt dagen efter workshopen. Riktigt bra!",
    author: "Projektledare",
    org: "Tillverkande företag",
    avatar: "PL",
  },
  {
    quote: "Äntligen någon som förklarar AI på ett sätt som alla förstår – inte bara IT-avdelningen.",
    author: "HR-chef",
    org: "Tjänsteföretag",
    avatar: "HR",
  },
  {
    quote: "Nulägesanalysen gav oss en tydlig bild av var vi ska börja. Ovärderligt.",
    author: "Digitaliseringschef",
    org: "Kommun",
    avatar: "DC",
  },
  {
    quote: "Tack vare utbildningen sparar vårt team flera timmar per vecka. Imponerande resultat.",
    author: "Avdelningschef",
    org: "Region",
    avatar: "AC",
  },
  {
    quote: "Bästa AI-utbildningen vi gått. Praktiskt, relevant och direkt applicerbart.",
    author: "VD",
    org: "Konsultbolag",
    avatar: "VD",
  },
  {
    quote: "De förstod våra utmaningar och anpassade upplägget perfekt efter våra behov.",
    author: "IT-strateg",
    org: "Medelstort företag",
    avatar: "IT",
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  
  // Touch/swipe handling
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsiv: 1 kort på mobil, 2 på tablet, 3 på desktop
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
        setIsMobile(true);
      } else if (width < 1024) {
        setItemsPerView(2);
        setIsMobile(false);
      } else {
        setItemsPerView(3);
        setIsMobile(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Återställ index om det går utanför gränserna vid resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, maxIndex]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, maxIndex]);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // Touch/swipe handlers för mobil
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe vänster = nästa
        goToNext();
      } else {
        // Swipe höger = föregående
        goToPrev();
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 md:py-32">
      <LavaLampBackground />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Feedback
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Det här säger <span className="text-emerald-400">deltagarna</span>
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative mt-10 sm:mt-16">
          {/* Navigation arrows - hidden on mobile */}
          <button
            onClick={goToPrev}
            className="absolute -left-4 top-1/2 z-10 hidden sm:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800 lg:-left-6"
            aria-label="Föregående citat"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-4 top-1/2 z-10 hidden sm:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800 lg:-right-6"
            aria-label="Nästa citat"
          >
            →
          </button>

          {/* Testimonials grid */}
          <div 
            className="overflow-hidden touch-pan-y"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 sm:px-3 ${
                    isMobile ? 'w-full' : itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                >
                  <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-800/40 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-emerald-500/10 md:p-8">
                    {/* Quote - kursiv med citattecken i texten */}
                    <blockquote className="flex-1 text-lg italic leading-relaxed text-slate-200">
                      "{t.quote}"
                    </blockquote>
                    
                    {/* Author - förankrad i nederkant */}
                    <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-sm font-bold text-emerald-300">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{t.author}</p>
                        <p className="text-sm text-emerald-400">{t.org}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-emerald-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Gå till sida ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HUVUDSIDAN
═══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TargetAudienceSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
