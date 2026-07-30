import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import { contacts } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Om KV Konsult", description: "Möt personerna bakom KV Konsult och läs om arbetssättet: utbilda, införa och bygga.", path: "/om-oss" });

const principles = [
  { title: "Översätt utan att förenkla bort", text: "Tekniken behöver bli begriplig för beslutsfattare och verksamhet, men risker och begränsningar ska fortfarande synas." },
  { title: "Arbeta med riktiga situationer", text: "En workshop, analys eller produkt blir bättre när den utgår från uppgifter, underlag och beslut som deltagarna känner igen." },
  { title: "Lämna ett tydligt nästa steg", text: "Efter en leverans ska det gå att se vad som är beslutat, vem som äger frågan och vad som ska testas eller byggas härnäst." },
] as const;

export default function OmOssPage() {
  return <main>
    <PageHero eyebrow="Om KV Konsult" current="Om KV" marker="KV / MÄNNISKOR" title={<>Mellan möjlighet och <em className="text-kv-blue">användning.</em></>} intro="KV Konsult hjälper svenska företag, kommuner och organisationer att göra AI och digital utveckling begriplig, praktisk och möjlig att använda i vardagen. Vi utbildar, stöttar införandet och bygger det som saknas." action={{ href: "#personer", label: "Direkt till personerna" }} />
    <section className="section-pad about-statement"><div className="container-shell about-statement-grid"><p className="eyebrow">Vår roll</p><blockquote>“Vår uppgift är inte att göra tekniken större. Den är att göra nästa beslut tydligare.”</blockquote><p>Det kan betyda en gemensam AI-grund för en ledningsgrupp, praktisk Copilot-träning för ett team, en prioriterad handlingsplan eller ett digitalt verktyg som gör ett återkommande flöde enklare.</p></div></section>
    <section className="section-pad about-principles" aria-labelledby="about-principles-heading"><div className="container-shell"><div className="section-intro-grid"><p className="eyebrow text-paper/65">Arbetssätt</p><h2 id="about-principles-heading" className="section-title text-paper">Tre hållpunkter i varje uppdrag.</h2></div><ol className="principle-grid mt-16">{principles.map((principle, index) => <li key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></li>)}</ol></div></section>
    <section id="personer" className="section-pad team-section" aria-labelledby="people-heading"><div className="container-shell"><div className="section-intro-grid"><p className="eyebrow">Personerna</p><div><h2 id="people-heading" className="section-title">Henrik, Eric och Ulrika.</h2><p className="lede mt-6 max-w-2xl">Repo- och webbmaterialet verifierar namn och kontaktvägar, men inte individuella roller eller biografier. Därför publicerar vi inte påhittade titlar. Genuina porträtt och godkända beskrivningar bör läggas till när de finns.</p></div></div><ul className="team-list mt-16">{contacts.map((person, index) => <li key={person.email}><span className="team-index">0{index + 1}</span><h3>{person.name}</h3><div><a href={`mailto:${person.email}`}>{person.email}</a><a href={`tel:${person.phoneHref}`}>{person.phone}</a></div></li>)}</ul></div></section>
    <section className="about-proof"><div className="container-shell about-proof-grid"><p className="eyebrow">Det går att granska</p><h2>Se det som faktiskt är byggt.</h2><p>Lägesbild är publicerad i App Store. MÄSSY visas tydligt som demo. På arbetssidan framgår status, utmaning, insats och leverans.</p><Link href="/demo-appar" className="btn-secondary">Se arbete<span aria-hidden="true">↗</span></Link></div></section>
    <ContactCTA heading="Prata direkt med KV." text="Det första samtalet är till för att förstå er situation och avgöra om vi är rätt stöd. Ni får en tydlig rekommendation om ett rimligt nästa steg." />
  </main>;
}
