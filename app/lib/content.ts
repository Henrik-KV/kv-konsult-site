export const productionUrl = "https://kvkonsult.com";

export const contacts = [
  {
    name: "Henrik Karlström",
    email: "Henrik@kvkonsult.com",
    phone: "+46 70 331 76 77",
    phoneHref: "+46703317677",
  },
  {
    name: "Eric Vidmark",
    email: "Eric@kvkonsult.com",
    phone: "+46 70 247 47 56",
    phoneHref: "+46702474756",
  },
  {
    name: "Ulrika Andersson",
    email: "Ulrika@kvkonsult.com",
    phone: "+46 70 332 85 08",
    phoneHref: "+46703328508",
  },
] as const;

export const navItems = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Kommuner", href: "/kommuner" },
  { label: "Företag", href: "/foretag" },
  { label: "Arbete", href: "/demo-appar" },
  { label: "Om KV", href: "/om-oss" },
] as const;

export const contactOptions = [
  { id: "m365-bas", name: "Microsoft 365 Bas", category: "Utbilda" },
  { id: "m365-bas-plus", name: "Microsoft 365 Bas+", category: "Utbilda" },
  { id: "workshop-m365", name: "Workshop: Microsoft 365 & Copilot", category: "Utbilda" },
  { id: "workshop-ai", name: "Workshop: generell AI", category: "Utbilda" },
  { id: "workshop-halv", name: "Anpassad workshop, halvdag", category: "Utbilda" },
  { id: "workshop-hel", name: "Anpassad workshop, heldag", category: "Utbilda" },
  { id: "nulagesanalys", name: "AI-nulägesanalys", category: "Införa" },
  { id: "ledningsworkshop", name: "Ledningsgruppsworkshop", category: "Införa" },
  { id: "ai-partner-lite", name: "Löpande AI-stöd", category: "Införa" },
  { id: "ai-partner-full", name: "Fördjupat AI-partnerskap", category: "Införa" },
  { id: "webb-lopande", name: "Webbplats med löpande stöd", category: "Bygga" },
  { id: "webb-engang", name: "Webbplats, engångsleverans", category: "Bygga" },
  { id: "social-bas", name: "Kommunikationsstöd", category: "Bygga" },
  { id: "social-plus", name: "Löpande innehållsstöd", category: "Bygga" },
  { id: "social-premium", name: "Utökat innehållsstöd", category: "Bygga" },
  { id: "losning-app", name: "App eller digitalt verktyg", category: "Bygga" },
] as const;

export const deliveryPaths = [
  {
    number: "01",
    slug: "utbilda",
    label: "Utbilda",
    lead: "Skapa ett gemensamt språk innan ni skaffar fler verktyg.",
    outcome: "Förståelse, tränade medarbetare och ett konkret nästa steg.",
    examples: ["AI-introduktion", "Microsoft 365 Copilot", "Lednings- och styrelsesessioner", "Anpassade workshops"],
    href: "/utbildning-ai",
  },
  {
    number: "02",
    slug: "infora",
    label: "Införa",
    lead: "Gör prioritering, ansvar och arbetssätt tydliga.",
    outcome: "Nuläge, handlingsplan, styrning och uppföljd användning.",
    examples: ["AI-nulägesanalys", "90-dagars handlingsplan", "Styrning och governance", "Löpande AI-stöd"],
    href: "/utbildning-ai#infora",
  },
  {
    number: "03",
    slug: "bygga",
    label: "Bygga",
    lead: "Utveckla det som saknas när standardverktygen inte räcker.",
    outcome: "En användbar webbplats, applikation, integration eller intern lösning.",
    examples: ["Webb- och mobilappar", "Interna digitala verktyg", "Webbplatser", "Integrationer"],
    href: "/losningsarkitekter",
  },
] as const;

export const trainingFormats = [
  {
    id: "m365-bas",
    title: "Microsoft 365 Bas",
    format: "Föreläsning · cirka 3 timmar",
    forWhom: "Medarbetare som är nya på AI och Copilot och behöver en gemensam, säker grund.",
    delivery: "Introduktion, praktiska exempel i Microsoft 365 och samtal om säker användning.",
    output: "En gemensam begreppsgrund och konkreta exempel att börja använda.",
    preparation: "Ni beskriver målgrupp, befintliga verktyg och de vanligaste frågorna i förväg.",
  },
  {
    id: "m365-bas-plus",
    title: "Microsoft 365 Bas+",
    format: "Fördjupande föreläsning · cirka 3 timmar",
    forWhom: "Superusers, IT, systemägare och digitaliseringsansvariga.",
    delivery: "Dataflöden, säkerhet, styrning, Power Automate, Copilot Studio och agenttänk.",
    output: "Bättre förutsättningar att leda användning och fatta genomtänkta teknikbeslut.",
    preparation: "Ni samlar relevanta policyer, miljöfrågor och de processer gruppen ansvarar för.",
  },
  {
    id: "workshop-m365",
    title: "Microsoft 365 & Copilot i praktiken",
    format: "Workshop · cirka 3 timmar",
    forWhom: "Team som vill gå från introduktion till praktisk användning i egna arbetsuppgifter.",
    delivery: "Förarbete, demonstration, övningar i deltagarnas miljö och individuell återkoppling.",
    output: "Praktisk erfarenhet och prompts kopplade till det dagliga arbetet.",
    preparation: "Deltagarna behöver rätt licenser och tar med exempel på återkommande uppgifter.",
  },
  {
    id: "workshop-ai",
    title: "Generell AI i vardagen",
    format: "Workshop · cirka 3 timmar",
    forWhom: "Team inom exempelvis HR, ekonomi, kundservice eller kommunikation.",
    delivery: "Promptträning, verktygsjämförelse, arbetsflöden och säkerhetsdiskussion.",
    output: "Konkreta arbetssätt och en tydligare bild av när olika AI-verktyg passar.",
    preparation: "Ni skickar in några representativa uppgifter och bekräftar vilka verktyg som får användas.",
  },
  {
    id: "workshop-anpassad",
    title: "Anpassad halv- eller heldag",
    format: "Workshop · 3 eller 6 timmar",
    forWhom: "En ledning, avdelning eller grupp med två till tre prioriterade frågor.",
    delivery: "Förmöte, gemensam agenda, praktiskt arbete och prioritering av nästa steg.",
    output: "Bearbetade case, beslutspunkter och en konkret fortsättning.",
    preparation: "Ni utser en beställare och samlar exempel, beslut och begränsningar som påverkar frågan.",
  },
] as const;

export const workItems = [
  {
    status: "Publicerad produkt",
    title: "Lägesbild",
    challenge: "Samla svensk realtidsinformation som annars finns utspridd över flera källor.",
    intervention: "En mobil produktstruktur för nuläge, karta, nyheter, väder och resa.",
    deliverable: "iPhone-app publicerad av KV konsult AB.",
    result: "En samlad vy som gör informationen lättare att överblicka.",
  },
  {
    status: "Demo · inte ett kundcase",
    title: "MÄSSY",
    challenge: "Visa hur biljett-, access- och besöksflöden för en mässa kan samlas.",
    intervention: "Koncept för utställare, personal, admin, QR och digitala biljetter.",
    deliverable: "Interaktiv produktdemonstration med flera rollflöden.",
    result: "Ett konkret diskussionsunderlag för avgränsning och fortsatt utveckling.",
  },
] as const;
