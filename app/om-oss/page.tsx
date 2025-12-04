"use client";

import Link from "next/link";
import Image from "next/image";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

const values = [
  {
    title: "Konkret nytta",
    text: "Vi fokuserar på det som faktiskt gör skillnad i er vardag – inte teknik för teknikens skull.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Tillgänglighet",
    text: "AI ska vara begripligt för alla, oavsett teknisk bakgrund. Vi förklarar, visar och övar tillsammans.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Trygghet",
    text: "Vi lyfter alltid frågor kring säkerhet, etik och ansvar. AI ska användas på ett klokt sätt.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "Långsiktighet",
    text: "Vi tror på varaktiga förändringar. Därför följer vi upp och säkerställer att kunskapen sitter.",
    gradient: "from-emerald-500 to-sky-500",
  },
];

const journey = [
  {
    year: "Startpunkt",
    title: "Insikten",
    text: "Vi såg hur AI snabbt förändrade spelplanen – men också hur många organisationer stod bredvid och inte visste var de skulle börja. Teknikjättarna pratade om 'revolutionen', men för de flesta handlade det om vardagliga utmaningar.",
  },
  {
    year: "Drivkraft",
    title: "Vardagens behov",
    text: "Mejl som tar för lång tid, rapporter som ingen hinner läsa, möten som inte leder någonstans. Vi ville hjälpa till på riktigt – inte med buzzwords och framtidsprognoser, utan med konkret kunskap som gör skillnad imorgon.",
  },
  {
    year: "Vision",
    title: "Bred erfarenhet",
    text: "Idag jobbar vi med allt från kommunala nämnder som vill förstå vad AI innebär, till företagsledningar som vill effektivisera hela organisationen. Vår vision är att göra AI tillgängligt för alla.",
  },
];

