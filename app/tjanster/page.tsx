"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════════════
   LAVALAMPA BAKGRUND - Ljusblå toner
═══════════════════════════════════════════════════════════════════════════ */
function LavaLampBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-sky-500/20 blur-[100px] animate-blob-1" />
      <div className="absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[100px] animate-blob-2" />
      <div className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[80px] animate-blob-3" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAKET DATA - Föreläsningar, Workshops, Analys, Partnerskap & Webb
═══════════════════════════════════════════════════════════════════════════ */
const packages = {
  microsoft365: {
    id: "microsoft365",
    title: "Föreläsningar: Microsoft 365 & Copilot",
    subtitle: "Copilot i Word, Excel, Teams, Outlook & mer",
    description: "Inspirerande föreläsningar som ger hela organisationen en gemensam grundförståelse för AI i Microsoft 365. Vi lyssnar först på er situation, anpassar innehållet efter era behov, och skapar förståelse – både för möjligheterna och för säker, ansvarsfull användning.",
    image: "/images/service-microsoft365.jpg",
    imageAlt: "Bild: Person arbetar med Microsoft 365 Copilot",
    color: "sky",
    levels: [
      {
        name: "Microsoft 365 Bas",
        duration: "Halvdag (ca 3 tim)",
        format: "Föreläsning",
        price: "Offert",
        shortDesc: "Introduktion för alla som är nya på AI och Copilot. Hela organisationen får en gemensam grundnivå – inklusive hur man använder AI på ett säkert sätt och undviker vanliga misstag.",
        fullDesc: {
          target: "Medarbetare som är helt nya på AI och Copilot – perfekt för att ge hela organisationen samma grundläggande förståelse och säkerhetsmedvetenhet.",
          includes: [
            "Vad är AI i Microsoft 365-vardagen och hur fungerar Copilot?",
            "Praktiska exempel via presentation – Word, Excel, PowerPoint, Outlook och Teams",
            "Säkerhet och risker: varför fel användning kan leda till att känslig information läcker",
            "Hur man undviker att mata in företagshemligheter i publika AI-tjänster",
            "Rätt vanor och policy för ansvarsfull AI-användning",
            "Hur AI kan förenkla vardagen utan teknikkrångel",
          ],
          outcome: "Deltagarna förstår grunderna i Copilot, känner sig inspirerade och vet hur de använder AI på ett säkert och smart sätt.",
          practical: "Digital eller på plats. Max 30 deltagare rekommenderas. Ingen live-demo i er miljö – vi visar exempel via presentationen.",
        },
        features: {
          intro: true,
          demo: true,
          handson: false,
          individual: false,
          followup: false,
        },
        recommended: true,
      },
      {
        name: "Microsoft 365 Bas+",
        duration: "Halvdag (ca 3 tim)",
        format: "Föreläsning för superusers",
        price: "Offert",
        shortDesc: "Fördjupning för superusers, IT och digitaliseringsansvariga. Fokus på dataflöden, säkerhet, governance – och en introduktion till agenter och agent-tänk.",
        fullDesc: {
          target: "Superusers, IT-avdelning, systemägare och digitaliseringsansvariga som vill leda AI-arbetet och förstå helheten.",
          includes: [
            "Fördjupning i hur Copilot fungerar och hur data flödar",
            "Säkerhet och governance: rätt miljö, rätt verktyg, rätt data",
            "Hur man undviker att känslig information hamnar i fel modeller",
            "Introduktion till Power Automate, Copilot Studio och agent-tänk",
            "Hur man på sikt kan bygga agent-liknande lösningar i verksamheten",
            "Diskussion om arkitektur, styrning och best practices",
          ],
          outcome: "Deltagarna kan leda AI-arbetet i organisationen, förstår risker och möjligheter, och har en grund för att tänka kring agenter och automation.",
          practical: "Digital eller på plats. Max 20 deltagare. Fokus på förståelse och diskussion – vi visar flöden och exempel via presentation, ingen live-demo i er miljö.",
        },
        features: {
          intro: true,
          demo: true,
          handson: false,
          individual: false,
          followup: false,
        },
      },
    ],
  },
  workshops: {
    id: "workshops",
    title: "Workshops",
    subtitle: "Praktisk träning med live-demo & övningar",
    description: "Hands-on workshops där deltagarna jobbar praktiskt med AI-verktyg. Vi lyssnar först, förstår er vardag, och förbereder övningar anpassade efter just er verklighet. Kan kombineras med föreläsning för en heldag.",
    image: "/images/service-ai-general.jpg",
    imageAlt: "Bild: Workshop med deltagare som testar AI-verktyg",
    color: "cyan",
    levels: [
      {
        name: "Workshop: Microsoft 365 & Copilot",
        duration: "Halvdag (ca 3 tim)",
        format: "Workshop med live-demo",
        price: "Offert",
        shortDesc: "Praktisk workshop där deltagarna testar Copilot i sin egen miljö. Vi förbereder övningar baserat på er vardag – och alla får prova på riktigt.",
        fullDesc: {
          target: "Team och avdelningar som vill gå från teori till praktik och faktiskt testa Copilot med sina egna arbetsuppgifter.",
          includes: [
            "Förarbete: Vi stämmer av vilka delar av vardagen som är viktigast för er",
            "Anpassade övningar och prompts framtagna specifikt för er verksamhet",
            "Live-demo av Copilot i Word, Excel, Outlook, Teams och PowerPoint",
            "Deltagarna testar själva i sin egen miljö",
            "Individuell feedback och tips under övningarna",
            "Konkreta prompts att ta med sig efter workshopen",
          ],
          outcome: "Deltagarna har praktisk erfarenhet av Copilot och vet exakt hur de kan använda det i sitt dagliga arbete.",
          practical: "Kan genomföras digitalt eller på plats. Max 20 deltagare för optimal interaktion. Kombinera gärna med föreläsning (Bas) för en heldag.",
        },
        features: {
          intro: true,
          demo: true,
          handson: true,
          individual: true,
          followup: false,
        },
        recommended: true,
      },
      {
        name: "Workshop: Generell AI i vardagen",
        duration: "Halvdag (ca 3 tim)",
        format: "Workshop med live-demo",
        price: "Offert",
        shortDesc: "Praktisk workshop om generativ AI i stort – ChatGPT, Copilot, Claude m.fl. Deltagarna tränar prompts, jämför verktyg och översätter sina arbetsflöden till AI-flöden.",
        fullDesc: {
          target: "Team som vill använda AI-verktyg i sitt dagliga arbete – oavsett roll. Vi anpassar efter era behov.",
          includes: [
            "Förarbete: Vi samlar in exempel från er verksamhet",
            "Träning i att skriva bra prompts baserat på era egna uppgifter",
            "Jämförelse av olika AI-verktyg och när de passar bäst",
            "Översätta era befintliga arbetsflöden till konkreta AI-flöden",
            "Live-demo och gemensamma övningar",
            "Diskussion om säkerhet och ansvarsfull AI-användning",
          ],
          outcome: "Deltagarna kan använda AI-verktyg effektivt och vet hur de ska promptskriva för att få bästa resultat.",
          practical: "Digital eller på plats. Max 20 deltagare. Anpassas efter era roller – kundservice, HR, ekonomi, kommunikation etc.",
        },
        features: {
          intro: true,
          demo: true,
          handson: true,
          individual: true,
          followup: false,
        },
      },
      {
        name: "Skräddarsydd workshop – halvdag",
        duration: "Halvdag (ca 3 tim)",
        format: "Anpassad workshop",
        price: "Offert",
        shortDesc: "En fokuserad workshop skräddarsydd för en specifik avdelning eller utmaning. Vi fokuserar på 2–3 prioriterade case och tar fram agendan tillsammans med er.",
        fullDesc: {
          target: "Specifika avdelningar eller team som vill gå på djupet – t.ex. enbart HR, ekonomi, ledningsgrupp eller kundservice.",
          includes: [
            "Förmöte för att identifiera era 2–3 viktigaste case/processer",
            "Skräddarsydd agenda framtagen tillsammans med er",
            "Fördjupning i just de verktyg och flöden som är relevanta för er",
            "Live-demo och hands-on övningar på era specifika case",
            "Konkreta nästa steg för implementation",
          ],
          outcome: "Ni har jobbat igenom era prioriterade utmaningar och har en tydlig plan för hur AI kan lösa dem.",
          practical: "Genomförs på plats eller digitalt. Fokuserat format för snabba resultat.",
        },
        features: {
          intro: true,
          demo: true,
          handson: true,
          individual: true,
          followup: false,
        },
      },
      {
        name: "Skräddarsydd workshop – heldag",
        duration: "Heldag (ca 6 tim)",
        format: "Fördjupad workshop",
        price: "Offert",
        shortDesc: "En heldagsworkshop för team som vill gå på djupet. Mer tid för övningar, fler case, och möjlighet att tillsammans bygga lösningar under dagen.",
        fullDesc: {
          target: "Team eller avdelningar som vill ha tid att verkligen jobba igenom sina processer och bygga något konkret under dagen.",
          includes: [
            "Förmöte för att identifiera era viktigaste case och mål",
            "Skräddarsydd agenda med utrymme för fördjupning",
            "Fler övningar, fler case och mer hands-on tid än halvdagen",
            "Gemensamt byggande: vi skapar konkreta lösningar tillsammans",
            "Fördjupad feedback och diskussion kring implementation",
            "Konkret handlingsplan för nästa steg efter workshopen",
          ],
          outcome: "Ni går från workshopen med konkreta lösningar, praktisk erfarenhet och en tydlig plan för att fortsätta.",
          practical: "Genomförs på plats eller digitalt. Perfekt för team som vill investera en dag i att verkligen komma framåt.",
        },
        features: {
          intro: true,
          demo: true,
          handson: true,
          individual: true,
          followup: true,
        },
      },
    ],
  },
  nulagesanalys: {
    id: "nulagesanalys",
    title: "AI Nulägesanalys & Handlingsplan",
    subtitle: "Helhetsanalys av ert AI-läge",
    description: "Vi lyssnar, kartlägger och analyserar er organisations AI-läge. Genom intervjuer, processanalys och systemgenomgång får ni en rapport med nuläge, risker, möjligheter – och en konkret 90-dagars handlingsplan.",
    image: "/images/service-analysis.jpg",
    imageAlt: "Bild: Konsult presenterar analys",
    color: "teal",
    levels: [
      {
        name: "AI Nulägesanalys",
        duration: "2–4 veckor",
        format: "Analys + rapport + handlingsplan",
        price: "Offert",
        shortDesc: "Komplett helhetsanalys av organisationens AI-läge. Vi intervjuar, granskar och levererar en rapport med konkret 90-dagars handlingsplan.",
        fullDesc: {
          target: "Organisationer som vill starta sin AI-resa med en tydlig plan, eller som behöver kartlägga var de står idag.",
          includes: [
            "Intervjuer med nyckelpersoner och beslutsfattare",
            "Genomgång av system, arbetssätt och data",
            "Identifiering av risker, möjligheter och quick wins",
            "Analys av tekniska förutsättningar och mognad",
            "Rapport med nuläge, rekommendationer och prioriteringar",
            "Konkret 90-dagars handlingsplan med tidsatta aktiviteter",
            "Presentationsmöte med ledning/styrgrupp",
          ],
          outcome: "Ni får en tydlig bild av ert AI-läge och en prioriterad plan för hur ni tar nästa steg.",
          practical: "Genomförs på plats och/eller digitalt. Omfattning anpassas efter organisationens storlek och komplexitet.",
        },
        features: {
          intro: true,
          demo: false,
          handson: false,
          individual: true,
          followup: true,
        },
      },
      {
        name: "Ledningsgruppsworkshop: AI & Handlingsplan",
        duration: "Halvdag eller heldag",
        format: "Strategisk workshop för ledningen",
        price: "Offert",
        shortDesc: "En workshop för ledningsgruppen där ni går igenom nuläget, jobbar med strukturerade övningar och kopplar AI-strategin till ert övergripande strategiarbete.",
        fullDesc: {
          target: "Ledningsgrupper och beslutsfattare som vill förankra AI-arbetet på strategisk nivå och säkerställa att hela ledningen är med på tåget.",
          includes: [
            "Genomgång av nuläget baserat på nulägesanalysen (eller snabbanalys)",
            "Strukturerade övningar för att identifiera prioriteringar",
            "Diskussion om AI:s roll i organisationens strategi",
            "Gemensam prioritering av insatser och initiativ",
            "Förankring av handlingsplanen hos alla beslutsfattare",
            "Konkreta nästa steg med tydliga ansvar",
          ],
          outcome: "Hela ledningsgruppen har en gemensam bild av AI-läget och har aktivt bidragit till prioriteringarna.",
          practical: "Genomförs på plats. Halvdag för fokuserad genomgång, heldag för djupare arbete med övningar och diskussion.",
        },
        features: {
          intro: true,
          demo: false,
          handson: true,
          individual: true,
          followup: true,
        },
        recommended: true,
      },
    ],
  },
  aiPartner: {
    id: "ai-partner",
    title: "Löpande AI-partner",
    subtitle: "Strategiskt partnerskap över tid",
    description: "Vi blir er långsiktiga AI-partner. Ett strategiskt samarbete där vi lyssnar först, förstår era behov, och sedan finns med som bollplank, rådgivare och stöd – så att AI blir en naturlig del av vardagen.",
    image: "/images/service-partnership.jpg",
    imageAlt: "Bild: Långsiktigt samarbete mellan konsult och kund",
    color: "emerald",
    levels: [
      {
        name: "AI-partner Lite",
        duration: "Ca 3–4 tim/mån",
        format: "Löpande bollplank",
        price: "Offert",
        shortDesc: "Ett lättare partnerskap för er som vill ha tillgång till ett bollplank och rådgivare utan större åtaganden. Kortare avstämningar och snabb feedback.",
        fullDesc: {
          target: "Organisationer som vill ha tillgång till AI-expertis för rådgivning och bollplank, utan att binda sig till stort omfång.",
          includes: [
            "Ca 3–4 timmar per månad att använda flexibelt",
            "Bollplank och rådgivning vid behov",
            "Kortare avstämningsmöte varje månad",
            "Snabb feedback på idéer, underlag eller initiativ",
            "Relevanta AI-uppdateringar och omvärldsbevakning",
          ],
          outcome: "Ni har alltid någon att fråga och får stöd att ta rätt beslut i ert AI-arbete.",
          practical: "Främst digitala möten. Flexibelt upplägg efter era behov.",
        },
        features: {
          intro: true,
          demo: false,
          handson: false,
          individual: true,
          followup: true,
        },
      },
      {
        name: "AI-partner Full",
        duration: "Ca 8 tim/mån",
        format: "Strategiskt partnerskap",
        price: "Offert",
        shortDesc: "Vårt mest omfattande partnerskap. Månatliga avstämningar, omvärldsbevakning, stöd i att driva initiativ – och möjlighet till workshops inom samarbetet.",
        fullDesc: {
          target: "Organisationer som vill ha en dedikerad AI-partner som följer med över tid och aktivt driver utvecklingen framåt.",
          includes: [
            "Ca 8 timmar per månad att använda flexibelt",
            "Rådgivning och bollplank i projekt och beslut",
            "Månatligt avstämningsmöte där vi går igenom läget och nästa steg",
            "Stöd i att driva igenom prioriterade AI-initiativ",
            "Relevanta AI-uppdateringar och omvärldsbevakning – översatt till vad det betyder för er",
            "Möjlighet till 1–2 workshops per år inom partnerskapet",
          ],
          outcome: "AI blir en naturlig del av er verksamhet. Ni har alltid någon att fråga och en plan för kontinuerlig utveckling.",
          practical: "Kombination av digitala och fysiska möten. Vi blir en del av ert team och anpassar oss efter era behov.",
        },
        features: {
          intro: true,
          demo: true,
          handson: true,
          individual: true,
          followup: true,
        },
        recommended: true,
      },
    ],
  },
  webbsidor: {
    id: "webbsidor",
    title: "Webbsidor & digital närvaro",
    subtitle: "Moderna webbsidor med AI-stöd",
    description: "Vi hjälper er att designa och sätta upp moderna, professionella webbsidor. Vi lyssnar på era önskemål, förstår ert varumärke, och använder AI där det är smart – t.ex. för effektiv innehållsproduktion. Ni väljer om ni vill sköta sidan själva efteråt, eller om vi ska finnas kvar som partner.",
    image: "/images/service-web.jpg",
    imageAlt: "Bild: Modern webbsida på skärm",
    color: "violet",
    levels: [
      {
        name: "Webbsida + löpande stöd",
        duration: "Engång + löpande",
        format: "Design + förvaltning",
        price: "Offert",
        shortDesc: "Vi bygger er webbsida och finns sedan kvar som partner. Ni slipper pilla med teknik och uppdateringar – vi tar den biten åt er.",
        fullDesc: {
          target: "Företag och organisationer som vill ha en professionell webbsida och slippa tekniken efteråt.",
          includes: [
            "Allt från Engångsleverans – design, uppsättning och överlämning",
            "Löpande uppdateringar av text, bilder och innehåll varje månad",
            "Mindre designjusteringar och förbättringar",
            "Teknisk underhåll och säkerhetsuppdateringar",
            "Månatlig avstämning av vad som behöver göras",
            "Effektiv innehållsproduktion med AI-stöd",
          ],
          outcome: "Er webbsida hålls uppdaterad och professionell utan att ni behöver lägga tid på det själva.",
          practical: "Ni skickar önskemål, vi genomför och stämmer av. Flexibelt upplägg – antal timmar eller ändringar per månad enligt avtal.",
        },
        features: {
          intro: true,
          demo: true,
          handson: false,
          individual: true,
          followup: true,
        },
        recommended: true,
      },
      {
        name: "Webbsida: Engångsleverans",
        duration: "2–4 veckor",
        format: "Design + uppsättning + överlämning",
        price: "Offert",
        shortDesc: "Vi designar och sätter upp er webbsida, lär upp er så ni kan uppdatera själva, och lämnar sedan över. Ingen bindning – ni tar över driften.",
        fullDesc: {
          target: "Företag och organisationer som vill ha en professionell webbsida och sedan sköta den på egen hand.",
          includes: [
            "Uppstartsmöte för att förstå era mål, brand och önskemål",
            "Förslag på struktur och sidupplägg",
            "Modern, responsiv design anpassad efter er profil",
            "Grundinnehåll framtaget med AI-stöd för effektivitet",
            "Uppsättning i vald plattform (t.ex. WordPress, Webflow, Next.js)",
            "Genomgång och upplärning så ni själva kan göra uppdateringar",
            "Överlämning med dokumentation – sedan tar ni över",
          ],
          outcome: "Ni har en färdig, professionell webbsida och vet hur ni uppdaterar den själva. Ingen bindning.",
          practical: "Genomförs digitalt med regelbundna avstämningar. Tidplan beror på omfattning och antal sidor.",
        },
        features: {
          intro: true,
          demo: true,
          handson: false,
          individual: true,
          followup: false,
        },
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════════════════
   JÄMFÖRELSETABELL KOMPONENT
═══════════════════════════════════════════════════════════════════════════ */
interface Level {
  name: string;
  duration: string;
  format: string;
  price: string;
  shortDesc: string;
  fullDesc: {
    target: string;
    includes: string[];
    outcome: string;
    practical: string;
  };
  features: {
    intro: boolean;
    demo: boolean;
    handson: boolean;
    individual: boolean;
    followup: boolean;
  };
  recommended?: boolean;
}

function ComparisonTable({ levels, color }: { levels: Level[]; color: string }) {
  const features = [
    { key: "intro", label: "Introduktion & teori" },
    { key: "demo", label: "Live-demo" },
    { key: "handson", label: "Hands-on övningar" },
    { key: "individual", label: "Individuell feedback" },
    { key: "followup", label: "Uppföljning" },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    sky: { bg: "bg-sky-600", text: "text-sky-400", border: "border-sky-500/30" },
    cyan: { bg: "bg-cyan-600", text: "text-cyan-400", border: "border-cyan-500/30" },
    teal: { bg: "bg-teal-600", text: "text-teal-400", border: "border-teal-500/30" },
    emerald: { bg: "bg-emerald-600", text: "text-emerald-400", border: "border-emerald-500/30" },
    violet: { bg: "bg-violet-600", text: "text-violet-400", border: "border-violet-500/30" },
  };

  const colors = colorClasses[color] || colorClasses.indigo;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[500px]">
        <thead>
          <tr>
            <th className="p-4 text-left text-sm font-medium text-slate-400"></th>
            {levels.map((level) => (
              <th key={level.name} className="p-4 text-center">
                <div className={`relative rounded-2xl border ${level.recommended ? colors.border : 'border-white/10'} bg-slate-800/50 p-4`}>
                  {level.recommended && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full ${colors.bg} px-3 py-1 text-xs font-semibold text-white`}>
                      Rekommenderas
                    </span>
                  )}
                  <h4 className="text-lg font-bold text-white">{level.name}</h4>
                  <p className={`mt-1 text-sm ${colors.text}`}>{level.duration}</p>
                  <p className="mt-1 text-xs text-slate-400">{level.format}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={feature.key} className={index % 2 === 0 ? "bg-slate-800/20" : ""}>
              <td className="p-4 text-sm text-slate-300">{feature.label}</td>
              {levels.map((level) => (
                <td key={`${level.name}-${feature.key}`} className="p-4 text-center">
                  {level.features[feature.key as keyof typeof level.features] ? (
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${colors.bg}/20 ${colors.text}`}>
                      ✓
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-700/30 text-slate-500">
                      –
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   EXPANDERBART PAKET KORT
═══════════════════════════════════════════════════════════════════════════ */

// Mappning från paketnamn till URL-parameter ID
const packageIdMap: Record<string, string> = {
  "Microsoft 365 Bas": "m365-bas",
  "Microsoft 365 Bas+": "m365-bas-plus",
  "Workshop: Microsoft 365 & Copilot": "workshop-m365",
  "Workshop: Generell AI i vardagen": "workshop-ai",
  "Skräddarsydd workshop – halvdag": "workshop-halv",
  "Skräddarsydd workshop – heldag": "workshop-hel",
  "AI Nulägesanalys": "nulagesanalys",
  "Ledningsgruppsworkshop: AI & Handlingsplan": "ledningsworkshop",
  "AI-partner Lite": "ai-partner-lite",
  "AI-partner Full": "ai-partner-full",
  "Webbsida + löpande stöd": "webb-lopande",
  "Webbsida: Engångsleverans": "webb-engang",
};

function ExpandablePackageCard({ level, color }: { level: Level; color: string }) {
  const [expanded, setExpanded] = useState(false);
  
  // Hämta paket-ID för URL
  const packageId = packageIdMap[level.name] || "";

  const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    sky: { bg: "bg-sky-600", text: "text-sky-400", border: "border-sky-500/30", glow: "shadow-sky-500/20" },
    cyan: { bg: "bg-cyan-600", text: "text-cyan-400", border: "border-cyan-500/30", glow: "shadow-cyan-500/20" },
    teal: { bg: "bg-teal-600", text: "text-teal-400", border: "border-teal-500/30", glow: "shadow-teal-500/20" },
    emerald: { bg: "bg-emerald-600", text: "text-emerald-400", border: "border-emerald-500/30", glow: "shadow-emerald-500/20" },
    violet: { bg: "bg-violet-600", text: "text-violet-400", border: "border-violet-500/30", glow: "shadow-violet-500/20" },
  };

  const colors = colorClasses[color] || colorClasses.indigo;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        expanded
          ? `${colors.border} bg-slate-800/60 shadow-xl ${colors.glow}`
          : "border-white/10 bg-slate-800/40 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
      }`}
    >
      {level.recommended && (
        <div className={`absolute right-4 top-4 rounded-full ${colors.bg} px-3 py-1 text-xs font-semibold text-white`}>
          Rekommenderas
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-xl font-bold text-white">{level.name}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className={`rounded-full ${colors.bg}/20 px-3 py-1 text-xs font-medium ${colors.text}`}>
                {level.duration}
              </span>
              <span className="rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300">
                {level.format}
              </span>
            </div>
          </div>
        </div>

        {/* Kort beskrivning */}
        <p className="mt-4 text-slate-400 leading-relaxed">{level.shortDesc}</p>

        {/* Läs mer knapp */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${colors.text} transition-all duration-300 hover:gap-3`}
        >
          {expanded ? "Visa mindre" : "Läs mer om paketet"}
          <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Expanderat innehåll */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "mt-6 max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6 border-t border-white/10 pt-6">
            {/* Målgrupp */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Vem passar det för?
              </h5>
              <p className="mt-2 text-slate-400">{level.fullDesc.target}</p>
            </div>

            {/* Vad ingår */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Vad ingår?
              </h5>
              <ul className="mt-2 space-y-2">
                {level.fullDesc.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400">
                    <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${colors.bg}/20 ${colors.text} text-xs`}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultat */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Vad ni får med er
              </h5>
              <p className="mt-2 text-slate-400">{level.fullDesc.outcome}</p>
            </div>

            {/* Praktiskt */}
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Praktisk info
              </h5>
              <p className="mt-2 text-slate-400">{level.fullDesc.practical}</p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href={`/kontakt?type=paket&packages=${packageId}`}
                className={`inline-flex items-center justify-center rounded-full ${colors.bg} px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-${color}-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-${color}-500/40`}
              >
                Boka {level.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HUVUDSIDAN
═══════════════════════════════════════════════════════════════════════════ */
export default function TjansterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28">
        <LavaLampBackground />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-sky-400">
              Våra tjänster
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Tjänster &{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Paket
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
              Vi erbjuder föreläsningar, workshops och rådgivning som gör AI begripligt och användbart. Alla våra paket kan kombineras och skräddarsys efter era behov.
            </p>
          </div>

          {/* Kombinationsöversikt */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 md:p-8">
              <h2 className="text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                Bygg er egen <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">AI-dag</span>
              </h2>
              <p className="mt-4 text-center text-lg text-slate-300">
                Kombinera föreläsning och workshop för att skapa en heldag anpassad efter er verksamhet.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Link 
                  href="/kontakt?type=exempel1"
                  className="rounded-xl border border-sky-500/20 bg-slate-900/50 p-4 text-center transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-sky-500/10"
                >
                  <p className="text-sm font-medium text-sky-400">Exempel 1</p>
                  <p className="mt-2 text-sm text-slate-300">Föreläsning: M365 Bas</p>
                  <p className="text-slate-500">+</p>
                  <p className="text-sm text-slate-300">Workshop: M365 & Copilot</p>
                  <p className="mt-2 text-xs text-slate-500">= Heldag</p>
                </Link>
                <Link 
                  href="/kontakt?type=exempel2"
                  className="rounded-xl border border-teal-500/20 bg-slate-900/50 p-4 text-center transition-all duration-300 hover:border-teal-500/50 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-teal-500/10"
                >
                  <p className="text-sm font-medium text-teal-400">Exempel 2</p>
                  <p className="mt-2 text-sm text-slate-300">Föreläsning: M365 Bas</p>
                  <p className="text-slate-500">+</p>
                  <p className="text-sm text-slate-300">Workshop: Generell AI</p>
                  <p className="mt-2 text-xs text-slate-500">= Heldag</p>
                </Link>
                <Link 
                  href="/kontakt?type=exempel3"
                  className="rounded-xl border border-cyan-500/20 bg-slate-900/50 p-4 text-center transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <p className="text-sm font-medium text-cyan-400">Exempel 3</p>
                  <p className="mt-2 text-sm text-slate-300">Föreläsning: M365 Bas+</p>
                  <p className="text-slate-500">+</p>
                  <p className="text-sm text-slate-300">Skräddarsydd workshop</p>
                  <p className="mt-2 text-xs text-slate-500">= Heldag</p>
                </Link>
              </div>
              <p className="mt-8 text-center text-base font-medium">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Alla paket kan anpassas.</span>{" "}
                <span className="text-slate-300">Kontakta oss så sätter vi ihop ett upplägg som passar er.</span>
              </p>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {Object.values(packages).map((pkg) => (
              <a
                key={pkg.id}
                href={`#${pkg.id}`}
                className="rounded-full border border-white/10 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-sky-500/30 hover:bg-slate-800 hover:text-white"
              >
                {pkg.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="relative bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-32">
            {Object.values(packages).map((pkg, pkgIndex) => (
              <article
                key={pkg.id}
                id={pkg.id}
                className="scroll-mt-24"
              >
                {/* Service header med bild - balanserad layout */}
                <div className={`grid items-stretch gap-12 lg:grid-cols-2 ${pkgIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex flex-col justify-center ${pkgIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <span className={`inline-flex w-fit rounded-full bg-${pkg.color}-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-${pkg.color}-400`}>
                      {pkg.subtitle}
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                      {pkg.id === 'microsoft365' ? (
                        <>Föreläsningar: <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">Microsoft 365 & Copilot</span></>
                      ) : pkg.id === 'workshops' ? (
                        <>Praktiska <span className="text-teal-400">workshops</span></>
                      ) : pkg.id === 'nulagesanalys' ? (
                        <>AI <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Nulägesanalys</span> & Handlingsplan</>
                      ) : pkg.id === 'ai-partner' ? (
                        <>Löpande <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">AI-partner</span></>
                      ) : pkg.id === 'webbsidor' ? (
                        <><span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Webbsidor</span> & digital närvaro</>
                      ) : (
                        pkg.title
                      )}
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>
                  
                  <div className={`relative flex items-center ${pkgIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-800/30">
                      <Image
                        src={pkg.image}
                        alt={pkg.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    </div>
                    {/* Decorative glow element */}
                    <div className={`absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-${pkg.color}-600/20 to-cyan-600/20 blur-xl`} />
                  </div>
                </div>

                {/* Jämförelsetabell - visa bara om fler än 1 nivå */}
                {pkg.levels.length > 1 && (
                  <div className="mt-12">
                    <h3 className="mb-6 text-xl font-semibold text-white">
                      Jämför paket
                    </h3>
                    <ComparisonTable levels={pkg.levels} color={pkg.color} />
                  </div>
                )}

                {/* Expanderbara paket-kort - anpassad layout */}
                <div className={`mt-12 ${
                  pkg.levels.length === 1 
                    ? 'lg:grid lg:grid-cols-2 lg:gap-12' 
                    : pkg.levels.length === 4 
                      ? 'grid gap-6 md:grid-cols-2' 
                      : 'grid gap-6 md:grid-cols-2'
                }`}>
                  {pkg.levels.length === 1 ? (
                    <>
                      <div className="hidden lg:block" /> {/* Spacer för att matcha layouten */}
                      <div>
                        <ExpandablePackageCard
                          level={pkg.levels[0]}
                          color={pkg.color}
                        />
                      </div>
                    </>
                  ) : (
                    pkg.levels.map((level) => (
                      <ExpandablePackageCard
                        key={level.name}
                        level={level}
                        color={pkg.color}
                      />
                    ))
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
        <LavaLampBackground />

        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Osäker på vilket paket som <span className="text-cyan-400">passar</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Boka ett kostnadsfritt avstämningsmöte så hjälper vi er att hitta rätt upplägg baserat på era behov och förutsättningar.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt?type=avstamning"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-105"
            >
              Boka avstämningsmöte
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:info@kvkonsult.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Mejla oss direkt
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
