"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import VideoBackground, { ScrollIndicator } from "../components/VideoBackground";

/* ═══════════════════════════════════════════════════════════════════════════
   APP DATA
═══════════════════════════════════════════════════════════════════════════ */
interface DemoApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  screens: { src: string; label: string }[];
  gradient: string;
  gradientVia: string;
  accentColor: string;
  glowColor: string;
}

const demoApps: DemoApp[] = [
  {
    id: "lagesbild",
    name: "Lägesbild",
    tagline: "Din allt-i-allo-planerare",
    description:
      "Appen för dig som vill ha de senaste nyheterna kring brott, trafik, resesvårigheter och väder. Nyheter lokalt, nationellt och internationellt – allt samlat på ett ställe för att hålla dig uppdaterad.",
    features: [
      "Senaste nyheterna – lokalt, nationellt & internationellt",
      "Realtidsinfo om brott, trafik & resesvårigheter",
      "Väderprognos & varningar",
      "Interaktiv karta med live-data",
    ],
    screens: [
      { src: "/images/app-mockup/Lagesbild-Nu.jpg", label: "Nuläge" },
      { src: "/images/app-mockup/Lagesbild-karta.jpg", label: "Karta" },
      { src: "/images/app-mockup/Lagesbild-Resa.jpg", label: "Reseplan" },
    ],
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    gradientVia: "from-sky-400 via-cyan-400 to-teal-400",
    accentColor: "sky",
    glowColor: "rgba(56, 189, 248, 0.4)",
  },
  {
    id: "massy",
    name: "MÄSSY",
    tagline: "Komplett mäss-app för hela eventet",
    description:
      "En komplett mäss-app som hanterar allt en mässa kan behöva – parkering, lunch- och drycksystem, QR-kodlösningar för behörighet, information om utställare och mycket mer. Allt samlat i en smidig app.",
    features: [
      "Biljetthafte & digitala entrébiljetter",
      "Lunch- & drycksystem med digital betalning",
      "QR-kodlösning för behörighet & access",
      "Komplett info om utställare & schema",
    ],
    screens: [
      { src: "/images/app-mockup/Massy-qr.jpg", label: "QR-scan" },
      { src: "/images/app-mockup/Massy-start.jpg", label: "Start" },
      { src: "/images/app-mockup/Massy-biljetthafte.jpg", label: "Biljetthafte" },
    ],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    gradientVia: "from-violet-400 via-purple-400 to-fuchsia-400",
    accentColor: "violet",
    glowColor: "rgba(167, 139, 250, 0.4)",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   PHONE MOCKUP – Realistic device frame with optional light sweep
═══════════════════════════════════════════════════════════════════════════ */
function PhoneMockup({
  src,
  alt,
  className = "",
  glowColor = "rgba(56, 189, 248, 0.3)",
  showLightSweep = false,
  size = "md",
}: {
  src: string;
  alt: string;
  className?: string;
  glowColor?: string;
  showLightSweep?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-[140px] sm:w-[170px]",
    md: "w-[190px] sm:w-[230px] md:w-[250px]",
    lg: "w-[220px] sm:w-[260px] md:w-[280px]",
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`relative mx-auto ${sizeClasses[size]}`}>
        {/* Colored glow behind phone */}
        <div
          className="absolute -inset-6 rounded-[3rem] blur-3xl opacity-50 transition-opacity duration-700"
          style={{ background: `radial-gradient(ellipse, ${glowColor}, transparent 70%)` }}
        />

        {/* Device frame – titanium style */}
        <div
          className="relative rounded-[2.4rem] p-[5px] shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #5a5a6e 0%, #2a2a3e 30%, #1a1a2e 60%, #3a3a4e 100%)",
            boxShadow: `0 25px 60px -15px rgba(0,0,0,0.6), 0 0 40px -10px ${glowColor}`,
          }}
        >
          {/* Inner bezel */}
          <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-[6px] z-30 -translate-x-1/2">
              <div
                className="h-[20px] w-[80px] rounded-full"
                style={{
                  background: "linear-gradient(180deg, #000 0%, #111 100%)",
                  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
                }}
              />
            </div>

            {/* Screen – show full image without cropping */}
            <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "9/19" }}>
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
                quality={90}
                priority
              />

              {/* Glass reflection overlay */}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, transparent 70%, rgba(255,255,255,0.02) 100%)",
                }}
              />
            </div>

            {/* Animated light sweep */}
            {showLightSweep && (
              <div className="phone-light-sweep pointer-events-none absolute inset-0 z-20" />
            )}
          </div>

          {/* Physical buttons */}
          <div className="absolute -left-[1.5px] top-[72px] h-[22px] w-[2.5px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-600" />
          <div className="absolute -left-[1.5px] top-[102px] h-[38px] w-[2.5px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-600" />
          <div className="absolute -left-[1.5px] top-[148px] h-[38px] w-[2.5px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-600" />
          <div className="absolute -right-[1.5px] top-[100px] h-[50px] w-[2.5px] rounded-r-sm bg-gradient-to-b from-slate-500 to-slate-600" />
        </div>

        {/* Top edge highlight */}
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO PHONE SHOWCASE – Angled phones, auto-flip with light animation
═══════════════════════════════════════════════════════════════════════════ */
function HeroPhoneShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const allScreens = [
    ...demoApps[0].screens.map((s) => ({ ...s, app: demoApps[0] })),
    ...demoApps[1].screens.map((s) => ({ ...s, app: demoApps[1] })),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allScreens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [allScreens.length]);

  const prevIdx = (activeIndex - 1 + allScreens.length) % allScreens.length;
  const nextIdx = (activeIndex + 1) % allScreens.length;

  return (
    <div className="relative" style={{ perspective: "1800px" }}>
      {/* Ambient glow below */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-[70px] w-[80%] rounded-full bg-gradient-to-r from-sky-500/25 via-cyan-500/15 to-violet-500/25 blur-[50px]" />

      {/* Arrow navigation */}
      <button
        onClick={() => setActiveIndex((prev) => (prev - 1 + allScreens.length) % allScreens.length)}
        className="absolute left-0 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
        aria-label="Föregående"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setActiveIndex((prev) => (prev + 1) % allScreens.length)}
        className="absolute right-0 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
        aria-label="Nästa"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex items-center justify-center gap-0 sm:gap-1">
        {/* Left angled phone */}
        <motion.div
          key={`left-${prevIdx}`}
          initial={{ opacity: 0, rotateY: 50, x: -30 }}
          animate={{ opacity: 0.55, rotateY: 28, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-10 hidden sm:block"
        >
          <PhoneMockup
            src={allScreens[prevIdx].src}
            alt={allScreens[prevIdx].label}
            glowColor={allScreens[prevIdx].app.glowColor}
            size="sm"
          />
        </motion.div>

        {/* Center phone – hero with flip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`center-${activeIndex}`}
            initial={{ opacity: 0, rotateY: -90, scale: 0.85 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 90, scale: 0.85 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative z-20"
          >
            <PhoneMockup
              src={allScreens[activeIndex].src}
              alt={allScreens[activeIndex].label}
              glowColor={allScreens[activeIndex].app.glowColor}
              showLightSweep
              size="lg"
            />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-center"
            >
              <span className="text-xs font-semibold text-white/70 sm:text-sm">
                {allScreens[activeIndex].app.name}
                <span className="mx-1.5 text-white/25">·</span>
                <span className="text-white/45">{allScreens[activeIndex].label}</span>
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Right angled phone */}
        <motion.div
          key={`right-${nextIdx}`}
          initial={{ opacity: 0, rotateY: -50, x: 30 }}
          animate={{ opacity: 0.55, rotateY: -28, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-10 hidden sm:block"
        >
          <PhoneMockup
            src={allScreens[nextIdx].src}
            alt={allScreens[nextIdx].label}
            glowColor={allScreens[nextIdx].app.glowColor}
            size="sm"
          />
        </motion.div>
      </div>

      {/* Dot navigation */}
      <div className="mt-5 flex items-center justify-center gap-1.5">
        {allScreens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "w-7 bg-gradient-to-r from-sky-400 to-cyan-400"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   3D PHONE CAROUSEL – Interactive with arrow navigation
═══════════════════════════════════════════════════════════════════════════ */
function PhoneCarousel({
  screens,
  appName,
  gradient,
  glowColor,
}: {
  screens: DemoApp["screens"];
  appName: string;
  gradient: string;
  glowColor: string;
}) {
  const [centerIdx, setCenterIdx] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const leftIdx = (centerIdx - 1 + screens.length) % screens.length;
  const rightIdx = (centerIdx + 1) % screens.length;

  return (
    <div ref={ref} className="relative py-4" style={{ perspective: "1400px" }}>
      {/* Arrow navigation */}
      <button
        onClick={() => setCenterIdx(leftIdx)}
        className="absolute left-0 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
        aria-label="Föregående"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCenterIdx(rightIdx)}
        className="absolute right-0 top-1/2 z-30 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10"
        aria-label="Nästa"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Color glow under phones */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[80px] w-[70%] rounded-full blur-[50px] opacity-30"
        style={{ background: `radial-gradient(ellipse, ${glowColor}, transparent 70%)` }}
      />

      <div className="flex items-center justify-center">
        {/* Left */}
        <div
          className="relative z-10 -mr-3 sm:-mr-1 opacity-70 scale-[0.85]"
          style={{ transform: "perspective(1400px) rotateY(22deg) scale(0.85)", transformStyle: "preserve-3d" }}
        >
          <PhoneMockup src={screens[leftIdx].src} alt={`${appName} – ${screens[leftIdx].label}`} glowColor={glowColor} size="sm" />
          <p className="mt-2 text-center text-[10px] font-medium text-slate-500 sm:text-xs">{screens[leftIdx].label}</p>
        </div>

        {/* Center */}
        <div
          className="relative z-20"
        >
          <PhoneMockup src={screens[centerIdx].src} alt={`${appName} – ${screens[centerIdx].label}`} glowColor={glowColor} showLightSweep size="md" />
          <p className="mt-2 text-center text-xs font-semibold text-white/80 sm:text-sm">{screens[centerIdx].label}</p>
        </div>

        {/* Right */}
        <div
          className="relative z-10 -ml-3 sm:-ml-1 opacity-70 scale-[0.85]"
          style={{ transform: "perspective(1400px) rotateY(-22deg) scale(0.85)", transformStyle: "preserve-3d" }}
        >
          <PhoneMockup src={screens[rightIdx].src} alt={`${appName} – ${screens[rightIdx].label}`} glowColor={glowColor} size="sm" />
          <p className="mt-2 text-center text-[10px] font-medium text-slate-500 sm:text-xs">{screens[rightIdx].label}</p>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {screens.map((screen, i) => (
          <button
            key={i}
            onClick={() => setCenterIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === centerIdx
                ? "w-6 bg-gradient-to-r from-white/60 to-white/40"
                : "w-1.5 bg-white/15 hover:bg-white/30"
            }`}
            aria-label={screen.label}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATED SECTION WRAPPER
═══════════════════════════════════════════════════════════════════════════ */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FEATURE ITEM
═══════════════════════════════════════════════════════════════════════════ */
function FeatureItem({ text, index, accentColor }: { text: string; index: number; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const accent = accentColor === "violet"
    ? "from-violet-500/20 to-purple-500/20 ring-violet-500/30 text-violet-400"
    : "from-sky-500/20 to-cyan-500/20 ring-sky-500/30 text-sky-400";

  const parts = accent.split(" ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -15 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex items-start gap-3 py-1"
    >
      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${parts[0]} ${parts[1]} ring-1 ${parts[2]}`}>
        <svg className={`h-3 w-3 ${parts[3]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm leading-relaxed text-slate-300">{text}</span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TECH BADGE
═══════════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════════
   HERO – Phone showcase right on landing
═══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <VideoBackground brightness={1.0} blur={4} overlayOpacity={0.6} />

      <div
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-6 sm:pt-10 lg:px-8"
      >
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left – text */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Från idé till{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                fungerande app
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Här visar vi demo-appar som ger en vision av vad vi kan bygga – för
              kommuner och företag. Från idé till färdig app, skräddarsytt efter era behov.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start justify-center"
            >
              <Link
                href="/kontakt?type=demo"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-105"
              >
                <span className="relative z-10">Boka en demo</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/losningsarkitekter"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-105"
              >
                Se paket & priser
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-6 sm:gap-10 justify-center lg:justify-start"
            >
              {[
                { icon: <svg className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>, label: "Skräddarsytt" },
                { icon: <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>, label: "Snabb leverans" },
                { icon: <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, label: "Säker drift" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  {s.icon}
                  <span className="text-xs font-semibold text-slate-300 sm:text-sm">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Phone showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <HeroPhoneShowcase />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pb-6 flex justify-center"
        >
          <ScrollIndicator className="relative bottom-0" />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   APP SHOWCASE SECTION
═══════════════════════════════════════════════════════════════════════════ */
function AppShowcase({ app, index }: { app: DemoApp; index: number }) {
  const isReversed = index % 2 !== 0;
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-12 sm:py-24 md:py-32">
      {/* Background glow */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div
          className={`absolute ${isReversed ? "right-0" : "left-0"} top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.06] blur-[100px]`}
          style={{ background: `radial-gradient(circle, ${app.glowColor}, transparent 70%)` }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section number */}
        <AnimatedSection>
          <div className="mb-10 flex items-center gap-4 sm:mb-14">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-sm font-bold text-white/60 ring-1 ring-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </AnimatedSection>

        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            isReversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Text */}
          <div className={isReversed ? "lg:[direction:ltr]" : ""}>
            <AnimatedSection>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-400 backdrop-blur-sm mb-4">
                Demo &middot; Visionskoncept
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {app.name}
              </h2>
              <p className={`mt-2 text-sm font-semibold sm:text-base bg-gradient-to-r ${app.gradientVia} bg-clip-text text-transparent`}>
                {app.tagline}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                {app.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.24}>
              <div className="mt-6 space-y-1.5">
                {app.features.map((f, i) => (
                  <FeatureItem key={f} text={f} index={i} accentColor={app.accentColor} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.32}>
              <div className="mt-8">
                <Link
                  href="/kontakt?type=demo"
                  className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r ${app.gradient} px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
                >
                  <span className="relative z-10">Boka demo av {app.name}</span>
                  <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Phones */}
          <div className={isReversed ? "lg:[direction:ltr]" : ""}>
            <AnimatedSection delay={0.15}>
              <PhoneCarousel screens={app.screens} appName={app.name} gradient={app.gradient} glowColor={app.glowColor} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   "DIN APP" – COMING SOON SECTION
═══════════════════════════════════════════════════════════════════════════ */
function YourAppSection() {

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500/6 via-teal-500/4 to-cyan-500/6 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="mb-10 flex items-center gap-4 sm:mb-14">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-sm font-bold text-white/60 ring-1 ring-white/10">03</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="flex flex-col items-center text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Nästa projekt?{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Din app.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Har du en idé som väntar på att bli verklighet? Vi tar den från skiss till
              fungerande prototyp – snabbt, professionellt och med teknik som imponerar.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mt-10">
              <div className="relative mx-auto w-[190px] sm:w-[230px] md:w-[250px]">
                <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-b from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl" />

                <Link href="/kontakt?type=app" className="group">
                <div
                  className="relative rounded-[2.4rem] p-[5px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(145deg, #5a5a6e 0%, #2a2a3e 30%, #1a1a2e 60%, #3a3a4e 100%)",
                    boxShadow: "0 25px 60px -15px rgba(0,0,0,0.6), 0 0 40px -10px rgba(52,211,153,0.3)",
                  }}
                >
                  <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
                    <div className="absolute left-1/2 top-[6px] z-20 -translate-x-1/2">
                      <div className="h-[20px] w-[80px] rounded-full" style={{ background: "linear-gradient(180deg, #000, #111)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)" }} />
                    </div>

                    <div className="relative flex w-full flex-col items-center justify-center" style={{ aspectRatio: "9/19" }}>
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                        <div className="absolute inset-0 animate-ping rounded-full border border-emerald-500/20" style={{ animationDuration: "3s" }} />
                        <div className="absolute inset-3 animate-ping rounded-full border border-teal-500/20" style={{ animationDuration: "3s", animationDelay: "0.6s" }} />
                        <div className="absolute inset-6 animate-ping rounded-full border border-cyan-500/20" style={{ animationDuration: "3s", animationDelay: "1.2s" }} />
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-emerald-400/40 group-hover:from-emerald-500/20 group-hover:to-teal-500/20">
                          <svg className="h-8 w-8 text-emerald-400 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </div>
                      </div>
                      <p
                        className="relative mt-5 text-xs font-bold sm:text-sm bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
                        style={{ textShadow: '0 0 20px rgba(52, 211, 153, 0.8), 0 0 40px rgba(45, 212, 191, 0.5)' }}
                      >Din app här</p>
                    </div>
                  </div>

                  <div className="absolute -left-[1.5px] top-[72px] h-[22px] w-[2.5px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-600" />
                  <div className="absolute -left-[1.5px] top-[102px] h-[38px] w-[2.5px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-600" />
                  <div className="absolute -left-[1.5px] top-[148px] h-[38px] w-[2.5px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-600" />
                  <div className="absolute -right-[1.5px] top-[100px] h-[50px] w-[2.5px] rounded-r-sm bg-gradient-to-b from-slate-500 to-slate-600" />
                </div>
                </Link>

                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="phone-light-sweep pointer-events-none absolute inset-0 z-20 rounded-[2.4rem] overflow-hidden" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/kontakt?type=projekt"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/35 hover:scale-105"
              >
                <span className="relative z-10">Berätta om din idé</span>
                <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/losningsarkitekter"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-105"
              >
                Se våra paket
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROCESS SECTION
═══════════════════════════════════════════════════════════════════════════ */
function ProcessSection() {
  const steps = [
    { num: "01", title: "Idé & kravanalys", desc: "Vi lyssnar in er idé, identifierar krav och skissar på en plan.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg> },
    { num: "02", title: "Design & prototyp", desc: "Interaktiva prototyper som ni kan testa och ge feedback på.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg> },
    { num: "03", title: "Utveckling", desc: "Agil utveckling med veckovisa demos och full transparens.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
    { num: "04", title: "Lansering & support", desc: "Vi lanserar och stödjer er efter go-live.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg> },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Så tar vi din idé till{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">verklighet</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 sm:text-base">Vår beprövade process ger er full transparens från dag ett.</p>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]">
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/15 to-cyan-500/15 text-sky-400 ring-1 ring-sky-500/15">{step.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Steg {step.num}</span>
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   FLOATING BACKGROUND ELEMENTS
═══════════════════════════════════════════════════════════════════════════ */
function FloatingElements() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ y: y1, rotate: r1 }} className="absolute left-[8%] top-[18%] h-28 w-28 rounded-2xl border border-sky-500/[0.06] bg-sky-500/[0.02]" />
      <motion.div style={{ y: y2 }} className="absolute right-[12%] top-[35%] h-20 w-20 rounded-full border border-violet-500/[0.06] bg-violet-500/[0.02]" />
      <motion.div style={{ y: y1 }} className="absolute left-[55%] top-[55%] h-32 w-32 rounded-3xl border border-teal-500/[0.06] bg-teal-500/[0.02]" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════════ */
export default function DemoApparPage() {
  return (
    <main className="relative bg-slate-950">
      <FloatingElements />

      <Hero />

      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {demoApps.map((app, index) => (
        <div key={app.id}>
          <AppShowcase app={app} index={index} />
          {index < demoApps.length - 1 && (
            <div className="mx-auto max-w-7xl px-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          )}
        </div>
      ))}

      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <YourAppSection />
      <ProcessSection />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-t from-sky-500/8 via-cyan-500/4 to-transparent blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Redo att ta{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">nästa steg?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
              Boka ett kostnadsfritt avstämningsmöte så berättar vi hur vi kan ta er idé från koncept till färdig app.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt?type=avstämning"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-sky-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/35 hover:scale-105 sm:w-auto"
              >
                <span className="relative z-10">Boka avstämningsmöte</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/losningsarkitekter"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-105 sm:w-auto"
              >
                Se paket & priser
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