export default function OmOssPage() {
  return (
    <main>
      {/* Hero med bild */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video: om-oss-bg.mp4 (byt ut när du har en egen) */}
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" />
        <ScrollIndicator className="bottom-20 sm:bottom-24" />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Bild först på mobil, text på desktop */}
            <div className="lg:order-2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-sky-500/30 shadow-2xl" style={{ boxShadow: '0 0 40px rgba(56, 189, 248, 0.3), 0 0 80px rgba(56, 189, 248, 0.15)' }}>
                  <Image
                    src="/images/hero-om-oss-team.jpg"
                    alt="Grundare i samtal"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                </div>
                
                {/* Overlay badge */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500">
                      {/* Bro/koppling-ikon */}
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Bron</p>
                      <p className="text-sm text-slate-400">AI ↔ Verksamhet</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-sky-600/20 to-cyan-600/20 blur-xl" />
              </div>
            </div>

            <div className="lg:order-1">
              <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)', textShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}>
                Om oss
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Vi bygger broar mellan{" "}
                <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                  AI och verksamheten
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                KV Konsult grundades med en tydlig vision: att göra AI tillgängligt, begripligt och användbart för svenska företag och kommuner – på riktigt.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Lär känna oss
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vår resa - tidslinje */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-cyan-400" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)', textShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}>
              Vår historia
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Varför KV Konsult finns
            </h2>
          </div>

          <div className="relative mt-12">
            {/* Kontinuerlig vertikal tidslinje (desktop) - exakt från Startpunkt till Vision */}
            <div className="absolute left-10 hidden w-0.5 md:block" style={{ top: '4.5rem', height: 'calc(100% - 10rem)' }}>
              <div className="h-full w-full rounded-full bg-gradient-to-b from-cyan-500 via-cyan-500 to-cyan-500" />
            </div>
            
            <div className="space-y-0">
              {journey.map((step, i) => (
                <div
                  key={i}
                  className="group relative grid gap-4 md:grid-cols-[80px_1fr] md:gap-8"
                >
                  {/* Tidslinje-punkt */}
                  <div className="relative hidden md:flex md:justify-center md:py-8">
                    {/* Punkten - ligger ovanpå den kontinuerliga linjen */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-cyan-500/50 bg-slate-900 text-xs font-semibold text-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:border-cyan-500 group-hover:scale-110 group-hover:shadow-cyan-500/40">
                      {step.year}
                    </div>
                  </div>
                  
                  {/* Innehåll */}
                  <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 my-4 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 md:hidden">
                      {step.year}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white md:mt-0">{step.title}</h3>
                    <p className="mt-2 text-slate-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bron - visuell sektion */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        {/* Subtil bakgrund */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[100px] animate-blob-1" />
          <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-400/8 blur-[100px] animate-blob-2" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-teal-400" style={{ boxShadow: '0 0 20px rgba(45, 212, 191, 0.3), inset 0 0 20px rgba(45, 212, 191, 0.1)', textShadow: '0 0 10px rgba(45, 212, 191, 0.6)' }}>
                Vår roll
              </span>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Bron mellan <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">teknik</span> och <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">verksamhet</span>
              </h2>
              <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Vi ser oss som en bro mellan två världar. Å ena sidan finns teknikutvecklingen som går allt snabbare – nya AI-modeller, nya verktyg, nya möjligheter.
                </p>
                <p>
                  Å andra sidan finns verksamheten: kommuner som ska leverera välfärd, företag som ska skapa värde, medarbetare som vill göra ett bra jobb.
                </p>
                <p className="text-white font-medium">
                  Vår uppgift är att översätta, förenkla och konkretisera.
                </p>
              </div>

              {/* Bro-illustration med logga */}
              <div className="mt-8 grid grid-cols-3 gap-4 items-center">
                <div className="rounded-xl border border-white/10 bg-slate-800/50 p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-400">AI & teknik</p>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500" />
                  {/* KV-logga i headerstil */}
                  <div className="relative flex items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900/95 p-2 backdrop-blur-sm shadow-lg shadow-cyan-500/25">
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 p-0.5 shadow-lg shadow-sky-500/25">
                      <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-slate-950">
                        <Image
                          src="/images/kvkonsult-logo.png"
                          alt="KV Konsult"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-800/50 p-4 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-400">Verksamhet</p>
                </div>
              </div>
            </div>

            {/* Bild */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/bro-ai-verksamhet.jpg"
                  alt="Illustration som symboliserar bro mellan AI och verksamhet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Citatkort - kursiv text, större och integrerade citattecken */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/90 px-8 py-6 backdrop-blur-md shadow-xl shadow-cyan-500/10">
                    <p className="text-center text-lg italic leading-relaxed text-slate-100" style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.4)' }}>
                      "Vi gör <span className="text-cyan-400" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}>AI begripligt</span> utan att dumma ner det. Vi visar vad som är möjligt utan att hypa."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Våra värderingar */}
      <section className="relative overflow-hidden bg-slate-900 py-16 md:py-24">
        {/* Video-bakgrund: bakgrund-partiklar */}
        <div className="pointer-events-none absolute inset-0 bg-slate-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-[150%] min-w-[150%] object-cover"
            style={{ filter: 'blur(2px) brightness(0.9)' }}
          >
            <source src="/images/bakgrund-partiklar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)', textShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}>
              Vad vi tror på
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Våra värderingar
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-slate-800/50 p-6 text-center transition-all duration-300 hover:border-sky-500/30 hover:-translate-y-2"
              >
                {/* Gradient bar */}
                <div className={`mx-auto h-1 w-16 rounded-full bg-gradient-to-r ${v.gradient} transition-all duration-300 group-hover:w-24`} />
                
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        {/* Video-bakgrund: spiral-effekt */}
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" brightness={1.0} />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Vill ni veta mer?
          </h2>
          <p className="mt-4 text-slate-400">
            Vi berättar gärna mer om hur vi jobbar och hur vi kan hjälpa just er.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Ta kontakt
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/tjanster"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Se våra tjänster
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
