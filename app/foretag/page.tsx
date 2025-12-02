"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* Lavalampa bakgrund - ljusblå */
function LavaLampBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/20 blur-[100px] animate-blob-1" />
      <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[100px] animate-blob-2" />
      <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[80px] animate-blob-3" />
    </div>
  );
}

/* Fokusområden för företag */
const focusAreas = [
  {
    id: "effektivare-administration",
    title: "Effektivare administration",
    summary: "Automatisera rutinuppgifter och frigör tid för kärnverksamheten.",
    fullContent: {
      description: "Administrativa uppgifter tar ofta mer tid än nödvändigt. Med AI i Microsoft 365 kan ni automatisera mejl, sammanfatta möten och skapa rapporter snabbare.",
      points: [
        "Automatiska mötessammanfattningar med Copilot",
        "Snabbare mejlhantering och svar",
        "Effektivare dokumenthantering",
        "Automatiserad rapportering",
      ],
      link: "/tjanster#microsoft365",
      linkText: "Se Microsoft 365-paket",
    },
  },
  {
    id: "starkare-saljstod",
    title: "Starkare säljstöd",
    summary: "AI-verktyg som hjälper säljteamet att jobba smartare, inte hårdare.",
    fullContent: {
      description: "Säljare lägger ofta för mycket tid på administration. Med AI kan ni frigöra tid för det viktigaste: att bygga relationer och stänga affärer.",
      points: [
        "Personaliserade offerter och presentationer",
        "Automatiserad prospektering",
        "CRM-analys och leads-prioritering",
        "Förberedelse inför kundmöten",
      ],
      link: "/tjanster#workshops",
      linkText: "Se AI-utbildningar",
    },
  },
  {
    id: "trygg-ai-strategi",
    title: "Trygg AI-strategi",
    summary: "En tydlig plan för hur ni kommer igång med AI – utan att ta onödiga risker.",
    fullContent: {
      description: "Många företag vet att de borde satsa på AI, men vet inte var de ska börja. Vi hjälper er att prioritera och komma igång på ett säkert sätt.",
      points: [
        "Kartläggning av AI-potential",
        "Riskanalys och säkerhetsgenomgång",
        "Prioriterad handlingsplan",
        "ROI-beräkningar för AI-investeringar",
      ],
      link: "/tjanster#nulagesanalys",
      linkText: "Se nulägesanalys",
    },
  },
  {
    id: "ai-driven-kundservice",
    title: "AI-driven kundservice",
    summary: "Snabbare svar och bättre service med AI-stöd.",
    fullContent: {
      description: "Kundserviceteam kan hantera ärenden snabbare och mer konsekvent med AI-verktyg som hjälper till med svar och analys.",
      points: [
        "AI-assisterade svarsförslag",
        "Automatisk ärendesammanfattning",
        "Sentimentanalys av kundfeedback",
        "Kunskapsdatabas med AI-sökning",
      ],
      link: "/tjanster#ai-partner",
      linkText: "Se AI-partner",
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
          ? "border-cyan-500/40 bg-slate-800/70 shadow-xl shadow-cyan-500/20"
          : "border-white/10 bg-slate-800/40 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/15"
      }`}
    >
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-white md:text-2xl">
          {area.title}
        </h3>
        <p className="mt-3 text-base text-slate-300 leading-relaxed">{area.summary}</p>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition-all duration-300 hover:text-cyan-300 hover:gap-3"
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
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xs">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={area.fullContent.link}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:scale-105"
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

const useCases = [
  {
    area: "Ledning",
    areaWhite: "",
    areaAccent: "Ledning",
    summary: "Snabbare beslutsunderlag och effektivare strategiarbete.",
    fullContent: {
      description: "Ledningsgrupper kan använda AI för att snabbt analysera stora mängder information, få bättre beslutsunderlag och effektivisera strategiarbetet.",
      points: [
        "Sammanfattning av långa rapporter och utredningar",
        "Omvärldsbevakning och konkurrentanalys",
        "Automatiska mötessammanfattningar och action points",
        "Stöd vid budgetarbete och prognoser",
      ],
    },
  },
  {
    area: "Sälj",
    areaWhite: "",
    areaAccent: "Sälj",
    summary: "Jobba smartare med prospektering och kundkommunikation.",
    fullContent: {
      description: "Säljteam kan frigöra tid från administration och lägga mer energi på att bygga relationer och stänga affärer.",
      points: [
        "Automatiserad prospektering och leadsgenerering",
        "Personaliserade offerter och presentationer",
        "CRM-analys och prioritering av leads",
        "Förberedelse inför kundmöten med AI-stöd",
      ],
    },
  },
  {
    area: "HR",
    areaWhite: "",
    areaAccent: "HR",
    summary: "Effektivisera rekrytering, onboarding och policyarbete.",
    fullContent: {
      description: "HR-avdelningar kan spara många timmar per vecka genom att använda AI för repetitiva uppgifter och dokumentation.",
      points: [
        "Effektivare screening av ansökningar",
        "Automatiserat onboarding-material",
        "Stöd vid policyutveckling och dokumentation",
        "Analys av medarbetarenkäter och feedback",
      ],
    },
  },
  {
    area: "Ekonomi",
    areaWhite: "",
    areaAccent: "Ekonomi",
    summary: "Automatisera rapporter, prognoser och fakturahantering.",
    fullContent: {
      description: "Ekonomiavdelningar kan använda AI för att snabba upp rapportering, förbättra prognoser och effektivisera rutinarbete.",
      points: [
        "Automatiserade månads- och kvartalsrapporter",
        "Förbättrade prognoser med AI-analys",
        "Effektivare fakturahantering och matchning",
        "Avvikelseanalys och tidig varning",
      ],
    },
  },
  {
    area: "Kundservice",
    areaWhite: "",
    areaAccent: "Kundservice",
    summary: "Snabbare svar och bättre service med AI-assistans.",
    fullContent: {
      description: "Kundserviceteam kan hantera ärenden snabbare och mer konsekvent med AI-verktyg som hjälper till med svar och analys.",
      points: [
        "AI-assisterade svarsförslag i realtid",
        "Automatisk ärendesammanfattning",
        "Sentimentanalys av kundfeedback",
        "Kunskapsdatabas med smart AI-sökning",
      ],
    },
  },
  {
    area: "Produktion",
    areaWhite: "",
    areaAccent: "Produktion",
    summary: "Optimera processer och förutse underhållsbehov.",
    fullContent: {
      description: "Produktionsavdelningar kan använda AI för att optimera processer, minska stillestand och förbättra kvaliteten.",
      points: [
        "Prediktivt underhåll – förutse problem innan de uppstår",
        "Kvalitetskontroll med bildigänkänning",
        "Processoptimering baserat på dataanalys",
        "Lageroptimering och demand forecasting",
      ],
    },
  },
];

/* Expanderbart avdelningskort */
function UseCaseCard({ useCase }: { useCase: typeof useCases[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
        expanded
          ? "border-teal-500/40 bg-slate-800/70 shadow-xl shadow-teal-500/20"
          : "border-white/10 bg-slate-800/50 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/15"
      }`}
    >
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-white">
          <span className="text-teal-400">{useCase.areaAccent}</span>
        </h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{useCase.summary}</p>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-all duration-300 hover:text-teal-300 hover:gap-3"
        >
          {expanded ? "Visa mindre" : "Läs mer"}
          <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Expanderat innehåll */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-4 max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-3 border-t border-white/10 pt-4">
            <p className="text-sm text-slate-400">{useCase.fullContent.description}</p>
            <ul className="space-y-2">
              {useCase.fullContent.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-xs">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ForetagPage() {
  return (
    <main>
      {/* Hero med bild */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28">
        <LavaLampBackground />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                För företag
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                AI som driver{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  affärsnytta
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Vi hjälper ledning, sälj, HR, ekonomi och kundservice att använda AI på ett sätt som frigör tid, höjer kvaliteten och skapar konkurrensfördelar.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kontakt?type=avstamning"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:scale-105"
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

            {/* Hero-bild */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/hero-foretag-office.jpg"
                  alt="Företagsteam som arbetar i öppet kontor"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
                        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Näringsliv</p>
                        <p className="text-sm text-slate-400">Anpassat för företag</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-cyan-600/20 to-teal-600/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Fokusområden - klickbara kort */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Era utmaningar
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Så hjälper AI ert <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">företag</span>
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

      {/* Snabblänkar till paket */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <LavaLampBackground />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400">
              Våra paket
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Välj det som <span className="text-cyan-400">passar</span> er bäst
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Microsoft 365",
                description: "Lär er Copilot i Word, Excel, Teams och Outlook",
                link: "/tjanster#microsoft365",
                color: "sky",
              },
              {
                title: "Generell AI",
                description: "ChatGPT, Copilot och andra verktyg för hela teamet",
                link: "/tjanster#workshops",
                color: "cyan",
              },
              {
                title: "Nulägesanalys",
                description: "Kartläggning och handlingsplan för er AI-resa",
                link: "/tjanster#nulagesanalys",
                color: "teal",
              },
              {
                title: "AI-partner",
                description: "Löpande stöd och rådgivning över tid",
                link: "/tjanster#ai-partner",
                color: "emerald",
              },
            ].map((pkg) => (
              <Link
                key={pkg.title}
                href={pkg.link}
                className={`group rounded-2xl border border-white/10 bg-slate-800/40 p-6 transition-all duration-500 hover:border-${pkg.color}-500/30 hover:bg-slate-800/60 hover:-translate-y-1`}
              >
                <h3 className="text-lg font-semibold text-white">{pkg.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{pkg.description}</p>
                <span className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-${pkg.color}-400 transition-all group-hover:gap-3`}>
                  Se paket
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Användningsområden per avdelning */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-teal-400">
              AI i praktiken
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              AI <span className="text-teal-400">i användning</span> per avdelning
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Klicka på en avdelning för att se konkreta exempel på hur AI kan skapa värde.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <UseCaseCard key={i} useCase={uc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <LavaLampBackground />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Redo att accelerera med AI?
          </h2>
          <p className="mt-4 text-slate-400">
            Vi börjar gärna med ett kostnadsfritt samtal för att förstå era behov och ge konkreta tips.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt?type=avstamning"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Kontakta oss
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/tjanster"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Se alla tjänster & paket
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
