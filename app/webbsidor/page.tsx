"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground from "../components/VideoBackground";

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
    name: "Webbsida + månadsfakturering",
    duration: "9 999 kr i startavgift",
    format: "699 kr/mån",
    price: "Alla priser exkl. moms",
    shortDesc: "Vi bygger och kopplar upp er hemsida och sköter sedan det löpande underhållet, som faktureras med 699 kr per månad.",
    fullDesc: {
      target: "Företag och organisationer som vill ha en professionell hemsida och slippa sköta tekniken själva.",
      includes: [
        "Design och uppsättning av en modern, responsiv hemsida",
        "Koppling av domän, drift och de tjänster som hemsidan behöver",
        "Löpande tekniskt underhåll så att hemsidan fungerar som den ska",
        "Upp till två enklare ändringar per månad",
        "Enklare ändringar genomförs inom 48 timmar",
        "Större omarbetningar lämnas på separat offert",
      ],
      outcome: "Ni får en färdig hemsida och en partner som ser till att tekniken, kopplingarna och det löpande underhållet fungerar.",
      practical: "Startavgiften är 9 999 kr. Därefter faktureras underhållet med 699 kr per månad. Samtliga priser är exklusive moms.",
    },
    recommended: true,
  },
  {
    id: "webb-engang",
    name: "Webbsida + årsfakturering",
    duration: "9 999 kr i startavgift",
    format: "5 988 kr/år",
    price: "Motsvarar 499 kr/mån",
    shortDesc: "Underhållet faktureras för ett år i förskott. Årsavgiften är 5 988 kr, vilket motsvarar 499 kr per månad.",
    fullDesc: {
      target: "Företag och organisationer som vill ha samma kompletta underhåll till ett lägre månadspris genom årsfakturering.",
      includes: [
        "Design och uppsättning av en modern, responsiv hemsida",
        "Koppling av domän, drift och de tjänster som hemsidan behöver",
        "Löpande tekniskt underhåll så att hemsidan fungerar som den ska",
        "Upp till två enklare ändringar per månad",
        "Enklare ändringar genomförs inom 48 timmar",
        "Större omarbetningar lämnas på separat offert",
      ],
      outcome: "Ni får en färdig hemsida och samma löpande service som i månadsalternativet, men till ett lägre pris.",
      practical: "Startavgiften är 9 999 kr. Underhållet faktureras för ett år i förskott: 5 988 kr per år, vilket motsvarar 499 kr per månad. Samtliga priser är exklusive moms.",
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
              Otroligt prisvärda
            </span>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Webbsidor
              </span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-slate-300 md:text-xl px-2">
              Vårt listpris för en hemsida är 9 999 kr i startavgift. Därefter sköter vi teknik, kopplingar och löpande underhåll åt er.
            </p>
          </div>

          {/* Intro-kort */}
          <div className="mx-auto mt-8 sm:mt-12 max-w-4xl px-2">
            <div className="rounded-2xl border border-violet-500/20 bg-slate-800/40 p-4 sm:p-6 md:p-8">
              <h2 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
                Så fungerar vårt <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">upplägg</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base lg:text-lg text-slate-300">
                Underhållet faktureras antingen månadsvis eller för ett år i förskott till ett lägre månadspris.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link 
                  href="/kontakt?type=paket&packages=webb-lopande"
                  className="rounded-xl border border-violet-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-800/60 hover:scale-105 cursor-pointer"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-violet-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Månadsfakturering</h3>
                  <p className="mt-2 text-sm text-slate-400">9 999 kr i startavgift och därefter fakturering med 699 kr per månad.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-400">
                    Boka möte <span>→</span>
                  </span>
                </Link>
                <Link 
                  href="/kontakt?type=paket&packages=webb-engang"
                  className="rounded-xl border border-violet-500/20 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-violet-500/50 hover:bg-slate-800/60 hover:scale-105 cursor-pointer"
                >
                  <div className="mx-auto h-12 w-12 rounded-full bg-violet-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Årsfakturering</h3>
                  <p className="mt-2 text-sm text-slate-400">9 999 kr i startavgift och en årsfaktura på 5 988 kr, motsvarande 499 kr per månad.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-400">
                    Boka möte <span>→</span>
                  </span>
                </Link>
              </div>
              <p className="mt-6 text-center text-sm text-slate-400">
                <span className="text-violet-400">Prisinformation:</span> Allt faktureras och samtliga priser anges exklusive moms. Årsavgiften faktureras i förskott.
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
                Vi lyssnar på era önskemål, förstår ert varumärke och bygger en modern hemsida som fungerar på mobil, surfplatta och dator. Vi kopplar upp allt och fortsätter sedan att sköta hemsidan åt er.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Modern, responsiv design",
                  "Anpassad efter er profil och varumärke",
                  "Uppsättning och nödvändiga kopplingar",
                  "Tekniskt underhåll och löpande tillsyn",
                  "Upp till två enklare ändringstillfällen per månad inom 48 timmar",
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
              Välj faktureringsperiod för <span className="text-violet-400">underhållet</span>
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
                  title: "Uppsättning & kopplingar",
                  desc: "Vi bygger hemsidan och kopplar ihop domän, drift och de tjänster som behövs.",
                },
                {
                  step: "4",
                  title: "Lansering & underhåll",
                  desc: "Vi lanserar hemsidan och sköter sedan teknik, underhåll och era enklare ändringar.",
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
            Redo för en hemsida med <span className="text-violet-400">tydliga priser</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Boka ett kostnadsfritt möte så går vi igenom era behov och berättar hur vi tar hand om hela hemsidan åt er.
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
