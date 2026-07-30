import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactCTA";
import PageHero from "../components/PageHero";
import { workItems } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Produkter och tydligt märkta demos", description: "Se Lägesbild, en publicerad iPhone-app, och MÄSSY, en tydligt märkt produktdemonstration från KV Konsult.", path: "/demo-appar" });

const lagesbildScreens = [
  { src: "/images/app-mockup/Lagesbild-Nu.jpg", alt: "Lägesbilds nulägesvy med händelser, väder och marknadsdata", label: "Nuläge" },
  { src: "/images/app-mockup/Lagesbild-karta.jpg", alt: "Lägesbilds karta med händelser och trafik", label: "Karta" },
  { src: "/images/app-mockup/Lagesbild-Resa.jpg", alt: "Lägesbilds resevy", label: "Resa" },
] as const;
const massyScreens = [
  { src: "/images/app-mockup/Massy-start.jpg", alt: "MÄSSY-demonstrationens inloggning för utställare, personal och admin", label: "Roller" },
  { src: "/images/app-mockup/Massy-qr.jpg", alt: "MÄSSY-demonstrationens QR-skanner", label: "Access" },
  { src: "/images/app-mockup/Massy-biljetthafte.jpg", alt: "MÄSSY-demonstrationens digitala biljetthäfte", label: "Biljetter" },
] as const;

function CaseFacts({ item }: { item: (typeof workItems)[number] }) {
  return <dl className="case-facts"><div><dt>Utmaning</dt><dd>{item.challenge}</dd></div><div><dt>Insats</dt><dd>{item.intervention}</dd></div><div><dt>Leverans</dt><dd>{item.deliverable}</dd></div><div><dt>Resultat</dt><dd>{item.result}</dd></div></dl>;
}

export default function DemoApparPage() {
  return <main>
    <PageHero eyebrow="Arbete" current="Produkter och demos" marker="KV / ARBETE" title={<>Visa status. Visa <em className="text-kv-blue">arbetet.</em></>} intro="Här skiljer vi på publicerad produkt och demonstration. En demo visar förmåga och riktning, men presenteras aldrig som ett genomfört kunduppdrag." action={{ href: "#lagesbild", label: "Se första produktfallet" }} />

    <article id="lagesbild" className="case-study case-study-dark" aria-labelledby="lagesbild-title">
      <div className="container-shell case-grid"><div className="case-copy"><p className="work-status">{workItems[0].status}</p><h2 id="lagesbild-title">Lägesbild</h2><p className="case-lede">En samlad mobil vy över information som annars kräver flera källor.</p><CaseFacts item={workItems[0]} /><a href="https://apps.apple.com/app/l%C3%A4gesbild/id6759859539" target="_blank" rel="noreferrer" className="btn-light">Öppna i App Store<span aria-hidden="true">↗</span></a></div>
        <div className="case-screens">{lagesbildScreens.map((screen, index) => <figure key={screen.src} className={index === 1 ? "is-raised" : undefined}><Image src={screen.src} alt={screen.alt} width={1179} height={2556} sizes="(max-width: 760px) 70vw, 280px" /><figcaption>{screen.label}</figcaption></figure>)}</div>
      </div>
    </article>

    <article id="massy" className="case-study case-study-light" aria-labelledby="massy-title">
      <div className="container-shell case-grid"><div className="case-copy"><p className="work-status">{workItems[1].status}</p><h2 id="massy-title">MÄSSY</h2><p className="case-lede">Ett koncept för att samla roller, biljetter och behörighet i ett mässflöde.</p><CaseFacts item={workItems[1]} /><Link href="/kontakt?type=demo&packages=losning-app" className="btn-primary">Diskutera ett eget behov<span aria-hidden="true">↗</span></Link></div>
        <div className="case-screens">{massyScreens.map((screen, index) => <figure key={screen.src} className={index === 1 ? "is-raised" : undefined}><Image src={screen.src} alt={screen.alt} width={1179} height={2556} sizes="(max-width: 760px) 70vw, 280px" /><figcaption>{screen.label}</figcaption></figure>)}</div>
      </div>
    </article>
    <ContactCTA heading="Har ni ett flöde som borde vara enklare?" text="Ta med användaren, situationen och vad som händer i dag. Vi hjälper er att avgränsa om en app, integration, webbplats eller förändrat arbetssätt är rätt nästa steg." />
  </main>;
}
