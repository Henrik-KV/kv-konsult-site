"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Hem", href: "/" },
  { label: "Tjänster & paket", href: "/tjanster" },
  { label: "För kommuner", href: "/kommuner" },
  { label: "För företag", href: "/foretag" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Scroll-to-top vid sidladdning (hard refresh)
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      // Visa/dölj navbar på mobil baserat på scroll-riktning
      // Alltid visa om vi är nära toppen (< 50px)
      if (currentScrollY < 50) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        // Scrollar nedåt - dölj (låg tröskel för snabb respons)
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current - 2) {
        // Scrollar uppåt - visa DIREKT (mycket låg tröskel)
        setVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stäng mobilmeny vid navigering
  useEffect(() => {
    setMobileOpen(false);
    setVisible(true);
    
    // Scrolla till toppen ENDAST om det inte finns en hash i URL:en
    // Om det finns en hash, låt webbläsaren hantera scroll till ankaret
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Hantera hash-scroll med korrekt offset för fixed navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Vänta lite så sidan hinner rendera
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const navHeight = 80; // Fixed nav höjd + lite marginal
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Kör vid sidladdning om det finns en hash
    handleHashScroll();

    // Lyssna på hash-ändringar
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-sky-500/5"
          : "border-transparent bg-slate-950/60 backdrop-blur-md"
      } ${
        // På mobil: dölj/visa baserat på scroll-riktning
        visible ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logotyp */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Logotyp med riktig bild - ännu större */}
          <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 p-0.5 shadow-lg shadow-sky-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-sky-500/40">
            <div className="relative h-full w-full overflow-hidden rounded-[11px] bg-slate-950">
              <Image
                src="/images/kvkonsult-logo.png"
                alt="KV Konsult logotyp"
                fill
                className="object-contain p-1.5"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">
              KV Konsult
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-sky-400/80 sm:block">
              AI-utbildning & strategi
            </span>
          </div>
        </Link>

        {/* Desktop-meny */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            // Kontakt-länken är speciell - nu en egen sida
            const isContactLink = l.href === "/kontakt";
            const basePath = l.href.split("#")[0] || "/";
            
            let isActive = false;
            if (isContactLink) {
              isActive = pathname === "/kontakt";
            } else if (l.href === "/") {
              // Hem är bara aktiv om vi är exakt på /
              isActive = pathname === "/";
            } else {
              // Andra sidor är aktiva om pathname börjar med deras path
              isActive = pathname.startsWith(basePath);
            }
            
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? "text-white bg-gradient-to-r from-sky-600/30 to-cyan-600/30 shadow-lg shadow-sky-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA knapp - Desktop */}
        <Link
          href="/kontakt"
          className="hidden rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 lg:inline-flex"
        >
          Boka möte
        </Link>

        {/* Hamburger (mobil) */}
        <button
          type="button"
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-slate-950/98 px-4 py-4 backdrop-blur-xl">
          {links.map((l, index) => {
            const isContactLink = l.href === "/kontakt";
            const basePath = l.href.split("#")[0] || "/";
            
            let isActive = false;
            if (isContactLink) {
              isActive = pathname === "/kontakt";
            } else if (l.href === "/") {
              isActive = pathname === "/";
            } else {
              isActive = pathname.startsWith(basePath);
            }
            
            return (
              <li
                key={l.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={l.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-sky-600/20 to-cyan-600/20 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          {/* CTA knapp mobil */}
          <li className="mt-2">
            <Link
              href="/kontakt"
              className="block rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-3 text-center text-base font-semibold text-white shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              Boka möte
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
