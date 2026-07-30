import type { Metadata } from "next";
import ServiceDetailPage from "../components/ServiceDetailPage";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({ title: "Digital kommunikation med ett tydligt arbetssätt", description: "Utvalt kommunikations- och innehållsstöd som en del av KV Konsults samlade digitala leverans.", path: "/sociala-medier" });

export default function SocialaMedierPage() {
  return <ServiceDetailPage current="Digital kommunikation" eyebrow="Bygga / Kommunikation" marker="KV / BYGGA 03" title={<>Innehåll som har en <em className="text-kv-blue">uppgift.</em></>} intro="KV Konsult erbjuder utvalt stöd för digital kommunikation när det hör ihop med en tydligare webb, ett införande eller ett konkret verksamhetsmål. Det är en stödtjänst, inte ett fristående löfte om ständig synlighet."
    forWhom="Mindre och medelstora organisationer som behöver ett hållbart innehållsflöde och tydligare ansvar mellan verksamhet, ledning och kanal." problem="Publicering sker ryckigt, budskap saknar prioritering och ingen vet säkert vem som tar fram, granskar eller följer upp innehållet."
    steps={[{ title: "Bestäm uppgiften", text: "Vi väljer målgrupp, kanal och vilket beslut eller beteende innehållet ska stödja." }, { title: "Skapa arbetssättet", text: "Ämnen, format, ansvar, granskningssteg och en realistisk takt sätts i ett gemensamt flöde." }, { title: "Producera utvalt", text: "Vi tar fram överenskommet innehåll och grafiskt material med er sakkunskap som grund." }, { title: "Följ upp", text: "Vi går igenom vad som faktiskt blev publicerat, vad som fungerade och vad som ska ändras." }]}
    outputs={["En prioriterad plan för kanaler, ämnen och målgrupper.", "Tydliga roller för underlag, produktion och godkännande.", "Överenskomna texter och visuella format.", "En enkel rutin för publicering och uppföljning."]}
    preparation={["En innehållsansvarig med tillgång till sakkunniga och konton.", "Befintliga riktlinjer, tonalitet och exempel på innehåll ni vill behålla eller lämna.", "Ett konkret verksamhetsmål att prioritera framför allmän räckvidd."]}
    related={[{ label: "Webbplatser", href: "/webbsidor" }, { label: "AI-utbildning", href: "/utbildning-ai" }, { label: "Alla tjänster", href: "/tjanster" }]} contactPackage="social-plus" />;
}
