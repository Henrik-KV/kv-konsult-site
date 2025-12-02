import Link from "next/link";
import Image from "next/image";

/* Floating Color Orbs för footer */
function FooterOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute -bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/8 blur-[100px]" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950">
      {/* Mjuk övergång från föregående sektion */}
      <div className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-transparent to-slate-950" />
      
      <FooterOrbs />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Om KV Konsult */}
          <div>
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-3"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 p-0.5 shadow-lg shadow-sky-500/20">
                <div className="relative h-full w-full overflow-hidden rounded-[9px] bg-slate-950">
                  <Image
                    src="/images/kvkonsult-logo.png"
                    alt="KV Konsult"
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
              </div>
              <span className="text-lg font-bold text-white">KV Konsult</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Vi hjälper företag och kommuner att ta nästa steg med AI och Microsoft 365 – 
              på ett sätt som skapar verklig nytta i vardagen.
            </p>
          </div>

          {/* Snabblänkar */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Snabblänkar
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/tjanster"
                  className="text-slate-400 transition-colors duration-200 hover:text-sky-400"
                >
                  Tjänster & paket
                </Link>
              </li>
              <li>
                <Link
                  href="/kommuner"
                  className="text-slate-400 transition-colors duration-200 hover:text-sky-400"
                >
                  För kommuner
                </Link>
              </li>
              <li>
                <Link
                  href="/foretag"
                  className="text-slate-400 transition-colors duration-200 hover:text-sky-400"
                >
                  För företag
                </Link>
              </li>
              <li>
                <Link
                  href="/om-oss"
                  className="text-slate-400 transition-colors duration-200 hover:text-sky-400"
                >
                  Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Kontakt
            </h3>
            
            {/* Kontaktknapp - framträdande */}
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105"
            >
              Kontakta oss
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            
            {/* E-post under knappen */}
            <a
              href="mailto:info@kvkonsult.com"
              className="mt-4 text-sm text-slate-400 transition-colors duration-200 hover:text-sky-400"
            >
              info@kvkonsult.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
            <span>© {new Date().getFullYear()} KV Konsult. Alla rättigheter reserverade.</span>
            <div className="flex gap-6">
              <Link
                href="/integritetspolicy"
                className="transition-colors duration-200 hover:text-sky-400"
              >
                Integritetspolicy
              </Link>
              <Link
                href="/villkor"
                className="transition-colors duration-200 hover:text-sky-400"
              >
                Villkor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
