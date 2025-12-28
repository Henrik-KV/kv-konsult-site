"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

/* ═══════════════════════════════════════════════════════════════════════════
   FÄRGMAPPNING FÖR TAILWIND
═══════════════════════════════════════════════════════════════════════════ */
const subtitleGlowStyles: React.CSSProperties = {
  boxShadow: '0 0 20px rgba(167, 139, 250, 0.4)',
  textShadow: '0 0 10px rgba(167, 139, 250, 0.5)'
};

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET DATA - Webbsidor
═══════════════════════════════════════════════════════════════════════════ */
const webPackages = [
  {
    id: "webb-lopande",
    name: "Webbsida + löpande stöd",
    duration: "Engång + löpande",
    format: "Design + förvaltning",
    price: "Offert",
    shortDesc: "Vi bygger er webbsida och finns sedan kvar som partner. Ni slipper pilla med teknik och uppdateringar – vi tar den biten åt er.",
    fullDesc: {
      target: "Företag och organisationer som vill ha en professionell webbsida och slippa tekniken efteråt.",
      includes: [
        "Allt från Engångsleverans – design, uppsättning och överlämning",
        "Löpande uppdateringar av text, bilder och innehåll varje månad",
        "Mindre designjusteringar och förbättringar",
        "Teknisk underhåll och säkerhetsuppdateringar",
        "Månatlig avstämning av vad som behöver göras",
        "Effektiv innehållsproduktion med AI-stöd",
      ],
      outcome: "Er webbsida hålls uppdaterad och professionell utan att ni behöver lägga tid på det själva.",
      practical: "Ni skickar önskemål, vi genomför och stämmer av. Flexibelt upplägg – antal timmar eller ändringar per månad enligt avtal.",
    },
    recommended: true,
  },
  {
    id: "webb-engang",
    name: "Webbsida: Engångsleverans",
    duration: "2–4 veckor",
    format: "Design + uppsättning + överlämning",
    price: "Offert",
    shortDesc: "Vi designar och sätter upp er webbsida, lär upp er så ni kan uppdatera själva, och lämnar sedan över. Ingen bindning – ni tar över driften.",
    fullDesc: {
      target: "Företag och organisationer som vill ha en professionell webbsida och sedan sköta den på egen hand.",
      includes: [
        "Uppstartsmöte för att förstå era mål, brand och önskemål",
        "Förslag på struktur och sidupplägg",
        "Modern, responsiv design anpassad efter er profil",
        "Grundinnehåll framtaget med AI-stöd för effektivitet",
        "Uppsättning i vald plattform (t.ex. WordPress, Webflow, Next.js)",
        "Genomgång och upplärning så ni själva kan göra uppdateringar",
        "Överlämning med dokumentation – sedan tar ni över",
      ],
      outcome: "Ni har en färdig, professionell webbsida och vet hur ni uppdaterar den själva. Ingen bindning.",
      practical: "Genomförs digitalt med regelbundna avstämningar. Tidplan beror på omfattning och antal sidor.",
    },
    recommended: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET KORT KOMPONENT
═══════════════════════════════════════════════════════════════════════════ */
interface WebPackage {
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

function WebPackageCard({ pkg }: { pkg: WebPackage }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        expanded
          ? "border-violet-500/30 bg-slate-800/60 shadow-xl shadow-violet-500/20"
          : "border-white/10 bg-slate-800/40 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
      } ${pkg.recommended ? 'ring-2 ring-violet-500/50' : ''}`}
    >
      <div className="p-4 sm:p-6 md:p-8">
        {/* Recommended badge */}
        {pkg.recommended && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white" style={{ boxShadow: '0 0 20px rgba(167, 139, 250, 0.5)', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
              Rekommenderas
            </span>
          </div>
        )}
        
        {/* Header */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{pkg.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-violet-600/20 px-3 py-1 text-xs font-medium text-violet-400">
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
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition-all duration-300 hover:gap-3"
        >
          {expanded ? "Visa mindre" : "Läs mer om paketet"}
          <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Expanderat innehåll */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-6 max-h-[800px] opacity-100" : "max-h-0 opacity-0"
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
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-600/20 text-violet-400 text-xs">
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
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/40"
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
export default function WebbsidorPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" />

        <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20 lg:px-8">
          <div className="text-center">
            <span 
              className="inline-block rounded-full bg-violet-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-400" 
              style={subtitleGlowStyles}
            >
              Billigast i Sverige*
            </span>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Webbsidor
              </span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-slate-300 md:text-xl px-2">
              Vi är en webbbyrå som erbjuder professionell webbdesign och moderna hemsidor till marknadens bästa pris. Med AI-stöd för effektiv innehållsproduktion och ett upplägg som passar just er – oavsett om ni vill sköta webbsidan själva eller ha oss som löpande partner.
            </p>
          </div>

          {/* Intro-kort */}
          <div className="mx-auto mt-8 sm:mt-12 max-w-4xl px-2">
            <div className="rounded-2xl border border-violet-500/20 bg-slate-800/40 p-4 sm:p-6 md:p-8">
              <h2 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
                Så här kan det <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">fungera</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base lg:text-lg text-slate-300">
                Välj mellan engångsleverans där ni sedan tar över, eller ett löpande upplägg där vi finns kvar som partner.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link 
                  href="/kontakt?type=paket&packages=webb-engang"
                  className="rounded-xl border border-violet-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-800/60 hover:scale-105 cursor-pointer"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-violet-600/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Engångsleverans</h3>
                  <p className="mt-2 text-sm text-slate-400">Vi bygger er sida och lär upp er. Sedan tar ni över driften helt själva.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-400">
                    Boka möte <span>→</span>
                  </span>
                </Link>
                <Link 
                  href="/kontakt?type=paket&packages=webb-lopande"
                  className="rounded-xl border border-violet-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-800/60 hover:scale-105 cursor-pointer"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-violet-600/20 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Löpande stöd</h3>
                  <p className="mt-2 text-sm text-slate-400">Vi bygger och förvaltar. Ni slipper tekniken – vi håller sidan fräsch.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-400">
                    Boka möte <span>→</span>
                  </span>
                </Link>
              </div>
              <p className="mt-6 text-center text-sm text-slate-400">
                <span className="text-violet-400">Tips:</span> Börja med engångsleverans och lägg till löpande stöd när ni ser behovet.
              </p>
              <p className="mt-4 text-center text-xs text-slate-500">
                * Vi har jämfört priser hos andra leverantörer och är övertygade om att vi erbjuder marknadens bästa pris–kvalitet. Hittar du billigare? Hör av dig så matchar vi.
              </p>
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
                className="inline-flex w-fit rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-violet-500/10 text-violet-400"
                style={subtitleGlowStyles}
              >
                Professionell webbdesign
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Hemsidor</span> för företag & kommuner
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
                Vi är en webbbyrå som lyssnar på era önskemål, förstår ert varumärke och bygger moderna webbsidor med AI-stöd. Oavsett om ni är företag eller kommun – ni väljer om ni vill sköta hemsidan själva eller ha oss som löpande partner.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Modern, responsiv design",
                  "Anpassad efter er profil och varumärke",
                  "AI-stöd för effektiv innehållsproduktion",
                  "Uppsättning i valfri plattform",
                  "Flexibelt – ni väljer graden av support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600/20 text-violet-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative flex items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl border border-violet-500/30 shadow-2xl bg-slate-800/30" style={{ boxShadow: '0 0 40px rgba(167, 139, 250, 0.25), 0 0 80px rgba(139, 92, 246, 0.1)' }}>
                <Image
                  src="/images/service-web.jpg"
                  alt="Modern webbsida på skärm"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 blur-xl" />
            </div>
          </div>

          {/* Paket-kort */}
          <div className="mt-12 sm:mt-16">
            <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white">
              Välj ert <span className="text-violet-400">upplägg</span>
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {webPackages.map((pkg) => (
                <WebPackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

          {/* Hur vi jobbar */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Hur vi <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">jobbar</span>
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Uppstartsmöte",
                  desc: "Vi lyssnar på era mål, förstår ert varumärke och diskuterar önskemål.",
                },
                {
                  step: "2",
                  title: "Design & struktur",
                  desc: "Vi tar fram förslag på sidstruktur och modern design anpassad efter er profil.",
                },
                {
                  step: "3",
                  title: "Uppsättning",
                  desc: "Vi bygger sidan i vald plattform med AI-stöd för effektiv innehållsproduktion.",
                },
                {
                  step: "4",
                  title: "Överlämning",
                  desc: "Ni får dokumentation och genomgång – sedan tar ni över eller fortsätter med löpande stöd.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-violet-500/20 bg-slate-800/50 p-6 text-center" style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.08)' }}>
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white" style={{ boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)' }}>
                    {item.step}
                  </div>
                  <h4 className="mt-4 font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
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
            Redo att få en webbsida som <span className="text-violet-400">gör intryck</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Boka ett kostnadsfritt möte så pratar vi igenom era behov och hur vi kan hjälpa er.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt?type=paket&packages=webb-lopande"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105"
            >
              Boka möte
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
