"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

/* ═══════════════════════════════════════════════════════════════════════════
   FÄRGMAPPNING FÖR TAILWIND
═══════════════════════════════════════════════════════════════════════════ */
const subtitleGlowStyles: React.CSSProperties = {
  boxShadow: '0 0 20px rgba(52, 211, 153, 0.4)',
  textShadow: '0 0 10px rgba(52, 211, 153, 0.5)'
};

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET DATA - Lösningsarkitekter
═══════════════════════════════════════════════════════════════════════════ */
const solutionPackages = [
  {
    id: "losning-upptack",
    name: "Upptäcktsfas",
    duration: "1–2 veckor",
    format: "Analys & rådgivning",
    price: "Offert",
    shortDesc: "Vi lyssnar in ert problem, analyserar nuläget och presenterar konkreta förslag på digitala lösningar som kan effektivisera eller lösa era utmaningar.",
    fullDesc: {
      target: "Företag som har ett problem eller ineffektivitet de vill lösa, men inte vet vilken teknisk lösning som passar bäst.",
      includes: [
        "Djupintervjuer med nyckelpersoner för att förstå problemet",
        "Analys av nuvarande processer och system",
        "Identifiering av möjliga lösningsvägar",
        "Presentation av 2–3 konkreta lösningsförslag",
        "Grov kostnads- och tidsuppskattning",
        "Skriftlig rapport med rekommendationer",
      ],
      outcome: "Ni får en tydlig bild av vilka lösningar som är möjliga och en rekommendation på bästa vägen framåt.",
      practical: "Genomförs digitalt eller på plats. Vi behöver tillgång till relevanta personer och information om nuvarande processer.",
    },
    recommended: true,
  },
  {
    id: "losning-mvp",
    name: "MVP-utveckling",
    duration: "4–8 veckor",
    format: "Design & utveckling",
    price: "Offert",
    shortDesc: "Vi bygger en första version (MVP) av er skräddarsydda applikation – tillräckligt för att testa, validera och börja använda i praktiken.",
    fullDesc: {
      target: "Företag som vill testa en idé eller lösa ett specifikt problem med en enkel men fungerande första version.",
      includes: [
        "Detaljerad kravspecifikation tillsammans med er",
        "UX/UI-design anpassad för webb eller mobil",
        "Utveckling av kärnfunktionalitet",
        "Webbapplikation eller mobilapp (iOS/Android)",
        "Grundläggande testning och kvalitetssäkring",
        "Deployment och överlämning",
        "Dokumentation för vidareutveckling",
      ],
      outcome: "Ni får en fungerande första version som ni kan börja använda och samla feedback på.",
      practical: "Agilt arbetssätt med veckovisa avstämningar. Ni ser framsteg löpande och kan ge input under utvecklingen.",
    },
    recommended: false,
  },
  {
    id: "losning-fullskala",
    name: "Fullskalig utveckling",
    duration: "2–6 månader",
    format: "Komplett systemutveckling",
    price: "Offert",
    shortDesc: "Vi utvecklar en komplett, skräddarsydd applikation redo för produktion – med alla funktioner, integrationer och support som behövs.",
    fullDesc: {
      target: "Företag som behöver en robust, skräddarsydd lösning som kan skalas och integreras med befintliga system.",
      includes: [
        "Allt från MVP-paketet",
        "Full funktionalitet enligt kravspec",
        "Integration med befintliga system och API:er",
        "Publicering i App Store och/eller Google Play (vid mobilapp)",
        "Säkerhet och GDPR-anpassning",
        "Performance-optimering och skalbarhet",
        "Användarutbildning och dokumentation",
        "3 månaders support efter lansering",
      ],
      outcome: "Ni får en produktionsklar applikation som löser ert problem och kan växa med er verksamhet.",
      practical: "Dedikerat team med projektledare. Regelbundna avstämningar och demos. Vi finns kvar för support och vidareutveckling.",
    },
    recommended: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET KORT KOMPONENT
═══════════════════════════════════════════════════════════════════════════ */
interface SolutionPackage {
  id: string;
  name: string;
  duration: string;
  format: string;
  price: string;
  shortDesc: string;
  fullDesc: {
    target: string;
    includes: string[];
    outcome: string;
    practical: string;
  };
  recommended: boolean;
}

function SolutionPackageCard({ pkg }: { pkg: SolutionPackage }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        expanded
          ? "border-emerald-500/30 bg-slate-800/60 shadow-xl shadow-emerald-500/20"
          : "border-white/10 bg-slate-800/40 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10"
      } ${pkg.recommended ? 'ring-2 ring-emerald-500/50' : ''}`}
    >
      <div className="p-4 sm:p-6 md:p-8">
        {/* Recommended badge */}
        {pkg.recommended && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white" style={{ boxShadow: '0 0 20px rgba(52, 211, 153, 0.5)', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
              Rekommenderad start
            </span>
          </div>
        )}
        
        {/* Header */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{pkg.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-400">
              {pkg.duration}
            </span>
            <span className="rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300">
              {pkg.format}
            </span>
          </div>
        </div>

        {/* Kort beskrivning */}
        <p className="mt-4 text-slate-400 leading-relaxed">{pkg.shortDesc}</p>

        {/* Läs mer knapp */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:gap-3"
        >
          {expanded ? "Visa mindre" : "Läs mer om paketet"}
          <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Expanderat innehåll */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-6 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6 border-t border-white/10 pt-6">
            {/* Målgrupp */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Vem passar det för?
              </h4>
              <p className="mt-2 text-slate-400">{pkg.fullDesc.target}</p>
            </div>

            {/* Vad ingår */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Vad ingår?
              </h4>
              <ul className="mt-2 space-y-2">
                {pkg.fullDesc.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultat */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Vad ni får med er
              </h4>
              <p className="mt-2 text-slate-400">{pkg.fullDesc.outcome}</p>
            </div>

            {/* Praktiskt */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Praktisk info
              </h4>
              <p className="mt-2 text-slate-400">{pkg.fullDesc.practical}</p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href={`/kontakt?type=paket&packages=${pkg.id}`}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40"
              >
                Boka {pkg.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HUVUDSIDAN
═══════════════════════════════════════════════════════════════════════════ */
export default function LosningsarkitekterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" />
        <ScrollIndicator className="bottom-20 sm:bottom-24" />

        <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20 lg:px-8">
          <div className="text-center">
            <span 
              className="inline-block rounded-full bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-400" 
              style={subtitleGlowStyles}
            >
              Skräddarsydd utveckling
            </span>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Appar & lösningar
              </span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-slate-300 md:text-xl px-2">
              Vi lyssnar in på ert företags utmaningar och bygger skräddarsydda digitala lösningar. Webbapplikationer, mobilappar för App Store och Google Play – allt designat för att lösa just era problem.
            </p>
          </div>

          {/* Intro-kort */}
          <div className="mx-auto mt-8 sm:mt-12 max-w-4xl px-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-800/40 p-4 sm:p-6 md:p-8">
              <h2 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
                Från <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">problem</span> till lösning
              </h2>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base lg:text-lg text-slate-300">
                Vi börjar alltid med att förstå ert problem. Sedan designar och utvecklar vi en lösning som passar just er verksamhet.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-emerald-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/60">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Webbapplikationer</h3>
                  <p className="mt-2 text-sm text-slate-400">Moderna webblösningar som fungerar på alla enheter.</p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/60">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Mobilappar</h3>
                  <p className="mt-2 text-sm text-slate-400">Appar för iOS (App Store) och Android (Google Play).</p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/60">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Systemintegrationer</h3>
                  <p className="mt-2 text-sm text-slate-400">Koppling mot befintliga system och API:er.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paket-sektion */}
      <section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Service header med bild */}
          <div className="grid items-stretch gap-8 sm:gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <span 
                className="inline-flex w-fit rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-400"
                style={subtitleGlowStyles}
              >
                Vi löser era utmaningar
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Skräddarsydda</span> applikationer
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
                Varje företag är unikt – och ibland finns det ingen färdig lösning som passar. Då bygger vi en åt er. Vi lyssnar, förstår och utvecklar digitala verktyg som löser just era problem och effektiviserar er verksamhet.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Vi börjar alltid med att förstå ert problem",
                  "Förslag på flera möjliga lösningsvägar",
                  "Webbapplikation eller mobilapp – eller båda",
                  "Agilt arbetssätt med löpande leveranser",
                  "Support och vidareutveckling efter lansering",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative flex items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-500/30 shadow-2xl bg-slate-800/30" style={{ boxShadow: '0 0 40px rgba(52, 211, 153, 0.25), 0 0 80px rgba(20, 184, 166, 0.1)' }}>
                <Image
                  src="/images/Applikation-bild.png"
                  alt="Skräddarsydd apputveckling"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 blur-xl" />
            </div>
          </div>

          {/* Paket-kort */}
          <div className="mt-12 sm:mt-16">
            <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white">
              Välj ert <span className="text-emerald-400">upplägg</span>
            </h3>
            <div className="grid gap-6 lg:grid-cols-3">
              {solutionPackages.map((pkg) => (
                <SolutionPackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

          {/* Hur vi jobbar */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Hur vi <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">jobbar</span>
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Lyssna & förstå",
                  desc: "Vi sätter oss in i ert problem, era processer och vad ni vill uppnå.",
                },
                {
                  step: "2",
                  title: "Analysera & föreslå",
                  desc: "Vi presenterar möjliga lösningsvägar och rekommenderar bästa alternativet.",
                },
                {
                  step: "3",
                  title: "Designa & bygga",
                  desc: "Vi utvecklar er lösning agilt – ni ser framsteg och kan ge input löpande.",
                },
                {
                  step: "4",
                  title: "Lansera & stötta",
                  desc: "Vi levererar, utbildar och finns kvar för support och vidareutveckling.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-emerald-500/20 bg-slate-800/50 p-6 text-center" style={{ boxShadow: '0 0 20px rgba(52, 211, 153, 0.08)' }}>
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white" style={{ boxShadow: '0 0 15px rgba(52, 211, 153, 0.4)' }}>
                    {item.step}
                  </div>
                  <h4 className="mt-4 font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exempel på lösningar */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Exempel på <span className="text-emerald-400">lösningar</span> vi kan bygga
            </h3>
            <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
              Varje projekt är unikt, men här är några exempel på typer av lösningar vi har erfarenhet av att utveckla.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Interna verktyg", desc: "Dashboards, admin-paneler och verktyg för att effektivisera interna processer." },
                { title: "Kundportaler", desc: "Inloggningsskyddade portaler där era kunder kan hantera sina ärenden." },
                { title: "Bokningssystem", desc: "Skräddarsydda bokningslösningar för tider, resurser eller tjänster." },
                { title: "E-handel & betalning", desc: "Webshoppar och betalningslösningar anpassade efter era behov." },
                { title: "Mobilappar", desc: "Native eller cross-platform appar för iOS och Android." },
                { title: "Automatiseringar", desc: "Lösningar som automatiserar repetitiva uppgifter och sparar tid." },
              ].map((example, i) => (
                <div key={i} className="rounded-xl border border-emerald-500/20 bg-slate-800/50 p-5 transition-all duration-300 hover:border-emerald-500/40 hover:bg-slate-800/70">
                  <h4 className="font-semibold text-white">{example.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{example.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" brightness={1.0} />

        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Har ni ett problem som behöver en <span className="text-emerald-400">digital lösning</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Boka ett kostnadsfritt upptäcktsmöte så lyssnar vi in på era utmaningar och diskuterar möjliga vägar framåt.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt?type=paket&packages=losning-upptack"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105"
            >
              Boka upptäcktsmöte
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:info@kvkonsult.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Mejla oss direkt
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
