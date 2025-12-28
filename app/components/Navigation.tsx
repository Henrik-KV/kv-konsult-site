"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Hem", href: "/" },
  { 
    label: "Tjänster", 
    href: "/tjanster",
    hasDropdown: true,
    dropdownItems: [
      { label: "Utbildning & partnerskap", href: "/utbildning-ai", iconType: "education", description: "Föreläsningar, workshops och löpande AI-stöd" },
      { label: "Webbsidor", href: "/webbsidor", iconType: "web", description: "Moderna webbsidor med AI-stöd" },
      { label: "Sociala medier", href: "/sociala-medier", iconType: "social", description: "Löpande innehållsproduktion" },
    ]
  },
  { label: "För kommuner", href: "/kommuner" },
  { label: "För företag", href: "/foretag" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

// Clean SVG-ikoner för dropdown
const dropdownIcons: Record<string, React.ReactNode> = {
  education: (
    <svg className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  web: (
    <svg className="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  social: (
    <svg className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  ),
  overview: (
    <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
};

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
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
    setMobileServicesOpen(false);
    setDropdownOpen(false);
    setVisible(true);
    
    // Scrolla till toppen ENDAST om det inte finns en hash i URL:en
    // Om det finns en hash, låt webbläsaren hantera scroll till ankaret
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Stäng dropdown om man klickar utanför
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        {/* Logotyp - hard refresh till startsidan */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
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
            <span className="text-lg font-bold tracking-tight text-white" style={{ textShadow: '0 0 20px rgba(56, 189, 248, 0.5), 0 0 40px rgba(34, 211, 238, 0.3)' }}>
              KV Konsult
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-sky-400 sm:block" style={{ textShadow: '0 0 15px rgba(56, 189, 248, 0.6)' }}>
              AI-utbildning & strategi
            </span>
          </div>
        </a>

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
            } else if (l.hasDropdown) {
              // Tjänster är aktiv om vi är på någon av undersidorna
              isActive = pathname === "/tjanster" || 
                         pathname === "/utbildning-ai" || 
                         pathname === "/webbsidor" || 
                         pathname === "/sociala-medier";
            } else {
              // Andra sidor är aktiva om pathname börjar med deras path
              isActive = pathname.startsWith(basePath);
            }
            
            // Hantera dropdown för Tjänster
            if (l.hasDropdown) {
              return (
                <li key={l.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-white bg-gradient-to-r from-sky-600/30 to-cyan-600/30 shadow-lg shadow-sky-500/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                    <svg 
                      className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
                    )}
                  </button>
                  
                  {/* Dropdown menu */}
                  <div 
                    className={`absolute left-0 top-full mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/98 backdrop-blur-xl shadow-2xl shadow-sky-500/10 transition-all duration-300 ${
                      dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="p-2">
                      {/* Link till översiktssidan */}
                      <Link
                        href="/tjanster"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/5 group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20">
                          {dropdownIcons.overview}
                        </div>
                        <div>
                          <p className="font-medium text-white group-hover:text-sky-400 transition-colors">Alla tjänster</p>
                          <p className="text-xs text-slate-400">Översikt över våra erbjudanden</p>
                        </div>
                      </Link>
                      
                      <div className="my-2 border-t border-white/5" />
                      
                      {l.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-center gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/5 group ${
                            pathname === item.href ? 'bg-white/5' : ''
                          }`}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20">
                            {dropdownIcons[item.iconType]}
                          </div>
                          <div>
                            <p className={`font-medium transition-colors ${
                              pathname === item.href ? 'text-sky-400' : 'text-white group-hover:text-sky-400'
                            }`}>{item.label}</p>
                            <p className="text-xs text-slate-400">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
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
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
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
            } else if (l.hasDropdown) {
              isActive = pathname === "/tjanster" || 
                         pathname === "/utbildning-ai" || 
                         pathname === "/webbsidor" || 
                         pathname === "/sociala-medier";
            } else {
              isActive = pathname.startsWith(basePath);
            }
            
            // Hantera Tjänster med undermeny på mobil
            if (l.hasDropdown) {
              return (
                <li
                  key={l.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-sky-600/20 to-cyan-600/20 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {l.label}
                    <svg 
                      className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Undermeny på mobil */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="mt-1 ml-4 space-y-1 border-l border-white/10 pl-4">
                      <Link
                        href="/tjanster"
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                          pathname === '/tjanster' ? 'text-sky-400 bg-sky-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="flex-shrink-0">{dropdownIcons.overview}</span>
                        <span>Alla tjänster</span>
                      </Link>
                      {l.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                            pathname === item.href ? 'text-sky-400 bg-sky-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="flex-shrink-0">{dropdownIcons[item.iconType]}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
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
