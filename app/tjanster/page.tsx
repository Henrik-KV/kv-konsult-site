import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import { deliveryPaths } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Tjänster – utbilda, införa och bygga", description: "Se hur KV Konsult samlar AI-utbildning, införande och digital utveckling i en tydlig leveransmodell.", path: "/tjanster" });

const starts = [
  { question: "Behöver många förstå samma sak?", answer: "Börja med Utbilda.", href: "/utbildning-ai" },
  { question: "Vet ni inte vilket användningsfall som ska först?", answer: "Börja med Införa.", href: "/utbildning-ai#infora" },
  { question: "Saknas ett konkret verktyg eller gränssnitt?", answer: "Börja med Bygga.", href: "/losningsarkitekter" },
] as const;

export default function TjansterPage() {
  return <main>
    <PageHero eyebrow="Tjänster" current="Tjänster" marker="KV / TJÄNSTER" title={<>Tre sätt att komma <em className="text-kv-blue">framåt.</em></>} intro="Utbildning, införande och utveckling är inte separata verksamheter. De är tre delar av samma förflyttning: förstå möjligheten, ändra arbetssättet och bygg det som saknas." action={{ href: "/kontakt?type=avstamning", label: "Hitta rätt startpunkt" }} />
    <section className="section-pad"><div className="container-shell"><ol className="service-system">{deliveryPaths.map((path) => <li key={path.slug} id={path.slug}><div className="service-system-head"><span>{path.number}</span><h2>{path.label}</h2><Link href={path.href} aria-label={`Läs mer om ${path.label}`}>↗</Link></div><div className="service-system-body"><p>{path.lead}</p><p>{path.outcome}</p><ul>{path.examples.map((item) => <li key={item}>{item}</li>)}</ul></div></li>)}</ol></div></section>
    <section className="section-pad choose-section" aria-labelledby="choose-heading"><div className="container-shell"><div className="section-intro-grid"><p className="eyebrow">Välj med en enkel fråga</p><h2 id="choose-heading" className="section-title">Var sitter osäkerheten just nu?</h2></div><ul className="choose-list mt-16">{starts.map((item, index) => <li key={item.question}><span>0{index + 1}</span><div><h3>{item.question}</h3><p>{item.answer}</p></div><Link href={item.href}>Se vägen<span aria-hidden="true">↗</span></Link></li>)}</ul></div></section>
    <ContactCTA heading="Ni behöver inte välja paket först." text="Beskriv vad som inte fungerar i dag. Vi hjälper er att avgöra om nästa steg är utbildning, införandestöd, en bygginsats eller något mindre." />
  </main>;
}
