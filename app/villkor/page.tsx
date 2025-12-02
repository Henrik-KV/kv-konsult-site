import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villkor – KV Konsult",
  description: "Allmänna villkor för KV Konsults tjänster.",
};

/* Floating Color Orbs - samma som Om oss */
function LavaLampBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/20 blur-[100px] animate-blob-1" />
      <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[100px] animate-blob-2" />
      <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[80px] animate-blob-3" />
    </div>
  );
}

export default function VillkorPage() {
  return (
    <main className="bg-slate-950">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20">
        <LavaLampBackground />
        <div className="relative mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400">
            Juridiskt
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Allmänna villkor
          </h1>
          <p className="mt-4 text-slate-400">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-10">
              {/* Intro */}
              <div className="rounded-2xl border border-white/10 bg-slate-800/30 p-6 md:p-8">
                <p className="text-slate-300 leading-relaxed">
                  Dessa allmänna villkor gäller för alla tjänster som KV Konsult ("vi", "oss", "vår") tillhandahåller. Genom att boka eller använda våra tjänster accepterar du dessa villkor.
                </p>
              </div>

              {/* Sections */}
              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  1. Tjänster
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  KV Konsult erbjuder utbildningar, workshops, föreläsningar och rådgivning inom AI och Microsoft 365. Tjänsternas exakta omfattning, innehåll och pris bekräftas skriftligt i samband med bokning.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  2. Bokning och bekräftelse
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>
                    En bokning är bindande när den bekräftats skriftligt (via e-post) av KV Konsult. I bekräftelsen specificeras:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tjänstens omfattning och innehåll</li>
                    <li>Datum, tid och plats (eller digital länk)</li>
                    <li>Antal deltagare</li>
                    <li>Pris och betalningsvillkor</li>
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  3. Avbokning och ändring
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>Följande villkor gäller för avbokning:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-slate-300">Mer än 14 dagar före:</strong> Kostnadsfri avbokning.
                    </li>
                    <li>
                      <strong className="text-slate-300">7–14 dagar före:</strong> 50% av överenskommet pris faktureras.
                    </li>
                    <li>
                      <strong className="text-slate-300">Mindre än 7 dagar före:</strong> 100% av överenskommet pris faktureras.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Flytt av datum kan göras kostnadsfritt om det meddelas minst 7 dagar i förväg och om KV Konsult har möjlighet att erbjuda ett nytt datum.
                  </p>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  4. Betalning
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>
                    Fakturering sker normalt efter genomfört uppdrag, om inget annat avtalats. Betalningsvillkor är 30 dagar netto. Vid försenad betalning tillkommer dröjsmålsränta enligt räntelagen.
                  </p>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  5. Immateriella rättigheter
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Allt utbildningsmaterial, presentationer och dokumentation som KV Konsult tillhandahåller skyddas av upphovsrätt. Materialet får användas internt av beställarens organisation men får inte spridas, kopieras eller säljas vidare utan skriftligt godkännande.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  6. Ansvar och begränsningar
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>
                    KV Konsult ansvarar för att leverera tjänster enligt överenskommen specifikation och med professionell standard. Vårt ansvar är begränsat till:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Direkt skada som orsakats av vårdslöshet från vår sida</li>
                    <li>Maximalt det belopp som betalats för den aktuella tjänsten</li>
                  </ul>
                  <p className="mt-4">
                    Vi ansvarar inte för indirekta skador, utebliven vinst eller följdskador. Beställaren ansvarar för att tillhandahålla nödvändig information, teknisk utrustning och lokaler enligt överenskommelse.
                  </p>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  7. Sekretess
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  KV Konsult behandlar all information som framkommer under uppdrag konfidentiellt. Vi delar inte affärshemligheter, interna processer eller annan känslig information med tredje part utan beställarens godkännande.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  8. Force majeure
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Ingen part ansvarar för förseningar eller utebliven leverans som beror på omständigheter utanför partens kontroll, såsom naturkatastrofer, pandemi, strejk, myndighetsåtgärder eller liknande.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  9. Ändringar av villkoren
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  KV Konsult förbehåller sig rätten att uppdatera dessa villkor. Aktuella villkor publiceras alltid på vår webbplats. För pågående uppdrag gäller de villkor som bekräftades vid bokning.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  10. Tvist
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Eventuella tvister ska i första hand lösas genom förhandling mellan parterna. Om enighet inte kan nås ska tvisten avgöras enligt svensk lag vid svensk domstol.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  11. Kontakt
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Vid frågor om dessa villkor, kontakta oss:
                </p>
                <div className="mt-4 rounded-xl border border-white/10 bg-slate-800/50 p-4">
                  <p className="text-slate-300">
                    <strong>KV Konsult</strong>
                    <br />
                    E-post:{" "}
                    <a
                      href="mailto:info@kvkonsult.com"
                      className="text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      info@kvkonsult.com
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <span>←</span>
              Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
