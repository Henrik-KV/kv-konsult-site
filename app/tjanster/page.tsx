"use client";

import Link from "next/link";
import Image from "next/image";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

/* ═══════════════════════════════════════════════════════════════════════════
   TJÄNSTEKATEGORI-DATA
═══════════════════════════════════════════════════════════════════════════ */
const serviceCategories = [
  {
    id: "utbildning-ai",
    title: "Utbildning & partnerskap",
    subtitle: "Föreläsningar, workshops & rådgivning",
    description: "Gör AI begripligt och användbart för hela organisationen. Föreläsningar om Microsoft 365 Copilot, praktiska workshops, nulägesanalys och löpande AI-partnerskap.",
    image: "/images/service-microsoft365.jpg",
    imageAlt: "AI-utbildning och workshop",
    href: "/utbildning-ai",
    color: "sky",
    gradient: "from-sky-500 to-cyan-500",
    features: [
      "Föreläsningar: Microsoft 365 Bas & Bas+",
      "Praktiska workshops med live-demo",
      "AI Nulägesanalys & handlingsplan",
      "Löpande AI-partner (Lite & Full)",
    ],
  },
  {
    id: "webbsidor",
    title: "Webbsidor",
    subtitle: "Moderna webbsidor med AI-stöd",
    description: "Vi designar och bygger professionella webbsidor anpassade efter ert varumärke. Välj mellan engångsleverans eller löpande stöd där vi sköter allt åt er.",
    image: "/images/service-web.jpg",
    imageAlt: "Modern webbdesign",
    href: "/webbsidor",
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Modern, responsiv design",
      "AI-stöd för effektiv innehållsproduktion",
      "Engångsleverans eller löpande stöd",
      "Flexibla plattformar: WordPress, Next.js m.fl.",
    ],
  },
  {
    id: "sociala-medier",
    title: "Sociala medier",
    subtitle: "Löpande innehållsproduktion",
    description: "Vi hjälper er att bygga närvaro och engagemang på sociala medier. Innehållsplanering, produktion och publicering – ni fokuserar på verksamheten.",
    image: "/images/hero-ai-collaboration.jpg",
    imageAlt: "Sociala medier strategi",
    href: "/sociala-medier",
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    features: [
      "Innehåll anpassat efter ert varumärke",
      "Planering, produktion & publicering",
      "AI-stöd för effektivitet",
      "Analys och månadsrapportering",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   TJÄNSTEKORT KOMPONENT
═══════════════════════════════════════════════════════════════════════════ */
interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  color: string;
  gradient: string;
  features: string[];
}

function ServiceCard({ category }: { category: ServiceCategory }) {
  const colorClasses: Record<string, { text: string; border: string; glow: string; bg: string }> = {
    sky: { 
      text: "text-sky-400", 
      border: "border-sky-500/30", 
      glow: "hover:shadow-sky-500/20",
      bg: "bg-sky-600/20"
    },
    violet: { 
      text: "text-violet-400", 
      border: "border-violet-500/30", 
      glow: "hover:shadow-violet-500/20",
      bg: "bg-violet-600/20"
    },
    orange: { 
      text: "text-orange-400", 
      border: "border-orange-500/30", 
      glow: "hover:shadow-orange-500/20",
      bg: "bg-orange-600/20"
    },
  };

  const colors = colorClasses[category.color] || colorClasses.sky;

  return (
    <Link
      href={category.href}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 transition-all duration-500 hover:border-white/20 hover:shadow-xl ${colors.glow}`}
    >
      {/* Bild */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        {/* Subtitle badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`inline-block rounded-full ${colors.bg} px-3 py-1 text-xs font-medium ${colors.text}`}>
            {category.subtitle}
          </span>
        </div>
      </div>

      {/* Innehåll */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
          {category.title}
        </h3>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed">
          {category.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2">
          {category.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <span className={`flex h-4 w-4 items-center justify-center rounded-full ${colors.bg} ${colors.text} text-xs`}>✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
          Läs mer
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>

      {/* Hover-effekt i hörnet */}
      <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${category.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HUVUDSIDAN
═══════════════════════════════════════════════════════════════════════════ */
export default function TjansterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" />
        <ScrollIndicator className="bottom-8" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sky-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)', textShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}>
              Våra tjänster
            </span>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Tjänster &{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Paket
              </span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg text-slate-300 md:text-xl">
              Vi erbjuder tre huvudområden – utbildning & AI-partnerskap, webbsidor och sociala medier. Alla våra tjänster kan kombineras och skräddarsys efter just era behov.
            </p>
          </div>
        </div>
      </section>

      {/* Tjänstekort */}
      <section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <ServiceCard key={category.id} category={category} />
            ))}
          </div>

          {/* Extra info */}
          <div className="mt-16 text-center">
            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-bold text-white md:text-3xl">
                Osäker på var ni ska <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">börja</span>?
              </h2>
              <p className="mt-4 text-slate-400">
                Boka ett kostnadsfritt avstämningsmöte så hjälper vi er att hitta rätt upplägg. Vi lyssnar på era behov och föreslår en kombination som passar er organisation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/kontakt?type=avstamning"
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-105"
                >
                  Boka avstämningsmöte
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
          </div>
        </div>
      </section>

      {/* Målgrupper */}
      <section className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
              Vi hjälper både <span className="text-sky-400">kommuner</span> och <span className="text-cyan-400">företag</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Vi anpassar våra tjänster efter er typ av organisation och era specifika utmaningar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/kommuner"
              className="group rounded-2xl border border-white/10 bg-slate-800/40 p-6 sm:p-8 transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 text-2xl">
                  🏛️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    För kommuner
                  </h3>
                  <p className="text-sm text-slate-400">
                    AI-utbildning och stöd för offentlig sektor
                  </p>
                </div>
              </div>
              <p className="mt-4 text-slate-400">
                Vi förstår kommuners unika förutsättningar kring säkerhet, upphandling och organisation. Läs mer om hur vi hjälper kommuner att komma igång med AI.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-sky-400 group-hover:gap-3 transition-all duration-300">
                Läs mer om kommuner
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>

            <Link
              href="/foretag"
              className="group rounded-2xl border border-white/10 bg-slate-800/40 p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 text-2xl">
                  🏢
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    För företag
                  </h3>
                  <p className="text-sm text-slate-400">
                    AI-utbildning och digitala tjänster för privat sektor
                  </p>
                </div>
              </div>
              <p className="mt-4 text-slate-400">
                Oavsett bransch och storlek hjälper vi företag att dra nytta av AI, bygga digital närvaro och spara tid. Läs mer om hur vi kan hjälpa just er.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:gap-3 transition-all duration-300">
                Läs mer om företag
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
