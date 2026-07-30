import Link from "next/link";
import ContactCTA from "./ContactCTA";
import PageHero from "./PageHero";

type AudiencePageProps = {
  current: string;
  eyebrow: string;
  marker: string;
  title: React.ReactNode;
  intro: string;
  decisions: readonly { title: string; text: string; link: { label: string; href: string } }[];
  principles: readonly { title: string; text: string }[];
  preparation: readonly string[];
  ctaHeading: string;
  ctaText: string;
};

export default function AudiencePage({ current, eyebrow, marker, title, intro, decisions, principles, preparation, ctaHeading, ctaText }: AudiencePageProps) {
  return <main>
    <PageHero current={current} eyebrow={eyebrow} marker={marker} title={title} intro={intro} action={{ href: "/kontakt?type=avstamning", label: "Beskriv er situation" }} />
    <section className="section-pad audience-decisions" aria-labelledby="decisions-heading"><div className="container-shell"><div className="section-intro-grid"><p className="eyebrow">Vanliga startpunkter</p><h2 id="decisions-heading" className="section-title">Börja där beslutet fastnar.</h2></div><ol className="decision-list mt-16">{decisions.map((decision, index) => <li key={decision.title}><span>0{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div><Link href={decision.link.href}>{decision.link.label}<span aria-hidden="true">↗</span></Link></li>)}</ol></div></section>
    <section className="section-pad audience-principles" aria-labelledby="principles-heading"><div className="container-shell"><div className="section-intro-grid"><p className="eyebrow text-paper/65">Så håller vi ihop arbetet</p><h2 id="principles-heading" className="section-title text-paper">Tydlighet före tempo.</h2></div><ol className="principle-grid mt-16">{principles.map((principle, index) => <li key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></li>)}</ol></div></section>
    <section className="preparation-section" aria-labelledby="audience-prepare"><div className="container-shell preparation-grid"><div><p className="eyebrow">Inför första mötet</p><h2 id="audience-prepare">Ta med verkligheten.</h2></div><ul>{preparation.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <ContactCTA heading={ctaHeading} text={ctaText} />
  </main>;
}
