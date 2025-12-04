"use client";

import { useEffect, useState, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   PREMIUM AURA-INSPIRED BACKGROUND
   
   En global bakgrundskomponent med:
   - Animerade färgblobs i blå/teal/cyan-toner med djup
   - Subtil mesh-grid overlay för 3D-känsla
   - Parallax-effekt på desktop (musrörelse)
   - GPU-vänliga animationer
   - Förenklad på mobil (ingen parallax)
═══════════════════════════════════════════════════════════════════════════ */

interface MousePosition {
  x: number;
  y: number;
}

export default function PremiumBackground() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Parallax mouse tracking (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        // Normalisera till -1 till 1
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Parallax-offset baserat på musposition (subtilt)
  const parallaxOffset = isMobile
    ? { x: 0, y: 0 }
    : { x: mousePosition.x * 20, y: mousePosition.y * 20 };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 1: Deep background gradient
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 2: Animated color orbs with depth (Aura-style)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 transition-transform duration-[2000ms] ease-out"
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
        }}
      >
        {/* Primary orb - Large, soft blue */}
        <div
          className="absolute -top-[20%] -left-[10%] h-[800px] w-[800px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(56, 189, 248, 0) 70%)",
            animation: "premium-float-1 30s ease-in-out infinite",
          }}
        />

        {/* Secondary orb - Cyan accent */}
        <div
          className="absolute top-[30%] right-[5%] h-[600px] w-[600px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, rgba(34, 211, 238, 0) 70%)",
            animation: "premium-float-2 35s ease-in-out infinite",
          }}
        />

        {/* Tertiary orb - Teal depth */}
        <div
          className="absolute bottom-[10%] left-[20%] h-[700px] w-[700px] rounded-full opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, rgba(20, 184, 166, 0) 70%)",
            animation: "premium-float-3 28s ease-in-out infinite",
          }}
        />

        {/* Quaternary orb - Deep blue accent */}
        <div
          className="absolute top-[50%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0) 70%)",
            animation: "premium-float-4 40s ease-in-out infinite",
          }}
        />

        {/* Extra ambient orbs for depth */}
        <div
          className="absolute top-[10%] right-[30%] h-[300px] w-[300px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)",
            animation: "premium-float-5 25s ease-in-out infinite",
          }}
        />

        <div
          className="absolute bottom-[30%] right-[15%] h-[400px] w-[400px] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(6, 182, 212, 0) 70%)",
            animation: "premium-float-1 32s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 3: Subtle grid mesh overlay for depth
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 4: Radial vignette for focus
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(2, 6, 23, 0.4) 100%)",
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 5: Subtle noise texture for premium feel
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 6: Light streaks / rays (subtle)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%, 
              transparent 40%, 
              rgba(56, 189, 248, 0.3) 50%, 
              transparent 60%, 
              transparent 100%
            )
          `,
          animation: "premium-ray-sweep 20s ease-in-out infinite",
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════════
          LAYER 7: Glow hotspots for hero areas
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(56, 189, 248, 0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
