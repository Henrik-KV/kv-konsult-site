import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { contacts, contactOptions } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Kontakt – börja med ett avgränsat samtal", description: "Kontakta KV Konsult om AI-utbildning, införande, webb, appar eller digitala arbetssätt. Direkt telefon och e-post finns på sidan.", path: "/kontakt" });

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function resolveQuery(params: Record<string, string | string[] | undefined>) {
  const type = typeof params.type === "string" ? params.type : "";
  const packageValue = typeof params.packages === "string" ? params.packages : Array.isArray(params.packages) ? params.packages.join(",") : "";
  let selected = packageValue.split(",").filter((id) => contactOptions.some((option) => option.id === id));
  if (!selected.length) {
    if (type === "exempel1") selected = ["m365-bas", "workshop-m365"];
    if (type === "exempel2") selected = ["m365-bas", "workshop-ai"];
    if (type === "exempel3") selected = ["m365-bas-plus", "workshop-halv"];
    if (type === "demo" || type === "app" || type === "projekt") selected = ["losning-app"];
  }
  const messages: Record<string, string> = {
    avstamning: "Vi vill boka ett första samtal om vår situation och ett rimligt nästa steg.",
    demo: "Vi vill diskutera ett digitalt verktyg eller en demonstration utifrån ett konkret behov.",
    app: "Vi har ett återkommande flöde som vi tror kan behöva en app eller digital lösning.",
    projekt: "Vi vill diskutera ett digitalt projekt och hur det kan avgränsas.",
    exempel1: "Vi är intresserade av Microsoft 365 Bas tillsammans med en praktisk Microsoft 365- och Copilot-workshop.",
    exempel2: "Vi är intresserade av Microsoft 365 Bas tillsammans med en workshop om generell AI.",
    exempel3: "Vi är intresserade av Microsoft 365 Bas+ tillsammans med en anpassad workshop.",
  };
  return { selected, message: messages[type] || "" };
}

export default async function KontaktPage({ searchParams }: { searchParams: SearchParams }) {
  const query = resolveQuery(await searchParams);
  return <main>
    <PageHero eyebrow="Kontakt" current="Kontakt" marker="KV / KONTAKT" title={<>Börja med det som behöver bli <em className="text-kv-blue">tydligare.</em></>} intro="Ni behöver inte ha ett färdigt paket, en kravspecifikation eller ett beslutat verktyg. Beskriv situationen, så använder vi första samtalet till att avgränsa ett rimligt nästa steg." action={{ href: "#formular", label: "Gå till formuläret" }} />
    <section id="formular" className="section-pad contact-section" aria-labelledby="contact-form-heading"><div className="container-shell contact-grid"><div><p className="eyebrow">Skriv till oss</p><h2 id="contact-form-heading" className="section-title mt-6">Vad vill ni kunna göra bättre?</h2><p className="lede mt-6 max-w-xl">Formuläret finns i den server-renderade sidan och visar allt innehåll direkt. Vi svarar normalt inom en arbetsdag.</p><ContactForm initialSelected={query.selected} initialMessage={query.message} /></div>
      <aside className="direct-contact" aria-labelledby="direct-heading"><p className="eyebrow">Direktkontakt</p><h2 id="direct-heading">Ring eller mejla en person.</h2><ul>{contacts.map((person, index) => <li key={person.email}><span>0{index + 1}</span><h3>{person.name}</h3><a href={`mailto:${person.email}`}>{person.email}</a><a href={`tel:${person.phoneHref}`}>{person.phone}</a></li>)}</ul></aside>
    </div></section>
    <section className="first-conversation" aria-labelledby="first-conversation-heading"><div className="container-shell"><div className="section-intro-grid"><p className="eyebrow text-paper/65">Det första samtalet</p><h2 id="first-conversation-heading" className="section-title text-paper">30 minuter. Tre frågor.</h2></div><ol><li><span>01</span><h3>Vad händer i dag?</h3><p>Ni beskriver uppgiften, människorna och var det börjar skava.</p></li><li><span>02</span><h3>Vad behöver bli annorlunda?</h3><p>Vi skiljer mål från önskelista och ringar in en användbar förändring.</p></li><li><span>03</span><h3>Vilket steg är rimligt?</h3><p>Ni får en rak rekommendation: utbilda, införa, bygga eller avvakta.</p></li></ol></div></section>
  </main>;
}
