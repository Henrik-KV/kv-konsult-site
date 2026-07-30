import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Allmänna villkor", description: "Allmänna villkor för KV Konsults tjänster och uppdrag.", path: "/villkor" });

export default function VillkorPage() {
  return <LegalPage title="Allmänna villkor" intro="Villkoren gäller för tjänster som KV Konsult tillhandahåller. Uppdragets exakta omfattning, innehåll och kommersiella villkor bekräftas alltid skriftligt.">
    <h2>1. Tjänster</h2><p>KV Konsult erbjuder utbildningar, workshops, föreläsningar, rådgivning och digitala leveranser. Tjänstens exakta omfattning, innehåll och pris bekräftas skriftligt i samband med bokning eller avtal.</p>
    <h2>2. Bokning och bekräftelse</h2><p>En bokning är bindande när den bekräftats skriftligt via e-post av KV Konsult. Bekräftelsen specificerar tjänstens omfattning, datum, tid, plats eller digital länk, deltagarantal samt pris och betalningsvillkor.</p>
    <h2>3. Avbokning och ändring</h2><ul><li><strong>Mer än 14 dagar före:</strong> kostnadsfri avbokning.</li><li><strong>7–14 dagar före:</strong> 50 procent av överenskommet pris faktureras.</li><li><strong>Mindre än 7 dagar före:</strong> 100 procent av överenskommet pris faktureras.</li></ul><p>Flytt av datum kan göras kostnadsfritt om det meddelas minst sju dagar i förväg och KV Konsult kan erbjuda ett nytt datum.</p>
    <h2>4. Betalning</h2><p>Fakturering sker normalt efter genomfört uppdrag om inget annat avtalats. Betalningsvillkor är 30 dagar netto. Vid försenad betalning tillkommer dröjsmålsränta enligt räntelagen.</p>
    <h2>5. Immateriella rättigheter</h2><p>Utbildningsmaterial, presentationer och dokumentation som KV Konsult tillhandahåller skyddas av upphovsrätt. Materialet får användas internt av beställarens organisation men inte spridas, kopieras eller säljas vidare utan skriftligt godkännande.</p>
    <h2>6. Ansvar och begränsningar</h2><p>KV Konsult ansvarar för att leverera enligt överenskommen specifikation och professionell standard. Ansvaret är begränsat till direkt skada som orsakats av vårdslöshet och maximalt det belopp som betalats för den aktuella tjänsten. KV Konsult ansvarar inte för indirekta skador, utebliven vinst eller följdskador. Beställaren ansvarar för nödvändig information, teknisk utrustning och lokaler enligt överenskommelse.</p>
    <h2>7. Sekretess</h2><p>Information som framkommer under uppdrag behandlas konfidentiellt. Affärshemligheter, interna processer eller annan känslig information delas inte med tredje part utan beställarens godkännande.</p>
    <h2>8. Force majeure</h2><p>Ingen part ansvarar för försening eller utebliven leverans som beror på omständigheter utanför partens kontroll, såsom naturkatastrof, pandemi, strejk, myndighetsåtgärd eller liknande.</p>
    <h2>9. Ändringar</h2><p>KV Konsult kan uppdatera villkoren. För pågående uppdrag gäller de villkor som bekräftades vid bokning eller avtal.</p>
    <h2>10. Tvist</h2><p>Tvist ska i första hand lösas genom förhandling. Om enighet inte nås avgörs tvisten enligt svensk lag vid svensk domstol.</p>
    <h2>11. Kontakt</h2><p>Frågor om villkoren skickas till <a href="mailto:info@kvkonsult.com">info@kvkonsult.com</a>.</p>
  </LegalPage>;
}
