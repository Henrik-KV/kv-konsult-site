"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

/* ═══════════════════════════════════════════════════════════════════════════
   FÄRG- OCH GLÖD-STILAR
═══════════════════════════════════════════════════════════════════════════ */
const subtitleGlowStyles: React.CSSProperties = {
  boxShadow: '0 0 20px rgba(251, 146, 60, 0.4)',
  textShadow: '0 0 10px rgba(251, 146, 60, 0.5)'
};

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET DATA - Sociala medier
═══════════════════════════════════════════════════════════════════════════ */
const socialPackages = [
  {
    id: "social-bas",
    name: "Sociala medier Bas",
    duration: "Löpande/månad",
    format: "2 inlägg/vecka",
    price: "Offert",
    shortDesc: "Ett grundläggande upplägg för företag som vill komma igång med organisk närvaro på sociala medier. Vi tar fram innehåll, planerar och publicerar – ni godkänner.",
    fullDesc: {
      target: "Företag som vill etablera en organisk närvaro på sociala medier utan att lägga egen tid på innehållsproduktion.",
      includes: [
        "Onboarding: Vi lär känna ert varumärke och tonalitet",
        "2 inlägg per vecka på LinkedIn, Instagram och Facebook",
        "X (Twitter) som tillval",
        "Innehållsplanering med förhandsgodkännande",
        "Grundläggande bildbearbetning och grafik",
        "AI-stöd för effektiv textproduktion",
      ],
      outcome: "Ni får en aktiv organisk närvaro på sociala medier utan egen arbetsinsats.",
      practical: "Vi stämmer av innehåll veckovis. Ni godkänner innan publicering.",
    },
    recommended: true,
  },
  {
    id: "social-plus",
    name: "Sociala medier Plus",
    duration: "Löpande/månad",
    format: "1 inlägg/dag",
    price: "Offert",
    shortDesc: "Ett utökat upplägg med dagliga inlägg, mer strategi och tätare samarbete. Perfekt för företag som vill växa sin organiska närvaro och nå fler.",
    fullDesc: {
      target: "Företag som vill ha en starkare organisk närvaro och mer genomtänkt innehållsstrategi.",
      includes: [
        "Allt från Bas-paketet",
        "1 inlägg per dag på LinkedIn, Instagram och Facebook",
        "X (Twitter) som tillval",
        "Innehållsstrategi anpassad efter era mål",
        "Tätare avstämningar och samarbete",
        "Mer avancerad grafik och eventuellt kort video",
        "Kommentarshantering och enkel community management",
      ],
      outcome: "Ni får en stark och växande organisk närvaro med strategiskt planerat innehåll.",
      practical: "Veckovisa avstämningar. Vi hanterar kommentarer och engagemang åt er.",
    },
    recommended: false,
  },
  {
    id: "social-premium",
    name: "Sociala medier Premium",
    duration: "Löpande/månad",
    format: "2 inlägg/dag + video",
    price: "Offert",
    shortDesc: "Vårt mest omfattande upplägg för företag som vill ha en professionell, daglig organisk närvaro. Nära samarbete, mycket innehåll, kampanjer och djupare analys.",
    fullDesc: {
      target: "Företag som ser sociala medier som en viktig kanal och vill investera i att göra det ordentligt.",
      includes: [
        "Allt från Plus-paketet",
        "2 inlägg per dag på LinkedIn, Instagram och Facebook",
        "TikTok och YouTube ingår",
        "X (Twitter) som tillval",
        "Dedikerad kontaktperson för nära samarbete",
        "Kampanjplanering och genomförande",
        "Professionell video och grafik",
        "Aktiv community management och snabb respons",
        "Kvartalsvis strategimöte för att optimera och vidareutveckla",
      ],
      outcome: "Ni får en professionell, aktiv organisk närvaro som driver engagemang och affärsnytta.",
      practical: "Nära samarbete med dedikerad kontaktperson. Vi agerar som er externa marknadsavdelning.",
    },
    recommended: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET KORT KOMPONENT
═══════════════════════════════════════════════════════════════════════════ */
interface SocialPackage {
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

function SocialPackageCard({ pkg }: { pkg: SocialPackage }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        expanded
          ? "border-orange-500/30 bg-slate-800/60 shadow-xl shadow-orange-500/20"
          : "border-white/10 bg-slate-800/40 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10"
      } ${pkg.recommended ? 'ring-2 ring-orange-500/50' : ''}`}
    >
      <div className="p-4 sm:p-6 md:p-8">
        {/* Recommended badge */}
        {pkg.recommended && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white" style={{ boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
              Rekommenderas
            </span>
          </div>
        )}
        
        {/* Header */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">{pkg.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-orange-600/20 px-3 py-1 text-xs font-medium text-orange-400">
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
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-all duration-300 hover:gap-3"
        >
          {expanded ? "Visa mindre" : "Läs mer om paketet"}
          <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Expanderat innehåll */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-6 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
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
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-orange-600/20 text-orange-400 text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">* 1 ändring per vecka ingår. Fler ändringar kan göras mot tillägg.</p>
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
          </div>
        </div>

        {/* CTA - alltid synlig när expanderat */}
        <div
          className={`transition-all duration-500 ${
            expanded ? "mt-6 pt-4 border-t border-white/10 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <Link
            href={`/kontakt?type=paket&packages=${pkg.id}`}
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
          >
            Boka {pkg.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HUVUDSIDAN
═══════════════════════════════════════════════════════════════════════════ */
export default function SocialaMedierPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" />
        <ScrollIndicator className="bottom-20 sm:bottom-24" />

        <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20 lg:px-8">
          <div className="text-center">
            <span 
              className="inline-block rounded-full bg-orange-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-400" 
              style={subtitleGlowStyles}
            >
              Billigast i Sverige*
            </span>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Sociala medier
              </span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-slate-300 md:text-xl px-2">
              Vi hjälper företag att bygga organisk närvaro på LinkedIn, Instagram och Facebook – utan annonsering. Med AI-stöd för effektiv innehållsproduktion och ett upplägg som passar just er, från 2 inlägg i veckan till daglig närvaro.
            </p>
          </div>

          {/* Intro-kort */}
          <div className="mx-auto mt-8 sm:mt-12 max-w-4xl px-2">
            <div className="rounded-2xl border border-orange-500/20 bg-slate-800/40 p-4 sm:p-6 md:p-8">
              <h2 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
                Varför <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">sociala medier</span>?
              </h2>
              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base lg:text-lg text-slate-300">
                Sociala medier är där era kunder finns. Med rätt innehåll bygger ni förtroende, ökar synligheten och skapar affärsmöjligheter.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-orange-500/20 bg-slate-900/50 p-5 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-orange-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Ökad synlighet</h3>
                  <p className="mt-2 text-sm text-slate-400">Nå fler potentiella kunder där de redan finns.</p>
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-slate-900/50 p-5 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-orange-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Bygger förtroende</h3>
                  <p className="mt-2 text-sm text-slate-400">Aktivt innehåll visar att ni finns och bryr er.</p>
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-slate-900/50 p-5 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-orange-600/20 flex items-center justify-center">
                    <svg className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">Spara tid</h3>
                  <p className="mt-2 text-sm text-slate-400">Vi tar hand om allt – ni fokuserar på verksamheten.</p>
                </div>
              </div>
              <p className="mt-6 text-center text-xs text-slate-500">
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
                className="inline-flex w-fit rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-orange-500/10 text-orange-400"
                style={subtitleGlowStyles}
              >
                Organisk närvaro utan annonsering
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Inlägg</span> som engagerar
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
                Vi hjälper er att bygga organisk närvaro på LinkedIn, Instagram och Facebook – helt utan annonsering. Med AI-stöd för effektivitet och mänsklig touch för kvalitet skapar vi inlägg som verkligen når fram.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Innehåll anpassat efter ert varumärke",
                  "AI-stöd för effektiv produktion",
                  "Planering och publicering – ni godkänner",
                  "Regelbunden rapportering och analys",
                  "Flexibelt upplägg efter era behov",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-600/20 text-orange-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative flex items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl border border-orange-500/30 shadow-2xl bg-slate-800/30" style={{ boxShadow: '0 0 40px rgba(251, 146, 60, 0.25), 0 0 80px rgba(245, 158, 11, 0.1)' }}>
                <Image
                  src="/images/hero-ai-collaboration.jpg"
                  alt="Sociala medier-strategi"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-orange-600/20 to-amber-600/20 blur-xl" />
            </div>
          </div>

          {/* Paket-kort */}
          <div className="mt-12 sm:mt-16">
            <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white">
              Välj ert <span className="text-orange-400">paket</span>
            </h3>
            <div className="grid gap-6 lg:grid-cols-3">
              {socialPackages.map((pkg) => (
                <SocialPackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>

          {/* Hur vi jobbar */}
          <div className="mt-16 sm:mt-24">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Hur vi <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">jobbar</span>
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Onboarding",
                  desc: "Vi lär känna ert varumärke, tonalitet och mål. Vad vill ni uppnå?",
                },
                {
                  step: "2",
                  title: "Planering",
                  desc: "Vi tar fram en innehållsplan och stämmer av med er innan vi börjar.",
                },
                {
                  step: "3",
                  title: "Produktion",
                  desc: "Vi skapar innehåll med AI-stöd och mänsklig kvalitetskontroll.",
                },
                {
                  step: "4",
                  title: "Publicering & analys",
                  desc: "Vi publicerar, följer upp och rapporterar hur det går.",
                },
              ].map((item) => (
                <div key={item.step} className="rounded-xl border border-orange-500/20 bg-slate-800/50 p-6 text-center" style={{ boxShadow: '0 0 20px rgba(251, 146, 60, 0.08)' }}>
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-lg font-bold text-white" style={{ boxShadow: '0 0 15px rgba(251, 146, 60, 0.4)' }}>
                    {item.step}
                  </div>
                  <h4 className="mt-4 font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plattformar */}
          <div className="mt-16 sm:mt-24 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white md:text-3xl">
              Vilka <span className="text-orange-400">plattformar</span>?
            </h3>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Vi hjälper er på de plattformar som passar er målgrupp – LinkedIn, Instagram, Facebook, TikTok eller andra. Vi anpassar innehållet efter varje plattforms format och bästa praxis.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["LinkedIn", "Instagram", "Facebook", "TikTok", "X (Twitter)", "YouTube"].map((platform) => (
                <span 
                  key={platform}
                  className="rounded-full border border-orange-500/20 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-orange-500/50 hover:bg-slate-800/80 hover:text-white"
                >
                  {platform}
                </span>
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
            Redo att bli mer <span className="text-orange-400">synliga</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Boka ett kostnadsfritt möte så pratar vi igenom hur vi kan hjälpa er att växa på sociala medier.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt?type=paket&packages=social-plus"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:scale-105"
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
