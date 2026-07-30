import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Appar, interna verktyg och digitala lösningar", description: "Från avgränsat verksamhetsproblem till användbar webbapp, mobilapp, integration eller internt verktyg.", path: "/losningsarkitekter" });

export default function LosningsarkitekterPage() {
  return <ServiceDetailPage current="Appar och lösningar" eyebrow="Bygga / Produkt" marker="KV / BYGGA 01" title={<>Bygg det som saknas. <em className="text-kv-blue">Inte mer.</em></>} intro="När standardverktygen inte räcker hjälper vi er från avgränsad fråga till fungerande applikation, internt verktyg eller integration. Vi börjar med arbetsflödet och väljer teknik därefter."
    forWhom="Organisationer med ett återkommande flöde, informationsbehov eller användarproblem som inte löses väl av befintliga standardverktyg." problem="Information flyttas manuellt, ansvar tappas mellan system eller användaren behöver ett enklare gränssnitt för att göra rätt."
    steps={[{ title: "Upptäck", text: "Vi kartlägger användare, nuläge, data, risker och vilket problem som är värt att lösa först." }, { title: "Avgränsa", text: "Ett första flöde, tydliga acceptanskriterier och tekniska ramar beslutas innan full utveckling." }, { title: "Prototypa och bygga", text: "Vi visar arbetet tidigt, testar med riktiga scenarier och utvecklar i korta, begripliga leveranser." }, { title: "Driftsätta och följa", text: "Behörighet, data, felhantering, dokumentation och förvaltning behandlas som delar av produkten." }]}
    outputs={["En avgränsad problem- och målbild.", "Prototyp eller första fungerande produktflöde.", "Överenskommen webbapp, mobilapp, integration eller intern lösning.", "Dokumentation för drift, fortsatt utveckling och ansvar."]}
    preparation={["En produktägare eller beställare som kan prioritera.", "Tillgång till berörda användare och verkliga, avidentifierade exempel.", "Översikt över system, data, behörigheter och begränsningar som lösningen behöver förhålla sig till."]}
    related={[{ label: "Se produkter och demos", href: "/demo-appar" }, { label: "Webbplatser", href: "/webbsidor" }, { label: "AI-införande", href: "/utbildning-ai#infora" }]} contactPackage="losning-app" />;
}
