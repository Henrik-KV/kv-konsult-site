"use client";

/* ═══════════════════════════════════════════════════════════════════════════
   VIDEO BACKGROUND KOMPONENT - Återanvändbar för alla sidor
   
   Användning:
   <VideoBackground videoSrc="/images/spiral-effekt.mp4" />
   
   Tillgängliga videor (lägg till fler i public/images/):
   - spiral-effekt.mp4 (standard)
   - hero-ai.mp4
   - (lägg till fler här)
═══════════════════════════════════════════════════════════════════════════ */

interface VideoBackgroundProps {
  videoSrc?: string;
  brightness?: number;
  blur?: number;
  overlayOpacity?: number;
}

export default function VideoBackground({
  videoSrc = "/images/spiral-effekt.mp4",
  brightness = 1.3,
  blur = 2,
  overlayOpacity = 0.4,
}: VideoBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-950">
      {/* Fullscreen video bakgrund - extra stor för att undvika kanter */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-[115%] min-w-[115%] object-cover"
        style={{
          filter: `blur(${blur}px) brightness(${brightness})`,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Mörk overlay för läsbarhet */}
      <div
        className="absolute inset-0 bg-slate-950"
        style={{ opacity: overlayOpacity }}
      />

      {/* Gradient overlay för mjuk övergång mot nästa sektion */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   STUDSANDE PIL KOMPONENT - Visar användaren att de kan scrolla
═══════════════════════════════════════════════════════════════════════════ */
export function ScrollIndicator({ className = "bottom-8" }: { className?: string }) {
  return (
    <div className={`hidden sm:block absolute left-1/2 -translate-x-1/2 z-20 ${className}`}>
      <div className="animate-bounce">
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="url(#gradient-arrow)"
          strokeWidth={2}
        >
          <defs>
            <linearGradient id="gradient-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
