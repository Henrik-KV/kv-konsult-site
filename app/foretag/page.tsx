import type { Metadata } from "next";
import AudiencePage from "../components/AudiencePage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Praktisk AI och digital utveckling för företag", description: "Utbilda teamet, inför användbara AI-arbetssätt och bygg webb, app eller interna verktyg.", path: "/foretag" });

export default function ForetagPage() {
  return <AudiencePage current="Företag och organisationer" eyebrow="Näringsliv och organisationer" marker="KV / FÖRETAG" title={<>Gör en process bättre. <em className="text-kv-blue">Sedan nästa.</em></>} intro="AI-arbetet blir konkret när det kopplas till ett prioriterat kund- eller internflöde. Vi hjälper ledning och team att förstå, införa och bygga utan att göra organisationen beroende av lösa experiment."
    decisions={[
      { title: "Ledningen behöver välja var AI ska börja.", text: "Vi jämför användningsfall, risk, förutsättningar och förväntad arbetsförändring innan ni investerar bredare.", link: { label: "Se införandestöd", href: "/utbildning-ai#infora" } },
      { title: "Teamet har verktyg men saknar arbetssätt.", text: "En praktisk workshop tränar verkliga uppgifter och tydliggör vad som får användas, av vem och när.", link: { label: "Se workshops", href: "/utbildning-ai#format" } },
      { title: "Manuellt arbete faller mellan system.", text: "Vi kartlägger flödet och bygger bara den integration, app eller interna vy som faktiskt saknas.", link: { label: "Se appar och verktyg", href: "/losningsarkitekter" } },
      { title: "Webbplatsen förklarar inte erbjudandet.", text: "Innehåll, konverteringsväg, design och implementation behandlas som en sammanhängande leverans.", link: { label: "Se webbplatser", href: "/webbsidor" } },
    ]}
    principles={[{ title: "Ett användningsfall", text: "Vi väljer en återkommande situation som går att beskriva, testa och förbättra." }, { title: "Användaren med", text: "De som gör arbetet bidrar med verkliga exempel och granskar om lösningen faktiskt hjälper." }, { title: "Uppföljning inbyggd", text: "Vi bestämmer tidigt vad som ska följas upp och vem som äger nästa beslut." }]}
    preparation={["Vilket kund- eller internflöde som känns mest onödigt tungt i dag.", "Vilka personer som gör arbetet och vem som kan prioritera på ledningsnivå.", "Vilka system, licenser, dataregler och affärskrav som sätter ramarna."]}
    ctaHeading="Välj ett flöde att börja med." ctaText="Under första samtalet hjälper vi er att göra problemet mindre, tydligare och möjligt att agera på. Därefter vet ni om nästa steg är utbildning, införande eller en bygginsats." />;
}
