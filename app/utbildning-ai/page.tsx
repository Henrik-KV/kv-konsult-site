import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import { trainingFormats } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "AI-utbildning och införande för organisationer",
  description: "AI-introduktion, Microsoft 365 Copilot, praktiska workshops, nulägesanalys och löpande införandestöd.",
  path: "/utbildning-ai",
});

const implementationOffers = [
  {
    title: "AI-nulägesanalys",
    timing: "Vanligen 2–4 veckor",
    forWhom: "Organisationer som behöver förstå användning, förutsättningar, risker och prioriteringar innan större beslut.",
    delivery: "Intervjuer, genomgång av arbetssätt, system och data samt gemensam prioritering.",
    output: "Nulägesrapport, prioriterade möjligheter och en konkret 90-dagars handlingsplan.",
    packageId: "nulagesanalys",
  },
  {
    title: "Ledningsgruppsworkshop",
    timing: "Halv- eller heldag",
    forWhom: "Ledningar som behöver koppla AI-frågan till ansvar, mål, risk och ordinarie strategiarbete.",
    delivery: "Gemensam nulägesbild, strukturerade övningar, prioritering och beslut om nästa steg.",
    output: "En gemensam riktning, beslutspunkter och underlag för fortsatt styrning.",
    packageId: "ledningsworkshop",
  },
  {
    title: "Löpande AI-stöd",
    timing: "Återkommande överenskommelse",
    forWhom: "Organisationer som vill ha ett kontinuerligt bollplank när användning, policy och nya arbetssätt utvecklas.",
    delivery: "Regelbundna avstämningar, rådgivning, prioritering, utbildningsinsatser och uppföljning enligt överenskommen omfattning.",
    output: "Kontinuitet, dokumenterade beslut och stöd mellan större leveranser.",
    packageId: "ai-partner-lite",
  },
] as const;

export default function UtbildningAiPage() {
  return <main>
    <PageHero eyebrow="Utbilda och införa" current="AI-utbildning" marker="KV / UTBILDA 01" title={<>Kunskap som förändrar <em className="text-kv-blue">arbetet.</em></>} intro="En bra AI-insats börjar inte med fler begrepp. Den börjar med deltagarnas riktiga uppgifter, organisationens ramar och vad gruppen behöver kunna göra efteråt." action={{ href: "#format", label: "Jämför format" }} />

    <section id="format" className="section-pad training-section" aria-labelledby="format-heading">
      <div className="container-shell">
        <div className="section-intro-grid"><p className="eyebrow">Utbilda / Format</p><div><h2 id="format-heading" className="section-title">Välj efter deltagarnas nästa uppgift.</h2><p className="lede mt-6 max-w-2xl">All paketinformation finns en gång i sidan. Öppna bara det format som är relevant.</p></div></div>
        <div className="training-overview mt-14" role="region" aria-label="Översikt över utbildningsformat">
          <div className="training-overview-head"><span>Format</span><span>Passar när</span><span>Tid</span></div>
          {trainingFormats.map((format) => <div key={format.id}><strong>{format.title}</strong><span>{format.forWhom}</span><span>{format.format.split(" · ")[1] || format.format}</span></div>)}
        </div>
        <div className="training-details mt-14">
          {trainingFormats.map((format, index) => (
            <details key={format.id} id={format.id} open={index === 0}>
              <summary><span>0{index + 1}</span><strong>{format.title}</strong><small>{format.format}</small><i aria-hidden="true">+</i></summary>
              <div className="training-detail-body">
                <div><h3>För vem?</h3><p>{format.forWhom}</p></div><div><h3>Vad händer?</h3><p>{format.delivery}</p></div><div><h3>Vad får ni?</h3><p>{format.output}</p></div><div><h3>Vad förbereder ni?</h3><p>{format.preparation}</p></div>
                <Link href={`/kontakt?type=paket&packages=${format.id}`} className="text-link">Fråga om formatet<span aria-hidden="true">↗</span></Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section id="infora" className="section-pad implementation-section" aria-labelledby="implementation-heading">
      <div className="container-shell"><div className="section-intro-grid"><p className="eyebrow text-paper/65">Införa / Från kunskap till rutin</p><div><h2 id="implementation-heading" className="section-title text-paper">När utbildningen inte är hela svaret.</h2><p className="mt-6 max-w-2xl text-paper/65 leading-7">Om frågan gäller prioritering, ansvar, styrning eller uppföljning behövs ett införandeupplägg — inte ännu en generell föreläsning.</p></div></div>
        <ol className="implementation-list mt-16">{implementationOffers.map((offer, index) => <li key={offer.title}><div className="implementation-title"><span>0{index + 1}</span><h3>{offer.title}</h3><p>{offer.timing}</p></div><dl><div><dt>För vem</dt><dd>{offer.forWhom}</dd></div><div><dt>Leverans</dt><dd>{offer.delivery}</dd></div><div><dt>Ni får</dt><dd>{offer.output}</dd></div></dl><Link href={`/kontakt?type=paket&packages=${offer.packageId}`} className="btn-light">Ta ett första samtal<span aria-hidden="true">↗</span></Link></li>)}</ol>
      </div>
    </section>

    <section className="preparation-section" aria-labelledby="education-prepare"><div className="container-shell preparation-grid"><div><p className="eyebrow">Inför en utbildning</p><h2 id="education-prepare">Tre saker gör dagen bättre.</h2></div><ul><li>En tydlig beställare som kan beskriva målgruppen och beslutet bakom insatsen.</li><li>Riktiga, avidentifierade exempel på uppgifter deltagarna känner igen.</li><li>Klarhet kring vilka AI-verktyg och vilken data deltagarna får använda.</li></ul></div></section>
    <ContactCTA heading="Vilket format passar gruppen?" text="Berätta vilka som ska delta, vad de behöver kunna efteråt och vilka verktyg ni använder. Vi föreslår ett rimligt upplägg utan att fylla dagen med onödiga moment." />
  </main>;
}
