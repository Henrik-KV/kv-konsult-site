import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClarityVisual from "./components/ClarityVisual";
import ClarityStory from "./components/ClarityStory";
import ContactCTA from "./components/ContactCTA";
import { contacts, deliveryPaths, productionUrl, workItems } from "./lib/content";
import { pageMetadata } from "./lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "AI som går att använda på måndag",
  description: "KV Konsult hjälper svenska företag, kommuner och organisationer att utbilda, införa och bygga praktiska AI- och digitala lösningar.",
  path: "/",
});

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "KV Konsults leveransmodell",
    itemListElement: deliveryPaths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: path.label,
      url: `${productionUrl}${path.href.split("#")[0]}`,
    })),
  };

  return (
    <main>
      <section className="home-hero hairline-grid">
        <div className="container-shell home-hero-grid">
          <div className="home-hero-copy reveal">
            <p className="eyebrow">AI · arbetssätt · digitala lösningar</p>
            <h1 className="display-title mt-7">AI som går att använda <em>på måndag.</em></h1>
            <p className="lede mt-8 max-w-2xl">KV Konsult hjälper svenska företag, kommuner och organisationer att utbilda, införa och bygga. Från den första gemensamma förståelsen till ett arbetssätt eller verktyg som fungerar i vardagen.</p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <Link href="/kontakt?type=avstamning" className="btn-primary">Boka första samtalet<span aria-hidden="true">↗</span></Link>
              <Link href="#arbetssatt" className="btn-secondary">Se hur vi arbetar<span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <div className="hero-system reveal reveal-delay" aria-label="Från spridd information till ett tydligt arbetssätt">
            <div className="hero-system-bar"><span>KV / ARBETSFLÖDE 01</span><span><i aria-hidden="true" /> LEVANDE FLÖDE</span></div>
            <ClarityVisual />
            <div className="hero-system-footer"><span>Mejl · möten · rapporter</span><span>Avgränsa</span><strong>Tydligt nästa steg</strong></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Verifierat arbete">
        <div className="container-shell proof-grid">
          <p className="eyebrow">Verifierat arbete</p>
          <div><strong>Lägesbild</strong><span>iPhone-app publicerad av KV konsult AB</span></div>
          <a href="https://apps.apple.com/app/l%C3%A4gesbild/id6759859539" target="_blank" rel="noreferrer" className="text-link">Öppna i App Store<span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="delivery-heading">
        <div className="container-shell">
          <div className="section-intro-grid">
            <p className="eyebrow">En sammanhängande leverans</p>
            <div>
              <h2 id="delivery-heading" className="section-title">Förstå. Förändra. Få det gjort.</h2>
              <p className="lede mt-6 max-w-2xl">Tre vägar in, men en och samma riktning: från osäker möjlighet till tydlig användning.</p>
            </div>
          </div>
          <ol className="delivery-list mt-16">
            {deliveryPaths.map((path) => (
              <li key={path.slug}>
                <p className="delivery-number">{path.number}</p>
                <div><h3>{path.label}</h3><p className="delivery-lead">{path.lead}</p></div>
                <div><p className="delivery-outcome">{path.outcome}</p><ul>{path.examples.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <Link href={path.href} aria-label={`Läs om ${path.label}`}>↗</Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="arbetssatt" className="story-section" aria-labelledby="story-heading">
        <div className="container-shell story-heading-grid">
          <p className="eyebrow text-paper/65">Från komplexitet till klarhet</p>
          <div><h2 id="story-heading" className="section-title text-paper">Se röran bli ett arbetssätt.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-paper/65 md:text-lg">Följ ett vanligt arbetsflöde från spridda underlag och oklart ansvar till ett avgränsat nästa steg.</p></div>
        </div>
        <div className="container-shell mt-16"><ClarityStory /></div>
      </section>

      <section className="section-pad audience-section" aria-labelledby="audience-heading">
        <div className="container-shell">
          <div className="section-intro-grid"><p className="eyebrow">Två beslutsmiljöer</p><h2 id="audience-heading" className="section-title">Olika vardag. Samma krav på tydlighet.</h2></div>
          <div className="audience-grid mt-16">
            <article>
              <p className="audience-index">01 / Offentlig verksamhet</p>
              <h3>Kommuner och regioner</h3>
              <p>Här behöver teknikval rymma ansvar, likvärdig kompetens och förtroende. Vi börjar med uppdraget: vad ledning, nämnd, förvaltning eller arbetsgrupp faktiskt behöver kunna och göra.</p>
              <ul><li>Gemensam förståelse för ledning och verksamhet</li><li>Säker och ansvarsfull användning</li><li>Tydlig nulägesbild och prioritering</li><li>Avgränsade digitala verktyg när behovet är konkret</li></ul>
              <Link href="/kommuner" className="text-link mt-8">För kommuner och regioner<span aria-hidden="true">↗</span></Link>
            </article>
            <article>
              <p className="audience-index">02 / Näringsliv och organisationer</p>
              <h3>Företag och organisationer</h3>
              <p>Här är frågan ofta var tiden försvinner, vilket kund- eller internflöde som bromsar och hur användningen faktiskt ska få fäste. Vi väljer ett prioriterat arbete och gör nästa test mätbart.</p>
              <ul><li>Träning i befintliga Microsoft 365-flöden</li><li>Prioriterade användningsfall och ansvar</li><li>Webb, app eller integration när något saknas</li><li>Uppföljning efter införandet</li></ul>
              <Link href="/foretag" className="text-link mt-8">För företag och organisationer<span aria-hidden="true">↗</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" aria-labelledby="work-heading">
        <div className="container-shell">
          <div className="section-intro-grid"><p className="eyebrow">Utvalt arbete</p><div><h2 id="work-heading" className="section-title">Bevis i form av det som finns.</h2><p className="lede mt-6 max-w-2xl">En publicerad produkt och en tydligt märkt demonstration. Statusen ska alltid gå att förstå.</p></div></div>
          <div className="work-grid mt-16">
            <article className="work-feature">
              <div className="work-copy">
                <p className="work-status">{workItems[0].status}</p><h3>{workItems[0].title}</h3>
                <dl><div><dt>Utmaning</dt><dd>{workItems[0].challenge}</dd></div><div><dt>Insats</dt><dd>{workItems[0].intervention}</dd></div><div><dt>Leverans</dt><dd>{workItems[0].deliverable}</dd></div><div><dt>Resultat</dt><dd>{workItems[0].result}</dd></div></dl>
                <Link href="/demo-appar#lagesbild" className="text-link mt-7">Se produktfallet<span aria-hidden="true">↗</span></Link>
              </div>
              <div className="phone-pair" aria-label="Skärmbilder från Lägesbild">
                <Image src="/images/app-mockup/Lagesbild-Nu.jpg" alt="Lägesbilds nulägesvy med väder och händelser" width={946} height={2047} sizes="(max-width: 760px) 42vw, 260px" />
                <Image src="/images/app-mockup/Lagesbild-karta.jpg" alt="Lägesbilds kartvy med svenska händelser" width={946} height={2047} sizes="(max-width: 760px) 42vw, 260px" />
              </div>
            </article>
            <article className="work-secondary">
              <p className="work-status">{workItems[1].status}</p><h3>{workItems[1].title}</h3><p>{workItems[1].challenge}</p>
              <Image src="/images/app-mockup/Massy-start.jpg" alt="MÄSSY-demonstrationens inloggning för utställare, personal och admin" width={1179} height={2556} sizes="(max-width: 760px) 70vw, 330px" />
              <Link href="/demo-appar#massy" className="text-link mt-7">Se demonstrationen<span aria-hidden="true">↗</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad team-section" aria-labelledby="team-heading">
        <div className="container-shell">
          <div className="section-intro-grid"><p className="eyebrow">Människorna bakom KV</p><div><h2 id="team-heading" className="section-title">Tre namn. Direkt kontakt.</h2><p className="lede mt-6 max-w-2xl">Inga kontaktlager eller anonyma formulärsvar. Du får en direkt väg till Henrik, Eric och Ulrika.</p></div></div>
          <ul className="team-list mt-16">
            {contacts.map((person, index) => (
              <li key={person.email}><span className="team-index">0{index + 1}</span><h3>{person.name}</h3><div><a href={`mailto:${person.email}`}>{person.email}</a><a href={`tel:${person.phoneHref}`}>{person.phone}</a></div></li>
            ))}
          </ul>
          <Link href="/om-oss" className="text-link mt-9">Om KV Konsult<span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <ContactCTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  );
}
