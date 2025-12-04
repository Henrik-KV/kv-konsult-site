import Link from "next/link";
import type { Metadata } from "next";
import VideoBackground from "@/app/components/VideoBackground";

export const metadata: Metadata = {
  title: "Integritetspolicy – KV Konsult",
  description: "Information om hur KV Konsult hanterar personuppgifter.",
};

export default function IntegritetspolicyPage() {
  return (
    <main className="bg-slate-950">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20">
        <VideoBackground videoSrc="/images/spiral-effekt.mp4" brightness={1.0} />
        <div className="relative mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400" style={{ boxShadow: '0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.1)', textShadow: '0 0 10px rgba(56, 189, 248, 0.6)' }}>
            Juridiskt
          </span>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Integritetspolicy
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
                  KV Konsult ("vi", "oss", "vår") värnar om din personliga integritet. Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar dina personuppgifter när du besöker vår webbplats eller använder våra tjänster.
                </p>
              </div>

              {/* Sections */}
              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  1. Vilka uppgifter vi samlar in
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>Vi kan samla in följande typer av personuppgifter:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-slate-300">Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer och organisation när du kontaktar oss via formulär eller e-post.
                    </li>
                    <li>
                      <strong className="text-slate-300">Kommunikation:</strong> Innehållet i meddelanden du skickar till oss.
                    </li>
                    <li>
                      <strong className="text-slate-300">Teknisk information:</strong> IP-adress, webbläsartyp och besöksstatistik via anonymiserade analysverktyg.
                    </li>
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  2. Varför vi samlar in uppgifterna
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>Vi använder dina personuppgifter för att:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Besvara förfrågningar och ge information om våra tjänster</li>
                    <li>Administrera bokningar och kundrelationer</li>
                    <li>Förbättra vår webbplats och våra tjänster</li>
                    <li>Fullgöra rättsliga förpliktelser</li>
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  3. Rättslig grund
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Vi behandlar dina personuppgifter baserat på ditt samtycke (när du skickar ett kontaktformulär), för att fullgöra avtal, eller för att tillvarata vårt berättigade intresse av att bedriva och förbättra vår verksamhet.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  4. Hur länge vi sparar uppgifterna
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Vi sparar dina personuppgifter så länge det är nödvändigt för de ändamål de samlades in för. Kontaktförfrågningar sparas normalt i upp till 24 månader. Kundrelaterade uppgifter sparas enligt bokföringslagen i 7 år.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  5. Delning av uppgifter
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Vi säljer aldrig dina personuppgifter. Vi kan dela uppgifter med betrodda tjänsteleverantörer (t.ex. webbhotell, e-posttjänster) som hjälper oss att driva verksamheten. Dessa parter får endast behandla uppgifterna enligt våra instruktioner.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  6. Dina rättigheter
                </h2>
                <div className="text-slate-400 leading-relaxed space-y-3">
                  <p>Du har rätt att:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Få tillgång till de personuppgifter vi har om dig</li>
                    <li>Begära rättelse av felaktiga uppgifter</li>
                    <li>Begära radering av dina uppgifter</li>
                    <li>Invända mot viss behandling</li>
                    <li>Begära dataportabilitet</li>
                    <li>Återkalla samtycke</li>
                  </ul>
                </div>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  7. Cookies
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Vår webbplats kan använda cookies för att förbättra användarupplevelsen och samla in anonymiserad statistik. Du kan hantera cookies via din webbläsares inställningar.
                </p>
              </article>

              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  8. Kontakt
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Om du har frågor om hur vi behandlar dina personuppgifter eller vill utöva dina rättigheter, kontakta oss på:
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

              {/* Klagomål */}
              <article className="space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  9. Klagomål
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
                </p>
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
