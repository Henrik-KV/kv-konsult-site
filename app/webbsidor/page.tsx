import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Webbplatser med tydligt innehåll och robust teknik", description: "KV Konsult strukturerar, designar och bygger tillgängliga webbplatser för svenska organisationer.", path: "/webbsidor" });

export default function WebbsidorPage() {
  return <ServiceDetailPage current="Webbplatser" eyebrow="Bygga / Webb" marker="KV / BYGGA 02" title={<>En webbplats ska göra ett arbete <em className="text-kv-blue">tydligare.</em></>} intro="Vi strukturerar, skriver, designar och bygger webbplatser där erbjudandet går att förstå, kontakten känns enkel och tekniken håller ihop på mobil och desktop."
    forWhom="Organisationer vars webbplats blivit svår att förstå, uppdatera eller lita på — eller som behöver bygga från början." problem="Besökaren hittar inte nästa steg, innehållet speglar intern organisation och varje ändring blir ett teknikprojekt."
    steps={[{ title: "Avgränsa", text: "Vi går igenom målgrupper, affärsmål, befintligt innehåll, varumärke och tekniska ramar." }, { title: "Strukturera", text: "Vi tar fram sidstruktur, prioriterade budskap och tydliga konverteringsvägar innan detaljerad formgivning." }, { title: "Designa och bygga", text: "Gränssnitt, innehåll och responsiv implementation utvecklas tillsammans och granskas i riktiga skärmbredder." }, { title: "Lansera och lämna över", text: "Vi kvalitetssäkrar, ansluter nödvändiga tjänster och tydliggör hur förvaltning och fortsatt stöd ska fungera." }]}
    outputs={["Beslutad innehålls- och navigationsstruktur.", "Responsiv och tillgänglig webbplats med relevanta metadata.", "Kontakt- och konverteringsflöden som går att använda med tangentbord och på mobil.", "Dokumenterad lansering, förvaltning och nästa prioritering."]}
    preparation={["En person med mandat att prioritera innehåll och godkänna beslut.", "Tillgång till befintligt material, grafisk identitet, domän och nödvändiga konton.", "Två till tre viktigaste målgrupperna och vad ni vill att de ska kunna göra."]}
    related={[{ label: "Appar och digitala verktyg", href: "/losningsarkitekter" }, { label: "Utvalt arbete", href: "/demo-appar" }, { label: "Kommunikationsstöd", href: "/sociala-medier" }]} contactPackage="webb-engang" />;
}
