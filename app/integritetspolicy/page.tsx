import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Integritetspolicy", description: "Information om hur KV Konsult hanterar personuppgifter på webbplatsen och i kontaktformuläret.", path: "/integritetspolicy" });

export default function IntegritetspolicyPage() {
  return <LegalPage title="Integritetspolicy" intro="KV Konsult värnar om din personliga integritet. Här beskriver vi vilka uppgifter som kan behandlas när du besöker webbplatsen eller kontaktar oss.">
    <h2>1. Vilka uppgifter vi samlar in</h2><p>Vi kan samla in följande typer av personuppgifter:</p><ul><li><strong>Kontaktuppgifter:</strong> namn, e-postadress, telefonnummer och organisation när du kontaktar oss via formulär eller e-post.</li><li><strong>Kommunikation:</strong> innehållet i meddelanden du skickar till oss.</li><li><strong>Teknisk information:</strong> IP-adress, webbläsartyp och besöksstatistik via analysverktyg.</li></ul>
    <h2>2. Varför vi samlar in uppgifterna</h2><p>Vi använder personuppgifter för att besvara förfrågningar, ge information om tjänster, administrera bokningar och kundrelationer, förbättra webbplatsen samt fullgöra rättsliga förpliktelser.</p>
    <h2>3. Rättslig grund</h2><p>Vi behandlar personuppgifter baserat på samtycke när du skickar kontaktformuläret, för att fullgöra avtal eller för vårt berättigade intresse av att bedriva och förbättra verksamheten.</p>
    <h2>4. Hur länge vi sparar uppgifterna</h2><p>Vi sparar personuppgifter så länge det är nödvändigt för de ändamål de samlades in för. Kontaktförfrågningar sparas normalt i upp till 24 månader. Kundrelaterade uppgifter sparas enligt bokföringslagen i sju år.</p>
    <h2>5. Delning av uppgifter</h2><p>Vi säljer aldrig personuppgifter. Uppgifter kan delas med tjänsteleverantörer, till exempel webbhotell och e-posttjänst, som behövs för att driva webbplatsen och besvara kontakten. De får endast behandla uppgifterna enligt våra instruktioner.</p>
    <h2>6. Dina rättigheter</h2><p>Du kan ha rätt att få tillgång till uppgifter, begära rättelse eller radering, invända mot viss behandling, begära dataportabilitet och återkalla samtycke.</p>
    <h2>7. Cookies och analys</h2><p>Webbplatsen kan använda cookies och Vercel Analytics för att förstå teknisk funktion och anonymiserad besöksstatistik. Du kan hantera cookies i webbläsarens inställningar.</p>
    <h2>8. Kontakt</h2><p>Vid frågor om personuppgifter eller om du vill utöva en rättighet, kontakta <a href="mailto:info@kvkonsult.com">info@kvkonsult.com</a>.</p>
    <h2>9. Klagomål</h2><p>Om du anser att personuppgifter behandlas felaktigt har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).</p>
  </LegalPage>;
}
