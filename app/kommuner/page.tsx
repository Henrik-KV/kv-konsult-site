import type { Metadata } from "next";
import AudiencePage from "../components/AudiencePage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "AI och digital utveckling för kommuner och regioner", description: "Praktisk AI-utbildning, införandestöd och avgränsade digitala lösningar för offentlig verksamhet.", path: "/kommuner" });

export default function KommunerPage() {
  return <AudiencePage current="Kommuner och regioner" eyebrow="Offentlig verksamhet" marker="KV / OFFENTLIGT" title={<>Från AI-fråga till <em className="text-kv-blue">ansvarsfull vardag.</em></>} intro="Kommuner och regioner behöver skapa förståelse brett, fatta beslut med tydligt ansvar och samtidigt hålla ihop säkerhet, verksamhetsnytta och förtroende. Vi hjälper er att ta nästa avgränsade steg."
    decisions={[
      { title: "Ledning eller nämnd behöver en gemensam grund.", text: "En koncentrerad session som kopplar möjligheter och risker till uppdrag, styrning och verkliga beslut.", link: { label: "Se ledningsformat", href: "/utbildning-ai#infora" } },
      { title: "Medarbetare behöver använda Copilot säkert.", text: "Praktisk träning utifrån tillåtna verktyg och vardagsuppgifter, inte generella exempel långt från verksamheten.", link: { label: "Se utbildningar", href: "/utbildning-ai#format" } },
      { title: "Många idéer konkurrerar om samma resurser.", text: "En nulägesanalys och 90-dagars plan som gör prioriteringar, risker och ansvar synliga.", link: { label: "Se införandestöd", href: "/utbildning-ai#infora" } },
      { title: "Ett konkret flöde saknar ett användbart verktyg.", text: "Vi avgränsar användare, data och ansvar innan en app, integration eller intern lösning byggs.", link: { label: "Se bygginsatser", href: "/losningsarkitekter" } },
    ]}
    principles={[{ title: "Uppdraget först", text: "Vi börjar i verksamhetens uppgift och beslut, inte i en lista över nya verktyg." }, { title: "Rätt data i rätt miljö", text: "Övningar och lösningar behöver förhålla sig till era regler, system och informationsklasser." }, { title: "Tydligt ägarskap", text: "Varje nästa steg får en ansvarig, en avgränsning och ett sätt att följas upp." }]}
    preparation={["Vilka grupper eller roller som behöver kunna fatta vilket beslut.", "Vilka verktyg, licenser och data som får användas i övningar eller tester.", "Ett konkret arbetsflöde där tid, kvalitet eller ansvar är ett återkommande problem."]}
    ctaHeading="Har ni ett uppdrag men ingen tydlig start?" ctaText="Första samtalet handlar om målgrupp, mandat, verktygsmiljö och ett rimligt avgränsat nästa steg. Ni behöver inte ha en färdig upphandling eller kravspecifikation." />;
}
